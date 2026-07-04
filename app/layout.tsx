import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const title = "SIOJ — Sistema Simbiótico de Interoperabilidade e Organização Jurídica";
const description =
  "Independent research laboratory for legal knowledge organization, information governance and human-AI symbiosis.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://sioj.org"),
  openGraph: {
    title,
    description,
    url: "https://sioj.org",
    siteName: "SIOJ",
    type: "website",
  },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
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
                    href="https://orcid.org/0000-0003-4849-9245"
                    className="text-link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ORCID
                  </a>
                  <span className="text-[var(--quiet)]">GitHub</span>
                  <span className="text-[var(--quiet)]">Patreon</span>
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
