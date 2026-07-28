import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import { FigureFrame } from "@/components/ui/FigureFrame";
import type { LabFeature } from "@/types/lab";

export function ImportInboxFlow({
  steps,
}: {
  steps: readonly LabFeature[];
}) {
  return (
    <FigureFrame
      className="import-inbox-flow"
      label="IMPORT INBOX / REVIEW QUEUE / FIG. 02"
      title="A review queue keeps uncertain extraction, duplicate state, and save decisions visible before persistence."
      tone="paper"
    >
      <div className="import-inbox-flow__steps">
        {steps.map((step, index) => (
          <div className="import-inbox-flow__unit" key={step.title}>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <ImplementationBadge state={step.state} />
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 ? (
              <span aria-hidden="true">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </FigureFrame>
  );
}
