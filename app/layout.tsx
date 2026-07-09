import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sioj.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "SIOJ",
  title: {
    default: "SIOJ",
    template: "%s | SIOJ",
  },
  description:
    "SIOJ is an independent research laboratory for cognitive governance, legal knowledge organization, interoperability and Human-AI symbiosis.",
  alternates: {
    canonical: "/pt",
    languages: {
      "pt-BR": "/pt",
      en: "/en",
      "x-default": "/en",
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
