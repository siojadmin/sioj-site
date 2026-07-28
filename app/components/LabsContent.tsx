import Link from "next/link";
import { localized, localizedPath, type Locale } from "../site-content";

export function LabsContent({ locale }: { locale: Locale }) {
  const labs = localized[locale].labs;

  return (
    <>
      <section className="container py-20 md:py-28">
        <p className="eyebrow">{labs.eyebrow}</p>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {labs.title}
        </h1>
        <p className="mt-6 max-w-4xl text-2xl leading-tight text-[var(--muted)]">
          {labs.deck}
        </p>
        <p className="body-copy mt-8 max-w-4xl text-xl">{labs.intro}</p>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{labs.layersTitle}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {labs.layers.map((layer) => (
              <article key={layer.label} className="rule-box p-7">
                <p className="eyebrow">{layer.label}</p>
                <h2 className="mt-4 text-2xl font-semibold">{layer.title}</h2>
                <p className="body-copy mt-4">{layer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{labs.cycleTitle}</p>
          <ol className="mt-8 grid gap-3 md:grid-cols-3">
            {labs.cycle.map((step, index) => (
              <li key={step} className="rule-box flex min-h-28 items-start gap-4 p-6">
                <span className="text-sm font-semibold text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow">{labs.modulesTitle}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {labs.modules.map((module) => (
              <article key={module.title} className="rule-box p-7">
                <h2 className="text-xl font-semibold">{module.title}</h2>
                <p className="body-copy mt-4">{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow">{labs.boundaryTitle}</p>
          <div>
            <p className="body-copy text-xl">{labs.boundaryText}</p>
            <div className="rule-box mt-8 p-7">
              <p className="eyebrow">{labs.statusLabel}</p>
              <p className="mt-4 text-xl">{labs.statusText}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link href={localizedPath(locale, "method")} className="text-link">
                {labs.methodLink}
              </Link>
              <Link href={localizedPath(locale, "research")} className="text-link">
                {labs.researchLink}
              </Link>
              <Link href={localizedPath(locale, "contact")} className="text-link">
                {labs.contactLink}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
