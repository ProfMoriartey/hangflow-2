"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Add a 'hoverImage' property for the secondary picture
const boardMembers = [
  {
    id: 1,
    name: "Shahin",
    role: "President",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcDD7qXlkGNij6Hs0x9lq1CL7uWE4aI3Qty2Pr",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcdw01MOVfj5OPw8Nl9abKpQoAD6EzxgSVY13s",
  },
  {
    id: 2,
    name: "Hannaneh",
    role: "Vice President",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcX4n04lRxDvqWu6A2B4LeUoQRydMpJgskHlfn",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcXdrEyCmRxDvqWu6A2B4LeUoQRydMpJgskHlf",
  },
  {
    id: 3,
    name: "Morad",
    role: "Treasurer",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcLDrnNcMQHi7hMSqkoP6FOTnRVZWeUdurLjEz",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcNcMHlLm1xiKS3bZhFW9Jr4dTk7XR0D8ayzws",
  },
  {
    id: 4,
    name: "Nora",
    role: "Secretary",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc03A0yDry8kuzKnVTFYpeUWcRBMbPjgIHs62f",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcAh2MDEjR2IHVG4dfjMo3klgPY0LEFDsa9zW7",
  },
  {
    id: 5,
    name: "Victoria",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc8jj9A4e61yi4q3Ya7lATvfkQKgFBWjemutVw",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcVgZAQMJzoRPMCD6fd0tXE2H9mKg1IqV85Qhe",
  },
  {
    id: 6,
    name: "Dandy",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zck1kxetq0Fd4Izwe7tLmD2jqrAuMiYV8CyXbQ",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcUZ3OsD8TH6rXtzJs08gvZcCK5hSRA43iVfpF",
  },
  {
    id: 7,
    name: "Sherry",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcngpiIeco72z6lQ8SUiFuyEjbqhdmYDLa9n10",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc8RI8xl61yi4q3Ya7lATvfkQKgFBWjemutVwZ",
  },
  {
    id: 8,
    name: "Milad",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcO978GLB0QGMe6IrUjLXH5xBh8dpg2oESlknJ",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcfTwFdDargiYMDuwI9R752elZNVA3X1hmTdoH",
  },
  {
    id: 9,
    name: "Eliya",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcgg3JVrhBYOxkSlErAMat34c1f2yWoRi9VTzp",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcmpyD8U14gfnUTGbCsmqMlELR6ahQWxXjtYSv",
  },
  {
    id: 10,
    name: "Maldini",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcS2CwbaH9K1wuOayD0GUL8T7xkcvFbXfgdQeW",
    hoverImage:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc0xGWKHry8kuzKnVTFYpeUWcRBMbPjgIHs62f",
  },
  // Add the remaining members here following the same structure
];

export default function AboutBoard() {
  return (
    <section className="text-text mx-auto w-full max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 flex flex-col items-center"
      >
        <h2 className="text-center text-4xl font-black tracking-tighter uppercase md:text-5xl">
          2026 Board Members
        </h2>
        <div className="bg-primary mt-6 h-1 w-16 rounded-full" />
      </motion.div>

      {/* Grid Layout: 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {boardMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group flex cursor-pointer flex-col items-center"
          >
            {/* Image Container with strict aspect ratio */}
            <div className="bg-text/5 group-hover:border-primary/20 relative mb-6 aspect-4/5 w-full overflow-hidden rounded-2xl border-2 border-transparent shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
              {/* Primary Image */}
              <div className="absolute inset-0 z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                <Image
                  src={member.image}
                  alt={`${member.name} formal`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Hover Image (Fun/Alternate) */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={member.hoverImage}
                  alt={`${member.name} fun`}
                  fill
                  className="scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="transform text-center transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="text-text mb-1 text-xl font-black tracking-tight">
                {member.name}
              </h3>
              <p className="text-primary text-xs font-bold tracking-widest uppercase">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
