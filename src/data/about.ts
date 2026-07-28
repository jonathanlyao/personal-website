export const aboutPage = {
  eyebrow: "ABOUT / ENGINEERING PRACTICE",
  title: "I build data systems that make complex information usable.",
  supportingStatement:
    "I work across data engineering, analytics engineering, and business intelligence—building pipelines, models, quality controls, and reporting systems that turn fragmented operational data into reliable analytical outputs.",
  metadata: {
    location: "New York",
    focus: [
      "Data Engineering",
      "Analytics Engineering",
      "Data Quality",
      "Analytics Systems",
      "Workflow Automation",
    ],
    current: [
      "SEC Financial Data Platform",
      "Job Search OS",
      "Engineering Notes",
    ],
  },
  professionalFocus: [
    "I’m a New York–based Data Engineer and Analytics Engineer focused on building reliable systems between raw operational data and business decisions.",
    "My work includes ingestion, transformation, orchestration, dimensional modeling, data-quality validation, analytics-ready marts, reporting, and workflow automation. I’m particularly interested in the parts of a system where source complexity, inconsistent definitions, and operational requirements must be converted into structures that people can trust and use.",
  ],
  principles: [
    {
      title: "Preserve Context",
      description:
        "I retain source metadata and reporting context before simplifying data for analysis.",
    },
    {
      title: "Build in Layers",
      description:
        "I separate ingestion, staging, core modeling, marts, and presentation so each layer has a clear responsibility.",
    },
    {
      title: "Validate Early",
      description:
        "I add quality checks before unreliable records become downstream reporting problems.",
    },
    {
      title: "Make Work Reproducible",
      description:
        "I prefer repeatable pipelines, explicit configuration, idempotent processing, version control, and documented decisions.",
    },
    {
      title: "Keep Decisions Reviewable",
      description:
        "Scores, transformations, classifications, and automated outputs should remain understandable and open to human review.",
    },
    {
      title: "Connect Engineering to Use",
      description:
        "A pipeline is not finished when data loads successfully; it is finished when the output supports a clear analytical or operational decision.",
    },
  ],
  capabilities: [
    {
      label: "Data Pipelines",
      description:
        "Batch ingestion, distributed processing, object storage, and orchestration",
      examples: ["Python", "Spark", "Kafka", "AWS S3", "Airflow"],
    },
    {
      label: "Analytics Engineering",
      description:
        "Staging, core, and mart layers, dimensional models, and governed transformations",
      examples: ["Snowflake", "dbt", "SQL", "Star Schemas"],
    },
    {
      label: "Data Quality",
      description:
        "Validation rules, automated tests, anomaly checks, and reproducible processing",
      examples: ["Great Expectations", "dbt Tests", "Idempotency"],
    },
    {
      label: "Analytics Outputs",
      description:
        "Operational reporting, executive reporting, semantic models, and decision-ready datasets",
      examples: ["Power BI", "DAX", "Power Query"],
    },
    {
      label: "Product Workflows",
      description:
        "Browser integration, local persistence, scoring systems, workflow state, and human review",
      examples: ["Chrome Extension", "SQLite", "Streamlit"],
    },
    {
      label: "Technical Communication",
      description:
        "Architecture records, debugging notes, implementation decisions, and explicit trade-offs",
      examples: ["Engineering Notes", "Case Studies", "Documentation"],
    },
  ],
  currentFocus: [
    {
      title: "SEC Financial Data Platform",
      description:
        "A developing batch-data system for ingesting, validating, modeling, and monitoring company financial records.",
      action: "View SEC Case Study",
      href: "/work/sec-financial-data-platform",
    },
    {
      title: "Job Search OS",
      description:
        "A local-first workflow system combining browser ingestion, structured analysis, duplicate protection, persistent tracking, and human review.",
      action: "Explore Job Search OS",
      href: "/lab/job-search-os",
    },
    {
      title: "Engineering Notes",
      description:
        "Technical records that document system failures, debugging paths, and the engineering decisions behind reliable behavior.",
      action: "Read Engineering Notes",
      href: "/writing",
    },
  ],
  beyondPipeline: [
    "My background includes business intelligence, enterprise reporting, regulated workflows, and building operational tools for a growing business. That experience shapes how I approach data systems: the technical architecture matters, but so do definitions, exceptions, handoffs, documentation, and the people who depend on the output.",
    "At Solvia One LLC, where I am a Co-Founder and Data Platform Engineer, I work across data infrastructure, product and pricing inputs, operational reporting, API integration, cloud hosting, and workflow automation. The environment requires practical systems that can evolve with the business rather than isolated technical demonstrations.",
  ],
  explore: [
    {
      label: "Work",
      description:
        "Data platforms, pipelines, modeling, and analytics systems",
      action: "Explore Work",
      href: "/work",
    },
    {
      label: "Lab",
      description: "Product experiments and local-first workflow systems",
      action: "Visit the Lab",
      href: "/lab",
    },
    {
      label: "Writing",
      description: "Debugging records and engineering notes",
      action: "Read Engineering Notes",
      href: "/writing",
    },
    {
      label: "Resume",
      description:
        "Experience, projects, skills, education, and certification",
      action: "View Resume",
      href: "/resume",
    },
    {
      label: "Contact",
      description: "Start a conversation",
      action: "Open Contact",
      href: "/#contact",
    },
  ],
  closingStatement:
    "For roles, technical collaboration, or conversations about data systems, the Contact section on the Homepage includes my direct links.",
} as const;
