"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import MagneticButton from "~/components/magnetic-button";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const { setTheme } = useTheme();
  const t = useTranslations("Hero");

  return (
    <section className="text-text relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50">
        <Image
          src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc4jslxI0tGQkHWUzc08Cj7D2x6uPNni9bYwlM"
          alt={t("mascotAlt")}
          fill
          className="object-contain"
          priority
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 mb-12 text-center text-6xl font-black tracking-tighter uppercase md:text-9xl"
      >
        {t("title")}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="z-10 flex items-center gap-4"
      >
        <MagneticButton>
          <div className="bg-primary text-background hover:bg-secondary rounded-full px-10 py-4 font-bold transition-colors">
            {t("events")}
          </div>
        </MagneticButton>

        <div className="flex gap-3">
          <MagneticButton>
            <div className="bg-text/10 hover:bg-accent flex h-14 w-14 items-center justify-center rounded-full transition-colors hover:text-white">
              {t("socials.instagram")}
            </div>
          </MagneticButton>
          <MagneticButton>
            <div className="bg-text/10 hover:bg-accent flex h-14 w-14 items-center justify-center rounded-full transition-colors hover:text-white">
              {t("socials.twitter")}
            </div>
          </MagneticButton>
          <MagneticButton>
            <div className="bg-text/10 hover:bg-accent flex h-14 w-14 items-center justify-center rounded-full transition-colors hover:text-white">
              {t("socials.linkedin")}
            </div>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
