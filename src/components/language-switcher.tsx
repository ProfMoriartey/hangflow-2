"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "~/i18n/routing";
import MagneticButton from "./magnetic-button";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "fi" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <MagneticButton>
      <button
        onClick={toggleLanguage}
        className="bg-text/10 border-text/10 group pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 md:h-14 md:w-14"
        aria-label="Switch Language"
      >
        <span className="text-text group-hover:text-primary text-xs font-black tracking-widest uppercase transition-colors md:text-sm">
          {locale === "en" ? "FI" : "EN"}
        </span>
      </button>
    </MagneticButton>
  );
}
