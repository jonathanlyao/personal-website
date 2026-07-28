import type { Metadata } from "next";
import { AboutActionLedger } from "@/components/about/AboutActionLedger";
import { AboutCapabilityIndex } from "@/components/about/AboutCapabilityIndex";
import { AboutPageHeader } from "@/components/about/AboutPageHeader";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutSection } from "@/components/about/AboutSection";
import { aboutPage } from "@/data/about";

export const metadata: Metadata = {
  title: "About | Lee Yao",
  description:
    "About Lee Yao, a New York–based Data Engineer and Analytics Engineer building data pipelines, dimensional models, quality controls, analytics systems, and local-first workflow tools.",
  openGraph: {
    title: "About | Lee Yao",
    description:
      "Lee Yao’s engineering focus, working principles, current systems, technical writing, and approach to building reliable analytical outputs.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <AboutPageHeader />

      <div className="about-page__body">
        <AboutSection
          id="professional-focus"
          number="01"
          title="Professional Focus"
        >
          <div className="about-prose">
            {aboutPage.professionalFocus.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AboutSection>

        <AboutSection id="how-i-work" number="02" title="How I Work" tone="dark">
          <AboutPrinciples />
        </AboutSection>

        <AboutSection
          id="systems-i-build"
          number="03"
          title="Systems I Build"
        >
          <AboutCapabilityIndex />
        </AboutSection>

        <AboutSection id="current-focus" number="04" title="Current Focus">
          <AboutActionLedger items={aboutPage.currentFocus} variant="current" />
        </AboutSection>

        <AboutSection
          id="beyond-the-pipeline"
          number="05"
          title="Beyond the Pipeline"
        >
          <div className="about-prose">
            {aboutPage.beyondPipeline.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AboutSection>

        <AboutSection id="explore-the-work" number="06" title="Explore the Work">
          <AboutActionLedger items={aboutPage.explore} variant="explore" />
          <p className="about-page__closing">{aboutPage.closingStatement}</p>
        </AboutSection>
      </div>
    </main>
  );
}
