import type { LabItem } from "@/types/lab";

export function LabPageHeader({
  items,
}: {
  items: readonly LabItem[];
}) {
  const activeItems = items.filter(
    (item) => item.status === "Active Development",
  ).length;

  return (
    <header className="lab-page__header">
      <p className="lab-page__marker">LAB / 01</p>
      <div className="lab-page__introduction">
        <p className="eyebrow">LAB / PRODUCT SYSTEMS</p>
        <h1>Tools, Workflows &amp; Product Experiments</h1>
        <p className="lab-page__statement">
          A collection of local-first tools and engineering experiments that
          connect data, interfaces, automation, and human decision-making.
        </p>
        <p className="lab-page__description">
          The Lab documents systems built to solve operational problems that do
          not fit neatly inside a traditional data pipeline: browser ingestion,
          scoring logic, workflow state, local persistence, secure integrations,
          and iterative interface design.
        </p>
        <dl className="lab-summary" aria-label="Lab summary">
          <div>
            <dt>Documented systems</dt>
            <dd>{String(items.length).padStart(2, "0")}</dd>
          </div>
          <div>
            <dt>Active development</dt>
            <dd>{String(activeItems).padStart(2, "0")}</dd>
          </div>
          <div>
            <dt>Default posture</dt>
            <dd>Local</dd>
          </div>
          <div>
            <dt>Decision boundary</dt>
            <dd>Human</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
