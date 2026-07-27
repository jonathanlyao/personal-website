import type { ReactNode } from "react";

type FigureFrameProps = {
  label: string;
  title: string;
  children: ReactNode;
  tone?: "dark" | "paper" | "teal";
  className?: string;
};

export function FigureFrame({
  label,
  title,
  children,
  tone = "paper",
  className = "",
}: FigureFrameProps) {
  return (
    <figure
      className={`figure-frame figure-frame--${tone} ${className}`.trim()}
      aria-labelledby={`${label.replaceAll(/\W/g, "-").toLowerCase()}-caption`}
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
