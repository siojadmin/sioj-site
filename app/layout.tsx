import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const title = "SIOJ — Sistema Simbiótico de Interoperabilidade e Organização Jurídica";
const description =
  "SIOJ is an independent research laboratory founded by Anderson Siqueira Lourenço for cognitive governance, legal knowledge organization, interoperability and Human-AI symbiosis.";

const siteUrl = "https://sioj.org";

export const metadata: Metadata = {
  applicationName: "SIOJ",
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "SIOJ",
    "Anderson Siqueira Lourenço",
    "Sistema Simbiótico de Interoperabilidade e Organização Jurídica",
    "SIOJ Labs",
    "governança cognitiva",
    "Human-AI symbiosis",
    "Human-AI governance",
    "legal knowledge organization",
    "interoperabilidade jurídica",
    "Periodização Informacional Humano-IA",
    "Algorithmic Stress and the Collapse of Cognitive Load",
  ],
  authors: [{ name: "Anderson Siqueira Lourenço", url: "https://orcid.org/0000-0003-4849-9245" }],
  creator: "Anderson Siqueira Lourenço",
  publisher: "SIOJ",
  category: "Research",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "SIOJ",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/manifesto", label: "Method" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

const externalLinks = {
  orcid: "https://orcid.org/0000-0003-4849-9245",
  github: "https://github.com/siojadmin/sioj-site",
  patreon:
    "https://www.patreon.com/siojintegratesystemoflegalorganization/posts/sioj-labs-paper-162826221?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ResearchOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "SIOJ",
      alternateName: [
        "Sistema Simbiótico de Interoperabilidade e Organização Jurídica",
        "SIOJ Labs",
      ],
      url: siteUrl,
      description,
      foundingDate: "2026",
      founder: {
        "@id": `${siteUrl}/#anderson-siqueira-lourenco`,
      },
      sameAs: [externalLinks.github, externalLinks.patreon],
      knowsAbout: [
        "Cognitive governance",
        "Human-AI governance",
        "Human-AI symbiosis",
        "Legal knowledge organization",
        "Legal interoperability",
        "Information governance",
        "Algorithmic stress",
        "Cognitive load",
        "Periodização Informacional Humano-IA",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#anderson-siqueira-lourenco`,
      name: "Anderson Siqueira Lourenço",
      honorificPrefix: "Dr.",
      jobTitle: ["Founder & Research Lead", "Operador Fundacional — SIOJ"],
      url: `${siteUrl}/contact`,
      email: "anderson@sioj.org",
      sameAs: [externalLinks.orcid, externalLinks.github, externalLinks.patreon],
      affiliation: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SIOJ",
      alternateName: "sioj.org",
      description,
      inLanguage: ["pt-BR", "en"],
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/research#working-paper-01`,
      headline: "Algorithmic Stress and the Collapse of Cognitive Load",
      alternativeHeadline: "Periodização Informacional Humano–IA",
      name: "Working Paper nº 01",
      author: {
        "@id": `${siteUrl}/#anderson-siqueira-lourenco`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      url: `${siteUrl}/research`,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: [
        "Algorithmic stress",
        "Cognitive load",
        "Human-AI governance",
        "Periodização Informacional Humano-IA",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="page-shell">
          <header className="border-b border-[var(--line)] bg-[rgba(8,10,12,0.82)]">
            <div className="container flex min-h-20 flex-col justify-center gap-4 py-5 md:flex-row md:items-center md:justify-between">
              <Link href="/" className="w-fit">
                <span className="block text-lg font-semibold tracking-[0.08em]">SIOJ</span>
                <span className="block max-w-[520px] text-sm text-[var(--quiet)]">
                  Sistema Simbiótico de Interoperabilidade e Organização Jurídica
                </span>
              </Link>
              <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-[var(--line)] py-12">
            <div className="container grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-lg font-semibold tracking-[0.08em]">SIOJ</p>
                <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
                  Sistema Simbiótico de Interoperabilidade e Organização Jurídica
                </p>
                <p className="mt-5 text-sm text-[var(--quiet)]">
                  Research • Governance • Human–AI Symbiosis
                </p>
                <p className="mt-2 text-sm text-[var(--quiet)]">
                  Foundational Release<br />
                  v0.9<br />
                  July 2026
                </p>
              </div>
              <div className="text-sm text-[var(--muted)]">
                <p className="font-semibold text-[var(--text)]">Founded by:</p>
                <p className="mt-3">Dr. Anderson Siqueira Lourenço</p>
                <p>Founder & Research Lead</p>
                <p>Attorney at Law — OAB/DF 39.544</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={externalLinks.orcid}
                    className="text-link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ORCID
                  </a>
                  <a
                    href={externalLinks.github}
                    className="text-link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href={externalLinks.patreon}
                    className="text-link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Patreon
                  </a>
                  <Link href="/contact" className="text-link">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
