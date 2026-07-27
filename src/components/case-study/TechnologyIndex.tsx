import { ImplementationBadge } from "@/components/case-study/ImplementationBadge";
import type { TechnologyGroup } from "@/types/caseStudy";

export function TechnologyIndex({
  groups,
}: {
  groups: readonly TechnologyGroup[];
}) {
  return (
    <dl className="technology-index">
      {groups.map((group) => (
        <div key={group.label}>
          <dt>{group.label}</dt>
          <dd>
            <ul>
              {group.technologies.map((technology) => (
                <li key={technology.name}>
                  <span>{technology.name}</span>
                  <ImplementationBadge state={technology.state} />
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
