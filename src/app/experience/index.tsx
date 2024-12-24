import Job from "./job";
import type { JobProps } from "./job";

const jobs: JobProps[] = [
  {
    title: "Frontend Software Engineer, Confluence Cloud Performance",
    company: "Atlassian",
    startDate: "Dec 2022",
    endDate: "Present",
    responsibilities: [
      "Responsible for the overall front end performance of Confluence Cloud", 
      "Owned the Confluence Cloud SSR service", 
      "Led the design and implemenentation of the React 16 to React 18 upgrade. This involved overseeing many different work streams and partnering with teams all across the organization. ",
    ],
    technologies: ["React", "TypeScript", "HTML", "CSS", "SQL", "Splunk", "NodeJS"]
  },
  {
    title: "Software Engineer",
    company: "Oculus Imaging, LLC",
    startDate: "May 2021",
    endDate: "Dec 2022",
    responsibilities: [
      "Developed, maintained, and provided documentation for an internal web application used to store and manage clinical trial data.",
      "Led the architecture, design and implementation of multiple new features within the core application to improve the user experience and data management.", 
      "Worked on a mobile app to efficiently analyze angiographic image data and perform 3D volume reconstruction using various image processing techniques and computer graphics algorithms."
    ],
    technologies: ["C#", ".NET", "Azure", "WebGL", "React", "TypeScript", "HTML", "CSS", "SQL"]
  },
  {
    title: "Software Engineer Intern",
    company: "Oculus Imaging, LLC",
    startDate: "Apr 2020",
    endDate: "May 2021",
  },
  {
    title: "Software Engineer Intern",
    company: "FLIR Systems",
    startDate: "Apr 2020",
    endDate: "May 2021",
    responsibilities: [
      "Spearheaded various software projects to either improve workflow of production or collect data to be used in manufacturing engineering.", 
      "Updated automation code to greatly improve reliability and maintainability of the production line systems.", 
      "Unified the data entry process for production tests to be done within the internal web application.",
      "Helped with refactoring the code behind the automation processes to improve reliability of data."
    ],
    technologies: ["C++", "C#", "Angular", "Python", ".NET", "HTML", "CSS", "JavaScript", "CouchDB"]
  },
  {
    title: "Software Engineer Intern",
    company: "Prevo Technologies, Inc.",
    startDate: "Jul 2018",
    endDate: "Dec 2018",
    responsibilities: [
      "Tasked with refreshing the look and feel of the company's main product: TechDoc.", 
      "Refreshed the menus, layout, icons and color-scheme which involved changes to CSS, HTML, JavaScript and Java servlets", 
    ],
    technologies: ["JavaScript", "HTML", "CSS"]
  },
]
export default function Experience() {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-10 underline decoration-blue-400">Experience</h1>
      {jobs.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </div>
  )
}