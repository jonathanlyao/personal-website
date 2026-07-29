import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectFeature } from "./ProjectFeature";

export function SelectedWorkSection() {
  return (
    <section
      className="indexed-section selected-work"
      id="selected-work"
      aria-labelledby="selected-work-heading"
      data-reveal
    >
      <SectionHeading number="03" label="Selected Work" />
      <div className="section-content">
        <div className="selected-work__intro">
          <p className="eyebrow">
            RAW TO RELIABLE / ARCHITECTURE AS EVIDENCE
          </p>
          <h2 id="selected-work-heading">Selected Systems, documented.</h2>
          <p>
            Three data engineering studies organized around flow, modeling,
            quality, and useful outputs.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectFeature key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
