import AboutHero from "~/components/about/about-hero";
import AboutSection from "~/components/about/about-section";

export default function AboutPage() {
  return (
    <main className="bg-background flex min-h-screen flex-col">
      <AboutHero />
      <AboutSection />
    </main>
  );
}
