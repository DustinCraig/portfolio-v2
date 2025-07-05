import { motion } from "framer-motion";
import { useNavigation } from "../NavigationContext";

export default function KeyboardNavigationHint() {
  const { isVisible } = useNavigation();
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      transition={{ duration: 0.3, delay: 1 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div className="glass rounded-lg p-3 text-muted text-xs font-mono">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-accent">↑↓</span>
          <span>Navigate sections</span>
        </div>
      </div>
    </motion.div>
  );
}
