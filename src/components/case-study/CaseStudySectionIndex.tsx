import type { CaseStudySectionLink } from "@/types/caseStudy";

export function CaseStudySectionIndex({
  sections,
}: {
  sections: readonly CaseStudySectionLink[];
}) {
  return (
    <nav className="case-study-index" aria-label="Case study contents">
      <p>Contents / {String(sections.length).padStart(2, "0")} sections</p>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              <span>{section.number}</span>
              <span>{section.shortLabel}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
