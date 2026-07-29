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
          <p className="hero-copy__brand">
            <strong>{siteConfig.brand}</strong>
            <span>{siteConfig.attribution}</span>
          </p>
          <p className="eyebrow">{siteConfig.title}</p>
          <h1 id="hero-heading">{siteConfig.headline}</h1>
          <p className="hero-copy__support">{siteConfig.supportingCopy}</p>
          <p className="hero-copy__transformation">
            {siteConfig.transformationLine}
          </p>
          <div className="hero-copy__metadata">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.technologyLine}</p>
          </div>
          <div className="button-group">
            <EditorialButton href="#selected-work">
              View Selected Work
            </EditorialButton>
            <EditorialButton href="/resume" variant="secondary">
              View Resume
            </EditorialButton>
          </div>
        </div>
        <SystemOverviewDiagram />
      </div>
    </section>
  );
}
