import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { ResumeProject } from "@/types/resume";

export function ProjectEntry({
  project,
  index,
}: {
  project: ResumeProject;
  index: number;
}) {
  return (
    <article className="resume-entry resume-project">
      <div className="resume-project__lead">
        <header className="resume-entry__heading">
          <div>
            <p className="resume-entry__organization">
              Project {String(index + 1).padStart(2, "0")}
            </p>
            <h3>{project.title}</h3>
          </div>
          <p className="resume-entry__dates">
            {project.startDate} <span aria-hidden="true">—</span>{" "}
            <span className="visually-hidden">to</span> {project.endDate}
          </p>
        </header>
        <ul
          className="technical-tags resume-project__technologies"
          aria-label={`Technologies used for ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechnicalTag>{technology}</TechnicalTag>
            </li>
          ))}
        </ul>
      </div>
      <ul className="resume-entry__bullets">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {project.githubUrl ? (
        <a
          className="resume-project__repository"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-print-url
        >
          <span>View Repository</span>
          <TechnicalIcon name="external-link" size={15} />
          <span className="visually-hidden">Opens in a new tab</span>
        </a>
      ) : null}
    </article>
  );
}
