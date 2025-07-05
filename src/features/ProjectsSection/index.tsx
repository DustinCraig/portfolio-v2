"use client";

import { motion } from "framer-motion";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { SiGithub } from "react-icons/si";
import { projects } from "@/lib/data";
import { SectionHeader, GlassCard, TechBadge } from "@/components/";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-base">
      <div className="container-base">
        <SectionHeader
          title="Projects"
          subtitle="Some things I've built recently"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-interactive">
                  {project.title}
                </h3>
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

              <p className="text-body mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <TechBadge key={i} tech={tech} variant="project" />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
