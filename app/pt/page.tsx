import type { Metadata } from "next";
import { HomeContent } from "../components/HomeContent";
import { LocalizedShell } from "../components/LocalizedShell";
import { pageMetadata } from "../site-content";

export const metadata: Metadata = pageMetadata("pt", "home");

export default function PtHomePage() {
  return (
    <LocalizedShell locale="pt" page="home">
      <HomeContent locale="pt" />
    </LocalizedShell>
  );
}
