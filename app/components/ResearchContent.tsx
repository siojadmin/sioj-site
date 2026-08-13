import { externalLinks, localized, type Locale } from "../site-content";

export function ResearchContent({ locale }: { locale: Locale }) {
  const research = localized[locale].research;

  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">{research.eyebrow}</p>
      <h1 className="mt-8 text-4xl font-semibold md:text-6xl">{research.title}</h1>
      <p className="mt-6 max-w-4xl text-2xl leading-tight text-[var(--muted)]">
        {research.deck}
      </p>

      <article className="rule-box mt-10 max-w-5xl p-7 md:p-9">
        <p className="eyebrow">{research.newPublication.label}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight">{research.newPublication.title}</h2>
        <p className="mt-5 text-lg text-[var(--accent)]">{research.newPublication.publicationText}</p>
        <p className="body-copy mt-5 text-xl">{research.newPublication.summary}</p>
        <p className="mt-5 text-sm leading-relaxed text-[var(--quiet)]">{research.newPublication.status}</p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{research.newPublication.keywords}</p>
        <div className="mt-7 flex flex-wrap gap-5">
          <a href={externalLinks.researchSquareDoi} className="text-link" rel="noreferrer" target="_blank">
            {research.newPublication.openPublication}
          </a>
          <a href={externalLinks.researchPdf} className="text-link" download>
            {research.newPublication.downloadPdf}
          </a>
          <a href={externalLinks.researchSquareDoi} className="text-link" rel="noreferrer" target="_blank">
            {research.newPublication.citeDoi}
          </a>
        </div>
        <p className="mt-7 break-all font-mono text-xs text-[var(--quiet)]">{research.newPublication.hash}</p>
      </article>

      <div className="rule-box mt-8 max-w-5xl p-7 md:p-9">
        <p className="eyebrow">{research.publicationLabel}</p>
        <h2 className="mt-4 text-3xl font-semibold">{research.workingPaperTitle}</h2>
        <p className="mt-4 text-xl text-[var(--muted)]">{research.publicationText}</p>
        <div className="mt-6 flex flex-wrap gap-5">
          <a href={externalLinks.doi} className="text-link" rel="noreferrer" target="_blank">
            {research.readPublication}
          </a>
          <a href={externalLinks.doi} className="text-link" rel="noreferrer" target="_blank">
            {research.citeDoi}
          </a>
        </div>
      </div>

      <div className="section mt-16 border-t border-[var(--line)]">
        {research.rows.map((row) => (
          <div key={row.label} className="grid gap-10 border-b border-[var(--line)] py-10 last:border-b-0 md:grid-cols-[0.8fr_1.2fr]">
            <p className="eyebrow">{row.label}</p>
            <p className="body-copy text-xl">{row.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
