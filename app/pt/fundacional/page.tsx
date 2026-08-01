import type { Metadata } from "next";
import { FoundationalContent } from "../../components/FoundationalContent";
import { LocalizedShell } from "../../components/LocalizedShell";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("pt", "repository");

export default function PtFoundationalPage() {
  return (
    <LocalizedShell locale="pt" page="repository">
      <FoundationalContent locale="pt" />
    </LocalizedShell>
  );
}
