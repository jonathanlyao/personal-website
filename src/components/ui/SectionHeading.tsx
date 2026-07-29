type SectionHeadingProps = {
  number: string;
  label: string;
  title?: string;
  description?: string;
};

export function SectionHeading({
  number,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
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
