"use client";

import { motion } from "framer-motion";
import { getTechInfo } from "@/lib/techMapping";

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "project" | "accent";
  className?: string;
  showIcon?: boolean;
  iconSize?: "sm" | "md";
}

export default function TechBadge({
  tech,
  variant = "default",
  className = "",
  showIcon = true,
  iconSize = "sm",
}: TechBadgeProps) {
  const techInfo = getTechInfo(tech);
  const Icon = techInfo.icon;

  const variantClasses = {
    default: "badge-default",
    project: "badge-project",
    accent: "badge-accent",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
  };

  return (
    <motion.span
      className={`badge-base ${variantClasses[variant]} ${className}`}
      whileHover={variant === "default" ? { scale: 1.05 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {showIcon && (
        <Icon
          className={iconSizes[iconSize]}
          style={{ color: techInfo.color }}
        />
      )}
      {tech}
    </motion.span>
  );
}
