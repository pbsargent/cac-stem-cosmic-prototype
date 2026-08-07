import type { Metadata } from "next";
import "./globals.css";
import { sitePath } from "./site-paths";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cac-stem-cosmic-prototype.scouting44167.chatgpt.site";
const siteOrigin = new URL(siteUrl).origin;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "CAC STEM | Curiosity Belongs Here",
    template: "%s | CAC STEM",
  },
  description:
    "Hands-on STEM programs, council events, and COSMIC awards from Scouting America’s Capitol Area Council.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
  openGraph: {
    title: "Curiosity Belongs Here | CAC STEM",
    description: "Hands-on STEM adventure and COSMIC awards for Scouts across Central Texas.",
    images: [{ url: sitePath("/og.png"), width: 1200, height: 630, alt: "Curiosity Belongs Here — CAC STEM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curiosity Belongs Here | CAC STEM",
    description: "Hands-on STEM adventure and COSMIC awards for Scouts across Central Texas.",
    images: [sitePath("/og.png")],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
