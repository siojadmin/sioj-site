import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Anderson Siqueira Lourenço and SIOJ",
  description:
    "Direct institutional contact for Anderson Siqueira Lourenço, Operador Fundacional do SIOJ.",
  keywords: [
    "Anderson Siqueira Lourenço",
    "SIOJ contact",
    "anderson@sioj.org",
    "ORCID Anderson Siqueira Lourenço",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Anderson Siqueira Lourenço and SIOJ",
    description: "Direct institutional and scientific contact for SIOJ.",
    url: "https://sioj.org/contact",
    type: "profile",
  },
};

const orcidUrl = "https://orcid.org/0000-0003-4849-9245";
const githubUrl = "https://github.com/siojadmin/sioj-site";
const patreonUrl =
  "https://www.patreon.com/siojintegratesystemoflegalorganization/posts/sioj-labs-paper-162826221?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link";

export default function ContactPage() {
  const name = "Anderson Siqueira Lourenço";

  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-8 text-4xl font-semibold md:text-6xl">Contato</h1>
      <div className="rule-box mt-14 max-w-2xl p-8 text-lg leading-relaxed text-[var(--muted)]">
        <p>
          {orcidUrl ? (
            <a href={orcidUrl} className="text-link" rel="noreferrer" target="_blank">
              {name}
            </a>
          ) : (
            name
          )}
        </p>
        <p>Operador Fundacional — SIOJ</p>
        <p>Founder & Research Lead</p>
        <p className="mt-8">
          <a href="mailto:anderson@sioj.org" className="text-link">
            anderson@sioj.org
          </a>
        </p>
        <p className="mt-8">Brasília — Brazil</p>
        <div className="mt-8 flex flex-wrap gap-5">
          <a href={orcidUrl} className="text-link" rel="noreferrer" target="_blank">
            ORCID
          </a>
          <a href={githubUrl} className="text-link" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href={patreonUrl} className="text-link" rel="noreferrer" target="_blank">
            Patreon
          </a>
        </div>
      </div>
    </section>
  );
}
