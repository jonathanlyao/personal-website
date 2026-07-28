import type { LabItem } from "@/types/lab";

export const labItems: readonly LabItem[] = [
  {
    id: "job-search-os",
    slug: "job-search-os",
    title: "Job Search OS",
    category: "Local-First Workflow System",
    status: "Active Development",
    summary:
      "A local-first job research and application workflow for importing roles, evaluating fit, tracking evidence, detecting duplicates, and preserving human review at every step.",
    supportingStatement:
      "The system combines a browser extension, local ingestion service, offline scoring, SQLite persistence, application tracking, and bilingual workflow design into one review-oriented operating system for job search.",
    capabilities: [
      "Chrome Extension",
      "URL and JD Import",
      "Import Inbox",
      "Evidence-Based Fit Score",
      "SQLite Tracker",
      "Duplicate Detection",
      "Draft Recovery",
      "Bilingual Interface",
      "Local Analytics",
      "Human Review",
      "Security Controls",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "SQLite",
      "SQLAlchemy",
      "YAML",
      "Chrome Extension",
      "Manifest V3",
      "JavaScript",
      "FastAPI",
      "Pydantic",
      "pytest",
    ],
    caseStudyUrl: "/lab/job-search-os",
    displayOrder: 1,
    homepage: {
      description:
        "A local-first job-search workflow for importing job descriptions, reviewing duplicates, scoring role fit against stored evidence, and tracking applications.",
      supportingStatement:
        "Human review remains part of every decision. The system does not automatically submit job applications.",
    },
  },
];

export const jobSearchOsLab = labItems[0];
