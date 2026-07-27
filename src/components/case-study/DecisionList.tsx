import type {
  CaseStudyDecision,
  CaseStudyTradeoff,
} from "@/types/caseStudy";

export function DecisionList({
  decisions,
}: {
  decisions: readonly CaseStudyDecision[];
}) {
  return (
    <ol className="decision-list">
      {decisions.map((item, index) => (
        <li key={item.title}>
          <p>{String(index + 1).padStart(2, "0")}</p>
          <div>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>Decision</dt>
                <dd>{item.decision}</dd>
              </div>
              <div>
                <dt>Rationale</dt>
                <dd>{item.rationale}</dd>
              </div>
            </dl>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function TradeoffList({
  tradeoffs,
}: {
  tradeoffs: readonly CaseStudyTradeoff[];
}) {
  return (
    <ol className="tradeoff-list">
      {tradeoffs.map((item, index) => (
        <li key={item.title}>
          <p>{String(index + 1).padStart(2, "0")}</p>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
