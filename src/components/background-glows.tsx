"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function BackgroundGlows() {
  const hue1 = useMotionValue(0);
  const hue2 = useMotionValue(120); // Start at a different color
  const hue3 = useMotionValue(240); // Start at a third color

  // Independent color cycles for complex gradients
  useEffect(() => {
    const controls1 = animate(hue1, [0, 360], {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    });
    const controls2 = animate(hue2, [120, 480], {
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    });
    const controls3 = animate(hue3, [240, 600], {
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    });
    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, [hue1, hue2, hue3]);

  // Create complex radial gradients that cycle
  const gradient1 = useTransform(
    hue1,
    (h) => `radial-gradient(circle, hsl(${h}, 100%, 60%) 0%, transparent 80%)`,
  );
  const gradient2 = useTransform(
    hue2,
    (h) => `radial-gradient(circle, hsl(${h}, 100%, 70%) 0%, transparent 80%)`,
  );
  const gradient3 = useTransform(
    hue3,
    (h) => `radial-gradient(circle, hsl(${h}, 100%, 65%) 0%, transparent 80%)`,
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blob 1: Top-Left */}
      <motion.div
        style={{
          backgroundImage: gradient1,
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] h-[60vw] w-[60vw] rounded-full opacity-10 blur-[80px]"
      />

      {/* Blob 2: Center-Right */}
      <motion.div
        style={{
          backgroundImage: gradient2,
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] -right-[15%] h-[70vw] w-[70vw] rounded-full opacity-15 blur-[90px]"
      />

      {/* Blob 3: Bottom-Left */}
      <motion.div
        style={{
          backgroundImage: gradient3,
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[15%] left-[20%] h-[50vw] w-[50vw] rounded-full opacity-10 blur-[80px]"
      />
    </div>
  );
}
