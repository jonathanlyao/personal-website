import type {
  ContactMethod,
  FocusEntry,
  LabWorkflowStep,
  NavItem,
  SystemStage,
} from "@/types/content";

export const siteConfig = {
  brand: "RAW TO RELIABLE",
  attribution: "by Lee Yao",
  name: "Lee Yao",
  title: "Data Engineer & Analytics Systems Builder",
  headline:
    "I turn fragmented inputs into validated systems and decision-ready data.",
  supportingCopy:
    "Reliable pipelines, tested models, and analytics-ready outputs built with Python, SQL, Snowflake, dbt, and modern orchestration.",
  transformationLine:
    "Raw inputs → Validated systems → Trusted decisions",
  location: "Based in New York.",
  technologyLine: "Python / SQL / Snowflake / dbt / Airflow",
  description:
    "Raw to Reliable is Lee Yao’s data engineering portfolio: reliable pipelines, validated models, analytics systems, and practical automation built for trusted decisions.",
} as const;

export const navigation: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "Writing", href: "/writing" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export const profileLinks = {
  email: "LeeYao.us@gmail.com",
  emailHref: "mailto:LeeYao.us@gmail.com",
  linkedIn: "https://www.linkedin.com/in/leeyaodatafan/",
  github: "https://github.com/jonathanlyao",
} as const;

export const externalResources = {
  githubProfile: profileLinks.github,
  linkedIn: profileLinks.linkedIn,
  cmsRepository:
    "https://github.com/jonathanlyao/CMS-Medicare-Data-Pipeline-Kafka-Spark-Airflow",
  flightsRepository:
    "https://github.com/jonathanlyao/US-DOT-Flights-End-to-End-Data-Engineering-Pipeline",
  taxiRepository:
    "https://github.com/jonathanlyao/NYC-Yellow-Taxi-Q1-2019_Analytics/tree/main",
  olistRepository:
    "https://github.com/jonathanlyao/Olist-E-Commerce-Supply-Chain-AI-Reviews-Intelligence",
  microsoftCertification:
    "https://learn.microsoft.com/api/credentials/share/en-us/LeeYao-0069/B073B9E0F298FD6A?sharingId=AD929D52BA42BB13",
} as const;

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
      "Quarterly SEC filing data transformed into validated, modeled, and monitored financial datasets.",
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
      "Deepening Snowflake platform knowledge and preparing for the SnowPro Core certification.",
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

export const contactMethods: readonly ContactMethod[] = [
  {
    label: "Email",
    value: profileLinks.email,
    href: profileLinks.emailHref,
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/leeyaodatafan",
    href: profileLinks.linkedIn,
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/jonathanlyao",
    href: profileLinks.github,
    icon: "github",
    external: true,
  },
];
