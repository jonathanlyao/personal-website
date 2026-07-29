import { aboutPage } from "@/data/about";
import { projectMedia } from "@/data/projectMedia";
import { ProjectVisual } from "@/components/ui/ProjectVisual";

export function AboutPageHeader() {
  return (
    <header className="about-page__header" data-reveal="introduction">
      <p className="about-page__marker">ABOUT / 01</p>
      <div className="about-page__header-grid">
        <div className="about-page__introduction">
          <p className="eyebrow">RAW TO RELIABLE / {aboutPage.eyebrow}</p>
          <h1>{aboutPage.title}</h1>
          <p className="about-page__brand-principle">
            {aboutPage.brandPrinciple}
          </p>
          <p className="about-page__statement">
            {aboutPage.supportingStatement}
          </p>
        </div>
        <ProjectVisual
          {...projectMedia.aboutPortrait}
          className="about-page__portrait"
          sizes="(max-width: 900px) calc(100vw - 2rem), 360px"
        />
        <dl className="about-page__metadata" aria-label="Professional profile">
          <div>
            <dt>Based in</dt>
            <dd>{aboutPage.metadata.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>
              <ul>
                {aboutPage.metadata.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Currently</dt>
            <dd>
              <ul>
                {aboutPage.metadata.current.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
