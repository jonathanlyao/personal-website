import type { ReactNode } from "react";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";

type EditorialButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "text";
  external?: boolean;
};

export function EditorialButton({
  href,
  children,
  variant = "primary",
  external = false,
}: EditorialButtonProps) {
  return (
    <a
      className={`editorial-button editorial-button--${variant}`}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span>{children}</span>
      <TechnicalIcon
        name={external ? "external-link" : "arrow-right"}
        size={16}
      />
      {external ? (
        <span className="visually-hidden">Opens in a new tab</span>
      ) : null}
    </a>
  );
}
