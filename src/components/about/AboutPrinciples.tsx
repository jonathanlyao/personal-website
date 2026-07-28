import { aboutPage } from "@/data/about";

export function AboutPrinciples() {
  return (
    <ol className="about-principles">
      {aboutPage.principles.map((principle, index) => (
        <li key={principle.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
