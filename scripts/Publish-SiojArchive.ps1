[CmdletBinding()]
param(
    [string]$RepoPath = (Split-Path -Parent $PSScriptRoot),
    [string]$SourceFoundational = "C:\SIOJ\00_FUNDACIONAL\03_Assinados",
    [string]$SourceWorkpapers = "C:\SIOJ\20_ANEXOS\00_Workpapers_SIOJ",
    [switch]$Publish,
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Write-Step([string]$Message) {
    Write-Host "[SIOJ CODEX] $Message" -ForegroundColor Cyan
}

function Invoke-Git([Parameter(ValueFromRemainingArguments = $true)][string[]]$Arguments) {
    & git -C $RepoPath @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "Falha ao executar: git $($Arguments -join ' ')"
    }
}

function Copy-VerifiedFile {
    param(
        [Parameter(Mandatory = $true)][string]$Source,
        [Parameter(Mandatory = $true)][string]$Destination
    )

    $destinationDirectory = Split-Path -Parent $Destination
    New-Item -ItemType Directory -Force -Path $destinationDirectory | Out-Null

    $sourceHash = (Get-FileHash -LiteralPath $Source -Algorithm SHA256).Hash
    $mustCopy = -not (Test-Path -LiteralPath $Destination)

    if (-not $mustCopy) {
        $destinationHash = (Get-FileHash -LiteralPath $Destination -Algorithm SHA256).Hash
        $mustCopy = $sourceHash -ne $destinationHash
    }

    if ($mustCopy) {
        Copy-Item -LiteralPath $Source -Destination $Destination -Force
        Write-Host "  -> sincronizado: $Destination" -ForegroundColor Green
    }

    $publishedHash = (Get-FileHash -LiteralPath $Destination -Algorithm SHA256).Hash
    if ($publishedHash -ne $sourceHash) {
        throw "Falha de integridade após a cópia: $Destination"
    }

    [pscustomobject]@{
        Source = $Source
        Destination = $Destination
        SHA256 = $sourceHash
        Changed = $mustCopy
    }
}

$RepoPath = (Resolve-Path -LiteralPath $RepoPath).Path
$SourceFoundational = (Resolve-Path -LiteralPath $SourceFoundational).Path
$SourceWorkpapers = (Resolve-Path -LiteralPath $SourceWorkpapers).Path
$TargetRoot = Join-Path $RepoPath "public\docs\fundacional"

$gitRoot = (& git -C $RepoPath rev-parse --show-toplevel).Trim()
if ($LASTEXITCODE -ne 0 -or [IO.Path]::GetFullPath($gitRoot) -ne [IO.Path]::GetFullPath($RepoPath)) {
    throw "RepoPath não corresponde à raiz do repositório do site: $RepoPath"
}

Write-Step "Sincronizando somente o acervo fundacional assinado."

$signedWrapper = Get-ChildItem -LiteralPath $SourceFoundational -Directory |
    Where-Object { $_.Name -like "*arquivo PDF assinado ICP-OAB*" } |
    Select-Object -First 1

if (-not $signedWrapper) {
    throw "Pasta do acervo PDF assinado ICP-OAB não encontrada."
}

$results = [Collections.Generic.List[object]]::new()

Get-ChildItem -LiteralPath $SourceFoundational -File -Filter "*.p7s" | ForEach-Object {
    $results.Add((Copy-VerifiedFile -Source $_.FullName -Destination (Join-Path $TargetRoot $_.Name)))
}

$signedPrefix = $signedWrapper.FullName.TrimEnd("\") + "\"
Get-ChildItem -LiteralPath $signedWrapper.FullName -Recurse -File -Filter "*.pdf" | ForEach-Object {
    if (-not $_.FullName.StartsWith($signedPrefix, [StringComparison]::OrdinalIgnoreCase)) {
        throw "Arquivo fora da origem assinada: $($_.FullName)"
    }
    $relative = $_.FullName.Substring($signedPrefix.Length)
    if ($relative -like "LANGUAGES\EN\*") {
        $relative = Join-Path "en" ([IO.Path]::GetFileName($relative))
    }
    elseif ($relative -match "[\\/]") {
        throw "Subpasta fundacional não mapeada para publicação: $relative"
    }

    $results.Add((Copy-VerifiedFile -Source $_.FullName -Destination (Join-Path $TargetRoot $relative)))
}

Write-Step "Sincronizando o Working Paper SIOJ Labs nº 02."
$workingPaper = Get-ChildItem -LiteralPath $SourceWorkpapers -File -Filter "*.pdf" |
    Where-Object { $_.Name -match "(?i)(n[º°o]?\s*02|#\s*02|wp\s*0?2)" } |
    Select-Object -First 1

if (-not $workingPaper) {
    throw "Working Paper nº 02 não encontrado em $SourceWorkpapers"
}

$results.Add((Copy-VerifiedFile `
    -Source $workingPaper.FullName `
    -Destination (Join-Path $TargetRoot "SIOJ_Working_Paper_02_2026.pdf")))

$changed = @($results | Where-Object Changed)
Write-Host "Arquivos verificados: $($results.Count); alterados: $($changed.Count)." -ForegroundColor Yellow

if (-not $SkipBuild) {
    Write-Step "Executando o build de produção."
    Push-Location $RepoPath
    try {
        & npm run build
        if ($LASTEXITCODE -ne 0) {
            throw "O build do site falhou."
        }
    }
    finally {
        Pop-Location
    }
}

if (-not $Publish) {
    Write-Host "Validação concluída. Use -Publish para criar commit e enviar à main." -ForegroundColor Yellow
    return
}

$branch = (& git -C $RepoPath branch --show-current).Trim()
if ($branch -ne "main") {
    throw "Publicação direta autorizada apenas na branch main; branch atual: $branch"
}

Invoke-Git fetch origin
$divergence = (& git -C $RepoPath rev-list --left-right --count "origin/main...main").Trim() -split "\s+"
if ($divergence[0] -ne "0") {
    throw "A branch local está atrás de origin/main. Atualize o repositório antes de publicar."
}

Invoke-Git add -- "public/docs/fundacional/*.p7s"
Invoke-Git add -f -- "public/docs/fundacional/*.pdf" "public/docs/fundacional/en/*.pdf"

$staged = (& git -C $RepoPath diff --cached --name-only)
if (-not $staged) {
    Write-Host "Nenhuma alteração documental para publicar." -ForegroundColor Yellow
    return
}

$invalid = @($staged | Where-Object { $_ -notlike "public/docs/fundacional/*" })
if ($invalid.Count -gt 0) {
    throw "O staging contém arquivos fora do acervo autorizado: $($invalid -join ', ')"
}

$utc = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
Invoke-Git commit -m "[SIOJ-DEPLOY] Sync do acervo fundacional e Working Paper 02 ($utc)"
Invoke-Git push origin main

Write-Host "Acervo validado e enviado ao GitHub." -ForegroundColor Green
