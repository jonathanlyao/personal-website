import type { SkillGroup } from "@/types/resume";

export function SkillIndex({ groups }: { groups: readonly SkillGroup[] }) {
  return (
    <dl className="resume-skill-index">
      {groups.map((group) => (
        <div key={group.label}>
          <dt>{group.label}</dt>
          <dd>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
