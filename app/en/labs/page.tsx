import type { Metadata } from "next";
import { LabsContent } from "../../components/LabsContent";
import { LocalizedShell } from "../../components/LocalizedShell";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("en", "labs");

export default function EnLabsPage() {
  return (
    <LocalizedShell locale="en" page="labs">
      <LabsContent locale="en" />
    </LocalizedShell>
  );
}
