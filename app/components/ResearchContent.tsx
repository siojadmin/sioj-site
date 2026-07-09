import { localized, type Locale } from "../site-content";

export function ResearchContent({ locale }: { locale: Locale }) {
  const research = localized[locale].research;

  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">{research.eyebrow}</p>
      <h1 className="mt-8 text-4xl font-semibold md:text-6xl">{research.title}</h1>
      <p className="mt-6 max-w-4xl text-2xl leading-tight text-[var(--muted)]">
        {research.deck}
      </p>

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
