import type {
  AboutFact,
  ContactMethod,
  FocusEntry,
  LabWorkflowStep,
  NavItem,
  SystemStage,
} from "@/types/content";

export const siteConfig = {
  name: "Jonathan Lee",
  title: "Data Engineer & Analytics Systems Builder",
  headline:
    "I build reliable data systems that turn fragmented information into usable decisions.",
  supportingCopy:
    "Data engineering, analytics architecture, and practical automation using Python, SQL, Snowflake, dbt, and modern orchestration tools.",
  location: "Based in New York.",
  technologyLine: "Python / SQL / Snowflake / dbt / Airflow",
  description:
    "New York-based data engineer building reliable data platforms, analytics systems, and practical automation with Python, SQL, Snowflake, dbt, and Airflow.",
} as const;

export const navigation: readonly NavItem[] = [
  { label: "Work", href: "#selected-work" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export const systemStages: readonly SystemStage[] = [
  {
    title: "Sources",
    details: ["APIs", "Files", "Databases"],
    icon: "source",
  },
  {
    title: "Ingestion",
    details: ["Python", "Spark", "Kafka", "S3"],
    icon: "ingest",
  },
  {
    title: "Warehouse",
    details: ["Snowflake", "Data Lake"],
    icon: "warehouse",
  },
  {
    title: "Modeling",
    details: ["dbt", "Transformations"],
    icon: "model",
  },
  {
    title: "Quality",
    details: ["Great Expectations", "dbt Tests"],
    icon: "quality",
  },
  {
    title: "Decisions",
    details: ["Dashboards", "Reports"],
    icon: "decision",
  },
];

export const currentFocus: readonly FocusEntry[] = [
  {
    number: "01",
    title: "SEC Financial Data Platform",
    status: "In Development",
    description:
      "Quarterly SEC filings transformed into validated, modeled, and monitored financial datasets.",
  },
  {
    number: "02",
    title: "Job Search OS",
    status: "Active Build",
    description:
      "A local-first workflow for job ingestion, evidence-based scoring, duplicate detection, and application tracking.",
  },
  {
    number: "03",
    title: "Snowflake Engineering Practice",
    status: "Current Study",
    description:
      "Deepening platform knowledge and preparing for the SnowPro Core certification.",
  },
];

export const labWorkflow: readonly LabWorkflowStep[] = [
  {
    title: "Import Jobs",
    details: ["URL", "Paste", "Browser extension"],
    icon: "import",
  },
  {
    title: "Import Inbox",
    details: ["Review", "Deduplicate"],
    icon: "inbox",
  },
  {
    title: "Analyze & Score",
    details: ["Evidence-based fit scoring"],
    icon: "score",
  },
  {
    title: "Track Applications",
    details: ["Status", "Notes", "Follow-ups"],
    icon: "track",
  },
];

export const aboutFacts: readonly AboutFact[] = [
  { label: "Based in New York", icon: "location" },
  { label: "Co-founder, Solvia One", icon: "building" },
  { label: "Data Engineering & Analytics Systems", icon: "data" },
  { label: "Continuous Builder & Learner", icon: "learn" },
];

// Replace placeholder values here once Jonathan's approved public contact details
// and resume asset are available. Components do not duplicate these values.
export const contactMethods: readonly ContactMethod[] = [
  {
    label: "Email",
    value: "Address available soon",
    href: null,
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "Profile link pending",
    href: null,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "Profile link pending",
    href: null,
    icon: "github",
  },
  {
    label: "Resume",
    value: "PDF forthcoming",
    href: null,
    icon: "document",
  },
];
