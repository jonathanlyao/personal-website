import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitectureFigure } from "@/components/case-study/ArchitectureFigure";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { DataFlowLedger } from "@/components/case-study/DataFlowLedger";
import {
  DecisionList,
  TradeoffList,
} from "@/components/case-study/DecisionList";
import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import { StatusLedger } from "@/components/case-study/StatusLedger";
import { TechnologyIndex } from "@/components/case-study/TechnologyIndex";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { secFinancialDataPlatformCaseStudy as caseStudy } from "@/data/caseStudies";
import { portfolioProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "SEC Financial Data Platform Case Study | Lee Yao",
  description:
    "A case study of Lee Yao’s SEC Financial Data Platform, covering batch ingestion, AWS S3, Python, Spark, Snowflake, dbt, Airflow, Great Expectations, financial-data normalization, and anomaly-monitoring design.",
  alternates: {
    canonical: "/work/sec-financial-data-platform",
  },
  openGraph: {
    title: "SEC Financial Data Platform Case Study | Lee Yao",
    description:
      "An engineering case study covering SEC financial-data ingestion, layered modeling, data-quality controls, implementation decisions, trade-offs, and planned monitoring outputs.",
    type: "website",
    url: "/work/sec-financial-data-platform",
  },
};

function section(id: (typeof caseStudy.sections)[number]["id"]) {
  const match = caseStudy.sections.find((item) => item.id === id);

  if (!match) {
    throw new Error(`Missing case study section: ${id}`);
  }

  return match;
}

export default function SecFinancialDataPlatformCaseStudyPage() {
  const project = portfolioProjects.find(
    (item) => item.id === caseStudy.projectId,
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="case-study-page" id="top" tabIndex={-1}>
      <CaseStudyHeader project={project} caseStudy={caseStudy} />

      <div className="case-study-body">
        <CaseStudySection section={section("overview")}>
          <div className="case-study-prose">
            {caseStudy.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <StatusLedger
            items={caseStudy.overview.status}
            groupLabel="Current implementation summary"
          />
        </CaseStudySection>

        <CaseStudySection section={section("problem")}>
          <div className="case-study-prose">
            {caseStudy.problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="problem-dimensions">
            <p>Engineering problem dimensions</p>
            <ul>
              {caseStudy.problem.dimensions.map((dimension, index) => (
                <li key={dimension}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {dimension}
                </li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        <CaseStudySection
          section={section("scope")}
          introduction={caseStudy.scope.introduction}
        >
          <dl className="scope-metrics">
            {caseStudy.scope.metrics.map((metric) => (
              <div
                className={`scope-metrics__item scope-metrics__item--${metric.tone ?? "default"}`}
                key={metric.label}
              >
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <div className="scope-constraints">
            <div>
              <h3>Current constraints</h3>
              <ul>
                {caseStudy.scope.constraints.map((constraint) => (
                  <li key={constraint}>{constraint}</li>
                ))}
              </ul>
            </div>
            <aside aria-label="Current ingestion exception note">
              <p>Exception note</p>
              <p>{caseStudy.scope.failureNote}</p>
            </aside>
          </div>
        </CaseStudySection>

        <CaseStudySection
          section={section("architecture")}
          tone="dark"
        >
          <ArchitectureFigure
            groups={caseStudy.architecture}
            caption={caseStudy.architectureCaption}
          />
        </CaseStudySection>

        <CaseStudySection section={section("data-flow")}>
          <DataFlowLedger steps={caseStudy.flowSteps} />
        </CaseStudySection>

        <CaseStudySection
          section={section("data-modeling")}
          introduction={caseStudy.modeling.introduction}
        >
          <div className="modeling-layers">
            {caseStudy.modeling.layers.map((layer) => (
              <section key={layer.label}>
                <div>
                  <h3>{layer.label}</h3>
                  <ImplementationBadge state={layer.state} />
                </div>
                <p>{layer.description}</p>
                {layer.fields ? (
                  <ul aria-label={`${layer.label} confirmed fields`}>
                    {layer.fields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          <div className="modeling-notes">
            <div>
              <p>Target analytical model</p>
              <ul>
                {caseStudy.modeling.targetEntities.map((entity) => (
                  <li key={entity}>{entity}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>Duration semantics</p>
              <ul>
                {caseStudy.modeling.durationNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          section={section("data-quality")}
          introduction={caseStudy.quality.introduction}
        >
          <blockquote className="quality-principle">
            {caseStudy.quality.principle}
          </blockquote>
          <StatusLedger
            items={caseStudy.quality.items}
            groupLabel="Data quality implementation"
          />
        </CaseStudySection>

        <CaseStudySection section={section("decisions")}>
          <DecisionList decisions={caseStudy.decisions} />
        </CaseStudySection>

        <CaseStudySection section={section("tradeoffs")}>
          <TradeoffList tradeoffs={caseStudy.tradeoffs} />
        </CaseStudySection>

        <CaseStudySection section={section("outputs")}>
          <StatusLedger
            items={caseStudy.outputs}
            groupLabel="Current and target outputs"
          />
        </CaseStudySection>

        <CaseStudySection section={section("progress")}>
          <StatusLedger
            items={caseStudy.progress}
            groupLabel="Project implementation progress"
          />
        </CaseStudySection>

        <CaseStudySection section={section("next-improvements")}>
          <ol className="next-improvements">
            {caseStudy.nextImprovements.map((improvement, index) => (
              <li key={improvement}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{improvement}</p>
              </li>
            ))}
          </ol>
        </CaseStudySection>

        <CaseStudySection section={section("technology")}>
          <TechnologyIndex groups={caseStudy.technologies} />
        </CaseStudySection>

        <section
          className="case-study-navigation"
          aria-labelledby="case-study-navigation-heading"
          data-reveal
        >
          <div>
            <p>14 / Repository / Work Navigation</p>
            <h2 id="case-study-navigation-heading">Continue through the work.</h2>
            <p>
              Return to the full project registry or continue to the next
              documented system.
            </p>
          </div>
          <div>
            <EditorialButton href="/work" variant="primary">
              Back to All Work
            </EditorialButton>
            <EditorialButton
              href="/work#cms-medicare-data-pipeline"
              variant="secondary"
            >
              View Next Project
            </EditorialButton>
          </div>
        </section>
      </div>
    </main>
  );
}
