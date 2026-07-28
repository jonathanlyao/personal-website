import Link from "next/link";
import { CaseStudySectionIndex } from "@/components/case-study/CaseStudySectionIndex";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { LabCaseStudy, LabItem } from "@/types/lab";

export function LabCaseStudyHeader({
  item,
  caseStudy,
}: {
  item: LabItem;
  caseStudy: LabCaseStudy;
}) {
  const systemNumber = String(item.displayOrder).padStart(2, "0");

  return (
    <header className="lab-case-study-header" data-reveal="introduction">
      <Link className="lab-case-study-header__back" href="/lab">
        <span aria-hidden="true">←</span>
        Back to Lab
      </Link>

      <div className="lab-case-study-header__metadata">
        <span>System {systemNumber}</span>
        <span>{item.category}</span>
        <span>Human-in-the-loop</span>
      </div>

      <div className="lab-case-study-header__title">
        <p className="eyebrow">{caseStudy.eyebrow}</p>
        <h1>{item.title}</h1>
        <p className="lab-case-study-header__summary">{item.summary}</p>
        <p className="lab-case-study-header__supporting">
          {caseStudy.supportingStatement}
        </p>
        <div className="lab-case-study-header__status">
          <span>System state</span>
          <StatusLabel tone="active">{item.status}</StatusLabel>
        </div>
        <blockquote>{caseStudy.corePrinciple}</blockquote>
      </div>

      <div className="lab-case-study-header__details">
        <div>
          <p>Core capabilities</p>
          <ul>
            {item.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Technology</p>
          <div className="technical-tags" aria-label="System technologies">
            {item.technologies.map((technology) => (
              <TechnicalTag key={technology}>{technology}</TechnicalTag>
            ))}
          </div>
        </div>
      </div>

      <CaseStudySectionIndex sections={caseStudy.sections} />
    </header>
  );
}
