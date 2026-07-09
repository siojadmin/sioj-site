import type { Metadata } from "next";
import { HomeContent } from "../components/HomeContent";
import { LocalizedShell } from "../components/LocalizedShell";
import { pageMetadata } from "../site-content";

export const metadata: Metadata = pageMetadata("en", "home");

export default function EnHomePage() {
  return (
    <LocalizedShell locale="en" page="home">
      <HomeContent locale="en" />
    </LocalizedShell>
  );
}
