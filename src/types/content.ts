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

export type ProjectStatus = "In Development" | "Completed";

export type ProjectCategory =
  | "Batch Data Platform"
  | "Streaming-Oriented Data Pipeline"
  | "Analytics Engineering Platform"
  | "Cloud Data Warehouse Pipeline"
  | "Analytics & BI Pipeline";

export type ProjectHomepagePresentation = {
  number: string;
  title: string;
  category: string;
  date: string;
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
};

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  problemStatement: string;
  focusAreas: readonly string[];
  technologies: readonly string[];
  githubUrl?: string;
  caseStudyUrl?: string;
  datasetScope?: string;
  projectPeriod?: string;
  displayOrder: number;
  homepage?: ProjectHomepagePresentation;
};

export type Project = PortfolioProject & {
  featured: true;
  homepage: ProjectHomepagePresentation;
};
