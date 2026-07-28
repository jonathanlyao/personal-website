import type { Metadata } from "next";
import { ProjectRegistry } from "@/components/work/ProjectRegistry";
import { WorkPageHeader } from "@/components/work/WorkPageHeader";
import { portfolioProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work | Lee Yao",
  description:
    "Data engineering and analytics projects by Lee Yao, including Snowflake, dbt, Airflow, Spark, Kafka, AWS S3, PostgreSQL, Power BI, and data-quality workflows.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Lee Yao",
    description:
      "A portfolio of data platforms, analytics pipelines, dimensional models, orchestration workflows, and decision-ready data systems.",
    type: "website",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <main className="work-page" id="top" tabIndex={-1}>
      <WorkPageHeader projects={portfolioProjects} />
      <ProjectRegistry projects={portfolioProjects} />
    </main>
  );
}
