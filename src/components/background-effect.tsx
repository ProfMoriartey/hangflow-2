"use client";

import { motion } from "framer-motion";

export default function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary Blob - Reduced blur for performance */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
        className="bg-primary/10 absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full blur-[60px] md:blur-[80px]"
      />

      {/* Secondary Blob */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
        className="bg-accent/5 absolute top-[30%] -right-[10%] h-[80vw] w-[80vw] rounded-full blur-[70px] md:blur-[100px]"
      />
    </div>
  );
}
