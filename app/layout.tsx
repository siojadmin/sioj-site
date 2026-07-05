import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const title = "SIOJ — Sistema Simbiótico de Interoperabilidade e Organização Jurídica";
const description =
  "SIOJ is an independent research laboratory founded by Anderson Siqueira Lourenço for cognitive governance, legal knowledge organization, interoperability and Human-AI symbiosis.";

const siteUrl = "https://sioj.org";

const externalLinks = {
  orcid: "https://orcid.org/0000-0003-4849-9245",
  github: "https://github.com/siojadmin/sioj-site",
  patreon:
    "https://www.patreon.com/siojintegratesystemoflegalorganization/posts/sioj-labs-paper-162826221?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link",
};

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
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  classification:
    "Independent research laboratory; cognitive governance; legal knowledge organization; Human-AI symbiosis",
  archives: [`${siteUrl}/research`],
  assets: [`${siteUrl}/llms.txt`, `${siteUrl}/sitemap.xml`],
  bookmarks: [`${siteUrl}/research`, `${siteUrl}/manifesto`, `${siteUrl}/contact`],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
    countryName: "Brazil",
    emails: ["anderson@sioj.org"],
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  appleWebApp: {
    title: "SIOJ",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "dc.title": title,
    "dc.creator": "Anderson Siqueira Lourenço",
    "dc.publisher": "SIOJ",
    "dc.description": description,
    "dc.language": "pt-BR",
    "dc.subject":
      "SIOJ; Anderson Siqueira Lourenço; cognitive governance; legal knowledge organization; Human-AI symbiosis",
    "citation_title": "Algorithmic Stress and the Collapse of Cognitive Load",
    "citation_author": "Anderson Siqueira Lourenço",
    "citation_publication_date": "2026/07/05",
    "citation_online_date": "2026/07/05",
    "citation_language": "pt-BR",
    "citation_abstract_html_url": `${siteUrl}/research`,
    "og:see_also": externalLinks.orcid,
    "application-name": "SIOJ",
    "msapplication-TileColor": "#080a0c",
    "msapplication-config": "none",
    "search": `${siteUrl}/opensearch.xml`,
  },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/manifesto", label: "Method" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

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
      contactPoint: {
        "@type": "ContactPoint",
        email: "anderson@sioj.org",
        contactType: "research contact",
        areaServed: "BR",
        availableLanguage: ["pt-BR", "en"],
      },
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
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
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
      keywords: [
        "SIOJ",
        "Algorithmic stress",
        "Cognitive load",
        "Human-AI governance",
        "Periodização Informacional Humano-IA",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Method",
          item: `${siteUrl}/manifesto`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Research",
          item: `${siteUrl}/research`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: `${siteUrl}/contact`,
        },
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
