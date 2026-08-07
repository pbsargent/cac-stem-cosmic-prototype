import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title: {
      default: "CAC STEM | Curiosity Belongs Here",
      template: "%s | CAC STEM",
    },
    description:
      "Hands-on STEM programs, council events, and COSMIC awards from Scouting America’s Capitol Area Council.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Curiosity Belongs Here | CAC STEM",
      description: "Hands-on STEM adventure and COSMIC awards for Scouts across Central Texas.",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Curiosity Belongs Here — CAC STEM" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Curiosity Belongs Here | CAC STEM",
      description: "Hands-on STEM adventure and COSMIC awards for Scouts across Central Texas.",
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
