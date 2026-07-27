import { labWorkflow } from "@/data/site";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";

export function LabWorkflowDiagram() {
  return (
    <div
      className="lab-workflow"
      role="img"
      aria-label="Job Search OS workflow: import jobs, review and deduplicate them in the import inbox, analyze and score with human-reviewed evidence, then track applications."
    >
      {labWorkflow.map((step, index) => (
        <div className="lab-workflow__unit" key={step.title}>
          <div className="lab-workflow__step">
            <div className="lab-workflow__metadata">
              <span className="lab-workflow__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="lab-workflow__icon technical-icon-frame technical-icon-frame--workflow">
                <TechnicalIcon name={step.icon} size={28} />
              </span>
            </div>
            <strong>{step.title}</strong>
            <p>{step.details.join(" / ")}</p>
          </div>
          {index < labWorkflow.length - 1 ? (
            <span className="lab-workflow__arrow" aria-hidden="true">
              {index === 1 ? "↓" : "→"}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
