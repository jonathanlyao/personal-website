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
  | "jobProfile"
  | "jobTracker"
  | "jobExtension"
  | "jobEvidence";

/**
 * Image-ready slots for confirmed project evidence. A slot without `src`
 * deliberately renders nothing through ProjectVisual.
 */
export const projectMedia = {
  aboutPortrait: {
    src: "/images/about/lee-yao-portrait.webp",
    alt: "Lee Yao, Data Engineer and Analytics Systems Builder",
    aspectRatio: "portrait",
    fit: "cover",
    tone: "light",
    variant: "contained",
    intrinsicWidth: 724,
    intrinsicHeight: 810,
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
    src: "/images/projects/job-search-os/overview.webp",
    alt: "Job Search OS interface showing the main workspace and job analysis controls.",
    caption:
      "Job Search OS workspace for importing, analyzing, and reviewing job opportunities.",
    eyebrow: "PRODUCT OVERVIEW",
    aspectRatio: "auto",
    fit: "contain",
    tone: "light",
    intrinsicWidth: 1920,
    intrinsicHeight: 869,
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
    src: "/images/projects/job-search-os/scoring.webp",
    alt: "Job Search OS scoring interface showing job-fit score, matched requirements, evidence, and skill gaps.",
    caption:
      "Role-fit analysis combining an overall score, evidence, skill alignment, and identified gaps.",
    eyebrow: "FIT ANALYSIS",
    aspectRatio: "auto",
    fit: "contain",
    tone: "light",
    intrinsicWidth: 1920,
    intrinsicHeight: 869,
  },
  jobProfile: {
    src: "/images/projects/job-search-os/profile.webp",
    alt: "Job Search OS profile page showing structured candidate experience, skills, and supporting evidence.",
    caption:
      "Structured candidate profile used as evidence for repeatable job-fit analysis.",
    eyebrow: "PROFILE EVIDENCE",
    aspectRatio: "auto",
    fit: "contain",
    tone: "light",
    intrinsicWidth: 1909,
    intrinsicHeight: 868,
  },
  jobTracker: {
    src: "/images/projects/job-search-os/application-tracker.webp",
    alt: "Job Search OS application tracker showing saved roles, companies, scores, status, and tracking fields.",
    caption:
      "Centralized tracker for saved roles, fit scores, application status, and follow-up workflow.",
    eyebrow: "APPLICATION TRACKER",
    aspectRatio: "auto",
    fit: "contain",
    tone: "light",
    intrinsicWidth: 1906,
    intrinsicHeight: 865,
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
