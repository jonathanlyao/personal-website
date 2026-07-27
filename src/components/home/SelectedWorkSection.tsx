import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectFeature } from "./ProjectFeature";

export function SelectedWorkSection() {
  return (
    <section
      className="indexed-section selected-work"
      id="selected-work"
      aria-labelledby="selected-work-heading"
    >
      <SectionHeading number="03" label="Selected Work" inverted />
      <div className="section-content">
        <div className="selected-work__intro">
          <p className="eyebrow">ARCHITECTURE AS EVIDENCE</p>
          <h2 id="selected-work-heading">Selected Systems, documented.</h2>
          <p>
            Three data engineering studies organized around flow, modeling,
            quality, and useful outputs.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectFeature key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
