import type { ReactNode } from "react";

export function AboutSection({
  id,
  number,
  title,
  children,
  tone = "paper",
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  tone?: "paper" | "accent";
}) {
  return (
    <section
      className={`about-section about-section--${tone}`}
      id={id}
      aria-labelledby={`${id}-heading`}
      data-reveal
    >
      <header className="about-section__heading">
        <p>{number}</p>
        <h2 id={`${id}-heading`}>{title}</h2>
      </header>
      <div className="about-section__content">{children}</div>
    </section>
  );
}
