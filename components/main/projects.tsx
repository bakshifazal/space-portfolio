import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-14 md:py-20 text-center">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 max-w-7xl">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
