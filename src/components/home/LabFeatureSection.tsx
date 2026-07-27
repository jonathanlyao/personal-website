import { LabWorkflowDiagram } from "@/components/diagrams/LabWorkflowDiagram";
import { FigureFrame } from "@/components/ui/FigureFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JobSearchInterface } from "./JobSearchInterface";

export function LabFeatureSection() {
  return (
    <section
      className="indexed-section lab-feature"
      id="lab"
      aria-labelledby="lab-heading"
    >
      <SectionHeading number="04" label="Lab Feature" />
      <div className="section-content">
        <div className="lab-feature__lead">
          <p className="eyebrow">LOCAL-FIRST WORKFLOW / HUMAN REVIEW</p>
          <h2 id="lab-heading">Job Search OS</h2>
          <p>
            A local-first application that streamlines the job search workflow.
          </p>
        </div>
        <div className="lab-feature__grid">
          <FigureFrame
            label="JOB SEARCH OS / INTERFACE / FIG. 05"
            title="A restrained workspace for ingestion, evidence review, and application tracking."
            tone="paper"
          >
            <JobSearchInterface />
          </FigureFrame>
          <div className="lab-feature__workflow">
            <h3>One workflow, reviewed by a person.</h3>
            <p>
              Jobs enter a local inbox, duplicates are reviewed, fit is scored
              against stored evidence, and application progress stays visible.
              The system does not submit applications automatically.
            </p>
            <LabWorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
