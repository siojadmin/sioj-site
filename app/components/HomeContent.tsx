import Link from "next/link";
import { externalLinks, localized, localizedPath, type Locale } from "../site-content";

const flowTargets = {
  pt: [
    { href: "#problema" },
    { href: "/pt/metodo" },
    { href: "/pt/pesquisa" },
    { href: externalLinks.patreon, external: true },
    { href: externalLinks.github, external: true },
    { href: externalLinks.orcid, external: true },
    { href: "/pt/contato" },
  ],
  en: [
    { href: "#problem" },
    { href: "/en/method" },
    { href: "/en/research" },
    { href: externalLinks.patreon, external: true },
    { href: externalLinks.github, external: true },
    { href: externalLinks.orcid, external: true },
    { href: "/en/contact" },
  ],
} as const;

export function HomeContent({ locale }: { locale: Locale }) {
  const content = localized[locale];
  const home = content.home;
  const targets = flowTargets[locale];

  return (
    <>
      <section className="container py-24 md:py-32">
        <p className="eyebrow">{home.eyebrow}</p>
        <h1 className="mt-8 text-6xl font-semibold tracking-normal md:text-8xl">{home.heading}</h1>
        <p className="mt-5 text-sm font-semibold text-[var(--accent)]">{home.deck}</p>
        <p className="mt-6 max-w-4xl text-2xl leading-tight text-[var(--muted)] md:text-4xl">
          {content.subtitle}
        </p>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--accent)]">
          {home.thesis}
        </p>
        <p className="body-copy mt-8 max-w-3xl text-lg">{home.intro}</p>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{home.flowTitle}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {home.flow.map((item, index) => {
                const target = targets[index];

                if ("external" in target && target.external) {
                  return (
                    <a key={item} href={target.href} className="flow-link" rel="noreferrer" target="_blank">
                      {item}
                    </a>
                  );
                }

                return (
                  <Link key={item} href={target.href} className="flow-link">
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6">
            {home.sections.map((section, index) => (
              <div key={section.title} id={index === 1 ? (locale === "pt" ? "problema" : "problem") : undefined}>
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold">{section.title}</h2>
                <p className="body-copy mt-4 text-lg">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{home.principlesTitle}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {home.principles.map((principle) => (
              <div key={principle} className="rule-box p-6">
                <p className="text-lg text-[var(--text)]">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Research</p>
          <div>
            <h2 className="text-3xl font-semibold">{home.researchTitle}</h2>
            <p className="mt-4 text-2xl leading-tight text-[var(--muted)]">{home.researchDeck}</p>
            <p className="body-copy mt-5 text-xl">{home.researchText}</p>
            <div className="mt-7 flex flex-wrap gap-5">
              <a href={externalLinks.patreon} className="text-link" rel="noreferrer" target="_blank">
                {home.readPatreon}
              </a>
              <Link href={localizedPath(locale, "research")} className="text-link">
                {home.seeResearch}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">{home.identityTitle}</p>
          <p className="body-copy text-xl">{home.identityText}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">{locale === "pt" ? "Estado do projeto" : "Project status"}</p>
          <div className="body-copy text-xl">
            <p>sioj.org</p>
            {content.release.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
