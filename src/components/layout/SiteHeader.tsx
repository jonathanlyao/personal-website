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
          aria-label={`${siteConfig.name}, home`}
        >
          <strong>{siteConfig.name}</strong>
          <span className="site-identity__title-full">{siteConfig.title}</span>
          <span className="site-identity__title-mobile">
            {siteConfig.mobileTitle}
          </span>
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
