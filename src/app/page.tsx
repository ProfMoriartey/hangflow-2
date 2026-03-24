"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { setTheme } = useTheme();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Mascot Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
        <Image
          src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc4jslxI0tGQkHWUzc08Cj7D2x6uPNni9bYwlM"
          alt="Hangflow Mascot"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute top-8 left-8 z-10">
        <span className="text-2xl font-bold tracking-tight">Hangflow</span>
      </div>

      {/* Temporary Theme Toggle for testing */}
      <div className="absolute top-8 right-8 z-10 flex gap-2">
        <button
          onClick={() => setTheme("light")}
          className="border-foreground/20 rounded border p-2 text-sm"
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="border-foreground/20 rounded border p-2 text-sm"
        >
          Dark
        </button>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 mb-12 text-center text-6xl font-black tracking-tighter uppercase md:text-9xl"
      >
        Let's flow together
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="z-10 flex items-center gap-4"
      >
        <button className="bg-foreground text-background rounded-full px-10 py-4 font-bold transition-transform hover:scale-105">
          Events
        </button>

        <div className="flex gap-3">
          <button className="bg-foreground/10 hover:bg-foreground/20 flex h-14 w-14 items-center justify-center rounded-full transition-colors">
            IG
          </button>
          <button className="bg-foreground/10 hover:bg-foreground/20 flex h-14 w-14 items-center justify-center rounded-full transition-colors">
            TW
          </button>
          <button className="bg-foreground/10 hover:bg-foreground/20 flex h-14 w-14 items-center justify-center rounded-full transition-colors">
            LI
          </button>
        </div>
      </motion.div>
    </section>
  );
}
