"use client";

import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/";
import Project from "./components/Project";

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
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
