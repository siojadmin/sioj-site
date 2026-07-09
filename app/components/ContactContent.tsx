import { externalLinks, localized, type Locale } from "../site-content";

export function ContactContent({ locale }: { locale: Locale }) {
  const contact = localized[locale].contact;
  const name = "Anderson Siqueira Lourenço";

  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">{contact.eyebrow}</p>
      <h1 className="mt-8 text-4xl font-semibold md:text-6xl">{contact.title}</h1>
      <div className="rule-box mt-14 max-w-2xl p-8 text-lg leading-relaxed text-[var(--muted)]">
        <p>
          <a href={externalLinks.orcid} className="text-link" rel="noreferrer" target="_blank">
            {name}
          </a>
        </p>
        <p>{contact.role}</p>
        <p>Founder & Research Lead</p>
        <p className="mt-8">
          <a href="mailto:anderson@sioj.org" className="text-link">
            anderson@sioj.org
          </a>
        </p>
        <p className="mt-8">{contact.location}</p>
        <div className="mt-8 flex flex-wrap gap-5">
          <a href={externalLinks.orcid} className="text-link" rel="noreferrer" target="_blank">
            ORCID
          </a>
          <a href={externalLinks.github} className="text-link" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href={externalLinks.patreon} className="text-link" rel="noreferrer" target="_blank">
            Patreon
          </a>
        </div>
      </div>
    </section>
  );
}
