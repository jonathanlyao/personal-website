import type { LabCaseStudy } from "@/types/lab";

const jobSearchOsSections: LabCaseStudy["sections"] = [
  {
    id: "overview",
    number: "01",
    label: "Executive Overview",
    shortLabel: "Overview",
  },
  { id: "problem", number: "02", label: "Problem", shortLabel: "Problem" },
  {
    id: "principles",
    number: "03",
    label: "Product Principles",
    shortLabel: "Principles",
  },
  {
    id: "system-architecture",
    number: "04",
    label: "System Architecture",
    shortLabel: "Architecture",
  },
  {
    id: "job-ingestion",
    number: "05",
    label: "Job Ingestion",
    shortLabel: "Ingestion",
  },
  {
    id: "import-inbox",
    number: "06",
    label: "Import Inbox",
    shortLabel: "Inbox",
  },
  {
    id: "fit-score-evidence",
    number: "07",
    label: "Fit Score & Evidence",
    shortLabel: "Fit Score",
  },
  {
    id: "tracker-persistence",
    number: "08",
    label: "Tracker & Persistence",
    shortLabel: "Tracker",
  },
  {
    id: "duplicate-detection",
    number: "09",
    label: "Duplicate Detection",
    shortLabel: "Duplicates",
  },
  {
    id: "security-local-first",
    number: "10",
    label: "Security & Local-First Design",
    shortLabel: "Security",
  },
  {
    id: "human-review",
    number: "11",
    label: "Human Review Workflow",
    shortLabel: "Human Review",
  },
  {
    id: "ui-evolution",
    number: "12",
    label: "UI Evolution",
    shortLabel: "UI Evolution",
  },
  {
    id: "decisions",
    number: "13",
    label: "Engineering Decisions",
    shortLabel: "Decisions",
  },
  {
    id: "tradeoffs",
    number: "14",
    label: "Trade-offs",
    shortLabel: "Trade-offs",
  },
  {
    id: "capabilities",
    number: "15",
    label: "Current Capabilities",
    shortLabel: "Capabilities",
  },
  {
    id: "limitations",
    number: "16",
    label: "Current Limitations",
    shortLabel: "Limitations",
  },
  {
    id: "next-improvements",
    number: "17",
    label: "Next Improvements",
    shortLabel: "Next",
  },
  {
    id: "technology",
    number: "18",
    label: "Technology Stack",
    shortLabel: "Technology",
  },
];

