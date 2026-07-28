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
              <a
                href={method.href}
                {...(method.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <ContactMethodContent method={method} />
              </a>
            </li>
          ))}
        </ul>
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
      <span className="technical-icon-frame technical-icon-frame--contact">
        <TechnicalIcon name={method.icon} size={25} />
      </span>
      <span>
        <strong>{method.label}</strong>
        <small>{method.value}</small>
      </span>
      <TechnicalIcon
        name={method.external ? "external-link" : "arrow-right"}
        size={17}
      />
      {method.external ? (
        <span className="visually-hidden">Opens in a new tab</span>
      ) : null}
    </>
  );
}
