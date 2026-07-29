import { FigureFrame } from "@/components/ui/FigureFrame";

export function FitScoreFigure({ flow }: { flow: readonly string[] }) {
  return (
    <FigureFrame
      className="fit-score-figure"
      label="FIT SCORE / EVIDENCE MODEL / FIG. 03"
      title="A configurable prioritization flow that keeps requirements, evidence, gaps, and warnings inspectable."
      tone="technical"
    >
      <div className="fit-score-figure__flow">
        {flow.map((step, index) => (
          <div className="fit-score-figure__unit" key={step}>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
            {index < flow.length - 1 ? (
              <span aria-hidden="true">→</span>
            ) : null}
          </div>
        ))}
      </div>
      <p>
        Decision support only / Not a hiring probability / Human interpretation
        required
      </p>
    </FigureFrame>
  );
}
