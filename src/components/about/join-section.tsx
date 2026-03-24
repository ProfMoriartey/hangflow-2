"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "~/components/magnetic-button";

export default function JoinSection() {
  const t = useTranslations("joinSection");

  return (
    <section className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden px-6 py-24 text-center md:py-32">
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mb-8 h-36 w-36 md:h-56 md:w-56"
      >
        <Image
          src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcl9jlzvW3Lzwf7FGqgD5jvTyBSRE9ruAUXnib"
          alt="Hangflow Mascot"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-text mb-10 text-4xl font-black tracking-tighter uppercase md:text-5xl"
      >
        {t("heading")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Link
          href="https://www.eventbrite.fi/o/hangflow-ry-83120236073"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagneticButton>
            <div className="bg-accent text-background rounded-full px-10 py-5 text-lg font-bold shadow-xl transition-transform hover:scale-105">
              {t("button")}
            </div>
          </MagneticButton>
        </Link>
      </motion.div>
    </section>
  );
}
