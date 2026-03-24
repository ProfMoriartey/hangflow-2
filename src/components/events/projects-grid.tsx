"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pastEvents = [
  {
    id: 1,
    name: "Summer Jam 2025",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 2,
    name: "Digital Art Workshop",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 3,
    name: "Beatmaking Basics",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 4,
    name: "Urban Photo Walk",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 5,
    name: "Youth Gala Night",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 6,
    name: "Graffiti Session",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 7,
    name: "Skate Meetup",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 8,
    name: "Podcast Lab",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 9,
    name: "Open Mic Night",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 10,
    name: "Dance Battle",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 11,
    name: "Coding for Kids",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 12,
    name: "Winter Chill Lounge",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="text-text mx-auto w-full max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 flex flex-col items-center"
      >
        <h2 className="text-center text-4xl font-black tracking-tighter uppercase md:text-5xl">
          Our Projects
        </h2>
        <div className="bg-primary mt-6 h-1 w-16 rounded-full" />
      </motion.div>

      {/* Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {pastEvents.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            className="group bg-text/5 relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Overlay */}
            <div className="from-background/90 via-background/20 absolute inset-0 flex items-end bg-linear-to-t to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-text translate-y-4 text-lg leading-tight font-black transition-transform duration-300 group-hover:translate-y-0 md:text-xl">
                {project.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
