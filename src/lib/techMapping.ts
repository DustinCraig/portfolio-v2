import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiAmazon,
  SiJavascript,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiRedis,
  SiGraphql,
  SiApachecouchdb,
  SiElectron,
  SiAngular,
  SiExpress,
  SiNestjs,
  SiDotnet,
} from "react-icons/si";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export interface TechInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  color: string;
}

// Comprehensive mapping of technology names to their icons and colors
export const techMapping: Record<string, TechInfo> = {
  // Frontend Frameworks & Libraries
  React: { icon: SiReact, name: "React", color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  Angular: { icon: SiAngular, name: "Angular", color: "#DD0031" },

  // Languages
  TypeScript: { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  JavaScript: { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  Python: { icon: SiPython, name: "Python", color: "#3776AB" },

  // Styling
  "Tailwind CSS": {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  Tailwind: { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },

  // Backend & Runtime
  "Node.js": { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  Express: { icon: SiExpress, name: "Express", color: "#FFFFFF" },
  NestJS: { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  ".NET": { icon: SiDotnet, name: ".NET", color: "#FFFFF" },
  Electron: { icon: SiElectron, name: "Electron", color: "#FFFFFF" },

  // Databases
  CouchDB: { icon: SiApachecouchdb, name: "CouchDB", color: "#FFFFFF" },
  PostgreSQL: { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  Redis: { icon: SiRedis, name: "Redis", color: "#DC382D" },

  // APIs & Data
  GraphQL: { icon: SiGraphql, name: "GraphQL", color: "#E10098" },

  // DevOps & Cloud
  Docker: { icon: SiDocker, name: "Docker", color: "#2496ED" },
  AWS: { icon: SiAmazon, name: "AWS", color: "#FF9900" },
  Azure: { icon: CodeBracketIcon, name: "Azure", color: "#FFFFFF" },

  // Tools & Others
  Git: { icon: SiGit, name: "Git", color: "#F05032" },
  Figma: { icon: SiFigma, name: "Figma", color: "#F24E1E" },
};

// Helper function to get tech info by name
export const getTechInfo = (techName: string): TechInfo => {
  return (
    techMapping[techName] || {
      icon: CodeBracketIcon,
      name: techName,
      color: "#6B7280", // Gray color for unknown techs
    }
  );
};

// Helper function to get all available tech options
export const getAllTechOptions = (): TechInfo[] => {
  return Object.values(techMapping);
};
