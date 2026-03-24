"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "~/components/magnetic-button";

export default function AboutHero() {
  const t = useTranslations("aboutHero");

  return (
    <section className="text-text relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <Image
          src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcBXIaVJNpKLdVeTZqUznCfyl1DtbPSWsRu6iF"
          alt={t("heading")}
          fill
          className="object-cover"
          priority
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center text-6xl font-black tracking-tighter uppercase md:text-9xl"
      >
        {t("heading")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-text/70 z-10 mt-6 mb-12 max-w-2xl text-center text-lg md:text-2xl"
      >
        {t("description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="z-10 flex items-center gap-4"
      >
        <MagneticButton>
          <div className="bg-primary text-background hover:bg-secondary cursor-pointer rounded-full px-10 py-4 font-bold transition-colors">
            {t("buttons.events")}
          </div>
        </MagneticButton>

        <div className="flex gap-3">
          <MagneticButton>
            <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white">
              {t("buttons.social.ig")}
            </div>
          </MagneticButton>
          <MagneticButton>
            <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white">
              {t("buttons.social.tw")}
            </div>
          </MagneticButton>
          <MagneticButton>
            <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white">
              {t("buttons.social.li")}
            </div>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
