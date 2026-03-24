import BoardSection from "~/components/board-section";
import EventsSection from "~/components/events-section";
import HeroSection from "~/components/hero-section";
import IntroductionSection from "~/components/introduction-section";

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col">
      <HeroSection />
      <IntroductionSection />
      <EventsSection />
      <BoardSection />
    </main>
  );
}
