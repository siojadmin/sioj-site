const points = [
  "O SIOJ nasce da necessidade de organizar conhecimento jurídico complexo antes de submetê-lo a processos automatizados.",
  "A sobrecarga informacional não é apenas uma questão de volume; é uma questão de método, validação e responsabilidade.",
  "Antes da automação, é necessária governança. Antes da resposta, é necessária estrutura.",
  "A simbiose humano-IA pressupõe colaboração entre capacidades distintas, sem deslocar a responsabilidade humana pela decisão.",
  "A responsabilidade humana permanece no desenho do método, na validação das saídas e na interpretação dos resultados.",
  "A interoperabilidade entre motores permite comparar respostas, reduzir dependência de uma única arquitetura e fortalecer a validação cruzada.",
  "A pesquisa aplicada orienta o SIOJ: observar problemas reais, formular estruturas e testar métodos em contextos jurídicos complexos.",
  "A evolução contínua do sistema depende de ciclos de carga, assimilação, recuperação, feedback, validação e nova carga.",
];

export default function ManifestoPage() {
  return (
    <section className="container py-20 md:py-28">
      <p className="eyebrow">Manifesto</p>
      <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
        Governança cognitiva antes da automação.
      </h1>
      <div className="mt-14 grid gap-5">
        {points.map((point) => (
          <p key={point} className="rule-box p-6 text-lg leading-relaxed text-[var(--muted)]">
            {point}
          </p>
        ))}
      </div>
    </section>
  );
}
