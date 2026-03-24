"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const hue = useMotionValue(0);

  // Higher stiffness and lower damping for faster movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Color cycle logic
  useEffect(() => {
    const controls = animate(hue, [0, 450], {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    });
    return controls.stop;
  }, [hue]);

  const backgroundColor = useTransform(hue, (h) => `hsl(${h}, 100%, 60%)`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of the element size (150px)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
        backgroundColor,
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none fixed inset-0 z-30 h-75 w-75 rounded-full blur-[80px]"
    />
  );
}
