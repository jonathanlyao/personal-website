import type { Project } from "@/types/content";
import { FigureFrame } from "@/components/ui/FigureFrame";

export function ProjectArchitectureDiagram({
  project,
}: {
  project: Project;
}) {
  return (
    <FigureFrame
      label={project.figureLabel}
      title={project.figureTitle}
      tone={project.tone}
      className="architecture-figure"
    >
      <div
        className="architecture-flow"
        role="img"
        aria-label={`${project.title} architecture: ${project.flow
          .map((stage) => stage.title)
          .join(" to ")}. ${project.qualityLabel}.`}
      >
        <span className="architecture-flow__hint" aria-hidden="true">
          Swipe to explore
        </span>
        <div className="architecture-flow__track">
          {project.flow.map((stage, index) => (
            <div className="architecture-flow__unit" key={`${stage.title}-${index}`}>
              <div className="architecture-flow__node">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage.title}</strong>
                {stage.detail ? <small>{stage.detail}</small> : null}
              </div>
              {index < project.flow.length - 1 ? (
                <span className="architecture-flow__arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="architecture-flow__quality">
          <span>{project.qualityLabel}</span>
        </div>
        <div className="architecture-flow__support">
          {project.supportLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </FigureFrame>
  );
}
