import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold text-gray-900 text-center">Projects</h2>
      <p className="mt-2 text-center text-gray-600">
        A few things I&apos;ve built to sharpen my skills
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
