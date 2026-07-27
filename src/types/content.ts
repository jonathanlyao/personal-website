export type NavItem = {
  label: string;
  href: string;
};

export type WritingPlatform = "DEV Community" | "LinkedIn";

export type WritingContentType = "Article" | "LinkedIn Note";

export type WritingItem = {
  id: string;
  slug?: string;
  title: string;
  summary: string;
  topics: readonly string[];
  platform: WritingPlatform;
  contentType: WritingContentType;
  publishedAt?: string;
  url: string;
  discussionUrl?: string;
  featured: boolean;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "document";
  external?: boolean;
};

export type FocusEntry = {
  number: string;
  title: string;
  status: string;
  description: string;
};

export type SystemStage = {
  title: string;
  details: readonly string[];
  icon:
    | "source"
    | "ingest"
    | "warehouse"
    | "model"
    | "quality"
    | "decision";
};

export type LabWorkflowStep = {
  title: string;
  details: readonly string[];
  icon: "import" | "inbox" | "score" | "track";
};

export type LabProject = {
  description: string;
  supportingStatement: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  tags: readonly string[];
  focusAreas: readonly string[];
  flow: readonly {
    title: string;
    detail?: string;
  }[];
  qualityLabel: string;
  supportLabels: readonly string[];
  figureLabel: string;
  figureTitle: string;
  layout: "standard" | "reverse" | "stacked";
  tone: "dark" | "paper" | "teal";
  githubUrl?: string;
  caseStudyUrl?: string;
};

export type AboutFact = {
  label: string;
  icon: "location" | "building" | "data" | "focus";
};
