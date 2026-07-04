# SIOJ Site

Institutional website for `sioj.org` v0.9.

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

- Confirm only `/`, `/manifesto`, `/research`, and `/contact` are public routes.
- Confirm `robots.txt` and `sitemap.xml` are available.
- Confirm domain is configured as `sioj.org`.
- Confirm no internal documents are copied into `site/public`.
- Run `npm run build` before publishing.
