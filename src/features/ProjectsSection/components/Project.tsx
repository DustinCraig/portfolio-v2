"use client";

import type { Project } from "@/lib/data";
import { GlassCard, TechBadge } from "@/components";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { CommandLineIcon } from "@heroicons/react/24/outline";

type ProjectProps = {
  project: Project;
};

export default function Project({ project }: ProjectProps) {
  return (
    <GlassCard
      animation="fadeInUp"
      className={project.featured ? "md:col-span-2" : ""}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-interactive">{project.title}</h3>
        <div className="flex gap-3">
          {project?.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-social icon-hover"
            >
              <SiGithub className="w-5 h-5" />
            </motion.a>
          ) : (
            <></>
          )}

          {project?.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary icon-hover"
            >
              <CommandLineIcon className="w-5 h-5" />
            </motion.a>
          ) : (
            <></>
          )}
        </div>
      </div>

      <p className="text-body mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <TechBadge key={i} tech={tech} variant="project" />
        ))}
      </div>
    </GlassCard>
  );
}
