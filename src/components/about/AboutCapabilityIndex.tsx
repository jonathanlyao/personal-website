import { aboutPage } from "@/data/about";

export function AboutCapabilityIndex() {
  return (
    <div className="about-capability-index">
      {aboutPage.capabilities.map((capability, index) => (
        <article key={capability.label}>
          <p>{String(index + 1).padStart(2, "0")}</p>
          <div>
            <h3>{capability.label}</h3>
            <p>{capability.description}</p>
            <ul aria-label={`${capability.label} examples`}>
              {capability.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