export const jobSearchOsCaseStudy: LabCaseStudy = {
  labId: "job-search-os",
  route: "/lab/job-search-os",
  eyebrow: "LAB CASE STUDY / SYSTEM 01",
  supportingStatement:
    "The system turns an inconsistent browser-based job search into a controlled workflow with structured ingestion, offline analysis, persistent state, duplicate protection, and reviewable outputs.",
  corePrinciple:
    "Automation prepares the decision. The user keeps control of the decision and submission.",
  sections: jobSearchOsSections,
  overview: {
    paragraphs: [
      "Job Search OS is a developing local-first workflow system designed to make job evaluation more structured, consistent, and reviewable. It connects browser-based job discovery with a local analysis environment where job descriptions can be imported, scored, compared, tracked, and preserved without delegating the final decision or application submission to automation.",
      "The system emerged from a practical problem: job postings arrive through inconsistent sources and formats, while fit decisions depend on more than keyword overlap. The workflow therefore combines structured extraction, profile evidence, configurable scoring, duplicate protection, persistence, local analytics, and human review.",
    ],
    status: [
      {
        label: "Current State",
        description:
          "Browser ingestion, canonical local analysis, persistence, tracking, duplicate protection, and a read-only dashboard are implemented.",
        state: "Implemented",
      },
      {
        label: "Active Refinement",
        description:
          "Score calibration, source-field cleanup, interface refinement, and ranked-shortlist workflow design.",
        state: "In Progress",
      },
      {
        label: "Target Assistance",
        description:
          "Application-material drafts, controlled browser prefilling, historical workflow analytics, and expanded exports.",
        state: "Planned",
      },
    ],
  },
  problem: {
    paragraphs: [
      "Traditional job-search workflows are fragmented across browser tabs, saved links, spreadsheets, ATS pages, résumé versions, and memory. The same role may be evaluated multiple times, copied inconsistently, or scored differently depending on how its description was imported.",
      "Keyword matching alone also fails to capture whether the candidate has evidence for the employer’s actual requirements. A useful system must preserve the source job description, normalize the input, compare it against a structured profile, explain the evidence behind the score, detect duplicates, and maintain application state.",
    ],
    dimensions: [
      "Inconsistent job-description formats",
      "Repeated manual copy and paste",
      "Duplicate postings",
      "Unexplained fit scores",
      "Scoring consistency across ingestion paths",
      "Lost drafts and analysis state",
      "Fragmented application tracking",
      "Weak separation between automation and final human decisions",
    ],
  },
  principles: [
    {
      title: "Local First",
      description:
        "Job descriptions, evaluations, drafts, and tracking state remain in a local workflow by default.",
    },
    {
      title: "Evidence Before Score",
      description:
        "A fit score is supported by explicit evidence, missing requirements, and reviewable reasoning rather than keyword overlap alone.",
    },
    {
      title: "One Source, One Record",
      description:
        "Normalization and duplicate detection work together to prevent the same job from producing multiple inconsistent records.",
    },
    {
      title: "Human Review at Every Decision Boundary",
      description:
        "Automation may extract, organize, analyze, and draft, but the user reviews the result and controls final submission.",
    },
    {
      title: "Recoverable State",
      description:
        "Drafts and tracked jobs survive interruptions and remain reloadable across local sessions.",
    },
    {
      title: "Explainable Workflow",
      description:
        "The interface shows how a job entered the system, why it received its score, and what evidence supports the result.",
    },
    {
      title: "Security Proportional to Local Integration",
      description:
        "A local browser-to-application bridge still requires authentication, rate limiting, controlled origins, and careful input handling.",
    },
  ],
  architecture: [
    {
      label: "Source Capture",
      nodes: [
        {
          title: "Job Sources",
          detail: "LinkedIn / Greenhouse / Lever / Ashby",
          state: "Implemented",
          boundary: "System",
        },
        {
          title: "Browser Extraction",
          detail: "JSON-LD / DOM / selected text",
          state: "Implemented",
          boundary: "System",
        },
        {
          title: "Chrome Extension",
          detail: "Manifest V3 explicit capture",
          state: "Implemented",
          boundary: "System",
        },
      ],
    },
    {
      label: "Local Ingestion",
      nodes: [
        {
          title: "Local Receiver",
          detail: "127.0.0.1 / FastAPI",
          state: "Implemented",
          boundary: "System",
        },
        {
          title: "Trust Controls",
          detail: "Token / origin / rate / payload",
          state: "Implemented",
          boundary: "System",
        },
        {
          title: "Import Inbox",
          detail: "Review / retry / archive / delete",
          state: "Implemented",
          boundary: "System",
        },
      ],
    },
    {
      label: "Analysis & State",
      nodes: [
        {
          title: "Canonical Input",
          detail: "Normalized JD + scoring fields",
          state: "Implemented",
          boundary: "System",
        },
        {
          title: "Fit & Evidence",
          detail: "Rules / profile / gaps / warnings",
          state: "Implemented",
          boundary: "System",
        },
        {
          title: "SQLite Workflow State",
          detail: "Drafts / Tracker / snapshots",
          state: "Implemented",
          boundary: "System",
        },
        {
          title: "Local Dashboard",
          detail: "Read-only current-state analytics",
          state: "Implemented",
          boundary: "System",
        },
      ],
    },
    {
      label: "Decision Boundary",
      nodes: [
        {
          title: "Prioritize & Review",
          detail: "Evidence-led user decision",
          state: "Implemented",
          boundary: "User Control",
        },
        {
          title: "Application Drafts",
          detail: "Résumé and answer assistance",
          state: "Planned",
          boundary: "User Control",
        },
        {
          title: "Controlled Prefill",
          detail: "Verify every browser field",
          state: "Planned",
          boundary: "User Control",
        },
        {
          title: "Submit Manually",
          detail: "Final action remains with user",
          state: "Implemented",
          boundary: "User Control",
        },
      ],
    },
  ],
  architectureCaption:
    "A local-first workflow connecting browser-based job discovery to reviewable analysis, persistent tracking, and user-controlled application decisions.",
  ingestionFeatures: [
    {
      title: "Browser Extension Import",
      description:
        "The Manifest V3 extension captures the currently visible posting, lets the user review extracted fields, and sends a bounded payload only to the local receiver.",
      state: "Implemented",
      metadata: ["Chrome / Edge", "Explicit capture"],
    },
    {
      title: "URL Import",
      description:
        "The application imports supported public job URLs through guarded HTTP handling and the same canonical analysis contract used by pasted input.",
      state: "Implemented",
      metadata: ["Greenhouse", "Lever", "Ashby", "JSON-LD"],
    },
    {
      title: "Pasted Job Description",
      description:
        "A job description can be pasted directly when automated extraction is unavailable, incomplete, or not appropriate.",
      state: "Implemented",
      metadata: ["Offline analysis", "Draft-safe"],
    },
    {
      title: "Selected Text Extraction",
      description:
        "Explicitly selected page text replaces prior capture content and records its provenance when structured extraction is unreliable.",
      state: "Implemented",
      metadata: ["Fallback", "Provenance"],
    },
    {
      title: "Source Metadata Cleanup",
      description:
        "Canonical job-description normalization is implemented; source-specific company, title, location, URL, and questionnaire cleanup continues.",
      state: "In Progress",
    },
  ],
  supportedSources: [
    "LinkedIn visible job details",
    "Greenhouse",
    "Lever",
    "Ashby",
    "JSON-LD JobPosting",
    "Conservative visible DOM",
    "Explicit selected text",
  ],
  inboxFeatures: [
    {
      title: "Source & Timestamp",
      description:
        "Each item preserves capture platform, source URL, import time, provenance, confidence, and extraction warnings.",
      state: "Implemented",
    },
    {
      title: "Offline Analysis Preview",
      description:
        "Inbox items can be analyzed locally and display fit results without starting optional company research.",
      state: "Implemented",
    },
    {
      title: "Duplicate Status",
      description:
        "Existing Tracker matches and repeated captures remain visible before a permanent save.",
      state: "Implemented",
    },
    {
      title: "Retry, Archive & Delete",
      description:
        "Failed items can be retried; reviewed items can be archived; Inbox deletion does not remove an already-saved Tracker record.",
      state: "Implemented",
    },
    {
      title: "Idempotent Save",
      description:
        "Stable input fingerprints and save state prevent repeated processing from producing multiple records.",
      state: "Implemented",
    },
  ],
  inboxFlow: [
    {
      title: "Received",
      description: "The local receiver accepts and stores a validated payload.",
      state: "Implemented",
    },
    {
      title: "Review",
      description:
        "Company, title, location, URL, source, description, provenance, and warnings remain inspectable.",
      state: "Implemented",
    },
    {
      title: "Validate",
      description:
        "Confidence, analysis result, and duplicate state inform the next action.",
      state: "Implemented",
    },
    {
      title: "Decide",
      description: "The user retries, archives, deletes, or approves a save.",
      state: "Implemented",
    },
    {
      title: "Persist",
      description:
        "An approved item becomes a durable Tracker record at most once.",
      state: "Implemented",
    },
  ],
  scoring: {
    introduction:
      "The Fit Score is a configurable prioritization aid. It summarizes how strongly a job description aligns with the candidate profile, required skills, role direction, constraints, and available evidence. It is not an employment prediction or an objective measure of candidate quality.",
    features: [
      {
        title: "Deterministic Local Fit",
        description:
          "Configurable YAML rules evaluate role, skill, seniority, work arrangement, responsibilities, and hard-stop conditions.",
        state: "Implemented",
      },
      {
        title: "Evidence-Based Fit",
        description:
          "Normalized requirements are matched to a validated profile and explicit evidence categories, with partial and missing evidence kept distinct.",
        state: "Implemented",
      },
      {
        title: "Decision Explanation",
        description:
          "Overall fit, recommendation, strengths, gaps, evidence sources, limitations, and warnings remain reviewable in the analyzer.",
        state: "Implemented",
      },
      {
        title: "Canonical Ingestion Contract",
        description:
          "Equivalent URL, browser, and pasted inputs share normalized job-description handling and provenance-neutral deterministic scoring.",
        state: "Implemented",
      },
      {
        title: "Bilingual Presentation",
        description:
          "English and Simplified Chinese catalogs cover application navigation, analysis, Inbox, dashboard, and settings workflows.",
        state: "Implemented",
      },
      {
        title: "Optional Company-Aware Research",
        description:
          "An explicit consent-gated OpenAI workflow can add sourced company context without replacing offline scores or running by default.",
        state: "Implemented",
      },
      {
        title: "Calibration & Profile Tuning",
        description:
          "Thresholds, role-family treatment, evidence explanations, and prioritization behavior continue to be refined against deterministic regression cases.",
        state: "In Progress",
      },
    ],
    flow: [
      "Job Description",
      "Canonical Requirements",
      "Candidate Profile",
      "Evidence Matching",
      "Configurable Rules",
      "Fit + Explanation + Warnings",
    ],
    calibrationNote:
      "Repository tests now confirm equivalent URL, browser, and pasted job inputs produce the same canonical deterministic analysis. Remaining calibration work focuses on source-field quality, scoring policy, profile evidence, and role-specific interpretation rather than a separate scoring path.",
  },
  persistenceFeatures: [
    {
      title: "SQLite Tracker",
      description:
        "Saved jobs, deterministic analysis snapshots, status, notes, source metadata, recommendations, and score fields persist locally.",
      state: "Implemented",
    },
    {
      title: "Draft Recovery",
      description:
        "The active analyzer draft survives reruns, language changes, and ordinary interruptions without becoming a Tracker record.",
      state: "Implemented",
    },
    {
      title: "Load, Update & Copy",
      description:
        "Saved jobs can be reopened, intentionally re-analyzed, updated, or copied into a new draft.",
      state: "Implemented",
    },
    {
      title: "Archive, Trash & Export",
      description:
        "Archived and soft-deleted jobs remain distinct, while Markdown, JSON, and filtered dashboard CSV outputs support local review.",
      state: "Implemented",
    },
    {
      title: "Local Analytics Dashboard",
      description:
        "A read-only dashboard summarizes persisted current-state workflow, fit, skills, sources, recommendations, and attention signals without triggering analysis or external calls.",
      state: "Implemented",
    },
    {
      title: "Historical Stage Events",
      description:
        "Reliable status-entry history is not yet stored, so the dashboard does not fabricate historical funnel dates.",
      state: "Planned",
    },
  ],
  lifecycle: [
    {
      title: "Draft",
      description: "Form or imported content under review in the analyzer.",
      state: "Implemented",
    },
    {
      title: "Inbox",
      description: "Browser payload awaiting analysis or a user decision.",
      state: "Implemented",
    },
    {
      title: "Tracked",
      description: "Approved persistent job and analysis record.",
      state: "Implemented",
    },
    {
      title: "Archived",
      description: "Preserved but removed from the default active view.",
      state: "Implemented",
    },
    {
      title: "Deleted",
      description:
        "Removed from the Inbox or moved to Tracker Trash according to record type.",
      state: "Implemented",
    },
  ],
  duplicateFeatures: [
    {
      title: "Canonical URL",
      description:
        "Normalized source URLs and existing import provenance identify repeated links.",
      state: "Implemented",
    },
    {
      title: "ATS & Source Identifier",
      description:
        "External job IDs are combined with the source platform where available.",
      state: "Implemented",
    },
    {
      title: "Content & Metadata",
      description:
        "Normalized job-description content, company, and title provide another duplicate signal.",
      state: "Implemented",
    },
    {
      title: "Repeated Inbox Payload",
      description:
        "A stable capture payload hash reuses equivalent recent Inbox submissions.",
      state: "Implemented",
    },
    {
      title: "Idempotent Analysis & Save",
      description:
        "Analysis fingerprints and saved-job state keep repeated actions from creating additional records.",
      state: "Implemented",
    },
    {
      title: "Cross-Source Semantic Matching",
      description:
        "Broader semantic detection for materially similar reposts remains a future enhancement.",
      state: "Planned",
    },
  ],
  duplicateLimit:
    "Duplicate protection is intentionally multi-signal rather than perfect. Reposted roles, materially changed descriptions, and inconsistent ATS identifiers can still require human review.",
  security: {
    introduction:
      "The browser extension communicates with a receiver bound to the user’s local machine. Although the integration is local, it accepts structured input from a browser context and therefore uses explicit trust controls.",
    features: [
      {
        title: "Pairing Token",
        description:
          "The extension and local receiver share a locally stored, rotatable token. Unauthenticated requests are rejected.",
        state: "Implemented",
      },
      {
        title: "Constant-Time Comparison",
        description:
          "The receiver verifies the supplied token with a constant-time comparison to avoid simple comparison timing differences.",
        state: "Implemented",
      },
      {
        title: "Localhost Binding",
        description:
          "Configuration constrains the receiver to 127.0.0.1 rather than exposing it on all network interfaces.",
        state: "Implemented",
      },
      {
        title: "Origin & CORS Controls",
        description:
          "Only recognized extension origins are allowed; remote web origins and unrestricted cross-origin behavior are rejected.",
        state: "Implemented",
      },
      {
        title: "Rate & Payload Limits",
        description:
          "Sliding-window request limits, JSON-only handling, schema validation, and bounded payload size constrain browser submissions.",
        state: "Implemented",
      },
      {
        title: "Minimal Extension Permissions",
        description:
          "The extension requests active-tab, scripting, local storage, and localhost access without cookies, history, or broad remote hosts.",
        state: "Implemented",
      },
      {
        title: "Local-First Storage",
        description:
          "Descriptions, profile evidence, scores, drafts, and workflow state remain local by default; optional research requires explicit configuration and consent.",
        state: "Implemented",
      },
    ],
    boundary:
      "Local first reduces exposure, but it does not remove the need for input validation, authentication, backups, dependency maintenance, and safe secret handling.",
  },
  humanWorkflow: [
    {
      number: "01",
      title: "Capture",
      description: "Import a visible role, submit a supported URL, or paste the job description.",
      state: "Implemented",
      boundary: "Automated or Assisted",
    },
    {
      number: "02",
      title: "Review Input",
      description:
        "Confirm company, title, location, URL, source, description, confidence, and warnings.",
      state: "Implemented",
      boundary: "User Control",
    },
    {
      number: "03",
      title: "Review Analysis",
      description:
        "Inspect scores, evidence, gaps, requirements, limitations, and hard-stop warnings.",
      state: "Implemented",
      boundary: "User Control",
    },
    {
      number: "04",
      title: "Prioritize",
      description:
        "Use the decision workspace and local dashboard to decide whether the role deserves more effort.",
      state: "Implemented",
      boundary: "User Control",
    },
    {
      number: "05",
      title: "Prepare",
      description:
        "Draft a selected role’s résumé emphasis and application answers without inventing evidence.",
      state: "Planned",
      boundary: "Automated or Assisted",
    },
    {
      number: "06",
      title: "Verify",
      description:
        "Review every generated or eventually prefilled field before it enters an application.",
      state: "Planned",
      boundary: "User Control",
    },
    {
      number: "07",
      title: "Submit Manually",
      description:
        "The user performs the final submission and remains responsible for attestations and application content.",
      state: "Implemented",
      boundary: "User Control",
    },
  ],
  humanBoundary: {
    assisted: [
      {
        title: "Capture",
        description: "Extension, URL, or pasted input",
        state: "Implemented",
      },
      {
        title: "Normalize",
        description: "Canonical analysis contract",
        state: "Implemented",
      },
      {
        title: "Analyze",
        description: "Fit, evidence, gaps, warnings",
        state: "Implemented",
      },
      {
        title: "Draft",
        description: "Application-material assistance",
        state: "Planned",
      },
    ],
    userControl: [
      {
        title: "Review",
        description: "Verify input and analysis",
        state: "Implemented",
      },
      {
        title: "Decide",
        description: "Prioritize the role",
        state: "Implemented",
      },
      {
        title: "Verify",
        description: "Approve every future draft or field",
        state: "Planned",
      },
      {
        title: "Submit",
        description: "Manual final action",
        state: "Implemented",
      },
    ],
  },
  productPhases: [
    {
      label: "Product Stage 01",
      title: "Deterministic Local Foundation",
      capabilities: [
        "Streamlit analysis form",
        "YAML scoring",
        "SQLite persistence",
        "Duplicate warnings",
        "Local exports",
      ],
      state: "Implemented",
    },
    {
      label: "Product Stage 02",
      title: "Profile & Evidence",
      capabilities: [
        "Validated candidate profile",
        "Evidence categories",
        "Requirement matrix",
        "Combined application fit",
      ],
      state: "Implemented",
    },
    {
      label: "Product Stage 03",
      title: "Optional Company Context",
      capabilities: [
        "Consent-gated provider",
        "Sourced research",
        "Company-aware analysis",
        "Cached local snapshots",
      ],
      state: "Implemented",
    },
    {
      label: "Product Stage 04A",
      title: "Recoverable Input Workflow",
      capabilities: [
        "Persistent drafts",
        "Tracker loading",
        "Job copying",
        "URL import",
        "Duplicate-safe save",
      ],
      state: "Implemented",
    },
    {
      label: "Product Stage 04B",
      title: "Browser Capture & Import Inbox",
      capabilities: [
        "Manifest V3 extension",
        "Local receiver",
        "Import Inbox",
        "Retry / archive / delete",
        "Extraction warnings",
      ],
      state: "Implemented",
    },
    {
      label: "Product Stage 05A",
      title: "Local Workflow Analytics",
      capabilities: [
        "Read-only dashboard",
        "Shared filters",
        "Current pipeline",
        "Fit and skill analysis",
        "Attention signals",
      ],
      state: "Implemented",
    },
    {
      label: "Product Stage 05A.1",
      title: "Decision-First Analyzer",
      capabilities: [
        "Canonical input consistency",
        "Decision summary",
        "Evidence-led tabs",
        "Draft-safe input modes",
        "Deterministic résumé emphasis",
      ],
      state: "Implemented",
    },
    {
      label: "Current Refinement",
      title: "Calibration & Prioritization",
      capabilities: [
        "Source metadata cleanup",
        "Score calibration",
        "Ranked shortlist workflow",
        "Interface simplification",
      ],
      state: "In Progress",
    },
  ],
  decisions: [
    {
      title: "Local-First Architecture",
      decision: "Keep the core workflow and persistence on the user’s machine.",
      rationale:
        "Job descriptions, résumé evidence, application drafts, and tracking data are sensitive, while the tool currently serves a single-user workflow.",
    },
    {
      title: "Inbox Before Persistence",
      decision:
        "Place browser imports into a review queue before treating them as permanent Tracker records.",
      rationale:
        "Extraction errors, duplicates, warnings, and incomplete data should remain visible before persistence.",
    },
    {
      title: "Multiple Extraction Strategies",
      decision:
        "Support structured data, source-specific DOM extraction, conservative generic content, and selected-text fallback.",
      rationale:
        "Job pages differ across ATS platforms and may change their markup.",
    },
    {
      title: "Evidence-Based Scoring",
      decision: "Pair scores with supporting evidence, gaps, and warnings.",
      rationale:
        "A numerical score without explanation is difficult to trust, calibrate, or correct.",
    },
    {
      title: "SQLite Persistence",
      decision: "Use a local relational store for workflow and analysis state.",
      rationale:
        "SQLite provides durable structured persistence without requiring a remote service.",
    },
    {
      title: "Explicit Duplicate Signals",
      decision:
        "Combine canonical URLs, source identifiers, content, metadata, payload hashes, and existing records.",
      rationale:
        "No single identifier is reliable across all sources and ingestion paths.",
    },
    {
      title: "Manual Submission Boundary",
      decision: "Stop automation before final application submission.",
      rationale:
        "Application content and legal attestations require direct user review and control.",
    },
    {
      title: "Exceptional Company Research",
      decision:
        "Keep external company research consent-gated and separate from default offline analysis.",
      rationale:
        "Most roles can be prioritized locally, while deeper research introduces cost, latency, external transmission, and inconsistent availability.",
    },
  ],
  tradeoffs: [
    {
      title: "Local Control versus Cross-Device Access",
      description:
        "Local persistence reduces infrastructure complexity and keeps sensitive data close to the user, but it does not provide automatic multi-device synchronization.",
    },
    {
      title: "Flexible Extraction versus Maintenance Cost",
      description:
        "Supporting several ATS and fallback methods improves coverage, but page-structure changes require ongoing selector and parser maintenance.",
    },
    {
      title: "Explainability versus Scoring Simplicity",
      description:
        "Evidence-based scoring produces more reviewable results, but it requires a richer profile model and more calibration than keyword counting.",
    },
    {
      title: "Strict Duplicate Detection versus False Positives",
      description:
        "Aggressive duplicate checks reduce repeated records but may require human review when a company reposts or materially modifies a role.",
    },
    {
      title: "Streamlit Speed versus Interface Control",
      description:
        "Streamlit enabled rapid workflow development and testing, while complex product interactions require increasingly deliberate state and interface design.",
    },
    {
      title: "Broad Automation versus User Control",
      description:
        "More assistance can reduce repetitive work, but application content and final submission remain deliberate human decision boundaries.",
    },
    {
      title: "Company Research Quality versus Cost",
      description:
        "External research can improve context but introduces API cost, latency, and inconsistent availability, so it remains an explicit exception workflow.",
    },
  ],
  currentCapabilities: [
    {
      label: "Capture",
      description:
        "Manifest V3 browser extension, supported public URL import, pasted descriptions, JSON-LD, source-specific DOM extraction, and selected-text fallback.",
      state: "Implemented",
    },
    {
      label: "Review",
      description:
        "Import Inbox with provenance, confidence, warnings, duplicate state, retry, archive, delete, offline analysis, and controlled save.",
      state: "Implemented",
    },
    {
      label: "Analyze",
      description:
        "Canonical deterministic input, configurable local score, profile-aware evidence score, gaps, warnings, bilingual presentation, and decision workspace.",
      state: "Implemented",
    },
    {
      label: "Persist",
      description:
        "SQLite Tracker, draft recovery, saved-job loading, updates, copying, archiving, Trash, analysis history, and local exports.",
      state: "Implemented",
    },
    {
      label: "Understand",
      description:
        "Read-only dashboard with filters, current pipeline, fit distributions, skill demand and gaps, sources, attention signals, and safe CSV export.",
      state: "Implemented",
    },
    {
      label: "Protect",
      description:
        "Pairing token, constant-time verification, localhost binding, extension-origin controls, rate limiting, payload validation, and idempotent processing.",
      state: "Implemented",
    },
    {
      label: "Refine",
      description:
        "Source-field cleanup, role-specific score calibration, higher-quality explanations, and ranked-shortlist workflow.",
      state: "In Progress",
    },
    {
      label: "Assist",
      description:
        "Résumé and answer drafts, controlled browser prefilling, historical stage analytics, and additional backup/export controls.",
      state: "Planned",
    },
  ],
  limitations: [
    "Supported ATS extraction depends on visible page structure and requires maintenance when source markup changes.",
    "Canonical job-description consistency is implemented, while company, title, location, URL, and questionnaire fields can still contain source-specific noise.",
    "Fit Score remains a configurable prioritization aid that requires human interpretation, evidence review, and continuing calibration.",
    "The product is designed for a local single-user workflow without cloud synchronization or multi-user collaboration.",
    "Batch capture and a complete ranked-shortlist workflow are not yet integrated into one review experience.",
    "Résumé drafting, application-answer drafting, and controlled browser-field prefilling are not complete product workflows.",
    "The current dashboard represents current state; the database does not yet provide trustworthy status-entry history for a historical funnel.",
    "Optional company research depends on explicit consent, an external API, source availability, and local configuration.",
    "Final application submission remains manual as a deliberate safety and accountability boundary.",
  ],
  nextImprovements: [
    "Continue normalizing company names, URLs, titles, locations, and source metadata.",
    "Calibrate fit thresholds and evidence explanations across role families.",
    "Complete batch import and a reviewable ranked-shortlist workflow.",
    "Simplify the scoring interface around evidence, gaps, warnings, and decision state.",
    "Improve company-aware role analysis while keeping it an explicit exception workflow.",
    "Add résumé-customization drafts for selected high-fit roles using verified evidence only.",
    "Add application-answer drafting with explicit user review.",
    "Add controlled browser-field prefilling without automatic submission.",
    "Expand ATS extraction regression fixtures as source markup changes.",
    "Add durable status-event history for accurate application-stage analytics.",
    "Improve backup, restore, and export controls for local workflow data.",
  ],
  technologies: [
    {
      label: "Application",
      technologies: [
        { name: "Python", state: "Implemented" },
        { name: "Streamlit", state: "Implemented" },
      ],
    },
    {
      label: "Persistence",
      technologies: [
        { name: "SQLite", state: "Implemented" },
        { name: "SQLAlchemy", state: "Implemented" },
      ],
    },
    {
      label: "Scoring & Configuration",
      technologies: [
        { name: "Python", state: "Implemented" },
        { name: "PyYAML", state: "Implemented" },
        { name: "Pydantic", state: "Implemented" },
      ],
    },
    {
      label: "Browser Integration",
      technologies: [
        { name: "Chrome Extension", state: "Implemented" },
        { name: "Manifest V3", state: "Implemented" },
        { name: "JavaScript", state: "Implemented" },
        { name: "HTML / CSS", state: "Implemented" },
      ],
    },
    {
      label: "Local Communication",
      technologies: [
        { name: "FastAPI", state: "Implemented" },
        { name: "Uvicorn", state: "Implemented" },
        { name: "Pairing Token", state: "Implemented" },
        { name: "CORS Controls", state: "Implemented" },
        { name: "Rate Limiting", state: "Implemented" },
      ],
    },
    {
      label: "Extraction",
      technologies: [
        { name: "JSON-LD", state: "Implemented" },
        { name: "DOM Parsing", state: "Implemented" },
        { name: "Selected Text", state: "Implemented" },
        { name: "HTTPX", state: "Implemented" },
      ],
    },
    {
      label: "Testing",
      technologies: [
        { name: "pytest", state: "Implemented" },
        { name: "Streamlit AppTest", state: "Implemented" },
        { name: "Node test runner", state: "Implemented" },
      ],
    },
    {
      label: "Optional Research",
      technologies: [
        { name: "OpenAI API — Exception workflow", state: "Implemented" },
      ],
    },
  ],
};

export const labCaseStudies: readonly LabCaseStudy[] = [
  jobSearchOsCaseStudy,
];
