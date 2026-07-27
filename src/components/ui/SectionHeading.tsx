type SectionHeadingProps = {
  number: string;
  label: string;
  title?: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({
  number,
  label,
  title,
  description,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading${inverted ? " section-heading--inverted" : ""}`}>
      <p className="section-heading__number">{number}</p>
      <div>
        <p className="section-heading__label">{label}</p>
        {title ? <h2 className="section-heading__title">{title}</h2> : null}
        {description ? (
          <p className="section-heading__description">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
