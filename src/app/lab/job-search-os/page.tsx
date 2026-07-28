import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import {
  DecisionList,
  TradeoffList,
} from "@/components/case-study/DecisionList";
import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import { StatusLedger } from "@/components/case-study/StatusLedger";
import { TechnologyIndex } from "@/components/case-study/TechnologyIndex";
import { FeatureLedger } from "@/components/lab/FeatureLedger";
import { FitScoreFigure } from "@/components/lab/FitScoreFigure";
import { HumanReviewWorkflow } from "@/components/lab/HumanReviewWorkflow";
import { ImportInboxFlow } from "@/components/lab/ImportInboxFlow";
import { LabCaseStudyHeader } from "@/components/lab/LabCaseStudyHeader";
import { LimitationsLedger } from "@/components/lab/LimitationsLedger";
import { ProductArchitectureFigure } from "@/components/lab/ProductArchitectureFigure";
import { ProductEvolutionLedger } from "@/components/lab/ProductEvolutionLedger";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { jobSearchOsLab } from "@/data/lab";
import { jobSearchOsCaseStudy as caseStudy } from "@/data/labCaseStudies";

export const metadata: Metadata = {
  title: "Job Search OS Case Study | Lee Yao",
  description:
    "A case study of Lee Yao’s local-first Job Search OS, covering Chrome extension ingestion, Import Inbox workflows, evidence-based fit scoring, SQLite tracking, duplicate detection, security controls, and human review.",
  alternates: {
    canonical: "/lab/job-search-os",
  },
  openGraph: {
    title: "Job Search OS Case Study | Lee Yao",
    description:
      "A local-first workflow system for importing jobs, evaluating evidence, tracking decisions, preventing duplicates, and keeping application submission under user control.",
    type: "website",
    url: "/lab/job-search-os",
  },
};

function section(id: (typeof caseStudy.sections)[number]["id"]) {
  const match = caseStudy.sections.find((item) => item.id === id);

  if (!match) {
    throw new Error(`Missing Lab case study section: ${id}`);
  }

  return match;
}

