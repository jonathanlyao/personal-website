import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import { MobileNavigation } from "./MobileNavigation";
import { NavigationLink } from "./NavigationLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-identity"
          href="/"
          aria-label={`${siteConfig.brand}, ${siteConfig.attribution}, home`}
        >
          <span className="site-identity__brand">
            <strong>{siteConfig.brand}</strong>
            <span>{siteConfig.attribution}</span>
          </span>
          <span className="site-identity__role">{siteConfig.title}</span>
        </Link>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.label}>
                <NavigationLink href={item.href}>{item.label}</NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}
