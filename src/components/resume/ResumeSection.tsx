import type { ReactNode } from "react";

export function ResumeSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  const headingId = `resume-${id}-heading`;

  return (
    <section
      className={`resume-section resume-section--${id}`}
      id={id}
      aria-labelledby={headingId}
    >
      <header className="resume-section__heading">
        <span aria-hidden="true">{number}</span>
        <h2 id={headingId}>{title}</h2>
      </header>
      <div className="resume-section__content">{children}</div>
    </section>
  );
}
