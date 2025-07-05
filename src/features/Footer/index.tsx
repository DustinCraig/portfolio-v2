"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { personalInfo } from "@/lib/data";
import { blinkingCursor } from "@/lib/animations";
import { ActionButton, SocialIcon } from "@/components/";

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

          <div className="flex justify-center gap-8 mb-8">
            <SocialIcon
              href={personalInfo.github}
              label="GitHub"
              hoverColor="hover:text-white"
            >
              <SiGithub className="w-full h-full" />
            </SocialIcon>
            <SocialIcon
              href={personalInfo.linkedin}
              label="LinkedIn"
              hoverColor="hover:text-blue-400"
            >
              <SiLinkedin className="w-full h-full" />
            </SocialIcon>
          </div>

          <div className="terminal mx-auto max-w-lg">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-muted text-sm ml-2">~/portfolio</span>
            </div>
            <div className="terminal-body">
              <div className="flex items-center gap-2 mb-2">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">echo</span>
                <span className="terminal-comment">
                  &quot;Thanks for visiting!&quot;
                </span>
              </div>
              <div className="terminal-output">Thanks for visiting!</div>
              <div className="flex items-center gap-2 mt-4">
                <span className="terminal-prompt">$</span>
                <motion.span {...blinkingCursor} className="terminal-command">
                  |
                </motion.span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>
              {personalInfo.name}. Built with Next.js, Framer Motion & Tailwind
              CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
