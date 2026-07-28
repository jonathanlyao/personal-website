import type { ReactNode } from "react";
import type { CaseStudySectionLink } from "@/types/caseStudy";

export function CaseStudySection({
  section,
  introduction,
  children,
  tone = "paper",
}: {
  section: CaseStudySectionLink;
  introduction?: string;
  children: ReactNode;
  tone?: "paper" | "dark";
}) {
  return (
    <section
      className={`case-study-section case-study-section--${tone}`}
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      data-reveal
    >
      <div className="case-study-section__marker" aria-hidden="true">
        <span>{section.number}</span>
        <span>{section.label}</span>
      </div>
      <div className="case-study-section__content">
        <header className="case-study-section__heading">
          <p>
            {section.number} / {section.label}
          </p>
          <h2 id={`${section.id}-heading`}>{section.label}</h2>
          {introduction ? <p>{introduction}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
