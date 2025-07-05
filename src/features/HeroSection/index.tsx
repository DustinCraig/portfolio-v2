"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDownIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { personalInfo, techStack, sections } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  blinkingCursor,
} from "@/lib/animations";
import { GradientText, TechBadge } from "@/components/";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= personalInfo.title.length) {
        setTypedText(personalInfo.title.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById(sections[1].id);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <CodeBracketIcon className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <GradientText>Hi, I&apos;m</GradientText>{" "}
          <span className="text-white">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl text-body mb-8 font-mono"
        >
          <span className="terminal-command">$</span> whoami
          <br />
          <span className="text-primary">{typedText}</span>
          <motion.span {...blinkingCursor} className="terminal-command">
            |
          </motion.span>
        </motion.div>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          {...staggerContainer}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              {...staggerItem}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <TechBadge tech={tech} variant="default" iconSize="md" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 1, duration: 0.6 }}>
          <ChevronDownIcon
            className="w-8 h-8 text-muted mx-auto animate-bounce cursor-pointer hover:text-primary transition-colors duration-300"
            onClick={scrollToNextSection}
          />
        </motion.div>
      </div>
    </section>
  );
}
