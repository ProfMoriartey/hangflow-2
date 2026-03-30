"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Use resolvedTheme instead of theme
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents hydration mismatch
  if (!mounted) return null;

  // This will now correctly detect if the system preference is dark on first load
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="bg-text/5 border-text/10 hover:border-primary fixed right-8 bottom-8 z-50 flex h-10 w-20 cursor-pointer items-center rounded-full border-2 p-1 backdrop-blur-md transition-colors"
      aria-label="Toggle theme"
    >
      {/* Faded Background Icons */}
      <div className="pointer-events-none absolute inset-0 flex w-full items-center justify-between px-2">
        <Moon className="text-text/40 h-4 w-4" />
        <Sun className="text-text/40 h-4 w-4" />
      </div>

      {/* Sliding Active Indicator */}
      <motion.div
        className="bg-accent text-background relative z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-lg"
        // If isDark is true, x is 0 (Moon position). If false, x is 36 (Sun position).
        animate={{ x: isDark ? 0 : 36 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="h-4 w-4" strokeWidth={2.5} />
        ) : (
          <Sun className="h-4 w-4" strokeWidth={2.5} />
        )}
      </motion.div>
    </button>
  );
}
