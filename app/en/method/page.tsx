import type { Metadata } from "next";
import { LocalizedShell } from "../../components/LocalizedShell";
import { MethodContent } from "../../components/MethodContent";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("en", "method");

export default function EnMethodPage() {
  return (
    <LocalizedShell locale="en" page="method">
      <MethodContent locale="en" />
    </LocalizedShell>
  );
}
