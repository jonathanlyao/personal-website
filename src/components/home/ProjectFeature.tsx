import { ProjectArchitectureDiagram } from "@/components/diagrams/ProjectArchitectureDiagram";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { Project } from "@/types/content";

export function ProjectFeature({ project }: { project: Project }) {
  return (
    <article
      className={`project-feature project-feature--${project.layout}`}
      aria-labelledby={`project-${project.number}-title`}
    >
      <div className="project-feature__index">
        <span>{project.number}</span>
        <p>{project.category}</p>
        <small>{project.date}</small>
      </div>
      <div className="project-feature__copy">
        <p className="eyebrow">
          PROJECT {project.number} / {project.category}
        </p>
        <h3 id={`project-${project.number}-title`}>{project.title}</h3>
        <p className="project-feature__summary">{project.summary}</p>
        <div className="technical-tags" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <TechnicalTag key={tag}>{tag}</TechnicalTag>
          ))}
        </div>
        <div className="project-feature__footer">
          <ul aria-label={`${project.title} case study sections`}>
            {project.navigation.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
          <span
            className="project-cta"
            aria-label={`${project.title} case study is planned for Phase 2`}
          >
            Open Case Study
            <span aria-hidden="true">↗</span>
            <small>Phase 2</small>
          </span>
        </div>
      </div>
      <ProjectArchitectureDiagram project={project} />
    </article>
  );
}
