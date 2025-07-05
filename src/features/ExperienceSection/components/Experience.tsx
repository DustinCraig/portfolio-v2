"use client";
import type { Experience } from "@/lib/data";
import { motion } from "framer-motion";
import { GlassCard } from "@/components";

type ExperienceProps = {
  exp: Experience;
};

export default function Experience({ exp }: ExperienceProps) {
  return (
    <GlassCard animation="fadeInLeft">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
          <p className="text-primary font-semibold">{exp.company}</p>
        </div>
        <div className="text-muted font-mono text-sm md:text-right">
          {exp.period}
        </div>
      </div>
      <p className="text-body mb-6 leading-relaxed">{exp.description}</p>

      <ul className="space-y-2">
        {exp.achievements.map((achievement, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="list-item"
          >
            <span className="list-bullet">▸</span>
            <span>{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </GlassCard>
  );
}
