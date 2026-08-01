import type { Metadata } from "next";

export type Locale = "pt" | "en";
export type PageKey = "home" | "method" | "labs" | "research" | "repository" | "contact";

export const siteUrl = "https://sioj.org";

export const externalLinks = {
  orcid: "https://orcid.org/0000-0003-4849-9245",
  github: "https://github.com/siojadmin/sioj-site",
  zenodo: "https://zenodo.org/records/21569973",
  doi: "https://doi.org/10.5281/zenodo.21569973",
  patreon:
    "https://www.patreon.com/siojintegratesystemoflegalorganization/posts/sioj-labs-paper-162826221?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link",
};

export const localized = {
  pt: {
    lang: "pt-BR",
    label: "Português",
    switchLabel: "English",
    title: "SIOJ — Sistema Simbiótico de Interoperabilidade e Organização Jurídica",
    shortTitle: "SIOJ",
    subtitle: "Sistema Simbiótico de Interoperabilidade e Organização Jurídica",
    description:
      "Laboratório independente de pesquisa em governança cognitiva, organização do conhecimento jurídico, interoperabilidade e simbiose Humano-IA.",
    nav: [
      { key: "home", href: "/pt", label: "Início" },
      { key: "method", href: "/pt/metodo", label: "Método" },
      { key: "labs", href: "/pt/labs", label: "Labs" },
      { key: "research", href: "/pt/pesquisa", label: "Pesquisa" },
      { key: "repository", href: "/pt/fundacional", label: "Fundacional" },
      { key: "contact", href: "/pt/contato", label: "Contato" },
    ],
    footerLine: "Pesquisa • Governança • Simbiose Humano-IA",
    release: ["Versão pública", "v1.0", "Julho de 2026"],
    founder: ["Dr. Anderson Siqueira Lourenço", "Fundador e líder de pesquisa", "Advogado — OAB/DF 39.544"],
    contactLink: "Contato",
    home: {
      eyebrow: "Laboratório independente de pesquisa",
      heading: "SIOJ",
      deck: "Pesquisa • Governança • Simbiose Humano-IA",
      thesis: "Antes do prompt, o método. Antes da resposta, a estrutura.",
      intro:
        "Arquitetura de governança cognitiva para colaboração entre humanos e inteligências artificiais em contextos jurídicos complexos.",
      flowTitle: "Comece por aqui",
      flow: ["Problema", "Método", "SIOJ Labs", "Working Paper 01", "Patreon", "GitHub", "ORCID", "Contato"],
      sections: [
        {
          eyebrow: "O que é o SIOJ",
          title: "Sistema público de pesquisa aplicada",
          text: "O SIOJ é um laboratório independente de pesquisa em governança cognitiva, organização do conhecimento jurídico e simbiose Humano-IA.",
        },
        {
          eyebrow: "O problema",
          title: "Sobrecarga sem método",
          text: "Em contextos jurídicos complexos, volume documental e capacidade generativa não bastam. Sem arquitetura de método, a automação pode ampliar ruído, dispersão e dificuldade de validação.",
        },
        {
          eyebrow: "Nossa proposta",
          title: "Governança antes da automação",
          text: "O SIOJ investiga estruturas orientadas por ciclos de carga informacional, assimilação, recuperação, feedback, validação e nova carga.",
        },
      ],
      principlesTitle: "Princípios fundamentais",
      principles: [
        "Governança antes da automação.",
        "Estrutura antes da resposta.",
        "Responsabilidade humana sobre validação e decisão.",
        "Interoperabilidade entre motores e métodos.",
      ],
      researchTitle: "Working Paper nº 01",
      researchDeck: "Algorithmic Stress and the Collapse of Cognitive Load",
      researchText:
        "O primeiro documento científico apresenta fundamentos metodológicos do SIOJ: estresse algorítmico, carga cognitiva e Periodização Informacional Humano-IA.",
      readPatreon: "Ler no Patreon",
      readPublication: "Ler publicação no Zenodo",
      seeResearch: "Ver pesquisa",
      identityTitle: "Identidade pública",
      identityText:
        "Para fins de busca acadêmica e institucional, SIOJ, sioj.org e Anderson Siqueira Lourenço identificam o mesmo eixo público de pesquisa: método, governança cognitiva, interoperabilidade jurídica e simbiose Humano-IA.",
    },
    labs: {
      title: "O método em operação.",
      eyebrow: "SIOJ Labs",
      deck: "Núcleo humano, memória verificável e órgãos técnicos interoperáveis.",
      description:
        "Visão pública da arquitetura operacional do SIOJ Labs: governança cognitiva, validação humana, memória verificável e interoperabilidade entre ferramentas.",
      intro:
        "O SIOJ Labs transforma problemas jurídicos e informacionais complexos em ciclos governados de organização, processamento, validação e memória. A inteligência do sistema não reside em uma ferramenta isolada, mas na arquitetura que preserva contexto, responsabilidade e rastreabilidade.",
      layersTitle: "Três camadas que não se confundem",
      layers: [
        {
          label: "Núcleo",
          title: "Finalidade e decisão humanas",
          text: "O operador humano define o problema, os critérios, os limites e a decisão final. Nenhuma automação desloca a responsabilidade pela validação.",
        },
        {
          label: "Memória",
          title: "Contexto que pode ser verificado",
          text: "Documentos, versões, fontes, correções e resultados formam uma memória encadeada. O sistema evolui sem apagar a origem de cada conclusão.",
        },
        {
          label: "Órgãos técnicos",
          title: "Ferramentas substituíveis e interoperáveis",
          text: "GPT, Codex, Gemini, OCR, scripts, leitores e pipelines cumprem funções especializadas. As ferramentas podem mudar sem alterar a identidade metodológica do SIOJ.",
        },
      ],
      cycleTitle: "Ciclo operacional mínimo",
      cycle: [
        "Entrada qualificada",
        "Organização",
        "Processamento",
        "Validação humana",
        "Memória verificável",
        "Novo ciclo",
      ],
      modulesTitle: "Arquitetura demonstrável",
      modules: [
        {
          title: "SIOJ_MD",
          text: "Camada documental em Markdown para organização, indexação, versionamento e recuperação do conhecimento.",
        },
        {
          title: "CIORG",
          text: "Núcleo de integração e governança que conecta método, memória, fluxos operacionais e validação.",
        },
        {
          title: "Motores especializados",
          text: "Leitura, OCR, extração, correlação, geração documental e outras rotinas acionadas conforme a finalidade.",
        },
        {
          title: "Camada pública",
          text: "sioj.org, GitHub, ORCID e Working Papers tornam verificáveis a identidade, a pesquisa e a evolução institucional.",
        },
      ],
      boundaryTitle: "O que o SIOJ Labs não é",
      boundaryText:
        "Não é um chatbot isolado, uma fábrica automática de peças ou uma substituição da decisão profissional. É uma arquitetura de governança para colaboração Humano-IA em ambientes de alta complexidade.",
      statusLabel: "Fase atual",
      statusText:
        "Presença institucional pública ativa. Working Paper 01 publicado no Zenodo com DOI 10.5281/zenodo.21569973.",
      methodLink: "Conhecer o método",
      researchLink: "Ver a pesquisa",
      contactLink: "Conversar sobre o SIOJ",
    },
    method: {
      title: "Governança cognitiva antes da automação.",
      eyebrow: "Método",
      description:
        "Método institucional do SIOJ: governança cognitiva antes da automação e estrutura antes da resposta.",
      points: [
        "O SIOJ nasce da necessidade de organizar conhecimento jurídico complexo antes de submetê-lo a processos automatizados.",
        "A sobrecarga informacional não é apenas uma questão de volume; é uma questão de método, validação e responsabilidade.",
        "Antes da automação, é necessária governança. Antes da resposta, é necessária estrutura.",
        "A simbiose Humano-IA pressupõe colaboração entre capacidades distintas, sem deslocar a responsabilidade humana pela decisão.",
        "A responsabilidade humana permanece no desenho do método, na validação das saídas e na interpretação dos resultados.",
        "A interoperabilidade entre motores permite comparar respostas, reduzir dependência de uma única arquitetura e fortalecer a validação cruzada.",
        "A pesquisa aplicada orienta o SIOJ: observar problemas reais, formular estruturas e testar métodos em contextos jurídicos complexos.",
        "A evolução contínua do sistema depende de ciclos de carga, assimilação, recuperação, feedback, validação e nova carga.",
      ],
    },
    research: {
      title: "Algorithmic Stress and the Collapse of Cognitive Load",
      eyebrow: "Pesquisa",
      deck: "Fundamentos metodológicos para a Periodização Informacional na simbiose Humano-IA.",
      description:
        "Working Paper 01 do SIOJ, publicado no Zenodo: estresse algorítmico, carga cognitiva e Periodização Informacional Humano-IA.",
      publicationLabel: "Publicação aberta",
      publicationText: "Preprint • Versão 1.0 • 28 de julho de 2026 • CC BY 4.0",
      readPublication: "Abrir no Zenodo",
      citeDoi: "DOI 10.5281/zenodo.21569973",
      rows: [
        {
          label: "Título",
          text: "Algorithmic Stress and the Collapse of Cognitive Load: Methodological Foundations for Informational Periodization in Human-AI Symbiosis.",
        },
        {
          label: "Publicação",
          text: "Zenodo • Preprint • Versão 1.0 • Publicado em 28 de julho de 2026 • DOI 10.5281/zenodo.21569973.",
        },
        {
          label: "Resumo",
          text: "O artigo apresenta a Periodização Informacional Humano-IA como modelo metodológico para mitigar sobrecarga cognitiva e falsa fluência em ambientes de IA generativa, articulando Carga de Reconstrução Contextual, Memória Externa Auditável e validação humana.",
        },
        {
          label: "Trava metodológica",
          text: "A analogia com a fisiologia não afirma que a IA seja organismo biológico; propõe uma matriz funcional para estudar sistemas complexos submetidos a carga, resposta, ruído, feedback e adaptação.",
        },
        {
          label: "Keywords",
          text: "SIOJ; governança cognitiva; simbiose Humano-IA; carga cognitiva; estresse algorítmico; interoperabilidade jurídica.",
        },
      ],
    },
    contact: {
      title: "Contato",
      eyebrow: "Contato",
      description:
        "Contato institucional direto para Anderson Siqueira Lourenço, Operador Fundacional do SIOJ.",
      role: "Operador Fundacional — SIOJ",
      location: "Brasília — Brasil",
    },
  },
  en: {
    lang: "en",
    label: "English",
    switchLabel: "Português",
    title: "SIOJ — Symbiotic System for Legal Interoperability and Organization",
    shortTitle: "SIOJ",
    subtitle: "Symbiotic System for Legal Interoperability and Organization",
    description:
      "Independent research laboratory for cognitive governance, legal knowledge organization, interoperability and Human-AI symbiosis.",
    nav: [
      { key: "home", href: "/en", label: "Home" },
      { key: "method", href: "/en/method", label: "Method" },
      { key: "labs", href: "/en/labs", label: "Labs" },
      { key: "research", href: "/en/research", label: "Research" },
      { key: "repository", href: "/en/foundational", label: "Foundational" },
      { key: "contact", href: "/en/contact", label: "Contact" },
    ],
    footerLine: "Research • Governance • Human-AI Symbiosis",
    release: ["Public Release", "v1.0", "July 2026"],
    founder: ["Dr. Anderson Siqueira Lourenço", "Founder and Research Lead", "Attorney at Law — OAB/DF 39.544"],
    contactLink: "Contact",
    home: {
      eyebrow: "Independent research laboratory",
      heading: "SIOJ",
      deck: "Research • Governance • Human-AI Symbiosis",
      thesis: "Before the prompt, method. Before the answer, structure.",
      intro:
        "A cognitive governance architecture for collaboration between humans and artificial intelligence systems in complex legal contexts.",
      flowTitle: "Start here",
      flow: ["Problem", "Method", "SIOJ Labs", "Working Paper 01", "Patreon", "GitHub", "ORCID", "Contact"],
      sections: [
        {
          eyebrow: "What SIOJ is",
          title: "A public applied research system",
          text: "SIOJ is an independent research laboratory focused on cognitive governance, legal knowledge organization and Human-AI symbiosis.",
        },
        {
          eyebrow: "The problem",
          title: "Overload without method",
          text: "In complex legal contexts, document volume and generative capacity are not enough. Without methodological architecture, automation can amplify noise, dispersion and validation difficulty.",
        },
        {
          eyebrow: "Our proposal",
          title: "Governance before automation",
          text: "SIOJ investigates structures guided by cycles of informational load, assimilation, recovery, feedback, validation and renewed load.",
        },
      ],
      principlesTitle: "Core principles",
      principles: [
        "Governance before automation.",
        "Structure before response.",
        "Human responsibility over validation and decision-making.",
        "Interoperability across engines and methods.",
      ],
      researchTitle: "Working Paper No. 01",
      researchDeck: "Algorithmic Stress and the Collapse of Cognitive Load",
      researchText:
        "The first scientific document presents SIOJ's methodological foundations: algorithmic stress, cognitive load and Human-AI Informational Periodization.",
      readPatreon: "Read on Patreon",
      readPublication: "Read the publication on Zenodo",
      seeResearch: "View research",
      identityTitle: "Public identity",
      identityText:
        "For academic and institutional discovery, SIOJ, sioj.org and Anderson Siqueira Lourenço identify the same public research axis: method, cognitive governance, legal interoperability and Human-AI symbiosis.",
    },
    labs: {
      title: "Method in operation.",
      eyebrow: "SIOJ Labs",
      deck: "Human core, verifiable memory and interoperable technical organs.",
      description:
        "A public view of the SIOJ Labs operating architecture: cognitive governance, human validation, verifiable memory and interoperability across tools.",
      intro:
        "SIOJ Labs turns complex legal and informational problems into governed cycles of organization, processing, validation and memory. The system's intelligence does not reside in one isolated tool, but in an architecture that preserves context, responsibility and traceability.",
      layersTitle: "Three layers with distinct roles",
      layers: [
        {
          label: "Core",
          title: "Human purpose and decision",
          text: "The human operator defines the problem, criteria, limits and final decision. Automation never displaces responsibility for validation.",
        },
        {
          label: "Memory",
          title: "Context that can be verified",
          text: "Documents, versions, sources, corrections and results form a linked memory. The system evolves without erasing the origin of each conclusion.",
        },
        {
          label: "Technical organs",
          title: "Replaceable, interoperable tools",
          text: "GPT, Codex, Gemini, OCR, scripts, readers and pipelines perform specialized functions. Tools may change without changing SIOJ's methodological identity.",
        },
      ],
      cycleTitle: "Minimum operating cycle",
      cycle: [
        "Qualified input",
        "Organization",
        "Processing",
        "Human validation",
        "Verifiable memory",
        "New cycle",
      ],
      modulesTitle: "Demonstrable architecture",
      modules: [
        {
          title: "SIOJ_MD",
          text: "A Markdown documentation layer for knowledge organization, indexing, versioning and retrieval.",
        },
        {
          title: "CIORG",
          text: "An integration and governance core connecting method, memory, operating flows and validation.",
        },
        {
          title: "Specialized engines",
          text: "Reading, OCR, extraction, correlation, document generation and other routines activated according to purpose.",
        },
        {
          title: "Public layer",
          text: "sioj.org, GitHub, ORCID and Working Papers make institutional identity, research and evolution verifiable.",
        },
      ],
      boundaryTitle: "What SIOJ Labs is not",
      boundaryText:
        "It is not an isolated chatbot, an automatic legal-document factory or a replacement for professional judgment. It is a governance architecture for Human-AI collaboration in high-complexity environments.",
      statusLabel: "Current phase",
      statusText:
        "Active public institutional presence. Working Paper No. 01 published on Zenodo with DOI 10.5281/zenodo.21569973.",
      methodLink: "Explore the method",
      researchLink: "View the research",
      contactLink: "Discuss SIOJ",
    },
    method: {
      title: "Cognitive governance before automation.",
      eyebrow: "Method",
      description:
        "SIOJ institutional method: cognitive governance before automation and structure before response.",
      points: [
        "SIOJ begins from the need to organize complex legal knowledge before submitting it to automated processes.",
        "Informational overload is not only a matter of volume; it is a matter of method, validation and responsibility.",
        "Before automation, governance is required. Before the answer, structure is required.",
        "Human-AI symbiosis assumes collaboration between different capacities without displacing human responsibility for decisions.",
        "Human responsibility remains in method design, output validation and interpretation of results.",
        "Interoperability across engines allows response comparison, reduces dependence on a single architecture and strengthens cross-validation.",
        "Applied research guides SIOJ: observe real problems, formulate structures and test methods in complex legal contexts.",
        "The system evolves through cycles of informational load, assimilation, recovery, feedback, validation and renewed load.",
      ],
    },
    research: {
      title: "Algorithmic Stress and the Collapse of Cognitive Load",
      eyebrow: "Research",
      deck: "Methodological Foundations for Informational Periodization in Human-AI Symbiosis.",
      description:
        "SIOJ Working Paper No. 01, published on Zenodo: algorithmic stress, cognitive load and Human-AI Informational Periodization.",
      publicationLabel: "Open publication",
      publicationText: "Preprint • Version 1.0 • July 28, 2026 • CC BY 4.0",
      readPublication: "Open on Zenodo",
      citeDoi: "DOI 10.5281/zenodo.21569973",
      rows: [
        {
          label: "Title",
          text: "Algorithmic Stress and the Collapse of Cognitive Load: Methodological Foundations for Informational Periodization in Human-AI Symbiosis.",
        },
        {
          label: "Publication",
          text: "Zenodo • Preprint • Version 1.0 • Published July 28, 2026 • DOI 10.5281/zenodo.21569973.",
        },
        {
          label: "Abstract",
          text: "The paper presents Human-AI Informational Periodization as a methodological model for mitigating cognitive overload and false fluency in generative AI environments, connecting Contextual Reconstruction Load, Audit-Ready External Memory and human validation.",
        },
        {
          label: "Methodological lock",
          text: "The physiology analogy does not claim that AI is a biological organism; it proposes a functional matrix for studying complex systems under load, response, noise, feedback and adaptation.",
        },
        {
          label: "Keywords",
          text: "SIOJ; cognitive governance; Human-AI symbiosis; cognitive load; algorithmic stress; legal interoperability.",
        },
      ],
    },
    contact: {
      title: "Contact",
      eyebrow: "Contact",
      description:
        "Direct institutional contact for Anderson Siqueira Lourenço, SIOJ Foundational Operator.",
      role: "Foundational Operator — SIOJ",
      location: "Brasília — Brazil",
    },
  },
} as const;

