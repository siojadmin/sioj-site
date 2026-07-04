const orcidUrl = "https://orcid.org/0000-0003-4849-9245";

export default function ContactPage() {
  const name = "Dr. Anderson Siqueira Lourenço";

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
        <p>Founder & Research Lead</p>
        <p>Attorney at Law — OAB/DF 39.544</p>
        <p className="mt-8">
          <a href="mailto:contact@sioj.org" className="text-link">
            contact@sioj.org
          </a>
        </p>
        <p className="mt-8">Brasília — Brazil</p>
      </div>
    </section>
  );
}
