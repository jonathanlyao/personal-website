import { ContactSection } from "@/components/home/ContactSection";
import { CurrentFocusSection } from "@/components/home/CurrentFocusSection";
import { EngineeringNotesSection } from "@/components/home/EngineeringNotesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LabFeatureSection } from "@/components/home/LabFeatureSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";

export default function Home() {
  return (
    <main id="top">
      <HeroSection />
      <CurrentFocusSection />
      <SelectedWorkSection />
      <LabFeatureSection />
      <EngineeringNotesSection />
      <ContactSection />
    </main>
  );
}
