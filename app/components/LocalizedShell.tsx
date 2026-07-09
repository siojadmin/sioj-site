import Link from "next/link";
import {
  alternateFor,
  externalLinks,
  localized,
  localizedPath,
  siteUrl,
  type Locale,
  type PageKey,
} from "../site-content";

type Props = {
  children: React.ReactNode;
  locale: Locale;
  page: PageKey;
};

export function LocalizedShell({ children, locale, page }: Props) {
  const content = localized[locale];
  const alternateHref = alternateFor(locale, page);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ResearchOrganization",
        "@id": `${siteUrl}/#organization`,
        name: "SIOJ",
        alternateName: [
          "Sistema Simbiótico de Interoperabilidade e Organização Jurídica",
          "Symbiotic System for Legal Interoperability and Organization",
          "SIOJ Labs",
        ],
        url: `${siteUrl}${localizedPath(locale, "home")}`,
        description: content.description,
        founder: {
          "@id": `${siteUrl}/#anderson-siqueira-lourenco`,
        },
        sameAs: [externalLinks.github, externalLinks.patreon],
        contactPoint: {
          "@type": "ContactPoint",
          email: "anderson@sioj.org",
          contactType: "research contact",
          availableLanguage: ["pt-BR", "en"],
        },
        knowsAbout: [
          "SIOJ",
          "Cognitive governance",
          "Governança cognitiva",
          "Human-AI symbiosis",
          "Simbiose Humano-IA",
          "Legal interoperability",
          "Interoperabilidade jurídica",
          "Algorithmic stress",
          "Cognitive load",
          "Human-AI Informational Periodization",
        ],
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#anderson-siqueira-lourenco`,
        name: "Anderson Siqueira Lourenço",
        honorificPrefix: "Dr.",
        jobTitle: ["Founder and Research Lead", "Foundational Operator — SIOJ"],
        url: `${siteUrl}${localizedPath(locale, "contact")}`,
        email: "anderson@sioj.org",
        sameAs: [externalLinks.orcid, externalLinks.github, externalLinks.patreon],
        affiliation: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}${localizedPath(locale, "home")}`,
        name: "SIOJ",
        description: content.description,
        inLanguage: content.lang,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <div className="page-shell" lang={content.lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="border-b border-[var(--line)] bg-[rgba(8,10,12,0.82)]">
        <div className="container flex min-h-20 flex-col justify-center gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <Link href={content.nav[0].href} className="w-fit">
            <span className="block text-lg font-semibold tracking-[0.08em]">SIOJ</span>
            <span className="block max-w-[520px] text-sm text-[var(--quiet)]">
              {content.subtitle}
            </span>
          </Link>
          <nav aria-label={locale === "pt" ? "Navegação principal" : "Primary navigation"} className="flex flex-wrap gap-x-6 gap-y-2">
            {content.nav.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <Link href={alternateHref} hrefLang={locale === "pt" ? "en" : "pt-BR"} className="language-link">
              {content.switchLabel}
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[var(--line)] py-12">
        <div className="container grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-lg font-semibold tracking-[0.08em]">SIOJ</p>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">{content.subtitle}</p>
            <p className="mt-5 text-sm text-[var(--quiet)]">{content.footerLine}</p>
            <p className="mt-2 text-sm text-[var(--quiet)]">
              {content.release.map((item) => (
                <span key={item} className="block">
                  {item}
                </span>
              ))}
            </p>
          </div>
          <div className="text-sm text-[var(--muted)]">
            <p className="font-semibold text-[var(--text)]">
              {locale === "pt" ? "Fundado por:" : "Founded by:"}
            </p>
            {content.founder.map((item, index) => (
              <p key={item} className={index === 0 ? "mt-3" : ""}>
                {item}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={externalLinks.orcid} className="text-link" rel="noreferrer" target="_blank">
                ORCID
              </a>
              <a href={externalLinks.github} className="text-link" rel="noreferrer" target="_blank">
                GitHub
              </a>
              <a href={externalLinks.patreon} className="text-link" rel="noreferrer" target="_blank">
                Patreon
              </a>
              <Link href={content.nav[3].href} className="text-link">
                {content.contactLink}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
