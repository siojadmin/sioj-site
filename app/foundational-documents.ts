export type FoundationalDocument = {
  filename: string;
  href: string;
  titlePt: string;
  titleEn: string;
  language: "pt" | "en";
  format: "PDF" | "P7S";
  featured?: boolean;
};

const base = "/docs/fundacional";

export const foundationalDocuments: FoundationalDocument[] = [
  {
    filename: "SIOJ_Manual_Operacional_v1.0_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf",
    href: `${base}/SIOJ_Manual_Operacional_v1.0_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf`,
    titlePt: "Manual Operacional SIOJ v1.0",
    titleEn: "SIOJ Operational Manual v1.0",
    language: "pt",
    format: "PDF",
    featured: true,
  },
  {
    filename: "SIOJ_Manual_Ferramentas_v1.0_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf",
    href: `${base}/SIOJ_Manual_Ferramentas_v1.0_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf`,
    titlePt: "Manual de Ferramentas SIOJ v1.0",
    titleEn: "SIOJ Tools Manual v1.0",
    language: "pt",
    format: "PDF",
    featured: true,
  },
  {
    filename: "SIOJ_Volume_III_Epistemologia_Fundacional_V1.0_2025-12-31-Manifesto.pdf",
    href: `${base}/SIOJ_Volume_III_Epistemologia_Fundacional_V1.0_2025-12-31-Manifesto.pdf`,
    titlePt: "Volume III - Epistemologia Fundacional v1.0",
    titleEn: "Volume III - Foundational Epistemology v1.0",
    language: "pt",
    format: "PDF",
    featured: true,
  },
  {
    filename: "SIOJ_Working_Paper_02_2026.pdf",
    href: `${base}/SIOJ_Working_Paper_02_2026.pdf`,
    titlePt:
      "Working Paper SIOJ Labs nº 02 - A Epistemologia do SIOJ v2.0",
    titleEn:
      "SIOJ Labs Working Paper No. 02 - The Epistemology of SIOJ v2.0",
    language: "pt",
    format: "PDF",
    featured: true,
  },
  {
    filename: "SIOJ-AFR-001-V1.0_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf",
    href: `${base}/SIOJ-AFR-001-V1.0_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf`,
    titlePt: "AFR-001 - Ato Fundacional de Registro",
    titleEn: "AFR-001 - Foundational Registration Act",
    language: "pt",
    format: "PDF",
  },
  {
    filename: "SIOJ_Anexo_VIII-B_CadeiaFundacional_v1.0_preAudit-Manifesto.pdf",
    href: `${base}/SIOJ_Anexo_VIII-B_CadeiaFundacional_v1.0_preAudit-Manifesto.pdf`,
    titlePt: "Anexo VIII-B - Cadeia Fundacional v1.0",
    titleEn: "Annex VIII-B - Foundational Chain v1.0",
    language: "pt",
    format: "PDF",
  },
  {
    filename: "SIOJ_Anexo_VIII-C_ProtocoloContinuidade_v1.0_signed_CAdES.pdf",
    href: `${base}/SIOJ_Anexo_VIII-C_ProtocoloContinuidade_v1.0_signed_CAdES.pdf`,
    titlePt: "Anexo VIII-C - Protocolo de Continuidade v1.0",
    titleEn: "Annex VIII-C - Continuity Protocol v1.0",
    language: "pt",
    format: "PDF",
  },
  {
    filename: "SIOJ_Anexo_VIII_Protocolo_Assinatura_v1.0-Manifesto.pdf",
    href: `${base}/SIOJ_Anexo_VIII_Protocolo_Assinatura_v1.0-Manifesto.pdf`,
    titlePt: "Anexo VIII - Protocolo de Assinatura v1.0",
    titleEn: "Annex VIII - Signature Protocol v1.0",
    language: "pt",
    format: "PDF",
  },
  {
    filename: "SIOJ_Ata_Fundacional_Assinatura_v1.6T_2026-01-02_UTC-Manifesto.pdf",
    href: `${base}/SIOJ_Ata_Fundacional_Assinatura_v1.6T_2026-01-02_UTC-Manifesto.pdf`,
    titlePt: "Ata Fundacional de Assinatura v1.6T",
    titleEn: "Foundational Signature Minutes v1.6T",
    language: "pt",
    format: "PDF",
  },
  {
    filename: "SIOJ_ATF_001_V6.1_ACT_OF_FOUNDATIONAL_TRANSITION_EN_2026-07-19_UTC-Manifesto.pdf",
    href: `${base}/SIOJ_ATF_001_V6.1_ACT_OF_FOUNDATIONAL_TRANSITION_EN_2026-07-19_UTC-Manifesto.pdf`,
    titlePt: "ATF-001 v6.1 - Ato de Transição Fundacional (inglês)",
    titleEn: "ATF-001 v6.1 - Act of Foundational Transition",
    language: "en",
    format: "PDF",
  },
  {
    filename: "SIOJ_Registro_Autoral_v1_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf",
    href: `${base}/SIOJ_Registro_Autoral_v1_2026-01-05_UTC_ASSINADO_ICP-Manifesto.pdf`,
    titlePt: "Registro Autoral SIOJ v1",
    titleEn: "SIOJ Authorial Registration v1",
    language: "pt",
    format: "PDF",
  },
  {
    filename: "SIOJ_V2.3_DECLARACAO_DE_TRANSICAO_FUNDACIONAL_v1.0_2026-01-07_UTC-Manifesto.pdf",
    href: `${base}/SIOJ_V2.3_DECLARACAO_DE_TRANSICAO_FUNDACIONAL_v1.0_2026-01-07_UTC-Manifesto.pdf`,
    titlePt: "Declaração de Transição Fundacional v2.3",
    titleEn: "Foundational Transition Declaration v2.3",
    language: "pt",
    format: "PDF",
  },
  {
    filename: "SIOJ_ATA_ENCERRAMENTO_FASE_HASHS_v1.5T_2026-01-01_UTC_REF.p7s",
    href: `${base}/SIOJ_ATA_ENCERRAMENTO_FASE_HASHS_v1.5T_2026-01-01_UTC_REF.p7s`,
    titlePt: "Assinatura P7S - Ata de Encerramento da Fase de Hashes",
    titleEn: "P7S Signature - Hash Phase Closure Minutes",
    language: "pt",
    format: "P7S",
  },
  {
    filename: "SIOJ_HASH_INDEX_v1.5T_2026-01-01_UTC_REF.p7s",
    href: `${base}/SIOJ_HASH_INDEX_v1.5T_2026-01-01_UTC_REF.p7s`,
    titlePt: "Assinatura P7S - Índice de Hashes v1.5T",
    titleEn: "P7S Signature - Hash Index v1.5T",
    language: "pt",
    format: "P7S",
  },
  {
    filename: "SIOJ_Authorial_Registration_Document_v1_EN_2026-01-05_UTC-Manifesto.pdf",
    href: `${base}/en/SIOJ_Authorial_Registration_Document_v1_EN_2026-01-05_UTC-Manifesto.pdf`,
    titlePt: "Documento de Registro Autoral v1 (inglês)",
    titleEn: "Authorial Registration Document v1",
    language: "en",
    format: "PDF",
  },
  {
    filename: "SIOJ_Foundational_Block_Closure_Manifest_v1.6T_EN_2026-01-02_UTC_ASSINADO_ICP-Manifesto.pdf",
    href: `${base}/en/SIOJ_Foundational_Block_Closure_Manifest_v1.6T_EN_2026-01-02_UTC_ASSINADO_ICP-Manifesto.pdf`,
    titlePt: "Manifesto de Encerramento do Bloco Fundacional v1.6T (inglês)",
    titleEn: "Foundational Block Closure Manifest v1.6T",
    language: "en",
    format: "PDF",
  },
  {
    filename: "SIOJ_Foundational_Signature_Minutes_v1.6T_EN_2026-01-02_UTC-Manifesto.pdf",
    href: `${base}/en/SIOJ_Foundational_Signature_Minutes_v1.6T_EN_2026-01-02_UTC-Manifesto.pdf`,
    titlePt: "Ata de Assinatura Fundacional v1.6T (inglês)",
    titleEn: "Foundational Signature Minutes v1.6T",
    language: "en",
    format: "PDF",
  },
  {
    filename: "SIOJ_Joint_Signature_Manifest_v1.7T_EN_2026-01-02_UTC-Manifesto.pdf",
    href: `${base}/en/SIOJ_Joint_Signature_Manifest_v1.7T_EN_2026-01-02_UTC-Manifesto.pdf`,
    titlePt: "Manifesto Conjunto de Assinaturas v1.7T (inglês)",
    titleEn: "Joint Signature Manifest v1.7T",
    language: "en",
    format: "PDF",
  },
];