export function localizedPath(locale: Locale, page: PageKey) {
  if (locale === "pt") {
    return {
      home: "/pt",
      method: "/pt/metodo",
      labs: "/pt/labs",
      research: "/pt/pesquisa",
      repository: "/pt/fundacional",
      contact: "/pt/contato",
    }[page];
  }

  return {
    home: "/en",
    method: "/en/method",
    labs: "/en/labs",
    research: "/en/research",
    repository: "/en/foundational",
    contact: "/en/contact",
  }[page];
}

export function alternateFor(locale: Locale, page: PageKey) {
  return localizedPath(locale === "pt" ? "en" : "pt", page);
}

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const content = localized[locale];
  const title =
    page === "home"
      ? content.title
      : page === "method"
        ? content.method.title
        : page === "labs"
          ? content.labs.title
        : page === "research"
          ? content.research.title
        : page === "repository"
          ? locale === "pt"
            ? "Repositório Fundacional"
            : "Foundational Repository"
          : `${content.contact.title} — Anderson Siqueira Lourenço`;
  const description =
    page === "home"
      ? content.description
      : page === "method"
        ? content.method.description
        : page === "labs"
          ? content.labs.description
        : page === "research"
          ? content.research.description
        : page === "repository"
          ? locale === "pt"
            ? "Acervo fundacional público do SIOJ com documentos assinados, downloads e hashes SHA-256 e SHA-512."
            : "SIOJ public foundational archive with signed documents, downloads, and SHA-256 and SHA-512 hashes."
          : content.contact.description;
  const path = localizedPath(locale, page);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": localizedPath("pt", page),
        en: localizedPath("en", page),
        "x-default": localizedPath("en", page),
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "SIOJ",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? ["en_US"] : ["pt_BR"],
      type: page === "contact" ? "profile" : page === "home" ? "website" : "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
