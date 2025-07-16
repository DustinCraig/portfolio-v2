import {
  HomeIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const personalInfo = {
  name: "Dustin Craig",
  title: "Software Engineer",
  description:
    "I craft beautiful, performant web experiences with modern technologies. Passionate about clean code, user experience, computer graphics, and bringing ideas to life through code.",
  email: "dustincraig16@gmail.com",
  github: "https://github.com/DustinCraig",
  linkedin: "https://www.linkedin.com/in/dustin-craig/",
  resume: "/resume.pdf",
};

export const techStack = [
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Python",
  "Docker",
  "AWS",
  "Next.js",
  ".NET",
  "GraphQL",
  "Git",
  "Figma",
  "CouchDB",
  "Redis",
  "PostgreSQL",
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Atlassian",
    period: "Dec 2022 - Present",
    description: "Confluence Cloud - Enterprise Experience / Performance ",
    achievements: [
      "Led the Confluence React 18 upgrade and subsequent rollout of concurrent rendering -- improving total blocking time (TBT) by nearly 30%",
      "Led the migration of over 1,000 tests from Enzyme to React Testing Library (RTL)",
      "Part of the team responsible for the Confluence Server Side Rendering (SSR) service which handles millions of requests per day",
      "Spiked, planned and rolled out various cross-functional performance and infrastructure improvements to the Confluence cloud front-end",
      "Mentored junior developers and provided deep pull request feedback",
    ],
  },
  {
    title: "Software Engineer",
    company: "Oculus Imaging, LLC",
    period: "Apr 2020 - Dec 2022",
    description:
      "Fullstack software engineer -- worked on web apps, mobile apps (React Native) and DevOps infrastructure",
    achievements: [
      "Developed user-facing and backend features for the internal clinical research web application",
      "Spearheaded the web app architecture and database design for a service allowing medical staff to approximate aneurysm volumes in the browser",
      "Devloped features for a mobile app to efficiently analyze angiographic image data and perform 3D volume reconstruction using various image processing techniques and computer graphics algorithms",
    ],
  },
  {
    title: "Software Engineer - Intern",
    company: "FLIR Systems",
    period: "Feb 2019 - Jan 2020",
    description:
      "Software Engineering internship with a focus on improving manufacturing engineering processes",
    achievements: [
      "Migrated the legacy Angular.js web application (used to gather manufacturing data) to modern Angular and Typescript",
      "Implemented features in the automation code to greatly improve data reliability, integrity and maintainability",
      "Spearheaded the effort behind unifying the data entry processes for production device tests to be conducted inside the internal web application instead of various Excel sheets, etc",
    ],
  },
  {
    title: "Software Engineer - Intern",
    company: "Prevo Technologies, Inc.",
    period: "Jul 2018 - Dec 2018",
    description:
      "Software Engineering internship with a focus on refreshing the look and feel of the company's main product: TechDoc",
    achievements: [
      "Refreshed the menus, layout, icons and color-scheme which involved changes to CSS, HTML, JavaScript and Java servlets",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "note-term",
    description:
      "A desktop markdown-based note taking application designed for jotting down todo's, ideas, etc. note-term was styled to have a retro, minimalistic feel",
    tech: ["React", "Node.js", "PostgreSQL", "Electron"],
    github: "https://github.com/DustinCraig/note-term-desktop",
    featured: true,
  },
  {
    title: "Paper in the Wind",
    description:
      "Unity game where you fly as a paper airplane in a randomly generated office environment",
    tech: ["C#", "Unity"],
    featured: true,
  },
  {
    title: "Computer Graphics Final Project",
    description:
      "First person atmospheric scene created from scratch featuring water reflectance, skybox, reltime fog, multiple light sources, etc",
    tech: ["WebGL", "JavaScript"],
    featured: false,
    github: "https://github.com/DustinCraig/GraphicsProject",
    demo: "https://dustincraig.github.io/GraphicsProject/",
    image: "/images/graphics_project.png",
  },
];

export type Section = {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const sections: Section[] = [
  { id: "hero", label: "Home", icon: HomeIcon },
  { id: "experience", label: "Experience", icon: BriefcaseIcon },
  { id: "projects", label: "Projects", icon: CodeBracketIcon },
  { id: "footer", label: "Contact", icon: EnvelopeIcon },
];

export type SectionId = (typeof sections)[number]["id"];
