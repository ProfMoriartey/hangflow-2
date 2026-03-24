"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "~/components/magnetic-button";

export default function EventsIntro() {
  return (
    <section className="text-text mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-4xl font-black tracking-tighter uppercase md:text-6xl"
      >
        Space to Create and Connect
      </motion.h2>

      <div className="flex flex-col gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-text/80 text-xl leading-relaxed font-medium md:text-2xl"
        >
          Our events are designed to be low-threshold spaces where you can show
          up exactly as you are. Whether it is a professional-led workshop or a
          casual evening hangout, the goal is always the same: providing a safe
          environment to explore new skills and meet like-minded people.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-text/80 text-xl leading-relaxed font-medium md:text-2xl"
        >
          We prioritize the needs of our community by letting the youth drive
          the schedule. From music production and digital art to simple coffee
          chats, every session is a chance to co-create something meaningful.
          Check the schedule below to find the next opportunity to join the
          flow.
        </motion.p>
      </div>

      {/* New Magnetic Button for External Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-16"
      >
        <Link
          href="https://your-external-events-site.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagneticButton>
            <div className="bg-primary text-background hover:bg-secondary rounded-full px-10 py-5 text-lg font-bold shadow-lg transition-colors">
              Check our upcoming event
            </div>
          </MagneticButton>
        </Link>
      </motion.div>
    </section>
  );
}
