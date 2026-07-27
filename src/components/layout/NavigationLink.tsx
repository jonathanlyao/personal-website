"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type NavigationLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function NavigationLink({
  href,
  children,
  onClick,
  ...props
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const resolvedHref =
    href.startsWith("#") && !isHomepage ? `/${href}` : href;
  const isRouteLink = href.startsWith("/") && !href.includes("#");
  const isActive = isRouteLink && pathname === href;

  return (
    <Link
      {...props}
      href={resolvedHref}
      aria-current={isActive ? "page" : undefined}
      onClick={(event) => {
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
