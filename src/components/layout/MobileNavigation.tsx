"use client";

import { useRef } from "react";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import { navigation } from "@/data/site";
import { NavigationLink } from "./NavigationLink";

export function MobileNavigation() {
  const navigationRef = useRef<HTMLDetailsElement>(null);

  function closeNavigation() {
    if (navigationRef.current) {
      navigationRef.current.open = false;
    }
  }

  return (
    <details
      className="mobile-navigation"
      ref={navigationRef}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeNavigation();
        }
      }}
    >
      <summary className="mobile-navigation__trigger">
        <span>Menu</span>
        <span className="mobile-navigation__icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </summary>
      <nav aria-label="Mobile navigation" className="mobile-navigation__panel">
        <ol>
          {navigation.map((item, index) => (
            <li key={item.label} onClick={closeNavigation}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <NavigationLink href={item.href}>
                <span>{item.label}</span>
                <TechnicalIcon name="arrow-right" size={18} />
              </NavigationLink>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
