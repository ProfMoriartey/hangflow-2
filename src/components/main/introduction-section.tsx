"use client";

import { motion } from "framer-motion";
import MagneticButton from "~/components/magnetic-button";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export default function IntroductionSection() {
  const t = useTranslations("Introduction");

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
          {t("title")}
        </h2>

        <div className="text-text/80 flex max-w-2xl flex-col gap-4 text-base leading-relaxed md:text-lg">
          <p>{t("paragraphs.first")}</p>
          <p>{t("paragraphs.second")}</p>
          <p>{t("paragraphs.third")}</p>
        </div>

        <motion.div
          initial="idle"
          whileHover="revealed"
          className="relative mt-6 hidden h-16 w-48 cursor-crosshair items-center justify-center md:flex"
        >
         
            <Link href="/about" className="mt-4">
                      <MagneticButton>
                        <div className="bg-primary text-background hover:bg-accent rounded-full px-8 py-4 font-bold transition-colors">
                   {t("readMore")}
                        </div>
                      </MagneticButton>
                    </Link>

            
          </motion.div>
        </motion.div>
        <Link href="/about">
          <MagneticButton>
            <div className="bg-primary rounded-full px-8 py-3 text-sm font-bold text-background transition-colors md:hidden">
              {t("readMore")}
            </div>
          </MagneticButton>
        </Link>
     
    </section>
  );
}
