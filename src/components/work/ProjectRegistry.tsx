import { EditorialButton } from "@/components/ui/EditorialButton";
import type { PortfolioProject } from "@/types/content";
import { ProjectRegistryItem } from "./ProjectRegistryItem";

export function ProjectRegistry({
  projects,
}: {
  projects: readonly PortfolioProject[];
}) {
  return (
    <section className="work-index" aria-labelledby="work-index-heading">
      <div className="work-index__heading">
        <h2 className="visually-hidden" id="work-index-heading">
          Project registry
        </h2>
        <p>PROJECT REGISTRY / DATA ENGINEERING / ANALYTICS ENGINEERING</p>
        <p>{String(projects.length).padStart(2, "0")} SYSTEMS</p>
      </div>
      <ol className="project-registry">
        {projects.map((project) => (
          <ProjectRegistryItem project={project} key={project.id} />
        ))}
      </ol>
      <div className="work-page__return">
        <EditorialButton href="/" variant="secondary">
          Return to Homepage
        </EditorialButton>
      </div>
    </section>
  );
}
