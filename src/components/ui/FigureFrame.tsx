import type { ReactNode } from "react";

type FigureFrameProps = {
  label: string;
  title: string;
  children: ReactNode;
  tone?: "paper" | "technical" | "accent";
  className?: string;
  architectureSequence?: boolean;
};

export function FigureFrame({
  label,
  title,
  children,
  tone = "paper",
  className = "",
  architectureSequence = false,
}: FigureFrameProps) {
  return (
    <figure
      className={`figure-frame figure-frame--${tone} ${className}`.trim()}
      aria-labelledby={`${label.replaceAll(/\W/g, "-").toLowerCase()}-caption`}
      data-architecture-sequence={architectureSequence || undefined}
    >
      <div className="figure-frame__label">
        <span>{label}</span>
        <span aria-hidden="true">●</span>
      </div>
      <div className="figure-frame__canvas">{children}</div>
      <figcaption
        className="figure-frame__caption"
        id={`${label.replaceAll(/\W/g, "-").toLowerCase()}-caption`}
      >
        {title}
      </figcaption>
    </figure>
  );
}
