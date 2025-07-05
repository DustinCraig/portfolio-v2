"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: "primary" | "secondary" | "accent";
}

export default function GradientText({
  children,
  className = "",
  gradient = "primary",
}: GradientTextProps) {
  const gradients = {
    primary: "bg-gradient-to-r from-blue-500 to-green-500",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-500",
    accent: "bg-gradient-to-r from-orange-500 to-red-500",
  };

  return (
    <span
      className={`bg-clip-text text-transparent ${gradients[gradient]} ${className}`}
    >
      {children}
    </span>
  );
}
