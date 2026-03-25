"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { BsInstagram } from "react-icons/bs";
import { CiFacebook, CiLinkedin } from "react-icons/ci";

const navLinks = [
  { key: "home", href: "/" },
  { key: "aboutUs", href: "/about" },
  { key: "events", href: "/events" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8"
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="pointer-events-auto z-50 flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc8crhK61yi4q3Ya7lATvfkQKgFBWjemutVwZr"
            alt={t("logoAlt")}
            width={160}
            height={160}
            className="h-16 w-auto object-contain md:h-32"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            aria-label={t("toggleMenu")}
            className="bg-text pointer-events-auto relative flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 md:h-14 md:w-14"
          >
            <motion.span
              animate={{ y: isOpen ? 0 : -6, rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-accent absolute block h-1 w-5 rounded-full md:w-7"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-accent absolute block h-1 w-5 rounded-full md:w-7"
            />
            <motion.span
              animate={{ y: isOpen ? 0 : 6, rotate: isOpen ? -45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-accent absolute block h-1 w-5 rounded-full md:w-7"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="bg-background pointer-events-auto fixed inset-0 z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6 md:gap-10">
              {navLinks.map((link, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * i,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-text hover:text-primary inline-block text-6xl font-black tracking-tighter uppercase transition-colors md:text-8xl"
                    >
                      {t(`links.${link.key}`)}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-text/50 absolute bottom-12 flex gap-6 text-sm font-bold tracking-widest uppercase"
            >
              <a
                href="https://www.instagram.com/hangfloww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white">
                  <BsInstagram size={28} strokeWidth={0.5} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/share/1CxzuFXuux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white">
                  <CiFacebook size={35} strokeWidth={1} />
                </div>
              </a>

              <a
                href="https://www.instagram.com/hangfloww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-text/10 hover:bg-accent flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white">
                  <CiLinkedin size={35} strokeWidth={1} />
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
