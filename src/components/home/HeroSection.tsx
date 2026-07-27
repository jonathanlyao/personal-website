import { SystemOverviewDiagram } from "@/components/diagrams/SystemOverviewDiagram";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="indexed-section hero-section" aria-labelledby="hero-heading">
      <SectionHeading number="01" label="Hero" />
      <div className="hero-section__content">
        <div className="hero-copy">
          <p className="eyebrow">DATA ENGINEERING / ANALYTICS SYSTEMS</p>
          <h1 id="hero-heading">{siteConfig.headline}</h1>
          <p className="hero-copy__support">{siteConfig.supportingCopy}</p>
          <div className="hero-copy__metadata">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.technologyLine}</p>
          </div>
          <div className="button-group">
            <EditorialButton href="#selected-work">
              View Selected Work
            </EditorialButton>
          </div>
        </div>
        <SystemOverviewDiagram />
      </div>
    </section>
  );
}
