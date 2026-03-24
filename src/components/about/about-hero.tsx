"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-32">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="bg-primary h-[80vw] w-[80vw] rounded-full blur-[100px] md:h-[40vw] md:w-[40vw]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-text z-10 text-center text-6xl font-black tracking-tighter uppercase md:text-9xl"
      >
        We Are Hangflow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-text/70 z-10 mt-8 max-w-2xl text-center text-lg md:text-2xl"
      >
        Empowering youth through creativity, safe spaces, and genuine
        connection.
      </motion.p>
    </section>
  );
}
