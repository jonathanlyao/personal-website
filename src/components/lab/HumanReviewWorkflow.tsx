import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import { FigureFrame } from "@/components/ui/FigureFrame";
import type { LabCaseStudy } from "@/types/lab";

export function HumanReviewWorkflow({
  boundary,
}: {
  boundary: LabCaseStudy["humanBoundary"];
}) {
  const lanes = [
    {
      label: "Automated or Assisted",
      description: "The system prepares structured material for review.",
      items: boundary.assisted,
    },
    {
      label: "User Control",
      description: "The user verifies, decides, and performs final submission.",
      items: boundary.userControl,
    },
  ] as const;

  return (
    <FigureFrame
      className="human-review-figure"
      label="HUMAN REVIEW / AUTOMATION BOUNDARY / FIG. 04"
      title="Automation prepares. The user verifies. The user decides. The user submits."
      tone="technical"
    >
      <div className="human-review-figure__lanes">
        {lanes.map((lane) => (
          <section key={lane.label}>
            <header>
              <h3>{lane.label}</h3>
              <p>{lane.description}</p>
            </header>
            <div>
              {lane.items.map((item, index) => (
                <div className="human-review-figure__unit" key={item.title}>
                  <div>
                    <ImplementationBadge state={item.state} />
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                  {index < lane.items.length - 1 ? (
                    <span aria-hidden="true">→</span>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="human-review-figure__boundary">
        Final submission is outside the automated boundary.
      </p>
    </FigureFrame>
  );
}
