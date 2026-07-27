import type { ProjectCaseStudy } from "@/types/caseStudy";

const secSections: ProjectCaseStudy["sections"] = [
  {
    id: "overview",
    number: "01",
    label: "Executive Overview",
    shortLabel: "Overview",
  },
  { id: "problem", number: "02", label: "Problem", shortLabel: "Problem" },
  {
    id: "scope",
    number: "03",
    label: "Scope & Constraints",
    shortLabel: "Scope",
  },
  {
    id: "architecture",
    number: "04",
    label: "Architecture",
    shortLabel: "Architecture",
  },
  {
    id: "data-flow",
    number: "05",
    label: "Data Flow",
    shortLabel: "Data Flow",
  },
  {
    id: "data-modeling",
    number: "06",
    label: "Data Modeling",
    shortLabel: "Modeling",
  },
  {
    id: "data-quality",
    number: "07",
    label: "Data Quality",
    shortLabel: "Data Quality",
  },
  {
    id: "decisions",
    number: "08",
    label: "Engineering Decisions",
    shortLabel: "Decisions",
  },
  {
    id: "tradeoffs",
    number: "09",
    label: "Trade-offs",
    shortLabel: "Trade-offs",
  },
  { id: "outputs", number: "10", label: "Outputs", shortLabel: "Outputs" },
  {
    id: "progress",
    number: "11",
    label: "Current Progress",
    shortLabel: "Progress",
  },
  {
    id: "next-improvements",
    number: "12",
    label: "Next Improvements",
    shortLabel: "Next",
  },
  {
    id: "technology",
    number: "13",
    label: "Technology Stack",
    shortLabel: "Technology",
  },
];

