import { LabRegistryItem } from "@/components/lab/LabRegistryItem";
import { EditorialButton } from "@/components/ui/EditorialButton";
import type { LabItem } from "@/types/lab";

export function LabRegistry({ items }: { items: readonly LabItem[] }) {
  return (
    <section
      className="lab-index"
      aria-labelledby="lab-index-heading"
      data-reveal
    >
      <div className="lab-index__heading">
        <h2 className="visually-hidden" id="lab-index-heading">
          Product systems registry
        </h2>
        <p>LAB REGISTRY / LOCAL-FIRST TOOLS / PRODUCT SYSTEMS</p>
        <p>{String(items.length).padStart(2, "0")} DOCUMENTED SYSTEM</p>
      </div>
      <ol className="lab-registry">
        {items.map((item) => (
          <LabRegistryItem item={item} key={item.id} />
        ))}
      </ol>
      <div className="lab-page__return">
        <EditorialButton href="/" variant="secondary">
          Return to Homepage
        </EditorialButton>
      </div>
    </section>
  );
}
