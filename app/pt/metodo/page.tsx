import type { Metadata } from "next";
import { LocalizedShell } from "../../components/LocalizedShell";
import { MethodContent } from "../../components/MethodContent";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("pt", "method");

export default function PtMethodPage() {
  return (
    <LocalizedShell locale="pt" page="method">
      <MethodContent locale="pt" />
    </LocalizedShell>
  );
}