export const secFinancialDataPlatformCaseStudy: ProjectCaseStudy = {
  projectId: "sec-financial-data-platform",
  route: "/work/sec-financial-data-platform",
  eyebrow: "CASE STUDY / PROJECT 01",
  supportingStatement:
    "The project converts irregular SEC filing records into structured, testable, analytics-ready financial datasets while establishing the foundation for anomaly monitoring and repeatable quarterly processing.",
  architectureCaption:
    "A staged path from SEC source records to validated financial models and anomaly-monitoring outputs.",
  sections: secSections,
  overview: {
    paragraphs: [
      "The SEC Financial Data Platform is a developing batch-data system for collecting and organizing company financial records from SEC filing data. The current build focuses on a limited 2024 Q1 dataset and establishes the first reliable path from source API responses through object storage, normalization, validation, and future analytical modeling.",
      "The immediate engineering objective is not simply to download filing data. It is to create a repeatable structure that can distinguish reporting periods, statement types, financial concepts, filing metadata, and data-quality exceptions before the records are used for analysis.",
    ],
    status: [
      {
        label: "Current State",
        description: "Raw ingestion and first-layer validation implemented.",
        state: "Implemented",
      },
      {
        label: "Active Build",
        description:
          "Staging validation, orchestration, layered modeling, and anomaly rules.",
        state: "In Progress",
      },
      {
        label: "Target Outputs",
        description:
          "Expanded quarter coverage, automated marts, monitoring dashboard, and alerting.",
        state: "Planned",
      },
    ],
  },
  problem: {
    paragraphs: [
      "SEC company financial data is structurally available but not immediately analytics-ready. Different companies use different tags, reporting periods, filing forms, frames, durations, and statement structures. A single metric may appear under multiple source tags or reporting contexts, and values cannot be compared reliably until those records are normalized and classified.",
      "The engineering challenge is to preserve source fidelity while creating a consistent analytical layer that supports company-level and period-level comparisons, quality checks, financial-ratio analysis, and anomaly monitoring.",
    ],
    dimensions: [
      "Source variation",
      "Financial concept inconsistency",
      "Reporting-period ambiguity",
      "Statement-type classification",
      "Duration versus instant metrics",
      "Data-quality exceptions",
      "Repeatable quarterly ingestion",
      "Safe backfills and reruns",
    ],
  },
  scope: {
    introduction:
      "The controlled first run keeps the dataset narrow enough to develop normalization and validation rules without obscuring failures inside a broad historical load.",
    metrics: [
      { label: "Current quarter", value: "2024 Q1" },
      { label: "Requested CIKs", value: "100" },
      { label: "Successful", value: "95", tone: "positive" },
      { label: "Unsuccessful", value: "5", tone: "warning" },
    ],
    constraints: [
      "Limited company sample and quarter-specific processing",
      "SEC source-tag variation across issuers",
      "Different duration and instant metric semantics",
      "Incomplete financial-concept mappings",
      "API reliability and request handling",
      "Reproducible reruns with source metadata preserved",
      "An actively developing downstream architecture",
    ],
    failureNote:
      "The current ingestion summary records five unsuccessful company requests; root-cause classification remains part of the next validation and retry work.",
  },
  architecture: [
    {
      label: "Source & Ingestion",
      nodes: [
        {
          label: "SEC Company Facts API",
          detail: "Controlled CIK list",
          state: "Implemented",
        },
        {
          label: "Python Ingestion",
          detail: "Lambda-compatible handler",
          state: "Implemented",
        },
        {
          label: "Raw JSON",
          detail: "Source fidelity",
          state: "Implemented",
        },
        {
          label: "AWS S3 Landing",
          detail: "Raw + metadata",
          state: "Implemented",
        },
      ],
    },
    {
      label: "Validation & Transformation",
      nodes: [
        {
          label: "Raw Validation",
          detail: "Great Expectations",
          state: "Implemented",
        },
        {
          label: "Python / Pandas Staging",
          detail: "Normalize + classify",
          state: "Implemented",
        },
        {
          label: "Spark Processing",
          detail: "Historical scale path",
          state: "Planned",
        },
        {
          label: "Snowflake RAW / STAGING",
          detail: "Layered warehouse",
          state: "In Progress",
        },
      ],
    },
    {
      label: "Modeling & Outputs",
      nodes: [
        {
          label: "dbt CORE",
          detail: "Reusable models",
          state: "In Progress",
        },
        {
          label: "dbt MARTS",
          detail: "Analytical datasets",
          state: "Planned",
        },
        {
          label: "Anomaly Monitoring",
          detail: "Ratios + exceptions",
          state: "Planned",
        },
        {
          label: "Power BI",
          detail: "Monitoring outputs",
          state: "Planned",
        },
      ],
    },
  ],
  flowSteps: [
    {
      number: "01",
      title: "Source Request",
      label: "Controlled company scope",
      description:
        "The ingestion process requests SEC company-facts records for a controlled list of CIK identifiers.",
      state: "Implemented",
    },
    {
      number: "02",
      title: "Raw Response Preservation",
      label: "Source-first landing",
      description:
        "Raw JSON responses are preserved before transformation so source fields and filing context remain available for validation and reprocessing.",
      state: "Implemented",
    },
    {
      number: "03",
      title: "S3 Landing",
      label: "Durable object storage",
      description:
        "Raw outputs and the ingestion summary are written to AWS S3, creating a durable landing layer for downstream processing.",
      state: "Implemented",
    },
    {
      number: "04",
      title: "Raw Validation",
      label: "First quality boundary",
      description:
        "Great Expectations checks raw object metadata, JSON structure, expected fields, CIK format, and ingestion-summary counts.",
      state: "Implemented",
    },
    {
      number: "05",
      title: "Staging Normalization",
      label: "Standardized records",
      description:
        "Python and Pandas extract and standardize company, filing, taxonomy, financial-concept, date, period, form, frame, and value fields.",
      state: "Implemented",
    },
    {
      number: "06",
      title: "Statement & Duration Classification",
      label: "Financial context",
      description:
        "Implemented logic classifies income-statement and balance-sheet metrics, quarterly and annual forms, instant records, and multiple duration bands; deeper rule validation continues.",
      state: "Implemented",
    },
    {
      number: "07",
      title: "Snowflake & dbt Modeling",
      label: "Layered analytical model",
      description:
        "Normalized records are being designed for Snowflake raw, staging, core, and mart layers that support reusable financial analysis.",
      state: "In Progress",
    },
    {
      number: "08",
      title: "Monitoring & Analytical Outputs",
      label: "Decision layer",
      description:
        "Target outputs include financial-ratio monitoring, anomaly flags, Power BI reporting, and automated quality alerts.",
      state: "Planned",
    },
  ],
  modeling: {
    introduction:
      "The current staging output preserves filing context while establishing a layered path toward reusable analytical models. RAW and STAGING responsibilities are evidenced in the current code; CORE and MARTS remain target layers.",
    layers: [
      {
        label: "RAW",
        description:
          "Preserve source company-facts JSON and ingestion metadata without removing filing context.",
        state: "Implemented",
      },
      {
        label: "STAGING",
        description:
          "Normalize concepts, dates, forms, periods, values, statement types, and duration classifications.",
        state: "Implemented",
        fields: [
          "cik",
          "entity_name",
          "taxonomy",
          "source_tag",
          "value",
          "start_date",
          "end_date",
          "filed_date",
          "frame",
          "accn",
          "fy",
          "fp",
          "form",
        ],
      },
      {
        label: "CORE",
        description:
          "Create reusable company, filing, metric, statement, and reporting-period structures.",
        state: "In Progress",
      },
      {
        label: "MARTS",
        description:
          "Produce datasets for company trends, ratios, exceptions, and monitoring.",
        state: "Planned",
      },
    ],
    targetEntities: [
      "Company",
      "Filing",
      "Financial Metric",
      "Reporting Period",
      "Statement Type",
      "Metric Observation",
      "Anomaly Event",
    ],
    durationNotes: [
      "Instant records represent point-in-time values such as assets or liabilities.",
      "Quarter-duration records represent measurements over an approximate quarterly reporting period.",
      "Half-year, nine-month, full-year, and other durations require distinct classification or exclusion before comparison.",
    ],
  },
  quality: {
    introduction:
      "Quality controls begin at the landing layer and expand as records gain analytical meaning. The current Great Expectations workflow checks raw S3 objects and ingestion metadata; staging and model-level controls are still being developed.",
    principle:
      "Validation should stop unreliable records from silently entering analytical models.",
    items: [
      {
        label: "Ingestion accounting",
        description:
          "Requested, successful, and unsuccessful company counts are preserved in the ingestion summary.",
        state: "Implemented",
      },
      {
        label: "Raw schema conformity",
        description:
          "Raw file presence, JSON parsing, identity fields, facts structure, CIK format, and object size rules.",
        state: "Implemented",
      },
      {
        label: "Source context preservation",
        description:
          "Taxonomy, source tag, accession, filing form, fiscal period, frame, and date fields remain available.",
        state: "Implemented",
      },
      {
        label: "Date, duration & statement validation",
        description:
          "Validate classification results, period semantics, and acceptable record contexts.",
        state: "In Progress",
      },
      {
        label: "Uniqueness & plausibility rules",
        description:
          "Define duplicate keys, metric-value expectations, anomaly thresholds, and failure categories.",
        state: "In Progress",
      },
      {
        label: "Automated quality gates",
        description:
          "Add quarantine, alerting, historical monitoring, mart reconciliation, and ratio exception tests.",
        state: "Planned",
      },
    ],
  },
  decisions: [
    {
      title: "Preserve raw JSON",
      decision: "Store original SEC responses before transformation.",
      rationale:
        "Raw preservation supports source traceability, reprocessing, validation, and future changes to normalization logic.",
    },
    {
      title: "Use layered transformations",
      decision: "Separate raw, staging, core, and mart responsibilities.",
      rationale:
        "Layering prevents source irregularities from leaking directly into analytical outputs and supports targeted testing.",
    },
    {
      title: "Retain source metadata",
      decision:
        "Keep taxonomy, source tags, accession numbers, filing forms, fiscal periods, frames, and filing dates.",
      rationale:
        "Financial values cannot be interpreted reliably without their reporting context.",
    },
    {
      title: "Classify metric duration",
      decision: "Separate instant, quarter-duration, and other records.",
      rationale:
        "Balance-sheet values and income-statement values represent different time semantics.",
    },
    {
      title: "Add quality validation early",
      decision: "Validate the raw layer before building downstream models.",
      rationale:
        "Early checks expose ingestion and structural problems before they become modeling defects.",
    },
    {
      title: "Use a controlled initial scope",
      decision:
        "Begin with a limited 2024 Q1 and first-100-CIK processing scope.",
      rationale:
        "A controlled sample supports faster iteration on schema, validation, and failure handling before broader backfills.",
    },
  ],
  tradeoffs: [
    {
      title: "Breadth versus validation depth",
      description:
        "The current build favors a smaller company and quarter scope so normalization and validation rules can be developed before broader ingestion.",
    },
    {
      title: "Source fidelity versus analytical simplicity",
      description:
        "Preserving SEC source tags and filing context increases schema complexity but avoids losing information needed for interpretation and traceability.",
    },
    {
      title: "Python iteration versus distributed processing",
      description:
        "Python and Pandas support rapid staging development, while Spark remains a target option for larger historical workloads; no scale improvement is assumed without benchmarking.",
    },
    {
      title: "Fixed mappings versus extensible classification",
      description:
        "Initial metric mappings are direct to implement but need a more extensible approach as issuer-specific tags and additional statements are added.",
    },
    {
      title: "Strict quality gates versus ingestion continuity",
      description:
        "Strict validation improves reliability but needs quarantine and retry behavior so isolated failures do not block an entire batch.",
    },
    {
      title: "Current visibility versus future automation",
      description:
        "Manual inspection remains useful during development, while Airflow, dbt tests, and monitoring are intended to reduce manual intervention later.",
    },
  ],
  outputs: [
    {
      label: "Raw SEC company-facts JSON and S3 landing objects",
      state: "Implemented",
    },
    {
      label: "Ingestion summary JSON with 100 requested, 95 successful, and 5 unsuccessful records",
      state: "Implemented",
    },
    {
      label: "Normalized staging records with statement and duration classifications",
      state: "Implemented",
    },
    {
      label: "Raw-layer Great Expectations validation workflow",
      state: "Implemented",
    },
    {
      label: "Validated staging dataset and Snowflake raw / staging layers",
      state: "In Progress",
    },
    {
      label: "Core financial metric models, anomaly rules, and orchestration logs",
      state: "In Progress",
    },
    {
      label: "Trend marts, ratio indicators, Power BI monitoring, alerts, and expanded backfills",
      state: "Planned",
    },
  ],
  progress: [
    {
      label: "Controlled SEC company-facts ingestion and Lambda-compatible entry point",
      state: "Implemented",
    },
    {
      label: "First 100 CIK scope with 95 successful and 5 unsuccessful requests",
      state: "Implemented",
    },
    {
      label: "Raw JSON preservation, AWS S3 upload, and ingestion_summary.json",
      state: "Implemented",
    },
    {
      label: "Python/Pandas staging, metric mappings, statement classification, and duration classification",
      state: "Implemented",
    },
    {
      label: "Raw S3 Great Expectations validation workflow",
      state: "Implemented",
    },
    {
      label: "Second Great Expectations layer and deeper staging validation",
      state: "In Progress",
    },
    {
      label: "Anomaly rules, Airflow DAG, dbt models, and Snowflake layers",
      state: "In Progress",
    },
    {
      label: "Expanded quarterly coverage, automated marts, Power BI monitoring, alerting, and historical backfills",
      state: "Planned",
    },
  ],
  nextImprovements: [
    "Complete staging-level Great Expectations validation.",
    "Formalize metric and statement mappings.",
    "Add failure categorization and retry handling.",
    "Operationalize the existing Lambda-compatible ingestion handler with explicit scheduling and retry controls.",
    "Complete Snowflake raw and staging loading.",
    "Build dbt core and mart models.",
    "Implement Airflow orchestration.",
    "Add revenue, margin, and liability anomaly rules.",
    "Expand beyond the initial 2024 Q1 sample.",
    "Add Power BI monitoring outputs.",
    "Add automated quality alerts and backfill controls.",
  ],
  technologies: [
    {
      label: "Ingestion",
      technologies: [
        { name: "Python", state: "Implemented" },
        { name: "SEC Company Facts API", state: "Implemented" },
        { name: "AWS Lambda handler", state: "Implemented" },
      ],
    },
    {
      label: "Processing",
      technologies: [
        { name: "Pandas", state: "Implemented" },
        { name: "Spark", state: "Planned" },
      ],
    },
    {
      label: "Storage",
      technologies: [{ name: "AWS S3", state: "Implemented" }],
    },
    {
      label: "Warehouse",
      technologies: [{ name: "Snowflake", state: "In Progress" }],
    },
    {
      label: "Transformation",
      technologies: [
        { name: "dbt", state: "In Progress" },
        { name: "SQL", state: "In Progress" },
      ],
    },
    {
      label: "Orchestration",
      technologies: [{ name: "Airflow", state: "In Progress" }],
    },
    {
      label: "Data Quality",
      technologies: [
        { name: "Great Expectations", state: "Implemented" },
      ],
    },
    {
      label: "Runtime & Output",
      technologies: [
        { name: "Docker", state: "Planned" },
        { name: "Power BI", state: "Planned" },
      ],
    },
  ],
};

export const caseStudies: readonly ProjectCaseStudy[] = [
  secFinancialDataPlatformCaseStudy,
];