export default function JobSearchOsCaseStudyPage() {
  const item = jobSearchOsLab;

  if (!item || item.id !== caseStudy.labId) {
    notFound();
  }

  return (
    <main
      className="case-study-page lab-case-study-page"
      id="top"
      tabIndex={-1}
    >
      <LabCaseStudyHeader item={item} caseStudy={caseStudy} />

      <div className="case-study-body">
        <CaseStudySection section={section("overview")}>
          <div className="case-study-prose">
            {caseStudy.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <StatusLedger
            items={caseStudy.overview.status}
            groupLabel="Job Search OS implementation summary"
          />
        </CaseStudySection>

        <CaseStudySection section={section("problem")}>
          <div className="case-study-prose">
            {caseStudy.problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="problem-dimensions">
            <p>Product problem dimensions</p>
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

        <CaseStudySection section={section("principles")}>
          <ol className="product-principles">
            {caseStudy.principles.map((principle, index) => (
              <li key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </CaseStudySection>

        <CaseStudySection section={section("system-architecture")} tone="dark">
          <ProductArchitectureFigure
            groups={caseStudy.architecture}
            caption={caseStudy.architectureCaption}
          />
        </CaseStudySection>

        <CaseStudySection
          section={section("job-ingestion")}
          introduction="Supported extraction strategies cover several common sources and explicit fallback handling without claiming universal ATS compatibility."
        >
          <FeatureLedger
            features={caseStudy.ingestionFeatures}
            label="Job ingestion capabilities"
          />
          <div className="supported-sources">
            <p>Confirmed extraction coverage</p>
            <ul>
              {caseStudy.supportedSources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        <CaseStudySection
          section={section("import-inbox")}
          introduction="The Import Inbox separates browser capture from permanent job records. Imported roles remain inspectable, retryable, and removable before a durable Tracker decision."
        >
          <ImportInboxFlow steps={caseStudy.inboxFlow} />
          <FeatureLedger
            features={caseStudy.inboxFeatures}
            label="Import Inbox capabilities"
          />
        </CaseStudySection>

        <CaseStudySection
          section={section("fit-score-evidence")}
          introduction={caseStudy.scoring.introduction}
        >
          <FitScoreFigure flow={caseStudy.scoring.flow} />
          <FeatureLedger
            features={caseStudy.scoring.features}
            label="Fit score and evidence capabilities"
          />
          <aside className="calibration-note" aria-label="Calibration note">
            <p>Current calibration finding</p>
            <p>{caseStudy.scoring.calibrationNote}</p>
          </aside>
        </CaseStudySection>

        <CaseStudySection
          section={section("tracker-persistence")}
          introduction="Draft, Inbox, and Tracker records have distinct lifecycle roles so temporary analysis state does not silently become a permanent application record."
        >
          <FeatureLedger
            features={caseStudy.persistenceFeatures}
            label="Tracker and persistence capabilities"
          />
          <div className="product-lifecycle">
            <p>Local record lifecycle</p>
            <ol>
              {caseStudy.lifecycle.map((stage, index) => (
                <li key={stage.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <div>
                      <h3>{stage.title}</h3>
                      <ImplementationBadge state={stage.state} />
                    </div>
                    <p>{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </CaseStudySection>

        <CaseStudySection
          section={section("duplicate-detection")}
          introduction="The same role can arrive through tracking parameters, repeated browser captures, or different source representations, so duplicate protection uses several explicit signals."
        >
          <FeatureLedger
            features={caseStudy.duplicateFeatures}
            label="Duplicate detection signals"
          />
          <p className="case-study-callout">{caseStudy.duplicateLimit}</p>
        </CaseStudySection>

        <CaseStudySection
          section={section("security-local-first")}
          introduction={caseStudy.security.introduction}
        >
          <FeatureLedger
            features={caseStudy.security.features}
            label="Local integration security controls"
          />
          <p className="case-study-callout case-study-callout--rust">
            {caseStudy.security.boundary}
          </p>
        </CaseStudySection>

        <CaseStudySection section={section("human-review")} tone="dark">
          <HumanReviewWorkflow boundary={caseStudy.humanBoundary} />
          <ol className="human-review-steps">
            {caseStudy.humanWorkflow.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <p>{step.boundary}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <ImplementationBadge state={step.state} />
              </li>
            ))}
          </ol>
        </CaseStudySection>

        <CaseStudySection
          section={section("ui-evolution")}
          introduction="The interface evolved with the workflow: from a local scoring form into a multi-page product with evidence review, recoverable state, browser capture, local analytics, and a decision-first analyzer."
        >
          <ProductEvolutionLedger phases={caseStudy.productPhases} />
        </CaseStudySection>

        <CaseStudySection section={section("decisions")}>
          <DecisionList decisions={caseStudy.decisions} />
        </CaseStudySection>

        <CaseStudySection section={section("tradeoffs")}>
          <TradeoffList tradeoffs={caseStudy.tradeoffs} />
        </CaseStudySection>

        <CaseStudySection section={section("capabilities")}>
          <StatusLedger
            items={caseStudy.currentCapabilities}
            groupLabel="Current product capabilities"
          />
        </CaseStudySection>

        <CaseStudySection section={section("limitations")}>
          <LimitationsLedger limitations={caseStudy.limitations} />
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
          aria-labelledby="lab-case-study-navigation-heading"
        >
          <div>
            <p>19 / Lab Navigation</p>
            <h2 id="lab-case-study-navigation-heading">
              Continue through the systems.
            </h2>
            <p>
              Return to the Product Systems Lab or review the data engineering
              portfolio.
            </p>
          </div>
          <div>
            <EditorialButton href="/lab" variant="primary">
              Back to Lab
            </EditorialButton>
            <EditorialButton href="/work" variant="secondary">
              View Data Systems Work
            </EditorialButton>
          </div>
        </section>
      </div>
    </main>
  );
}
