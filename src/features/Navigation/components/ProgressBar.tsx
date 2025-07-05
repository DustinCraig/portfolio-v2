"use client";

import { motion } from "framer-motion";
import { sections } from "@/lib/data";
import { useNavigation } from "../NavigationContext";

export default function ProgressBar() {
  const { isVisible, activeSection } = useNavigation();
  const progressValue =
    (sections.findIndex((s) => s.id === activeSection) + 1) / sections.length;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-800/20 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-green-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progressValue }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.8,
        }}
        style={{
          transformOrigin: "0%",
        }}
      />
    </motion.div>
  );
}
