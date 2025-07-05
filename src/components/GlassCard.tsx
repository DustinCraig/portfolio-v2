"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animation?: "fadeInLeft" | "fadeInUp" | "fadeInRight";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  animation = "fadeInLeft",
  delay = 0,
}: GlassCardProps) {
  const animations = {
    fadeInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    fadeInUp: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    fadeInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      {...selectedAnimation}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`relative ${className}`}
    >
      <div
        className={`glass-enhanced card-base ${
          hoverEffect ? "card-hover group" : ""
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}
