import type { Project } from "@/types/content";
import { FigureFrame } from "@/components/ui/FigureFrame";

export function ProjectArchitectureDiagram({
  project,
}: {
  project: Project;
}) {
  const presentation = project.homepage;

  return (
    <FigureFrame
      label={presentation.figureLabel}
      title={presentation.figureTitle}
      tone={presentation.tone}
      className="architecture-figure"
    >
      <div
        className="architecture-flow"
        role="img"
        aria-label={`${presentation.title} architecture: ${presentation.flow
          .map((stage) => stage.title)
          .join(" to ")}. ${presentation.qualityLabel}.`}
      >
        <span className="architecture-flow__hint" aria-hidden="true">
          Swipe to explore
        </span>
        <div className="architecture-flow__track">
          {presentation.flow.map((stage, index) => (
            <div
              className="architecture-flow__unit"
              key={`${stage.title}-${index}`}
            >
              <div className="architecture-flow__node">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage.title}</strong>
                {stage.detail ? <small>{stage.detail}</small> : null}
              </div>
              {index < presentation.flow.length - 1 ? (
                <span className="architecture-flow__arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="architecture-flow__quality">
          <span>{presentation.qualityLabel}</span>
        </div>
        <div className="architecture-flow__support">
          {presentation.supportLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </FigureFrame>
  );
}
