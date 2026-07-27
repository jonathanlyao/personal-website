import { LabWorkflowDiagram } from "@/components/diagrams/LabWorkflowDiagram";
import { FigureFrame } from "@/components/ui/FigureFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { labProject } from "@/data/site";
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
          <p>{labProject.description}</p>
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
            <h3>One workflow, with human review at every step.</h3>
            <p>{labProject.supportingStatement}</p>
            <LabWorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
