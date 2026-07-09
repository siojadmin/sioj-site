import type { Metadata } from "next";
import { LocalizedShell } from "../../components/LocalizedShell";
import { ResearchContent } from "../../components/ResearchContent";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("en", "research");

export default function EnResearchPage() {
  return (
    <LocalizedShell locale="en" page="research">
      <ResearchContent locale="en" />
    </LocalizedShell>
  );
}
