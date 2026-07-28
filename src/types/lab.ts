import type {
  CaseStudyDecision,
  CaseStudySectionLink,
  CaseStudyTradeoff,
  ImplementationState,
  StatusItem,
  TechnologyGroup,
} from "@/types/caseStudy";

export type LabStatus =
  | "Active Development"
  | "Completed Experiment"
  | "Archived";

export type LabItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: LabStatus;
  summary: string;
  supportingStatement: string;
  capabilities: readonly string[];
  technologies: readonly string[];
  caseStudyUrl: string;
  repositoryUrl?: string;
  displayOrder: number;
  homepage: {
    description: string;
    supportingStatement: string;
  };
};

export type LabCaseStudySectionKey =
  | "overview"
  | "problem"
  | "principles"
  | "system-architecture"
  | "job-ingestion"
  | "import-inbox"
  | "fit-score-evidence"
  | "tracker-persistence"
  | "duplicate-detection"
  | "security-local-first"
  | "human-review"
  | "ui-evolution"
  | "decisions"
  | "tradeoffs"
  | "capabilities"
  | "limitations"
  | "next-improvements"
  | "technology";

export type LabFeature = {
  title: string;
  description: string;
  state: ImplementationState;
  metadata?: readonly string[];
};

export type LabWorkflowStep = LabFeature & {
  number: string;
  boundary: "Automated or Assisted" | "User Control";
};

export type ProductArchitectureNode = {
  title: string;
  detail: string;
  state: ImplementationState;
  boundary: "System" | "User Control";
};

export type ProductArchitectureGroup = {
  label: string;
  nodes: readonly ProductArchitectureNode[];
};

export type ProductPrinciple = {
  title: string;
  description: string;
};

export type ProductPhase = {
  label: string;
  title: string;
  capabilities: readonly string[];
  state: ImplementationState;
};

export type LabCaseStudy = {
  labId: string;
  route: string;
  eyebrow: string;
  supportingStatement: string;
  corePrinciple: string;
  sections: readonly CaseStudySectionLink<LabCaseStudySectionKey>[];
  overview: {
    paragraphs: readonly string[];
    status: readonly StatusItem[];
  };
  problem: {
    paragraphs: readonly string[];
    dimensions: readonly string[];
  };
  principles: readonly ProductPrinciple[];
  architecture: readonly ProductArchitectureGroup[];
  architectureCaption: string;
  ingestionFeatures: readonly LabFeature[];
  supportedSources: readonly string[];
  inboxFeatures: readonly LabFeature[];
  inboxFlow: readonly LabFeature[];
  scoring: {
    introduction: string;
    features: readonly LabFeature[];
    flow: readonly string[];
    calibrationNote: string;
  };
  persistenceFeatures: readonly LabFeature[];
  lifecycle: readonly LabFeature[];
  duplicateFeatures: readonly LabFeature[];
  duplicateLimit: string;
  security: {
    introduction: string;
    features: readonly LabFeature[];
    boundary: string;
  };
  humanWorkflow: readonly LabWorkflowStep[];
  humanBoundary: {
    assisted: readonly LabFeature[];
    userControl: readonly LabFeature[];
  };
  productPhases: readonly ProductPhase[];
  decisions: readonly CaseStudyDecision[];
  tradeoffs: readonly CaseStudyTradeoff[];
  currentCapabilities: readonly StatusItem[];
  limitations: readonly string[];
  nextImprovements: readonly string[];
  technologies: readonly TechnologyGroup[];
};
