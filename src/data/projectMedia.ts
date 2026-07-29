import type { ProjectMedia } from "@/types/content";

type MediaSlot =
  | "aboutPortrait"
  | "secOverview"
  | "secArchitecture"
  | "secValidation"
  | "secDataModel"
  | "secDashboard"
  | "secEvidence"
  | "jobOverview"
  | "jobArchitecture"
  | "jobImportInbox"
  | "jobScoring"
  | "jobTracker"
  | "jobExtension"
  | "jobEvidence";

/**
 * Image-ready slots for confirmed project evidence. A slot without `src`
 * deliberately renders nothing through ProjectVisual.
 */
export const projectMedia = {
  aboutPortrait: {
    alt: "Portrait of Lee Yao",
    eyebrow: "LEE YAO / DATA ENGINEER",
    aspectRatio: "portrait",
    fit: "cover",
    tone: "light",
    variant: "contained",
  },
  secOverview: {
    alt: "SEC Financial Data Platform project overview",
    eyebrow: "PROJECT OVERVIEW",
    aspectRatio: "16:10",
    fit: "contain",
    tone: "light",
  },
  secArchitecture: {
    alt: "SEC Financial Data Platform architecture",
    eyebrow: "SYSTEM ARCHITECTURE",
    aspectRatio: "16:9",
    fit: "contain",
    tone: "dark",
  },
  secValidation: {
    alt: "SEC pipeline validation results and data-quality evidence",
    eyebrow: "VALIDATION EVIDENCE",
    aspectRatio: "16:10",
    fit: "contain",
    tone: "light",
  },
  secDataModel: {
    alt: "SEC Financial Data Platform analytical data model",
    eyebrow: "DATA MODEL",
    aspectRatio: "16:9",
    fit: "contain",
    tone: "light",
  },
  secDashboard: {
    alt: "SEC Financial Data Platform analytics dashboard",
    eyebrow: "ANALYTICS OUTPUT",
    aspectRatio: "16:9",
    fit: "cover",
    tone: "light",
  },
  secEvidence: {
    alt: "SEC Financial Data Platform implementation evidence",
    eyebrow: "IMPLEMENTATION EVIDENCE",
    aspectRatio: "16:10",
    fit: "contain",
    tone: "dark",
  },
  jobOverview: {
    alt: "Job Search OS product overview",
    eyebrow: "PRODUCT OVERVIEW",
    aspectRatio: "16:10",
    fit: "cover",
    tone: "light",
  },
  jobArchitecture: {
    alt: "Job Search OS product architecture",
    eyebrow: "PRODUCT ARCHITECTURE",
    aspectRatio: "16:9",
    fit: "contain",
    tone: "dark",
  },
  jobImportInbox: {
    alt: "Job Search OS Import Inbox workflow",
    eyebrow: "IMPORT INBOX",
    aspectRatio: "16:10",
    fit: "cover",
    tone: "light",
  },
  jobScoring: {
    alt: "Job Search OS evidence-based fit scoring interface",
    eyebrow: "FIT SCORE / EVIDENCE",
    aspectRatio: "16:10",
    fit: "cover",
    tone: "light",
  },
  jobTracker: {
    alt: "Job Search OS application tracker",
    eyebrow: "TRACKER / PERSISTENCE",
    aspectRatio: "16:10",
    fit: "cover",
    tone: "light",
  },
  jobExtension: {
    alt: "Job Search OS browser extension capture flow",
    eyebrow: "BROWSER INGESTION",
    aspectRatio: "4:3",
    fit: "contain",
    tone: "light",
    variant: "contained",
  },
  jobEvidence: {
    alt: "Job Search OS implementation evidence",
    eyebrow: "IMPLEMENTATION EVIDENCE",
    aspectRatio: "16:10",
    fit: "contain",
    tone: "dark",
  },
} satisfies Record<MediaSlot, ProjectMedia>;
