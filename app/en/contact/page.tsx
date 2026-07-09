import type { Metadata } from "next";
import { ContactContent } from "../../components/ContactContent";
import { LocalizedShell } from "../../components/LocalizedShell";
import { pageMetadata } from "../../site-content";

export const metadata: Metadata = pageMetadata("en", "contact");

export default function EnContactPage() {
  return (
    <LocalizedShell locale="en" page="contact">
      <ContactContent locale="en" />
    </LocalizedShell>
  );
}
