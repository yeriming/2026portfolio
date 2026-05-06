import ProjectsList from "@/components/ProjectsList";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <section>
        <h1 className="page-title text-[clamp(2.1rem,4.2vw,3.2rem)] text-text-primary">Projects</h1>
      </section>

      <section className="mt-12">
        <ProjectsList projects={projects} />
      </section>
    </div>
  );
}
