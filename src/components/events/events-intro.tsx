"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import MagneticButton from "~/components/magnetic-button";

export default function EventsIntro() {
  const t = useTranslations("eventsIntro");

  return (
    <section className="text-text mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-4xl font-black tracking-tighter uppercase md:text-6xl"
      >
        {t("heading")}
      </motion.h2>

      <div className="flex flex-col gap-8">
        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-text/80 text-xl leading-relaxed font-medium md:text-2xl"
        >
          {t("paragraphs.0")}
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-text/80 text-xl leading-relaxed font-medium md:text-2xl"
        >
          {t("paragraphs.1")}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-16"
      >
        <a
          href="https://www.eventbrite.com/o/83120236073?aff=ebdsshandroid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagneticButton>
            <div className="bg-primary text-background hover:bg-secondary rounded-full px-10 py-5 text-lg font-bold shadow-lg transition-colors">
              {t("button")}
            </div>
          </MagneticButton>
        </a>
      </motion.div>
    </section>
  );
}
