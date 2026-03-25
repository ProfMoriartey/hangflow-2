"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contactSection");

  return (
    <section className="text-text mx-auto w-full max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-4xl font-black tracking-tighter uppercase md:text-5xl">
              {t("heading")}
            </h2>
            <p className="text-text/70 mb-8 max-w-md text-lg">
              {t("description")}
            </p>

            <motion.a
              href={`mailto:${t("emailAddress")}`}
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
                  {t("emailLabel")}
                </span>
                <span className="text-text group-hover:text-primary text-xl font-black transition-colors md:text-2xl">
                  {t("emailAddress")}
                </span>
              </div>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="border-text/5 bg-text/5 h-100 w-full overflow-hidden rounded-3xl border-4 shadow-2xl lg:h-125"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.6091904025416!2d22.266944!3d60.45166700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76fbd63543bb%3A0xb440e48b15cbfb3d!2sTurku%20Market%20Square!5e0!3m2!1sen!2str!4v1774447144092!5m2!1sen!2str"
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
