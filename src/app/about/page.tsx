import AboutBoard from "~/components/about/about-board";
import AboutHero from "~/components/about/about-hero";
import AboutSection from "~/components/about/about-section";
import JoinSection from "~/components/about/join-section";

export default function AboutPage() {
  return (
    <main className="bg-background flex min-h-screen flex-col">
      <AboutHero />
      <AboutSection />
      <AboutBoard />
      <JoinSection />
    </main>
  );
}
