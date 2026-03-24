import AboutBoard from "~/components/about/about-board";
import AboutHero from "~/components/about/about-hero";
import AboutSection from "~/components/about/about-section";
import JoinSection from "~/components/about/join-section";

export const metadata = {
  title: "About Us",
  description:
    "Learn about the mission, values, and the 2026 board members driving Hangflow forward.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <AboutHero />
      <AboutSection />
      <AboutBoard />
      <JoinSection />
    </main>
  );
}
