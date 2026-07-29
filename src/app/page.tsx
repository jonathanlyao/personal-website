import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { CurrentFocusSection } from "@/components/home/CurrentFocusSection";
import { EngineeringNotesSection } from "@/components/home/EngineeringNotesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LabFeatureSection } from "@/components/home/LabFeatureSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.brand} — ${siteConfig.name}`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${siteConfig.brand} — ${siteConfig.name}`,
    description: siteConfig.description,
    siteName: `${siteConfig.brand} by ${siteConfig.name}`,
  },
};

export default function Home() {
  return (
    <main id="top" tabIndex={-1}>
      <HeroSection />
      <CurrentFocusSection />
      <SelectedWorkSection />
      <LabFeatureSection />
      <EngineeringNotesSection />
      <ContactSection />
    </main>
  );
}
