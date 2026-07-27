import type { ReactNode } from "react";

type EditorialButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
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
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
