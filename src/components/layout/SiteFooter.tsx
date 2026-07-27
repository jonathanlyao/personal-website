import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <strong>{siteConfig.name}</strong>
          <span>{siteConfig.title}</span>
        </div>
        <p>Built with Next.js</p>
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
