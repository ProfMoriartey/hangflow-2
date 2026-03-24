import EventsHero from "~/components/events/events-hero";
import EventsIntro from "~/components/events/events-intro";
import ProjectsGrid from "~/components/events/projects-grid";

export const metadata = {
  title: "Events",
  description:
    "Browse our upcoming workshops, jam sessions, and community hangouts.",
};

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <EventsHero />
      <EventsIntro />
      <ProjectsGrid />
    </main>
  );
}
