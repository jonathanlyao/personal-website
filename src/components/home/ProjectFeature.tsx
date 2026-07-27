import { ProjectArchitectureDiagram } from "@/components/diagrams/ProjectArchitectureDiagram";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { Project } from "@/types/content";

export function ProjectFeature({ project }: { project: Project }) {
  const presentation = project.homepage;
  const projectAction = project.githubUrl ? (
    <div className="project-feature__actions">
      <EditorialButton href={project.githubUrl} variant="light" external>
        View on GitHub
      </EditorialButton>
    </div>
  ) : null;

  return (
    <article
      className={`project-feature project-feature--${presentation.layout}`}
      aria-labelledby={`project-${presentation.number}-title`}
    >
      <div className="project-feature__index">
        <span>{presentation.number}</span>
        <p>{presentation.category}</p>
        <small>{presentation.date}</small>
      </div>
      <div className="project-feature__copy">
        <p className="eyebrow">
          PROJECT {presentation.number} / {presentation.category}
        </p>
        <h3 id={`project-${presentation.number}-title`}>
          {presentation.title}
        </h3>
        <p className="project-feature__summary">{project.summary}</p>
        <div className="technical-tags" aria-label="Technologies used">
          {presentation.tags.map((tag) => (
            <TechnicalTag key={tag}>{tag}</TechnicalTag>
          ))}
        </div>
        <p className="project-feature__focus">
          <span>Focus:</span> {presentation.focusAreas.join(" · ")}
        </p>
        {presentation.layout === "reverse" ? projectAction : null}
      </div>
      <ProjectArchitectureDiagram project={project} />
      {presentation.layout !== "reverse" ? projectAction : null}
    </article>
  );
}
