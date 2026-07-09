import type { Metadata } from "next";
import { ContactContent } from "../../components/ContactContent";
import { LocalizedShell } from "../../components/LocalizedShell";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("pt", "contact");

export default function PtContactPage() {
  return (
    <LocalizedShell locale="pt" page="contact">
      <ContactContent locale="pt" />
    </LocalizedShell>
  );
}
