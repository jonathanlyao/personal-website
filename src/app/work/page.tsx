import type { Metadata } from "next";
import { ProjectRegistry } from "@/components/work/ProjectRegistry";
import { WorkPageHeader } from "@/components/work/WorkPageHeader";
import { portfolioProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work | Lee Yao",
  description:
    "Data engineering and analytics projects by Lee Yao, including Snowflake, dbt, Airflow, Spark, Kafka, AWS S3, PostgreSQL, Power BI, and data-quality workflows.",
  openGraph: {
    title: "Work | Lee Yao",
    description:
      "A portfolio of data platforms, analytics pipelines, dimensional models, orchestration workflows, and decision-ready data systems.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <main className="work-page" id="top">
      <WorkPageHeader projects={portfolioProjects} />
      <ProjectRegistry projects={portfolioProjects} />
    </main>
  );
}
