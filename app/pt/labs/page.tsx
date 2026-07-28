import type { Metadata } from "next";
import { LabsContent } from "../../components/LabsContent";
import { LocalizedShell } from "../../components/LocalizedShell";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("pt", "labs");

export default function PtLabsPage() {
  return (
    <LocalizedShell locale="pt" page="labs">
      <LabsContent locale="pt" />
    </LocalizedShell>
  );
}
