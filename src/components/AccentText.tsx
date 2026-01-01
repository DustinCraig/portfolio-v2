"use client";

import { ReactNode } from "react";

interface AccentTextProps {
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

export default function AccentText({
  children,
  className = "",
  color = "primary",
}: AccentTextProps) {
  const colors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <span className={`${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
