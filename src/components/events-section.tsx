"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "~/components/magnetic-button";

export default function EventsSection() {
  return (
    <section className="text-text mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center gap-16 overflow-hidden px-6 py-24 lg:flex-row">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 flex w-full flex-col items-start gap-6 lg:w-1/2"
      >
        <h2 className="text-3xl font-black tracking-tighter md:text-5xl">
          Check our events
        </h2>
        <p className="text-text/80 max-w-md text-lg leading-relaxed">
          We organize workshops, hangouts, and creative sessions tailored for
          you. Join the community to connect, learn new skills, and find your
          rhythm in a supportive space.
        </p>
        <Link href="/events" className="mt-4">
          <MagneticButton>
            <div className="bg-primary text-background hover:bg-secondary rounded-full px-8 py-4 font-bold transition-colors">
              View Events
            </div>
          </MagneticButton>
        </Link>
      </motion.div>

      {/* Overlapping Images Container */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative flex h-87.5 w-full items-center justify-center md:h-112.5 lg:w-1/2"
      >
        {/* Back Image */}
        <motion.div
          whileHover={{ rotate: -5, scale: 1.05, zIndex: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="border-background bg-secondary/20 absolute top-0 right-4 z-10 flex h-56 w-3/3 items-center justify-center overflow-hidden rounded-2xl border-2 shadow-2xl md:right-12 md:h-72"
        >
          <span className="text-text/50 text-sm font-bold">
            Image 1 Placeholder
          </span>
          {/* Add your actual image here later: */}
          <Image
            src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcAtf7M1UjR2IHVG4dfjMo3klgPY0LEFDsa9zW"
            alt="Event 1"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Front Image */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="border-background bg-primary/20 absolute bottom-0 left-4 z-20 flex h-56 w-3/3 items-center justify-center overflow-hidden rounded-2xl border-2 shadow-2xl md:left-8 md:h-72"
        >
          <span className="text-text/50 text-sm font-bold">
            Image 2 Placeholder
          </span>
          {/* Add your actual image here later: */}
          <Image
            src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcLYLBASMQHi7hMSqkoP6FOTnRVZWeUdurLjEz"
            alt="Event 2"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
