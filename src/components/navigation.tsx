"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Invisible Header Container */}
      <header className="pointer-events-none fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8">
        {/* Top Left: Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="pointer-events-auto flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="Hangflow Logo"
            width={160}
            height={40}
            className="h-8 w-auto object-contain md:h-10"
            priority
          />
        </Link>

        {/* Top Right: Animated Burger Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="bg-text pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 md:h-14 md:w-14"
        >
          <motion.span
            animate={{
              y: isOpen ? 0 : -4,
              rotate: isOpen ? 45 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-accent absolute block h-0.5 w-5 rounded-full md:w-6"
          />
          <motion.span
            animate={{
              y: isOpen ? 0 : 4,
              rotate: isOpen ? -45 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-accent absolute block h-0.5 w-5 rounded-full md:w-6"
          />
        </button>
      </header>

      {/* Your Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="bg-accent pointer-events-auto fixed inset-0 z-40 flex flex-col items-center justify-center"
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
                      {link.title}
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
              <Link href="#" className="hover:text-primary transition-colors">
                IG
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                TW
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                LI
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
