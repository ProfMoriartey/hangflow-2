"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin className="text-primary h-6 w-6" />,
    title: "Address",
    value: "Hangflow HQ, Esimerkkikatu 12\n00100 Helsinki, Finland",
  },
  {
    icon: <Mail className="text-primary h-6 w-6" />,
    title: "Email",
    value: "hello@hangflow.fi",
  },
  {
    icon: <Phone className="text-primary h-6 w-6" />,
    title: "Phone",
    value: "+358 40 123 4567",
  },
  {
    icon: <Clock className="text-primary h-6 w-6" />,
    title: "Work Hours",
    value: "Mon - Fri: 12:00 - 18:00\nSat - Sun: Closed (Except Events)",
  },
];

export default function ContactSection() {
  return (
    <section className="text-text mx-auto w-full max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        {/* Left Column: Contact Details */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-4xl font-black tracking-tighter uppercase md:text-5xl">
              Find Us Here
            </h2>
            <p className="text-text/70 text-lg">
              Drop by our headquarters or reach out through any of these
              channels. Our team is ready to help.
            </p>
          </motion.div>

          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-text/5 border-text/10 hover:border-primary/30 flex flex-col gap-3 rounded-2xl border p-6 transition-colors"
              >
                <div className="bg-background flex h-12 w-12 items-center justify-center rounded-full shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                  <p className="text-text/70 leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="border-text/5 bg-text/5 h-100 w-full overflow-hidden rounded-3xl border-4 shadow-2xl lg:h-150"
        >
          {/* Replace this src with your actual Google Maps embed link */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.63929062107!2d24.9383791!3d60.1698556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2sHelsinki%2C%20Finland!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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
