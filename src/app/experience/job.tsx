"use client"

import { motion } from "framer-motion";

export type JobProps = {
  title: string;
  index?: number
  company: string;
  startDate: string;
  endDate: string;
  responsibilities?: string[];
  technologies?: string[];
}

export default function Job({ title, index, company, startDate, endDate, responsibilities, technologies }: JobProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1+(index || 0)*0.1 }}
      whileInView="visible"
      className="max-w-2x mx-auto p-6"
      key={index}
    >
      <div className="mb-8 border-b pb-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <h3 className="text-lg text-blue-400">{company}</h3>
          </div>
          <div>{startDate} - {endDate}</div>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold mb-2">{!!responsibilities?.length ? "Responsibilities" : ""}</h5>
          <ul className="list-disc pl-5 space-y-1">
            {responsibilities?.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold mb-2">{!!technologies?.length ? "Technologies" : ""}</h5>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((technology, index) => (
              <span 
                key={index} 
                className="bg-blue-500 px-3 py-1 rounded-full text-small text-gray-200 transition-all duration-200 cursor-default hover:scale-110 hover:bg-blue-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}