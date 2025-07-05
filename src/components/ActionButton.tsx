"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export default function ActionButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  external = false,
}: ActionButtonProps) {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  const buttonContent = (
    <motion.div
      className={`btn-base ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}
