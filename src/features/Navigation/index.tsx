"use client";

import { motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import { sections, SectionId } from "@/lib/data";
import ProgressBar from "./components/ProgressBar";
import KeyboardNavigationHint from "./components/KeyboardNavigationHint";
import { NavigationProvider, useNavigation } from "./NavigationContext";

function NavigationComponent() {
  const { activeSection, setActiveSection, isVisible, setIsVisible } =
    useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection("footer");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection, setIsVisible]);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navigateSection = useCallback(
    (direction: "up" | "down") => {
      const currentIndex = sections.findIndex(
        (section) => section.id === activeSection
      );
      let newIndex;

      if (direction === "up" && currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (direction === "down" && currentIndex < sections.length - 1) {
        newIndex = currentIndex + 1;
      } else {
        return;
      }

      scrollToSection(sections[newIndex].id);
    },
    [activeSection]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        navigateSection("up");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        navigateSection("down");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, navigateSection]);

  return (
    <>
      {/* Floating Navigation Dots */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 50,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <div className="flex flex-col gap-4 p-4 glass rounded-full">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative p-3 rounded-full transition-all duration-300 group focus-ring ${
                  isActive ? "bg-blue-500 text-white" : "btn-ghost"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />

                {/* Tooltip */}
                <motion.div
                  className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {section.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      <KeyboardNavigationHint />
      <ProgressBar />
    </>
  );
}

export default function Navigation() {
  return (
    <NavigationProvider>
      <NavigationComponent />
    </NavigationProvider>
  );
}
