"use client";

import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/";
import Experience from "./components/Experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-base">
      <div className="container-narrow">
        <SectionHeader title="Experience" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Experience exp={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
