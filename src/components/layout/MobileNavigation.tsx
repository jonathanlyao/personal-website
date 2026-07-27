import { navigation } from "@/data/site";

export function MobileNavigation() {
  return (
    <details className="mobile-navigation">
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
            <li key={item.label}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
