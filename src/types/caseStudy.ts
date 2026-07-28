export type ImplementationState =
  | "Implemented"
  | "In Progress"
  | "Planned";

export type CaseStudySectionKey =
  | "overview"
  | "problem"
  | "scope"
  | "architecture"
  | "data-flow"
  | "data-modeling"
  | "data-quality"
  | "decisions"
  | "tradeoffs"
  | "outputs"
  | "progress"
  | "next-improvements"
  | "technology";

export type CaseStudySectionLink<SectionId extends string = string> = {
  id: SectionId;
  number: string;
  label: string;
  shortLabel: string;
};

export type StatusItem = {
  label: string;
  description?: string;
  state: ImplementationState;
};

export type CaseStudyStep = StatusItem & {
  number: string;
  title: string;
};

export type CaseStudyDecision = {
  title: string;
  decision: string;
  rationale: string;
};

export type CaseStudyTradeoff = {
  title: string;
  description: string;
};

export type ArchitectureNode = {
  label: string;
  detail?: string;
  state: ImplementationState;
};

export type ArchitectureGroup = {
  label: string;
  nodes: readonly ArchitectureNode[];
};

export type ModelingLayer = StatusItem & {
  fields?: readonly string[];
};

export type TechnologyEntry = {
  name: string;
  state: ImplementationState;
};

export type TechnologyGroup = {
  label: string;
  technologies: readonly TechnologyEntry[];
};

export type ScopeMetric = {
  label: string;
  value: string;
  tone?: "default" | "positive" | "warning";
};

export type ProjectCaseStudy = {
  projectId: string;
  route: string;
  eyebrow: string;
  supportingStatement: string;
  architectureCaption: string;
  sections: readonly CaseStudySectionLink<CaseStudySectionKey>[];
  overview: {
    paragraphs: readonly string[];
    status: readonly StatusItem[];
  };
  problem: {
    paragraphs: readonly string[];
    dimensions: readonly string[];
  };
  scope: {
    introduction: string;
    metrics: readonly ScopeMetric[];
    constraints: readonly string[];
    failureNote: string;
  };
  architecture: readonly ArchitectureGroup[];
  flowSteps: readonly CaseStudyStep[];
  modeling: {
    introduction: string;
    layers: readonly ModelingLayer[];
    targetEntities: readonly string[];
    durationNotes: readonly string[];
  };
  quality: {
    introduction: string;
    principle: string;
    items: readonly StatusItem[];
  };
  decisions: readonly CaseStudyDecision[];
  tradeoffs: readonly CaseStudyTradeoff[];
  outputs: readonly StatusItem[];
  progress: readonly StatusItem[];
  nextImprovements: readonly string[];
  technologies: readonly TechnologyGroup[];
};
