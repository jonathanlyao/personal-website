import type { ImplementationState } from "@/types/caseStudy";

const stateClassNames: Record<ImplementationState, string> = {
  Implemented: "implemented",
  "In Progress": "in-progress",
  Planned: "planned",
};

export function ImplementationBadge({
  state,
}: {
  state: ImplementationState;
}) {
  return (
    <span
      className={`implementation-badge implementation-badge--${stateClassNames[state]}`}
    >
      <span aria-hidden="true" />
      {state}
    </span>
  );
}
