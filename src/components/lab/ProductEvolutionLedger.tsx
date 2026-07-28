import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import type { ProductPhase } from "@/types/lab";

export function ProductEvolutionLedger({
  phases,
}: {
  phases: readonly ProductPhase[];
}) {
  return (
    <ol className="product-evolution">
      {phases.map((phase) => (
        <li key={phase.label}>
          <div>
            <p>{phase.label}</p>
            <ImplementationBadge state={phase.state} />
          </div>
          <div>
            <h3>{phase.title}</h3>
            <ul>
              {phase.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
