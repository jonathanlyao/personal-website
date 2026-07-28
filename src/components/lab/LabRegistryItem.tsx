import { EditorialButton } from "@/components/ui/EditorialButton";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { TechnicalTag } from "@/components/ui/TechnicalTag";
import type { LabItem } from "@/types/lab";

export function LabRegistryItem({ item }: { item: LabItem }) {
  const itemNumber = String(item.displayOrder).padStart(2, "0");

  return (
    <li className="lab-registry__item">
      <article
        className="lab-registry-item"
        id={item.slug}
        aria-labelledby={`lab-system-${item.slug}`}
      >
        <div className="lab-registry-item__metadata">
          <p aria-label={`System ${itemNumber}`}>{itemNumber}</p>
          <p>{item.category}</p>
          <StatusLabel tone="active">{item.status}</StatusLabel>
        </div>

        <div className="lab-registry-item__main">
          <p className="eyebrow">PRODUCT SYSTEM / HUMAN-IN-THE-LOOP</p>
          <h2 id={`lab-system-${item.slug}`}>{item.title}</h2>
          <p>{item.summary}</p>
          <p>{item.supportingStatement}</p>
        </div>

        <div className="lab-registry-item__details">
          <section>
            <h3>Core systems</h3>
            <ul>
              {item.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>System path</h3>
            <p>
              Browser capture → local receiver → Import Inbox → evidence
              analysis → SQLite Tracker → human review
            </p>
          </section>
          <section>
            <h3>Technology</h3>
            <div className="technical-tags" aria-label="Lab technologies">
              {item.technologies.map((technology) => (
                <TechnicalTag key={technology}>{technology}</TechnicalTag>
              ))}
            </div>
          </section>
        </div>

        <div className="lab-registry-item__action">
          <EditorialButton href={item.caseStudyUrl} variant="primary">
            View Case Study
            <span className="visually-hidden"> for {item.title}</span>
          </EditorialButton>
        </div>
      </article>
    </li>
  );
}
