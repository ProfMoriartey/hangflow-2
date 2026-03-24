"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("aboutSection");

  // Create an array of keys [0, 1, 2, 3, 4, 5, 6] to map through the translations
  const paragraphKeys = ["0", "1", "2", "3", "4", "5", "6"] as const;

  return (
    <section className="text-text relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 md:flex-row md:gap-24 md:py-40">
      {/* Left Column: Sticky Title */}
      <div className="w-full md:w-1/3">
        <div className="sticky top-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl leading-tight font-black tracking-tighter uppercase md:text-6xl"
          >
            {t("heading")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-primary mt-8 h-1 w-24 origin-left"
          />
        </div>
      </div>

      {/* Right Column: Paragraphs */}
      <div className="flex w-full flex-col gap-8 md:w-2/3 md:gap-12">
        {paragraphKeys.map((key, index) => (
          <motion.p
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="text-text/80 text-lg leading-relaxed font-medium md:text-2xl"
          >
            {t(`paragraphs.${key}`)}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
