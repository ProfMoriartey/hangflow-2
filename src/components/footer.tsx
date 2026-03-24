"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text/5 border-text/10 text-text w-full border-t px-6 pt-20 pb-10 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Left Column: Logo & Mission */}
        <div className="flex flex-col gap-6">
          <Image
            src="https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc8crhK61yi4q3Ya7lATvfkQKgFBWjemutVwZr"
            alt="Hangflow Logo"
            width={140}
            height={40}
            className="h-20 w-auto object-contain"
          />
          <p className="text-text/60 max-w-xs text-sm leading-relaxed">
            Empowering youth through creativity, safe spaces, and genuine
            connection in the heart of Finland.
          </p>
          <div className="flex gap-4">
            {["IG", "TW", "LI"].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-primary text-xs font-bold tracking-widest uppercase transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Column 1: Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-black tracking-tighter uppercase">
            Explore
          </h4>
          <nav className="text-text/70 flex flex-col gap-3 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/events"
              className="hover:text-primary transition-colors"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Middle Column 2: Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-black tracking-tighter uppercase">
            Contact
          </h4>
          <div className="text-text/70 flex flex-col gap-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span>Esimerkkikatu 12, Helsinki</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary h-4 w-4 shrink-0" />
              <span>hello@hangflow.fi</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary h-4 w-4 shrink-0" />
              <span>+358 40 123 4567</span>
            </div>
          </div>
        </div>

        {/* Right Column: Mini Map */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-black tracking-tighter uppercase">
            Location
          </h4>
          <div className="border-text/10 h-56 w-full overflow-hidden rounded-xl border contrast-125 grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.4578!2d24.9384!3d60.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210629%3A0xad00a358c973347c!2sHelsinki!5e0!3m2!1sen!2sfi!4v1710000000000!5m2!1sen!2sfi"
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
        <p>© {currentYear} Hangflow ry. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-text transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-text transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
