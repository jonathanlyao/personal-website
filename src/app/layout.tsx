import type { Metadata } from "next";
import {
  Geist,
  IBM_Plex_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionController } from "@/components/motion/MotionController";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const metadataBase = getSiteUrl();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${siteConfig.brand} — ${siteConfig.name}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.brand} by ${siteConfig.name}`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.brand} — ${siteConfig.name}`,
    description: siteConfig.description,
    siteName: `${siteConfig.brand} by ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <MotionController />
        <a className="skip-link" href="#top">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
