import { systemStages } from "@/data/site";
import { FigureFrame } from "@/components/ui/FigureFrame";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";

export function SystemOverviewDiagram() {
  return (
    <FigureFrame
      label="RAW TO RELIABLE / SYSTEM PATH / FIG. 01"
      title="Raw inputs become validated systems, trusted outputs, and usable decisions."
      tone="technical"
      className="system-overview"
      architectureSequence
    >
      <div
        className="system-flow"
        role="img"
        aria-label="Data system overview: Sources to Ingestion to Warehouse to Modeling to Quality to Decisions."
      >
        {systemStages.map((stage, index) => (
          <div
            className="system-flow__unit"
            data-architecture-step={index + 1}
            data-stage-tone={
              index < 2 ? "raw" : index < 5 ? "validated" : "reliable"
            }
            key={stage.title}
          >
            <div className="system-flow__node">
              <span className="system-flow__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <TechnicalIcon name={stage.icon} size={28} />
              <strong>{stage.title}</strong>
              <p>{stage.details.join(" / ")}</p>
            </div>
            {index < systemStages.length - 1 ? (
              <span className="system-flow__arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="system-flow__feedback" aria-hidden="true">
        <span>Validation signals</span>
        <i />
        <span>Reliable decisions</span>
      </div>
    </FigureFrame>
  );
}
