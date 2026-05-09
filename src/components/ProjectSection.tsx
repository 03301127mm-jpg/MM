import { projects, projectGroups } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="精选作品"
          subtitle="从文化故事、AI 影像、游戏叙事到线下体验，我尝试用不同形式完成创作表达。"
        />

        <div className="space-y-16">
          {projectGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-6 inline-flex rounded-full border border-sky/30 bg-white/70 px-4 py-2 text-sm font-medium text-ink/72">
                {group.title}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {projects
                  .filter((project) => project.category === group.category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
