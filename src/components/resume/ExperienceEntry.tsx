import type {
  ResumeAdditionalExperience,
  ResumeExperience,
} from "@/types/resume";

function DateRange({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  return (
    <p className="resume-entry__dates">
      {startDate} <span aria-hidden="true">—</span>{" "}
      <span className="visually-hidden">to</span> {endDate}
    </p>
  );
}

export function ExperienceEntry({
  experience,
}: {
  experience: ResumeExperience;
}) {
  const details = [experience.location, experience.employmentType].filter(
    Boolean,
  );

  return (
    <article className="resume-entry resume-experience">
      <header className="resume-entry__heading">
        <div>
          <p className="resume-entry__organization">
            {experience.organization}
          </p>
          <h3>{experience.role}</h3>
        </div>
        <DateRange
          startDate={experience.startDate}
          endDate={experience.endDate}
        />
      </header>
      {details.length ? (
        <p className="resume-entry__details">{details.join(" / ")}</p>
      ) : null}
      <ul className="resume-entry__bullets">
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export function AdditionalExperienceEntry({
  experience,
}: {
  experience: ResumeAdditionalExperience;
}) {
  return (
    <article className="resume-entry resume-entry--compact">
      <header className="resume-entry__heading">
        <h3>{experience.title}</h3>
        <DateRange
          startDate={experience.startDate}
          endDate={experience.endDate}
        />
      </header>
      <p>{experience.description}</p>
    </article>
  );
}
