import { blinkingCursor } from "@/lib/animations";
import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <div className="terminal mx-auto max-w-lg">
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-muted text-sm ml-2">~/portfolio</span>
      </div>
      <div className="terminal-body">
        <div className="flex items-center gap-2 mb-2">
          <span className="terminal-prompt">$</span>
          <span className="terminal-command">echo</span>
          <span className="terminal-comment">
            &quot;Thanks for visiting!&quot;
          </span>
        </div>
        <div className="terminal-output">Thanks for visiting!</div>
        <div className="flex items-center gap-2 mt-4">
          <span className="terminal-prompt">$</span>
          <motion.span {...blinkingCursor} className="terminal-command">
            |
          </motion.span>
        </div>
      </div>
    </div>
  );
}
