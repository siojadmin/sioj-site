# SIOJ Site

Institutional website for `sioj.org` v1.0.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static export is generated in `out/`.

## Cloudflare Pages

Use these settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `site`

## Deployment checklist

- Confirm only the language gateway plus the bilingual home, method, Labs, research, and contact routes are public.
- Confirm `robots.txt` and `sitemap.xml` are available.
- Confirm domain is configured as `sioj.org`.
- Confirm no internal documents are copied into `site/public`.
- Run `npm run build` before publishing.

## Curated archive synchronization

The public foundational archive is synchronized from the signed source directory. The script intentionally does not scan draft Markdown files or unsigned PDFs.

Validate and build without publishing:

```powershell
.\scripts\Publish-SiojArchive.ps1
```

Synchronize, validate, commit, and push document changes to `main`:

```powershell
.\scripts\Publish-SiojArchive.ps1 -Publish
```
