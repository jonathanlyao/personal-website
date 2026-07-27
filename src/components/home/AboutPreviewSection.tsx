import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import { aboutCopy, aboutFacts } from "@/data/site";

export function AboutPreviewSection() {
  return (
    <section
      className="indexed-section about-preview"
      id="about"
      aria-labelledby="about-heading"
    >
      <SectionHeading number="06" label="About Preview" />
      <div className="section-content about-preview__content">
        <div className="about-preview__statement">
          <p className="eyebrow">PRACTICE / CONTEXT</p>
          <h2 id="about-heading">Building where data meets operations.</h2>
          <p>{aboutCopy.primary}</p>
          <p>{aboutCopy.secondary}</p>
        </div>
        <div className="about-facts">
          <p className="about-facts__label">FIELD NOTES / 04 FACTS</p>
          <ul>
            {aboutFacts.map((fact, index) => (
              <li key={fact.label}>
                <span className="about-facts__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="technical-icon-frame technical-icon-frame--metadata">
                  <TechnicalIcon name={fact.icon} size={21} />
                </span>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
