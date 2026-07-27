import { EditorialButton } from "@/components/ui/EditorialButton";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { PortfolioProject } from "@/types/content";

export function ProjectRegistryItem({
  project,
}: {
  project: PortfolioProject;
}) {
  const projectNumber = String(project.displayOrder).padStart(2, "0");
  const hasActions = Boolean(project.githubUrl || project.caseStudyUrl);

  return (
    <li className="project-registry__item">
      <article
        className="registry-project"
        aria-labelledby={`work-project-${project.slug}`}
      >
        <div className="registry-project__metadata">
          <p className="registry-project__number" aria-label={`Project ${projectNumber}`}>
            {projectNumber}
          </p>
          <p className="registry-project__category">{project.category}</p>
          <StatusLabel
            tone={project.status === "Completed" ? "informational" : "active"}
          >
            {project.status}
          </StatusLabel>
          {project.featured ? (
            <p className="registry-project__featured">Featured Work</p>
          ) : null}
        </div>

        <div className="registry-project__main">
          <h2 id={`work-project-${project.slug}`}>{project.title}</h2>
          {project.projectPeriod || project.datasetScope ? (
            <p className="registry-project__scope">
              {project.datasetScope ?? project.projectPeriod}
            </p>
          ) : null}
          <p className="registry-project__summary">{project.summary}</p>
          <div className="registry-project__problem">
            <p>Engineering Problem</p>
            <p>{project.problemStatement}</p>
          </div>
        </div>

        <div className="registry-project__details">
          <div className="registry-project__focus">
            <p>Focus</p>
            <ul>
              {project.focusAreas.map((focusArea) => (
                <li key={focusArea}>{focusArea}</li>
              ))}
            </ul>
          </div>
          <div className="registry-project__technologies">
            <p>Technologies</p>
            <div className="technical-tags" aria-label="Technologies used">
              {project.technologies.map((technology) => (
                <TechnicalTag key={technology}>{technology}</TechnicalTag>
              ))}
            </div>
          </div>
        </div>

        {hasActions ? (
          <div
            className="registry-project__actions"
            aria-label={`Actions for ${project.title}`}
          >
            {project.githubUrl ? (
              <EditorialButton
                href={project.githubUrl}
                variant="secondary"
                external
              >
                View Repository
                <span className="visually-hidden"> for {project.title}</span>
              </EditorialButton>
            ) : null}
            {project.caseStudyUrl ? (
              <EditorialButton
                href={project.caseStudyUrl}
                variant="secondary"
              >
                Open Case Study
                <span className="visually-hidden"> for {project.title}</span>
              </EditorialButton>
            ) : null}
          </div>
        ) : null}
      </article>
    </li>
  );
}
