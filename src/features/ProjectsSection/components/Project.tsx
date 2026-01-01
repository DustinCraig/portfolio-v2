"use client";

import type { Project } from "@/lib/data";
import { GlassCard, TechBadge } from "@/components";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import ProjectImage from "./ProjectImage";

type ProjectProps = {
  project: Project;
};

export default function Project({ project }: ProjectProps) {
  return (
    <GlassCard
      animation="fadeInUp"
      className="h-full"
    >
      <div className="flex flex-col h-full">
        <ProjectImage src={project.image} title={project.title} />

        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-4">
            {project?.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social icon-hover opacity-60 hover:opacity-100"
                aria-label="GitHub Repository"
              >
                <SiGithub className="w-5 h-5" />
              </motion.a>
            )}

            {project?.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary icon-hover opacity-60 hover:opacity-100"
                aria-label="Live Demo"
              >
                <CommandLineIcon className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-body mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tech.map((tech, i) => (
            <TechBadge key={i} tech={tech} variant="project" />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
