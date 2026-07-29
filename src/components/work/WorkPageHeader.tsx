import type { PortfolioProject } from "@/types/content";

export function WorkPageHeader({
  projects,
}: {
  projects: readonly PortfolioProject[];
}) {
  const summary = [
    { value: projects.length, label: "Projects" },
    {
      value: projects.filter((project) => project.featured).length,
      label: "Featured",
    },
    {
      value: projects.filter((project) => project.status === "In Development")
        .length,
      label: "Current Build",
    },
    {
      value: projects.filter((project) => project.githubUrl).length,
      label: "Public Repositories",
    },
  ];

  return (
    <header className="work-page__header" data-reveal="introduction">
      <p className="work-page__marker">WORK / 01</p>
      <div className="work-page__introduction">
        <p className="eyebrow">RAW TO RELIABLE / WORK / SYSTEMS INDEX</p>
        <h1>Data Systems &amp; Analytics Work</h1>
        <p className="work-page__statement">
          A portfolio of data platforms, analytics pipelines, orchestration
          workflows, dimensional models, data-quality systems, and
          decision-ready outputs.
        </p>
        <p className="work-page__description">
          Each project is organized around the engineering problem, system
          architecture, data flow, modeling approach, quality controls,
          implementation decisions, and resulting analytical outputs.
        </p>
        <p className="brand-system-path">
          Raw Inputs / Pipeline / Validation / Modeling / Analytics / Decision
          Support
        </p>
        <dl className="work-summary" aria-label="Portfolio summary">
          {summary.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{String(item.value).padStart(2, "0")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
