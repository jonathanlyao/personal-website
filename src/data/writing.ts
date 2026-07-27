import type { WritingItem } from "@/types/content";

export const writingItems = [
  {
    id: "spark-container-pid-1",
    title:
      "Why My Spark Container Keeps Exiting — Docker PID 1 and the Daemon Trap",
    summary:
      "A debugging investigation into why Spark containers exit immediately, how Docker ties container lifetime to PID 1, and why background daemon scripts fail inside containers.",
    topics: ["Docker", "Spark", "PID 1", "Container Runtime"],
    platform: "DEV Community",
    contentType: "Article",
    url: "https://dev.to/lee_yao_cfeb14fb9b141b8c5/why-my-spark-container-keeps-exiting-docker-pid-1-and-the-daemon-trap-dgf",
    discussionUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7458019558080217088/",
    featured: true,
  },
  {
    id: "airflow-kafka-network-debugging",
    title:
      "Debugging a Multi-Container Airflow Pipeline: Kafka Network Isolation and the YAML Indentation Trap",
    summary:
      "A practical breakdown of cross-project Docker networking, Kafka advertised listeners, Airflow orchestration failures, and structurally valid but incorrect YAML.",
    topics: ["Airflow", "Kafka", "Docker Networking", "dbt", "YAML"],
    platform: "DEV Community",
    contentType: "Article",
    url: "https://dev.to/lee_yao_cfeb14fb9b141b8c5/debugging-a-multi-container-airflow-pipeline-kafka-network-isolation-and-the-yaml-indentation-trap-5595",
    featured: true,
  },
] as const satisfies readonly WritingItem[];
