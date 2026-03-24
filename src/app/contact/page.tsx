import ContactHero from "~/components/contact/contact-hero";
import ContactSection from "~/components/contact/contact-section";

export default function ContactPage() {
  return (
    <main className="bg-background flex min-h-screen flex-col">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
