import type { Metadata } from "next";
import { LocalizedShell } from "../../components/LocalizedShell";
import { ResearchContent } from "../../components/ResearchContent";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("pt", "research");

export default function PtResearchPage() {
  return (
    <LocalizedShell locale="pt" page="research">
      <ResearchContent locale="pt" />
    </LocalizedShell>
  );
}
