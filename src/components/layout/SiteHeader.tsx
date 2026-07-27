import { navigation, siteConfig } from "@/data/site";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-identity" href="#top" aria-label="Jonathan Lee, home">
          <strong>{siteConfig.name}</strong>
          <span>{siteConfig.title}</span>
        </a>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}
