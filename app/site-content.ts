import type { Metadata } from "next";

export type Locale = "pt" | "en";
export type PageKey = "home" | "method" | "research" | "contact";

export const siteUrl = "https://sioj.org";

export const externalLinks = {
  orcid: "https://orcid.org/0000-0003-4849-9245",
  github: "https://github.com/siojadmin/sioj-site",
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
      { key: "research", href: "/pt/pesquisa", label: "Pesquisa" },
      { key: "contact", href: "/pt/contato", label: "Contato" },
    ],
    footerLine: "Pesquisa • Governança • Simbiose Humano-IA",
    release: ["Versão fundacional", "v0.9", "Julho de 2026"],
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
      flow: ["Problema", "Método", "Working Paper 01", "Patreon", "GitHub", "ORCID", "Contato"],
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
      seeResearch: "Ver pesquisa",
      identityTitle: "Identidade pública",
      identityText:
        "Para fins de busca acadêmica e institucional, SIOJ, sioj.org e Anderson Siqueira Lourenço identificam o mesmo eixo público de pesquisa: método, governança cognitiva, interoperabilidade jurídica e simbiose Humano-IA.",
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
      title: "Working Paper 01",
      eyebrow: "Pesquisa",
      deck: "Periodização Informacional Humano-IA",
      description:
        "Página de pesquisa do SIOJ sobre estresse algorítmico, carga cognitiva e Periodização Informacional Humano-IA.",
      rows: [
        {
          label: "Título",
          text: "Periodização Informacional Humano-IA: uma proposta de governança cognitiva inspirada na fisiologia adaptativa e no treinamento de alta performance.",
        },
        {
          label: "Resumo",
          text: "Sistemas humano-IA, especialmente em contextos jurídicos complexos, devem ser governados por ciclos de carga informacional, assimilação, recuperação, feedback, validação e nova carga.",
        },
        {
          label: "Trava metodológica",
          text: "A analogia com a fisiologia não afirma que a IA seja organismo biológico; propõe uma matriz funcional para estudar sistemas complexos submetidos a carga, resposta, ruído, feedback e adaptação.",
        },
        {
          label: "Abstract",
          text: "English abstract in preparation.",
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
      { key: "research", href: "/en/research", label: "Research" },
      { key: "contact", href: "/en/contact", label: "Contact" },
    ],
    footerLine: "Research • Governance • Human-AI Symbiosis",
    release: ["Foundational Release", "v0.9", "July 2026"],
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
      flow: ["Problem", "Method", "Working Paper 01", "Patreon", "GitHub", "ORCID", "Contact"],
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
      seeResearch: "View research",
      identityTitle: "Public identity",
      identityText:
        "For academic and institutional discovery, SIOJ, sioj.org and Anderson Siqueira Lourenço identify the same public research axis: method, cognitive governance, legal interoperability and Human-AI symbiosis.",
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
      title: "Working Paper 01",
      eyebrow: "Research",
      deck: "Human-AI Informational Periodization",
      description:
        "SIOJ research page on algorithmic stress, cognitive load and Human-AI Informational Periodization.",
      rows: [
        {
          label: "Title",
          text: "Human-AI Informational Periodization: a cognitive governance proposal inspired by adaptive physiology and high-performance training.",
        },
        {
          label: "Abstract",
          text: "Human-AI systems, especially in complex legal contexts, should be governed through cycles of informational load, assimilation, recovery, feedback, validation and renewed load.",
        },
        {
          label: "Methodological lock",
          text: "The physiology analogy does not claim that AI is a biological organism; it proposes a functional matrix for studying complex systems under load, response, noise, feedback and adaptation.",
        },
        {
          label: "Resumo",
          text: "Resumo em português disponível na versão /pt/pesquisa.",
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
      research: "/pt/pesquisa",
      contact: "/pt/contato",
    }[page];
  }

  return {
    home: "/en",
    method: "/en/method",
    research: "/en/research",
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
        : page === "research"
          ? content.research.title
          : `${content.contact.title} — Anderson Siqueira Lourenço`;
  const description =
    page === "home"
      ? content.description
      : page === "method"
        ? content.method.description
        : page === "research"
          ? content.research.description
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
