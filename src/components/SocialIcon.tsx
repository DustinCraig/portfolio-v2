"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialIconProps {
  children: ReactNode;
  href: string;
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  hoverColor?: string;
}

export default function SocialIcon({
  children,
  href,
  label,
  className = "",
  size = "md",
  hoverColor = "hover:text-white",
}: SocialIconProps) {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const rotation = Math.random() > 0.5 ? 5 : -5;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.2, rotate: rotation }}
      className={`text-gray-400 transition-colors ${hoverColor} ${className}`}
    >
      <div className={sizeClasses[size]}>{children}</div>
    </motion.a>
  );
}
