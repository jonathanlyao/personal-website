import type { Metadata } from "next";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { WritingRow } from "@/components/writing/WritingRow";
import { writingItems } from "@/data/writing";

export const metadata: Metadata = {
  title: "Engineering Notes | Lee Yao",
  description:
    "Technical writing by Lee Yao on Docker, Spark, Kafka, Airflow, data pipelines, orchestration, debugging, and reliable data systems.",
  openGraph: {
    title: "Engineering Notes | Lee Yao",
    description: "Notes from building, debugging, and understanding data systems.",
    type: "website",
  },
};

export default function WritingPage() {
  return (
    <main className="writing-page" id="top">
      <header className="writing-page__header">
        <p className="writing-page__marker">WRITING / 01</p>
        <div className="writing-page__introduction">
          <p className="eyebrow">ENGINEERING NOTES / DEBUGGING RECORDS</p>
          <h1>Engineering Notes</h1>
          <p className="writing-page__statement">
            Notes from building, debugging, and understanding data systems.
          </p>
          <p className="writing-page__description">
            Technical writing on containers, distributed systems,
            orchestration, data pipelines, configuration failures, and the
            engineering decisions behind reliable systems.
          </p>
        </div>
      </header>
      <section
        className="writing-index"
        aria-labelledby="writing-index-heading"
      >
        <h2 className="visually-hidden" id="writing-index-heading">
          Writing index
        </h2>
        <p className="writing-index__scope">
          SCOPE / CONTAINERS / DISTRIBUTED SYSTEMS / ORCHESTRATION / DATA
          PIPELINES
        </p>
        <ol className="writing-ledger writing-ledger--index">
          {writingItems.map((item, index) => (
            <WritingRow
              item={item}
              index={index}
              variant="index"
              key={item.id}
            />
          ))}
        </ol>
        <div className="writing-page__action">
          <EditorialButton href="/" variant="secondary">
            Return to Homepage
          </EditorialButton>
        </div>
      </section>
    </main>
  );
}
