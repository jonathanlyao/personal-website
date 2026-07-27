import { ProjectArchitectureDiagram } from "@/components/diagrams/ProjectArchitectureDiagram";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { Project } from "@/types/content";

export function ProjectFeature({ project }: { project: Project }) {
  const projectAction = project.githubUrl ? (
    <div className="project-feature__actions">
      <EditorialButton href={project.githubUrl} variant="light" external>
        View on GitHub
      </EditorialButton>
    </div>
  ) : null;

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
        <p className="project-feature__focus">
          <span>Focus:</span> {project.focusAreas.join(" · ")}
        </p>
        {project.layout === "reverse" ? projectAction : null}
      </div>
      <ProjectArchitectureDiagram project={project} />
      {project.layout !== "reverse" ? projectAction : null}
    </article>
  );
}
