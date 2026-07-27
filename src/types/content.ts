export type NavItem = {
  label: string;
  href: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "document";
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

export type Project = {
  number: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  tags: readonly string[];
  navigation: readonly string[];
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

export type AboutFact = {
  label: string;
  icon: "location" | "building" | "data" | "learn";
};
