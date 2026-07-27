import { systemStages } from "@/data/site";
import { FigureFrame } from "@/components/ui/FigureFrame";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";

export function SystemOverviewDiagram() {
  return (
    <FigureFrame
      label="DATA SYSTEM OVERVIEW / FIG. 01"
      title="A dependable path from raw inputs to business decisions."
      tone="dark"
      className="system-overview"
    >
      <div className="system-flow">
        {systemStages.map((stage, index) => (
          <div className="system-flow__unit" key={stage.title}>
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
        <span>Quality signals</span>
        <i />
        <span>Continuous review</span>
      </div>
    </FigureFrame>
  );
}
