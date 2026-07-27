import { EditorialButton } from "@/components/ui/EditorialButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import { aboutFacts } from "@/data/site";

export function AboutPreviewSection() {
  return (
    <section
      className="indexed-section about-preview"
      id="about"
      aria-labelledby="about-heading"
    >
      <SectionHeading number="05" label="About Preview" />
      <div className="section-content about-preview__content">
        <div className="about-preview__statement">
          <p className="eyebrow">PRACTICE / CONTEXT</p>
          <h2 id="about-heading">Building where data meets operations.</h2>
          <p>
            I&apos;m a New York–based data professional focused on building
            reliable data platforms and analytics systems. My work sits at the
            intersection of data engineering, business context, and practical
            software development.
          </p>
          <p>
            I also co-founded Solvia One, where I apply engineering to real
            operational and commercial problems.
          </p>
          <EditorialButton href="#contact" variant="secondary">
            More About Me
          </EditorialButton>
        </div>
        <div className="about-facts">
          <p className="about-facts__label">FIELD NOTES / 04 FACTS</p>
          <ul>
            {aboutFacts.map((fact, index) => (
              <li key={fact.label}>
                <span className="about-facts__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <TechnicalIcon name={fact.icon} size={23} />
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
