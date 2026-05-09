import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categoryLabels, type Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/work/${project.id}`} className="block">
      <motion.article
        className="group h-full cursor-pointer overflow-hidden rounded-[26px] border border-white/80 bg-white/62 shadow-soft backdrop-blur-sm"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="relative h-56 overflow-hidden">
          <div className="image-placeholder absolute inset-0" />
          <img
            src={project.cover}
            alt={`${project.title} 封面`}
            className="relative z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.opacity = "0";
            }}
          />
          <div className="absolute left-4 top-4 z-20 rounded-full bg-white/82 px-3 py-1 text-xs text-ink/70 backdrop-blur">
            {categoryLabels[project.category]}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold leading-snug">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink/64">{project.shortDesc}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs text-ink/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
