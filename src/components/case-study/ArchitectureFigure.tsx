import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import { FigureFrame } from "@/components/ui/FigureFrame";
import type {
  ArchitectureGroup,
  ImplementationState,
} from "@/types/caseStudy";

const legendStates: readonly ImplementationState[] = [
  "Implemented",
  "In Progress",
  "Planned",
];

export function ArchitectureFigure({
  groups,
  caption,
}: {
  groups: readonly ArchitectureGroup[];
  caption: string;
}) {
  return (
    <FigureFrame
      className="case-study-architecture"
      label="SEC PLATFORM / CURRENT-TO-TARGET ARCHITECTURE / FIG. 01"
      title={caption}
      tone="technical"
    >
      <div className="case-study-architecture__legend" aria-label="State legend">
        {legendStates.map((state) => (
          <ImplementationBadge state={state} key={state} />
        ))}
      </div>
      <div className="case-study-architecture__groups">
        {groups.map((group) => (
          <section className="architecture-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="architecture-group__flow">
              {group.nodes.map((node, index) => (
                <div className="architecture-group__unit" key={node.label}>
                  <div
                    className={`architecture-node architecture-node--${node.state
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <ImplementationBadge state={node.state} />
                    <strong>{node.label}</strong>
                    {node.detail ? <span>{node.detail}</span> : null}
                  </div>
                  {index < group.nodes.length - 1 ? (
                    <span
                      className="architecture-group__arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </FigureFrame>
  );
}
