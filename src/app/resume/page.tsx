import type { Metadata } from "next";
import { ExperienceEntry, AdditionalExperienceEntry } from "@/components/resume/ExperienceEntry";
import { ProjectEntry } from "@/components/resume/ProjectEntry";
import { ResumePageHeader } from "@/components/resume/ResumePageHeader";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { SkillIndex } from "@/components/resume/SkillIndex";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import { resumeData } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Lee Yao",
  description:
    "Web résumé for Lee Yao, a New York–based Data Engineer and Analytics Engineer working with Python, SQL, Snowflake, dbt, Airflow, AWS, and Power BI.",
  openGraph: {
    title: "Resume | Lee Yao",
    description:
      "Experience, skills, data engineering projects, education, and credentials for Lee Yao.",
    type: "website",
  },
};

export default function ResumePage() {
  return (
    <main className="resume-page" id="top">
      <ResumePageHeader data={resumeData} />

      <div className="resume-page__body">
        <ResumeSection id="summary" number="01" title="Summary">
          <p className="resume-summary">{resumeData.summary}</p>
        </ResumeSection>

        <ResumeSection id="skills" number="02" title="Skills">
          <SkillIndex groups={resumeData.skills} />
        </ResumeSection>

        <ResumeSection id="experience" number="03" title="Experience">
          <div className="resume-entry-list">
            {resumeData.experience.map((experience) => (
              <ExperienceEntry
                experience={experience}
                key={`${experience.organization}-${experience.role}`}
              />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection
          id="additional-experience"
          number="04"
          title="Additional Experience"
        >
          <div className="resume-entry-list">
            {resumeData.additionalExperience.map((experience) => (
              <AdditionalExperienceEntry
                experience={experience}
                key={experience.title}
              />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection
          id="projects"
          number="05"
          title="Selected Data Engineering & Analytics Projects"
        >
          <div className="resume-entry-list">
            {resumeData.projects.map((project, index) => (
              <ProjectEntry project={project} index={index} key={project.title} />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="education" number="06" title="Education">
          <div className="resume-entry-list">
            {resumeData.education.map((education) => (
              <article
                className="resume-entry resume-entry--compact"
                key={education.institution}
              >
                <header className="resume-entry__heading">
                  <div>
                    <p className="resume-entry__organization">
                      {education.institution}
                    </p>
                    <h3>{education.degree}</h3>
                  </div>
                  <p className="resume-entry__dates">
                    {education.graduationDate}
                  </p>
                </header>
                <p>{education.location}</p>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="certification" number="07" title="Certification">
          <div className="resume-entry-list">
            {resumeData.certifications.map((certification) => (
              <article
                className="resume-entry resume-entry--compact resume-certification"
                key={certification.title}
              >
                <header className="resume-entry__heading">
                  <h3>
                    {certification.credentialUrl ? (
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-print-url
                      >
                        <span>{certification.title}</span>
                        <TechnicalIcon name="external-link" size={16} />
                        <span className="visually-hidden">
                          Opens in a new tab
                        </span>
                      </a>
                    ) : (
                      certification.title
                    )}
                  </h3>
                  {certification.expires ? (
                    <p className="resume-entry__dates">
                      {certification.expires}
                    </p>
                  ) : null}
                </header>
              </article>
            ))}
          </div>
        </ResumeSection>

        <div className="resume-page__return">
          <EditorialButton href="/#selected-work" variant="secondary">
            View Selected Work
          </EditorialButton>
        </div>
      </div>
    </main>
  );
}
