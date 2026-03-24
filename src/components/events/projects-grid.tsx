"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const pastEvents = [
  {
    id: 1,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 2,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 3,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 4,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 5,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 6,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 7,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 8,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 9,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 10,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 11,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
  {
    id: 12,
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcpwC3MlUm4O3DZQbiIK9XyJzC7s2LAeSxl0Hn",
  },
];

export default function ProjectsGrid() {
  const t = useTranslations("projectsGrid");

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
          {t("heading")}
        </h2>
        <div className="bg-primary mt-6 h-1 w-16 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {pastEvents.map((project, index) => {
          // We use the index to find the translated name in en.json
          const projectName = t(`projects.${index}`);

          return (
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
                alt={projectName}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              <div className="from-background/90 via-background/20 absolute inset-0 flex items-end bg-linear-to-t to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-text translate-y-4 text-lg leading-tight font-black transition-transform duration-300 group-hover:translate-y-0 md:text-xl">
                  {projectName}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
