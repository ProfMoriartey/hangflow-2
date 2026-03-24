import ContactHero from "~/components/contact/contact-hero";
import ContactSection from "~/components/contact/contact-section";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Hangflow ry. Find our headquarters, email, and phone details.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
