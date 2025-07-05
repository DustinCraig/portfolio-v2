import type { ReactNode } from "react";
import { createContext, useState, useContext } from "react";
import { sections, SectionId } from "@/lib/data";

export type NavigationContextType = {
  activeSection: SectionId;
  setActiveSection: (val: SectionId) => void;
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null
);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(sections[0].id);

  const value = {
    isVisible,
    setIsVisible,
    activeSection,
    setActiveSection,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const navigationContext = useContext(NavigationContext);
  if (!navigationContext) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return navigationContext;
};
