import Link from "next/link";

const patreonUrl =
  "https://www.patreon.com/siojintegratesystemoflegalorganization/posts/sioj-labs-paper-162826221?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link";

const publicFlow = ["Problema", "Método", "Working Paper 01", "Patreon", "GitHub", "ORCID", "Contato"];

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
          <div>
            <p className="eyebrow">Comece por aqui</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {publicFlow.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <h2 className="text-2xl font-semibold">O que é o SIOJ</h2>
              <p className="body-copy mt-4 text-lg">
                O SIOJ é um laboratório independente de pesquisa em governança cognitiva,
                organização do conhecimento jurídico e simbiose Humano-IA.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Qual problema enfrenta</h2>
              <p className="body-copy mt-4 text-lg">
                Em contextos jurídicos complexos, volume documental e capacidade generativa não
                bastam. Sem arquitetura de método, a automação pode ampliar ruído, dispersão e
                dificuldade de validação.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Por que existe</h2>
              <p className="body-copy mt-4 text-lg">
                O SIOJ existe para investigar formas responsáveis de estruturar colaboração entre
                humanos e inteligências artificiais antes da produção de respostas, decisões ou
                sínteses operacionais.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Qual método propõe</h2>
              <p className="body-copy mt-4 text-lg">
                A proposta metodológica organiza sistemas humano-IA por ciclos de carga
                informacional, assimilação, recuperação, feedback, validação e nova carga.
              </p>
            </div>
          </div>
        </div>
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
            <h2 className="text-3xl font-semibold">Working Paper nº 01</h2>
            <p className="mt-4 text-2xl leading-tight text-[var(--muted)]">
              Algorithmic Stress and the Collapse of Cognitive Load
            </p>
            <p className="body-copy mt-5 text-xl">
              O primeiro documento científico que apresenta os fundamentos metodológicos do SIOJ:
              estresse algorítmico, carga cognitiva e Periodização Informacional Humano–IA.
            </p>
            <div className="mt-7 flex flex-wrap gap-5">
              <a href={patreonUrl} className="text-link" rel="noreferrer" target="_blank">
                Ler no Patreon
              </a>
              <Link href="/research" className="text-link">
                Ver Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Pesquisa em andamento</p>
          <div>
            <p className="body-copy text-xl">
              O Patreon do SIOJ Labs funciona como ambiente público de acompanhamento da pesquisa,
              Working Papers, notas metodológicas e publicações em desenvolvimento.
            </p>
            <a href={patreonUrl} className="text-link mt-6 inline-block" rel="noreferrer" target="_blank">
              Acompanhar no Patreon
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Identidade pública</p>
          <div>
            <p className="body-copy text-xl">
              Para fins de busca acadêmica e institucional, SIOJ, sioj.org e Anderson Siqueira
              Lourenço identificam o mesmo eixo público de pesquisa: método, governança cognitiva,
              interoperabilidade jurídica e simbiose Humano-IA.
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              <Link href="/contact" className="text-link">
                Anderson e SIOJ
              </Link>
              <Link href="/research" className="text-link">
                Produção científica
              </Link>
            </div>
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
            <p className="body-copy text-xl">Anderson Siqueira Lourenço</p>
            <p className="body-copy text-xl">Operador Fundacional — SIOJ</p>
            <Link href="/contact" className="text-link mt-5 inline-block">
              anderson@sioj.org
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
