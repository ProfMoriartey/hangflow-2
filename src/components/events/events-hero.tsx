"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "~/components/magnetic-button";
import { Link } from "~/i18n/routing";

export default function EventsHero() {
  const t = useTranslations("eventsHero");

  return (
    <section className="text-text relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <Image
          src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc3RI7bYPh6jNxtPuRfIwVcBCmzqH3kE1ey2iS"
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
        className="z-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Link href="/about">
          <MagneticButton>
            <div className="bg-primary text-background hover:bg-secondary block cursor-pointer rounded-full px-10 py-4 font-bold transition-colors">
              {t("buttons.schedule")}
            </div>
          </MagneticButton>
        </Link>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/hangfloww"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton>
              <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-center leading-14 transition-colors hover:text-white">
                {t("buttons.social.ig")}
              </div>
            </MagneticButton>
          </a>
          <a
            href="https://linkedin.com/company/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton>
              <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-center leading-14 transition-colors hover:text-white">
                {t("buttons.social.tw")}
              </div>
            </MagneticButton>
          </a>
          <a
            href="https://linkedin.com/company/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton>
              <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-center leading-14 transition-colors hover:text-white">
                {t("buttons.social.li")}
              </div>
            </MagneticButton>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
