import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import type { ImplementationState, StatusItem } from "@/types/caseStudy";

const states: readonly ImplementationState[] = [
  "Implemented",
  "In Progress",
  "Planned",
];

export function StatusLedger({
  items,
  groupLabel = "Implementation status",
}: {
  items: readonly StatusItem[];
  groupLabel?: string;
}) {
  return (
    <div className="status-ledger" aria-label={groupLabel}>
      {states.map((state) => {
        const stateItems = items.filter((item) => item.state === state);

        if (stateItems.length === 0) {
          return null;
        }

        return (
          <div className="status-ledger__group" key={state}>
            <ImplementationBadge state={state} />
            <ul>
              {stateItems.map((item) => (
                <li key={`${state}-${item.label}`}>
                  <p>{item.label}</p>
                  {item.description ? <p>{item.description}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
