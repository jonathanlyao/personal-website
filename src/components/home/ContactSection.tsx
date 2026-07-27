import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import { contactMethods } from "@/data/site";

export function ContactSection() {
  return (
    <section
      className="indexed-section contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <SectionHeading number="06" label="Let’s Connect" inverted />
      <div className="section-content contact-section__content">
        <div className="contact-section__lead">
          <p className="eyebrow">OPEN CHANNEL / NEW YORK</p>
          <h2 id="contact-heading">
            Have a data engineering role, technical problem, or project worth
            discussing?
          </h2>
        </div>
        <ul className="contact-methods">
          {contactMethods.map((method) => (
            <li key={method.label}>
              {method.href ? (
                <a href={method.href}>
                  <ContactMethodContent method={method} />
                </a>
              ) : (
                <span
                  className="contact-methods__placeholder"
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <ContactMethodContent method={method} />
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="contact-section__note">
          Contact destinations are intentionally centralized and awaiting final
          approved links.
        </p>
      </div>
    </section>
  );
}

function ContactMethodContent({
  method,
}: {
  method: (typeof contactMethods)[number];
}) {
  return (
    <>
      <TechnicalIcon name={method.icon} size={27} />
      <span>
        <strong>{method.label}</strong>
        <small>{method.value}</small>
      </span>
      <span aria-hidden="true">↗</span>
    </>
  );
}
