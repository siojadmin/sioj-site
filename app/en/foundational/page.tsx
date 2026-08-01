import type { Metadata } from "next";
import { FoundationalContent } from "../../components/FoundationalContent";
import { LocalizedShell } from "../../components/LocalizedShell";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("en", "repository");

export default function EnFoundationalPage() {
  return (
    <LocalizedShell locale="en" page="repository">
      <FoundationalContent locale="en" />
    </LocalizedShell>
  );
}
