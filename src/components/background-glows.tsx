// "use client";

// import { useEffect } from "react";
// import { motion, useMotionValue, animate, useTransform } from "framer-motion";

// export default function BackgroundGlows() {
//   const hue1 = useMotionValue(0);
//   const hue2 = useMotionValue(120); // Start 120 deg apart (Cyan area)
//   const hue3 = useMotionValue(240); // Start 240 deg apart (Magenta area)

//   // Fast hue shifting for dynamic color changes
//   useEffect(() => {
//     const controls1 = animate(hue1, [0, 360], {
//       duration: 12,
//       repeat: Infinity,
//       ease: "linear",
//     });
//     const controls2 = animate(hue2, [120, 480], {
//       duration: 15,
//       repeat: Infinity,
//       ease: "linear",
//     });
//     const controls3 = animate(hue3, [240, 600], {
//       duration: 10,
//       repeat: Infinity,
//       ease: "linear",
//     });
//     return () => {
//       controls1.stop();
//       controls2.stop();
//       controls3.stop();
//     };
//   }, [hue1, hue2, hue3]);

//   // Define gradients that cycle colors
//   const gradient1 = useTransform(
//     hue1,
//     (h) => `radial-gradient(circle, hsl(${h}, 100%, 65%) 0%, transparent 80%)`,
//   );
//   const gradient2 = useTransform(
//     hue2,
//     (h) => `radial-gradient(circle, hsl(${h}, 100%, 75%) 0%, transparent 80%)`,
//   );
//   const gradient3 = useTransform(
//     hue3,
//     (h) => `radial-gradient(circle, hsl(${h}, 100%, 70%) 0%, transparent 80%)`,
//   );

//   // Random Movement Config (x/y positions across the screen)
//   const driftDuration = 40; // Very slow movement to prevent distraction

//   return (
//     <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
//       {/* Glow 1 - Drifts generally across the top and right */}
//       <motion.div
//         style={{
//           backgroundImage: gradient1,
//           backfaceVisibility: "hidden",
//           transform: "translateZ(0)",
//         }}
//         animate={{
//           x: ["0vw", "60vw", "40vw", "0vw"], // Wide path
//           y: ["0vh", "30vh", "-10vh", "0vh"],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: driftDuration,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         // Increased Opacity (30%) for better visibility in light mode
//         className="absolute h-[80vw] w-[80vw] rounded-full opacity-30 blur-[70px] md:h-[60vw] md:w-[60vw] md:blur-[100px] dark:opacity-20"
//       />

//       {/* Glow 2 - Drifts generally through the center-left and bottom */}
//       <motion.div
//         style={{
//           backgroundImage: gradient2,
//           backfaceVisibility: "hidden",
//           transform: "translateZ(0)",
//         }}
//         animate={{
//           x: ["70vw", "10vw", "90vw", "70vw"],
//           y: ["20vh", "70vh", "40vh", "20vh"],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: driftDuration + 5, // Slightly offset duration for complex mixing
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         // Center glows can be slightly lower opacity
//         className="absolute h-[90vw] w-[90vw] rounded-full opacity-25 blur-[80px] md:h-[70vw] md:w-[70vw] md:blur-[120px] dark:opacity-15"
//       />

//       {/* Glow 3 - Drifts generally along the bottom and center */}
//       <motion.div
//         style={{
//           backgroundImage: gradient3,
//           backfaceVisibility: "hidden",
//           transform: "translateZ(0)",
//         }}
//         animate={{
//           x: ["30vw", "10vw", "80vw", "30vw"],
//           y: ["70vh", "40vh", "90vh", "70vh"],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: driftDuration - 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute h-[70vw] w-[70vw] rounded-full opacity-30 blur-[60px] md:h-[50vw] md:w-[50vw] md:blur-[90px] dark:opacity-20"
//       />
//     </div>
//   );
// }
