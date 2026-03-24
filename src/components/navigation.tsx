"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
      <button
        onClick={toggleMenu}
        className="bg-text text-background fixed top-8 right-8 z-50 rounded-full px-8 py-3 font-bold tracking-widest uppercase transition-transform hover:scale-105"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="bg-background fixed inset-0 z-40 flex flex-col items-center justify-center"
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
              <span>IG</span>
              <span>TW</span>
              <span>LI</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
