import { siteConfig } from "@/data/site";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <span>
            <strong>{siteConfig.brand}</strong>
            <small>{siteConfig.attribution}</small>
          </span>
          <span>{siteConfig.title}</span>
        </div>
        <p>Built with Next.js</p>
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <TechnicalIcon name="arrow-up" size={18} />
        </a>
      </div>
    </footer>
  );
}
