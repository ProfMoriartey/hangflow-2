"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Control the bounciness and speed of the return animation
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    // Calculate distance from center of the element
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Multiply by a fraction to control the pull strength
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      style={{ x: springX, y: springY }}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}
