"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { personalInfo } from "@/lib/data";
import { ActionButton } from "@/components/";
import Terminal from "./components/Terminal";
import Socials from "./components/Socials";

export default function Footer() {
  return (
    <footer id="footer" className="py-16 px-6 border-t border-gray-800">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Let&apos;s Build Something Amazing Together
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <ActionButton
              href={`mailto:${personalInfo.email}`}
              variant="secondary"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Get In Touch
            </ActionButton>
          </div>
          <Socials />
          <Terminal />
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>{personalInfo.name}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
