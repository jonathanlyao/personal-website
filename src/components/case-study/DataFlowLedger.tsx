import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import type { CaseStudyStep } from "@/types/caseStudy";

export function DataFlowLedger({
  steps,
}: {
  steps: readonly CaseStudyStep[];
}) {
  return (
    <ol className="data-flow-ledger">
      {steps.map((step) => (
        <li key={step.number}>
          <div className="data-flow-ledger__number">{step.number}</div>
          <div className="data-flow-ledger__copy">
            <p>{step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          <ImplementationBadge state={step.state} />
        </li>
      ))}
    </ol>
  );
}
