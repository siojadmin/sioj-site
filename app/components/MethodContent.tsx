import { localized, type Locale } from "../site-content";

export function MethodContent({ locale }: { locale: Locale }) {
  const method = localized[locale].method;

  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">{method.eyebrow}</p>
      <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
        {method.title}
      </h1>
      <div className="mt-14 grid gap-5">
        {method.points.map((point) => (
          <p key={point} className="rule-box p-6 text-lg leading-relaxed text-[var(--muted)]">
            {point}
          </p>
        ))}
      </div>
    </section>
  );
}
