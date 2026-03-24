import BoardSection from "~/components/main/board-section";
import EventsSection from "~/components/main/events-section";
import HeroSection from "~/components/main/hero-section";
import IntroductionSection from "~/components/main/introduction-section";

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
