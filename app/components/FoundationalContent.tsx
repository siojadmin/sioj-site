import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { foundationalDocuments } from "../foundational-documents";
import type { FoundationalDocument } from "../foundational-documents";
import type { Locale } from "../site-content";

const verificationCode = "5AAC-6A69-48EF-F315";

function hashesFor(href: string) {
  const file = readFileSync(join(process.cwd(), "public", href.replace(/^\//, "")));
  return {
    sha256: createHash("sha256").update(file).digest("hex"),
    sha512: createHash("sha512").update(file).digest("hex"),
  };
}

function publishedHrefs(directory: string, relative = ""): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const childRelative = relative ? `${relative}/${entry.name}` : entry.name;
    const childPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return publishedHrefs(childPath, childRelative);
    }

    return /\.(pdf|p7s)$/i.test(entry.name)
      ? [`/docs/fundacional/${childRelative}`]
      : [];
  });
}

function fallbackDocument(href: string): FoundationalDocument {
  const filename = href.split("/").at(-1) ?? href;
  const title = filename
    .replace(/-Manifesto\.pdf$/i, "")
    .replace(/\.(pdf|p7s)$/i, "")
    .replaceAll("_", " ");

  return {
    filename,
    href,
    titlePt: title,
    titleEn: title,
    language: href.includes("/en/") ? "en" : "pt",
    format: href.toLowerCase().endsWith(".p7s") ? "P7S" : "PDF",
  };
}

export function FoundationalContent({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const knownDocuments = new Map(
    foundationalDocuments.map((document) => [document.href, document]),
  );
  const archiveRoot = join(process.cwd(), "public", "docs", "fundacional");
  const documents = publishedHrefs(archiveRoot)
    .sort((left, right) => left.localeCompare(right))
    .map((href) => knownDocuments.get(href) ?? fallbackDocument(href))
    .map((document) => ({
      ...document,
      ...hashesFor(document.href),
    }));
  const featured = documents.filter((document) => document.featured);

  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">{isPt ? "Acervo público verificável" : "Verifiable public archive"}</p>
      <h1 className="mt-8 text-4xl font-semibold md:text-6xl">
        {isPt ? "Repositório Fundacional" : "Foundational Repository"}
      </h1>
      <p className="mt-6 max-w-4xl text-2xl leading-tight text-[var(--muted)]">
        {isPt
          ? "Documentos fundacionais do SIOJ preservados em suas cópias assinadas, com downloads públicos e hashes calculados diretamente sobre os arquivos publicados."
          : "SIOJ foundational documents preserved as signed copies, with public downloads and hashes calculated directly from the published files."}
      </p>

      <div className="rule-box mt-10 max-w-4xl p-7">
        <p className="eyebrow">{isPt ? "Verificação ICP-OAB" : "ICP-OAB verification"}</p>
        <p className="mt-4 text-xl">
          {isPt ? "Código de verificação OAB informado" : "Reported OAB verification code"}: {" "}
          <strong className="font-mono text-[var(--accent)]">{verificationCode}</strong>
        </p>
        <p className="body-copy mt-4">
          {isPt
            ? "SHA-256 e SHA-512 permitem conferir a integridade binária do arquivo baixado. A validação da assinatura deve ser realizada no verificador oficial correspondente."
            : "SHA-256 and SHA-512 allow verification of the downloaded file's binary integrity. Signature validation must be performed with the corresponding official verifier."}
        </p>
      </div>

      <div className="section mt-16 border-t border-[var(--line)]">
        <p className="eyebrow">{isPt ? "Documentos centrais" : "Core documents"}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((document) => (
            <a
              className="rule-box block p-6 transition-colors hover:border-[var(--accent)]"
              download
              href={document.href}
              key={document.href}
            >
              <p className="eyebrow">{document.format}</p>
              <h2 className="mt-4 text-xl font-semibold">
                {isPt ? document.titlePt : document.titleEn}
              </h2>
              <p className="mt-5 text-sm text-[var(--accent)]">
                {isPt ? "Baixar documento" : "Download document"}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="section mt-16 border-t border-[var(--line)]">
        <p className="eyebrow">{isPt ? "Acervo completo" : "Complete archive"}</p>
        <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {documents.map((document) => (
            <article className="grid gap-5 py-8 lg:grid-cols-[0.8fr_1.2fr]" key={document.href}>
              <div>
                <p className="eyebrow">
                  {document.format} · {document.language.toUpperCase()}
                </p>
                <h2 className="mt-3 text-xl font-semibold">
                  {isPt ? document.titlePt : document.titleEn}
                </h2>
                <a className="text-link mt-5 inline-block" download href={document.href}>
                  {isPt ? "Baixar arquivo" : "Download file"}
                </a>
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="eyebrow">SHA-256</dt>
                  <dd className="mt-2 break-all font-mono leading-6 text-[var(--muted)]">{document.sha256}</dd>
                </div>
                <div>
                  <dt className="eyebrow">SHA-512</dt>
                  <dd className="mt-2 break-all font-mono leading-6 text-[var(--muted)]">{document.sha512}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
