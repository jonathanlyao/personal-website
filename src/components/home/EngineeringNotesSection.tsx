import { WritingRow } from "@/components/writing/WritingRow";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { writingItems } from "@/data/writing";

export function EngineeringNotesSection() {
  const featuredItems = writingItems.filter((item) => item.featured);

  return (
    <section
      className="indexed-section writing-section"
      id="writing"
      aria-labelledby="writing-heading"
    >
      <SectionHeading number="05" label="Engineering Notes" />
      <div className="section-content writing-section__content">
        <header className="writing-section__intro">
          <p className="eyebrow">DEBUGGING / SYSTEMS / DOCUMENTATION</p>
          <h2 id="writing-heading">
            Debugging systems, documenting the reasons.
          </h2>
          <p>
            Practical notes on data pipelines, Docker, Spark, Kafka,
            orchestration, and the failures that reveal how systems actually
            work.
          </p>
        </header>
        <ol className="writing-ledger writing-ledger--homepage">
          {featuredItems.map((item, index) => (
            <WritingRow
              item={item}
              index={index}
              variant="homepage"
              key={item.id}
            />
          ))}
        </ol>
        <div className="writing-section__action">
          <EditorialButton href="/writing" variant="secondary">
            View All Writing
          </EditorialButton>
        </div>
      </div>
    </section>
  );
}
