"use client";

import { motion } from "framer-motion";

export default function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Primary Blob */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-primary/10 absolute -top-[10%] -left-[10%] h-[50vw] w-[50vw] rounded-full blur-[120px]"
      />

      {/* Secondary Blob */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-accent/5 absolute top-[40%] -right-[10%] h-[60vw] w-[60vw] rounded-full blur-[150px]"
      />

      {/* Tertiary Blob */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-primary/5 absolute -bottom-[10%] left-[20%] h-[40vw] w-[40vw] rounded-full blur-[100px]"
      />
    </div>
  );
}
