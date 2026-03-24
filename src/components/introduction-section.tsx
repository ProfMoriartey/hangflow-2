"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "~/components/magnetic-button";

export default function IntroductionSection() {
  return (
    <section className="text-text mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-8 px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl leading-tight font-black tracking-tighter md:text-5xl">
          What is Hangflow ry?
        </h2>

        <div className="text-text/80 flex max-w-2xl flex-col gap-4 text-base leading-relaxed md:text-lg">
          <p>
            Hangflow is a community-driven youth organization dedicated to
            creating safe, engaging, and creative spaces for young people. We
            believe in the power of connection and self-expression.
          </p>
          <p>
            Our activities range from organizing local events to providing
            platforms for emerging talents. We focus on building a supportive
            network where everyone can find their rhythm and flow.
          </p>
          <p>
            Whether you are looking to learn new skills, meet like-minded peers,
            or simply hang out in a welcoming environment, Hangflow provides the
            structure and freedom to make it happen.
          </p>
        </div>

        {/* Interactive Clue & Hidden Button */}
        <motion.div
          initial="idle"
          whileHover="revealed"
          className="relative mt-6 flex h-16 w-48 cursor-crosshair items-center justify-center"
        >
          {/* Subtle Visual Cue */}
          <motion.div
            variants={{
              idle: { opacity: 0.6, scale: 1 },
              revealed: { opacity: 0, scale: 0.5 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center gap-2"
          >
            <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase opacity-70">
              Flow
            </span>
          </motion.div>

          {/* Hidden "Read more" Button */}
          <motion.div
            variants={{
              idle: {
                opacity: 0,
                y: 10,
                filter: "blur(4px)",
                pointerEvents: "none",
              },
              revealed: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                pointerEvents: "auto",
              },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute"
          >
            <Link href="/about">
              <MagneticButton>
                <div className="bg-text text-background hover:bg-accent rounded-full px-8 py-3 text-sm font-bold transition-colors hover:text-white">
                  Read more
                </div>
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
