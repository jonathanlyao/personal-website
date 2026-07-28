import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import type { LabFeature } from "@/types/lab";

export function FeatureLedger({
  features,
  label,
}: {
  features: readonly LabFeature[];
  label: string;
}) {
  return (
    <div className="lab-feature-ledger" aria-label={label}>
      {features.map((feature, index) => (
        <article key={feature.title}>
          <p>{String(index + 1).padStart(2, "0")}</p>
          <div>
            <div>
              <h3>{feature.title}</h3>
              <ImplementationBadge state={feature.state} />
            </div>
            <p>{feature.description}</p>
            {feature.metadata ? (
              <ul aria-label={`${feature.title} details`}>
                {feature.metadata.map((metadata) => (
                  <li key={metadata}>{metadata}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
