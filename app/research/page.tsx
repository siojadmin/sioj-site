export default function ResearchPage() {
  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">Research</p>
      <h1 className="mt-8 text-4xl font-semibold md:text-6xl">Working Paper 01</h1>
      <p className="mt-6 max-w-4xl text-2xl leading-tight text-[var(--muted)]">
        Periodização Informacional Humano–IA
      </p>

      <div className="section mt-16 border-t border-[var(--line)]">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Título</p>
          <p className="body-copy text-xl">
            Periodização Informacional Humano-IA: uma proposta de governança cognitiva inspirada na
            fisiologia adaptativa e no treinamento de alta performance.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Resumo</p>
          <p className="body-copy text-xl">
            Sistemas humano-IA, especialmente em contextos jurídicos complexos, devem ser
            governados por ciclos de carga informacional, assimilação, recuperação, feedback,
            validação e nova carga, evitando que volume documental ou capacidade generativa sejam
            confundidos com inteligência validada.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Trava metodológica</p>
          <p className="body-copy text-xl">
            A analogia com a fisiologia não afirma que a IA seja organismo biológico; propõe uma
            matriz funcional para estudar sistemas complexos submetidos a carga, resposta, ruído,
            feedback e adaptação.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Abstract</p>
          <p className="body-copy text-xl">Em breve.</p>
        </div>
      </div>

      <div className="section">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Keywords</p>
          <p className="body-copy text-xl">Em breve.</p>
        </div>
      </div>

      <div className="section pb-0">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Download PDF</p>
          <p className="body-copy text-xl">Em breve.</p>
        </div>
      </div>
    </section>
  );
}
