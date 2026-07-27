import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { currentFocus } from "@/data/site";

export function CurrentFocusSection() {
  return (
    <section
      className="indexed-section current-focus"
      aria-labelledby="current-focus-heading"
    >
      <SectionHeading number="02" label="Currently Building" />
      <div className="section-content">
        <div className="section-intro section-intro--split">
          <h2 id="current-focus-heading">Systems in motion.</h2>
          <p>
            A current ledger of platform work, product development, and focused
            technical study.
          </p>
        </div>
        <ol className="focus-ledger">
          {currentFocus.map((entry) => (
            <li key={entry.number}>
              <div className="focus-ledger__topline">
                <span className="focus-ledger__number">{entry.number}</span>
                <StatusLabel>{entry.status}</StatusLabel>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <span
                className="focus-ledger__arrow"
                aria-label={`${entry.title} details will be added in a future phase`}
              >
                <span aria-hidden="true">↗</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
