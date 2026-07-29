import Link from "next/link";
import { CaseStudySectionIndex } from "@/components/case-study/CaseStudySectionIndex";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { ProjectCaseStudy } from "@/types/caseStudy";
import type { PortfolioProject } from "@/types/content";

export function CaseStudyHeader({
  project,
  caseStudy,
}: {
  project: PortfolioProject;
  caseStudy: ProjectCaseStudy;
}) {
  const projectNumber = String(project.displayOrder).padStart(2, "0");

  return (
    <header className="case-study-header" data-reveal="introduction">
      <Link className="case-study-header__back" href="/work">
        <span aria-hidden="true">←</span>
        Back to Work
      </Link>

      <div className="case-study-header__metadata">
        <span>Project {projectNumber}</span>
        <span>{project.category}</span>
        {project.datasetScope ? <span>{project.datasetScope}</span> : null}
      </div>

      <div className="case-study-header__title">
        <p className="eyebrow">RAW TO RELIABLE / {caseStudy.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="case-study-header__summary">{project.summary}</p>
        <p className="case-study-header__supporting">
          {caseStudy.supportingStatement}
        </p>
        <div className="case-study-header__status">
          <span>Project state</span>
          <StatusLabel tone="active">{project.status}</StatusLabel>
        </div>
      </div>

      <div className="case-study-header__details">
        <div>
          <p>Focus areas</p>
          <ul>
            {project.focusAreas.map((focusArea) => (
              <li key={focusArea}>{focusArea}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Technology direction</p>
          <div className="technical-tags" aria-label="Project technologies">
            {project.technologies.map((technology) => (
              <TechnicalTag key={technology}>{technology}</TechnicalTag>
            ))}
          </div>
        </div>
      </div>

      <CaseStudySectionIndex sections={caseStudy.sections} />
    </header>
  );
}
