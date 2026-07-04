import Link from "next/link";

const principles = [
  "Governança antes da automação.",
  "Estrutura antes da resposta.",
  "Responsabilidade humana sobre validação e decisão.",
  "Interoperabilidade entre motores e métodos.",
];

export default function Home() {
  return (
    <>
      <section className="container py-24 md:py-32">
        <p className="eyebrow">
          Independent Research Laboratory
          <br />
          for Human–AI Governance
        </p>
        <h1 className="mt-8 text-6xl font-semibold tracking-normal md:text-8xl">SIOJ</h1>
        <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
          Research • Governance • Human–AI Symbiosis
        </p>
        <p className="mt-6 max-w-4xl text-2xl leading-tight text-[var(--muted)] md:text-4xl">
          Sistema Simbiótico de Interoperabilidade e Organização Jurídica
        </p>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--accent)]">
          Antes do prompt, o método. Antes da resposta, a estrutura.
        </p>
        <p className="body-copy mt-8 max-w-3xl text-lg">
          Arquitetura de governança cognitiva para colaboração entre humanos e inteligências
          artificiais em contextos jurídicos complexos.
        </p>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">O Problema</p>
          <p className="body-copy text-xl">
            A sobrecarga informacional em contextos jurídicos complexos exige mais do que volume
            documental ou capacidade generativa. Sem método, a automação amplia ruído, fragmentação
            e dificuldade de validação.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Nossa Proposta</p>
          <p className="body-copy text-xl">
            O SIOJ investiga estruturas de organização do conhecimento jurídico, governança
            informacional e colaboração humano-IA orientadas por ciclos de carga, assimilação,
            recuperação, feedback, validação e nova carga.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Princípios Fundamentais</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
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
            <h2 className="text-3xl font-semibold">Working Paper 01</h2>
            <p className="body-copy mt-4 text-xl">Periodização Informacional Humano-IA</p>
            <Link href="/research" className="text-link mt-6 inline-block">
              Acessar research
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Estado do Projeto</p>
          <div className="body-copy text-xl">
            <p>sioj.org</p>
            <p>Foundational Release</p>
            <p>v0.9</p>
            <p>July 2026</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Contact</p>
          <div>
            <p className="body-copy text-xl">Dr. Anderson Siqueira Lourenço</p>
            <Link href="/contact" className="text-link mt-5 inline-block">
              contact@sioj.org
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
