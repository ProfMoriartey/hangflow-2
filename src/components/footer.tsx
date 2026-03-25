"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text/5 border-text/10 text-text w-full border-t px-6 pt-20 pb-10 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Column 1: Logo Only */}
        <div className="flex flex-col items-start">
          <Image
            src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc8crhK61yi4q3Ya7lATvfkQKgFBWjemutVwZr"
            alt={t("logoAlt")}
            width={160}
            height={40}
            className="h-32 w-auto object-contain"
          />
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-black tracking-tighter uppercase">
            {t("exploreTitle")}
          </h4>
          <nav className="text-text/70 flex flex-col gap-3 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("links.home")}
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              {t("links.aboutUs")}
            </Link>
            <Link
              href="/events"
              className="hover:text-primary transition-colors"
            >
              {t("links.events")}
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              {t("links.contact")}
            </Link>
          </nav>
        </div>

        {/* Column 3: Email and Contact Text */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-black tracking-tighter uppercase">
            {t("contactTitle")}
          </h4>
          <p className="text-text/60 max-w-60 text-sm leading-relaxed">
            {t("contactText")}
          </p>
          <div className="text-primary flex items-center gap-3 text-sm font-bold">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@hangflow.org" className="hover:underline">
              info@hangflow.org
            </a>
          </div>
        </div>

        {/* Column 4: Small Map */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-black tracking-tighter uppercase">
            {t("locationTitle")}
          </h4>
          <div className="border-text/10 h-32 w-full overflow-hidden rounded-xl border contrast-125 grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.6091904025416!2d22.266944!3d60.45166700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76fbd63543bb%3A0xb440e48b15cbfb3d!2sTurku%20Market%20Square!5e0!3m2!1sen!2str!4v1774447144092!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-text/10 text-text/40 mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-8 text-[10px] font-bold tracking-[0.2em] uppercase md:flex-row">
        <p>{t("copyright", { year: currentYear })}</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-text transition-colors">
            {t("privacyPolicy")}
          </Link>
          <Link href="/terms" className="hover:text-text transition-colors">
            {t("termsOfService")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
