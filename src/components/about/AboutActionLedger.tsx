import Link from "next/link";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";

type ActionItem = {
  label?: string;
  title?: string;
  description: string;
  action: string;
  href: string;
};

export function AboutActionLedger({
  items,
  variant,
}: {
  items: readonly ActionItem[];
  variant: "current" | "explore";
}) {
  return (
    <ol className={`about-action-ledger about-action-ledger--${variant}`}>
      {items.map((item, index) => (
        <li key={item.href}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title ?? item.label}</h3>
            <p>{item.description}</p>
          </div>
          <Link href={item.href}>
            <span>{item.action}</span>
            <TechnicalIcon name="arrow-right" size={16} />
          </Link>
        </li>
      ))}
    </ol>
  );
}
