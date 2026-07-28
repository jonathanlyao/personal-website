import { ResumeActions } from "@/components/resume/ResumeActions";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import type { ResumeData } from "@/types/resume";

function ExternalProfileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <TechnicalIcon name="external-link" size={14} />
      <span className="visually-hidden">Opens in a new tab</span>
    </a>
  );
}

export function ResumePageHeader({ data }: { data: ResumeData }) {
  return (
    <header className="resume-page__header" data-reveal="introduction">
      <div className="resume-page__identity">
        <p className="eyebrow">RESUME / PROFESSIONAL RECORD</p>
        <p className="resume-page__print-name">{data.name}</p>
        <h1>Resume</h1>
        <p className="resume-page__descriptor">{data.professionalTitle}</p>
        <p className="resume-page__location">{data.location}</p>
      </div>

      <div className="resume-page__utility">
        <address className="resume-contact">
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={data.emailHref}>{data.email}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <ExternalProfileLink href={data.linkedinUrl}>
                  linkedin.com/in/leeyaodatafan
                </ExternalProfileLink>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <ExternalProfileLink href={data.githubUrl}>
                  github.com/jonathanlyao
                </ExternalProfileLink>
              </dd>
            </div>
            <div>
              <dt>Last updated</dt>
              <dd>{data.lastUpdated}</dd>
            </div>
          </dl>
        </address>
        <ResumeActions resumePdfUrl={data.resumePdfUrl} />
      </div>
    </header>
  );
}
