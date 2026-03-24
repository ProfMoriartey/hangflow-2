import EventsHero from "~/components/events/events-hero";
import EventsIntro from "~/components/events/events-intro";
import ProjectsGrid from "~/components/events/projects-grid";

export default function EventsPage() {
  return (
    <main className="bg-background flex min-h-screen flex-col">
      <EventsHero />
      <EventsIntro />
      <ProjectsGrid />
    </main>
  );
}
