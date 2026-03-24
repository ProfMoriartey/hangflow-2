"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="text-text mx-auto w-full max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left Column: Email Focus */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-4xl font-black tracking-tighter uppercase md:text-5xl">
              Contact Us
            </h2>
            <p className="text-text/70 mb-8 max-w-md text-lg">
              If you want to contact us, please reach out via email. This is the
              most reliable way to get a response from our team.
            </p>

            <motion.a
              href="mailto:hello@hangflow.fi"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-text/5 border-text/10 hover:border-primary/30 group inline-flex items-center gap-4 rounded-2xl border p-6 transition-all"
            >
              <div className="bg-primary text-background flex h-12 w-12 items-center justify-center rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <span className="text-text/40 mb-1 block text-xs font-bold tracking-widest uppercase">
                  Send an email
                </span>
                <span className="text-text group-hover:text-primary text-xl font-black transition-colors md:text-2xl">
                  hello@hangflow.fi
                </span>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="border-text/5 bg-text/5 h-100 w-full overflow-hidden rounded-3xl border-4 shadow-2xl lg:h-125"
        >
          <iframe
            src="http://googleusercontent.com/maps.google.com/3"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
