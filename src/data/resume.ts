import { externalResources, profileLinks, siteConfig } from "@/data/site";
import type { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  name: siteConfig.name,
  professionalTitle:
    "Data Engineer · Analytics Engineer · Business Intelligence",
  location: "New York, NY",
  email: profileLinks.email,
  emailHref: profileLinks.emailHref,
  linkedinUrl: profileLinks.linkedIn,
  githubUrl: profileLinks.github,
  lastUpdated: "July 2026",
  resumePdfUrl: undefined,
  summary:
    "Data Engineer and Analytics Engineer with experience building cloud data pipelines, dimensional models, analytics-ready datasets, and business intelligence solutions using Python, SQL, Snowflake, AWS S3, dbt, Airflow, Prefect, and Power BI. Skilled in developing reliable ELT workflows, organizing raw data into staging, core, and mart layers, implementing automated data-quality controls, and translating operational requirements into reusable reporting datasets. Experience spans e-commerce, healthcare, transportation, financial data, and enterprise reporting environments.",
  skills: [
    {
      label: "Programming",
      items: [
        "Python (Pandas)",
        "SQL",
        "Data Transformation",
        "API Integration",
      ],
    },
    {
      label: "Data Engineering",
      items: [
        "ELT / ETL Pipelines",
        "Batch Processing",
        "Workflow Orchestration (Airflow, Prefect)",
        "Spark",
        "Kafka",
      ],
    },
    {
      label: "Cloud & Data Platforms",
      items: [
        "Snowflake",
        "AWS S3",
        "Cloud Ingestion",
        "External Stages",
        "Docker",
        "Data Lake / Warehouse Patterns",
      ],
    },
    {
      label: "Analytics Engineering",
      items: [
        "dbt",
        "Dimensional Modeling",
        "Star Schemas",
        "Fact & Dimension Models",
        "Data Marts",
        "Semantic Layers",
      ],
    },
    {
      label: "Business Intelligence",
      items: [
        "Power BI",
        "DAX",
        "Power Query",
        "Qlik Sense",
        "Semantic Models",
        "Operational & Executive Reporting",
        "Dashboard Automation",
      ],
    },
    {
      label: "Business & Domain Analytics",
      items: [
        "Transactional Data",
        "Customer & Product Data",
        "Revenue & Operational Metrics",
        "E-Commerce / Shopify",
        "Reporting Requirements",
      ],
    },
    {
      label: "Data Quality & Governance",
      items: [
        "dbt Tests",
        "Validation Rules",
        "Anomaly Detection",
        "Idempotent Pipelines",
        "Documentation",
        "Reproducible Backfills",
      ],
    },
    {
      label: "Databases & Tools",
      items: [
        "PostgreSQL",
        "DuckDB",
        "Neo4j",
        "Git",
        "GitHub",
        "Docker Compose",
        "VS Code",
        "Power Automate",
      ],
    },
  ],
  experience: [
    {
      organization: "Solvia One LLC",
      role: "Co-Founder & Data Platform Engineer",
      startDate: "May 2025",
      endDate: "Present",
      employmentType: "Full-time",
      bullets: [
        "Designed and maintained cloud-based data workflows and operational reporting processes supporting product, pricing, customer, sales-channel, and business operations.",
        "Structured e-commerce and operational inputs into reusable datasets for profitability analysis, product management, reporting, and workflow automation.",
        "Built lightweight data and automation tooling with validation, repeatable execution, and maintainable documentation for a growing business.",
        "Served as the primary technical contributor across data infrastructure, API integration, cloud hosting, production support, and continuous process improvement.",
      ],
    },
    {
      organization: "Freelance / Independent",
      role: "Data Engineering & Analytics",
      startDate: "Jun 2024",
      endDate: "Present",
      location: "Queens, NY",
      bullets: [
        "Built end-to-end cloud data pipelines across e-commerce, transportation, healthcare, and financial-data domains using Python, SQL, AWS S3, Snowflake, dbt, Airflow, and Prefect.",
        "Designed raw, staging, core, and mart layers with Kimball dimensional models, fact and dimension tables, automated testing, and analytics-ready datasets.",
        "Modeled transactional, customer, product, seller, payment, review, and delivery data to support revenue, service-level, customer-satisfaction, and operational analysis.",
        "Implemented idempotency checks, validation rules, retry-aware orchestration, and reproducible Docker environments to improve reliability and support safe backfills.",
      ],
    },
    {
      organization: "SDG Group USA",
      role: "Data Analyst",
      startDate: "Dec 2022",
      endDate: "May 2024",
      location: "Bedminster, NJ",
      bullets: [
        "Prepared and maintained Snowflake-powered reporting datasets supporting Power BI and Qlik Sense dashboards for operational and executive decision-making.",
        "Investigated upstream data-quality, consistency, and transformation issues and coordinated fixes to improve trust in downstream analytics.",
        "Supported an airport-retail BI initiative by preparing reporting-ready sales and operational datasets and resolving data defects affecting business dashboards.",
        "Rebuilt pharmaceutical reporting workflows from Qlik Cloud to Power BI and automated daily stakeholder distribution with Power Automate.",
      ],
    },
    {
      organization: "AMN Healthcare",
      role: "Medical Interpreter (Part-Time)",
      startDate: "Sep 2025",
      endDate: "Present",
      location: "Queens, NY",
      employmentType: "Part-time",
      bullets: [
        "Provide accurate real-time medical interpretation while handling sensitive information and complex terminology.",
      ],
    },
  ],
  additionalExperience: [
    {
      title: "Independent Insurance Broker",
      startDate: "2016",
      endDate: "2022",
      description:
        "Insurance products, regulated workflows, client relationships, and compliance.",
    },
  ],
  projects: [
    {
      title: "Olist E-Commerce Revenue & Customer Intelligence",
      startDate: "Mar 2026",
      endDate: "Apr 2026",
      technologies: [
        "Python",
        "Prefect",
        "Docker",
        "AWS S3",
        "Snowflake",
        "dbt",
        "Power BI",
        "Cortex LLM",
        "Neo4j",
      ],
      bullets: [
        "Built an automated ELT pipeline using Python, Prefect, Docker, AWS S3, and Snowflake to ingest and transform 100K+ e-commerce orders, payments, products, sellers, customers, and reviews.",
        "Designed dbt staging, core, and mart models for revenue, seller performance, delivery SLA, customer satisfaction, and regional operational analysis.",
        "Integrated structured transaction data with unstructured Portuguese review text and used Snowflake Cortex LLM to generate sentiment classifications for downstream reporting.",
        "Modeled seller and review relationships in Neo4j to surface suspicious behavior and potential fraud clusters.",
        "Delivered Power BI insights showing the bottom 3% of sellers generated 40%+ of negative sentiment and linking regional SLA breaches to lower satisfaction.",
      ],
      githubUrl: externalResources.olistRepository,
    },
    {
      title: "US DOT Flights Cloud Data Warehouse Pipeline",
      startDate: "Apr 2026",
      endDate: "May 2026",
      technologies: [
        "Apache Airflow",
        "Docker Compose",
        "Python",
        "AWS S3",
        "Snowflake",
        "dbt",
      ],
      bullets: [
        "Engineered a monthly cloud pipeline using Python, Dockerized Airflow, AWS S3, Snowflake, and dbt from raw ingestion through analytics-ready data marts.",
        "Orchestrated parameterized DAGs for download, compression, object-storage upload, Snowflake loading, dbt transformation, and automated testing.",
        "Implemented idempotency checks at each stage to support safe reruns and historical backfills without duplicate loading.",
        "Configured Snowflake external stages and AWS IAM storage integration, then modeled fact and dimension tables with MD5 surrogate keys for scalable BI consumption.",
      ],
      githubUrl: externalResources.flightsRepository,
    },
    {
      title: "CMS Medicare Data Pipeline",
      startDate: "Apr 2026",
      endDate: "May 2026",
      technologies: ["Kafka", "Spark", "Airflow", "AWS S3", "Snowflake"],
      bullets: [
        "Built a healthcare data pipeline using Kafka for ingestion, Spark for distributed processing, Airflow for orchestration, AWS S3 for object storage, and Snowflake for analytics.",
        "Automated ingestion and transformation workflows across multiple platform components and prepared validated datasets for downstream analysis.",
        "Implemented dimensional modeling and data-quality rules to identify invalid records and improve the reliability of analytics-ready outputs.",
      ],
      githubUrl: externalResources.cmsRepository,
    },
    {
      title: "NYC Taxi Revenue & Operations Analytics",
      startDate: "Dec 2025",
      endDate: "Mar 2026",
      technologies: ["PostgreSQL", "dbt", "Docker", "Power BI"],
      bullets: [
        "Built a reproducible PostgreSQL and dbt ELT pipeline that transformed raw NYC Taxi trips into staging, core, and mart datasets.",
        "Implemented validation rules for invalid timestamps, unrealistic speeds, and other anomalies before downstream reporting.",
        "Created daily revenue, trip-demand, duration, and airport-traffic marts and delivered Power BI dashboards for operational analysis.",
      ],
      githubUrl: externalResources.taxiRepository,
    },
  ],
  education: [
    {
      institution: "Stony Brook University",
      degree: "B.S., Electrical Engineering",
      location: "Stony Brook, NY",
      graduationDate: "May 2008",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      expires: "Expires Jul 2027",
      credentialUrl: externalResources.microsoftCertification,
    },
  ],
};
