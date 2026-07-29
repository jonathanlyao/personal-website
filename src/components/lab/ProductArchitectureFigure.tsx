import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import { FigureFrame } from "@/components/ui/FigureFrame";
import type {
  ImplementationState,
} from "@/types/caseStudy";
import type { ProductArchitectureGroup } from "@/types/lab";

const legendStates: readonly ImplementationState[] = [
  "Implemented",
  "In Progress",
  "Planned",
];

export function ProductArchitectureFigure({
  groups,
  caption,
}: {
  groups: readonly ProductArchitectureGroup[];
  caption: string;
}) {
  return (
    <FigureFrame
      className="product-architecture"
      label="JOB SEARCH OS / LOCAL PRODUCT ARCHITECTURE / FIG. 01"
      title={caption}
      tone="technical"
    >
      <div className="product-architecture__legend" aria-label="State legend">
        {legendStates.map((state) => (
          <ImplementationBadge state={state} key={state} />
        ))}
      </div>
      <div className="product-architecture__groups">
        {groups.map((group) => (
          <section
            className={`product-architecture__group ${
              group.label === "Decision Boundary"
                ? "product-architecture__group--decision"
                : ""
            }`}
            key={group.label}
          >
            <h3>{group.label}</h3>
            <div>
              {group.nodes.map((node, index) => (
                <div className="product-architecture__unit" key={node.title}>
                  <div
                    className={`product-architecture__node product-architecture__node--${node.state
                      .toLowerCase()
                      .replaceAll(" ", "-")} ${
                      node.boundary === "User Control"
                        ? "product-architecture__node--user"
                        : ""
                    }`}
                  >
                    <div>
                      <span>{node.boundary}</span>
                      <ImplementationBadge state={node.state} />
                    </div>
                    <strong>{node.title}</strong>
                    <span>{node.detail}</span>
                  </div>
                  {index < group.nodes.length - 1 ? (
                    <span
                      className="product-architecture__arrow"
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
      <p className="product-architecture__boundary">
        Automation boundary ends before final submission.
      </p>
    </FigureFrame>
  );
}
