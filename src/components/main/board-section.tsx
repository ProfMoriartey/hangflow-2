"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

const boardMembers = [
  {
    id: 1,
    name: "Shahin",
    role: "President",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcDD7qXlkGNij6Hs0x9lq1CL7uWE4aI3Qty2Pr",
  },
  {
    id: 2,
    name: "Hannaneh",
    role: "Vice President",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcX4n04lRxDvqWu6A2B4LeUoQRydMpJgskHlfn",
  },
  {
    id: 3,
    name: "Morad",
    role: "Treasurer",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcLDrnNcMQHi7hMSqkoP6FOTnRVZWeUdurLjEz",
  },
  {
    id: 4,
    name: "Nora",
    role: "Secretary",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc03A0yDry8kuzKnVTFYpeUWcRBMbPjgIHs62f",
  },
  {
    id: 5,
    name: "Victoria",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zc8jj9A4e61yi4q3Ya7lATvfkQKgFBWjemutVw",
  },
  {
    id: 6,
    name: "Dandy",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zck1kxetq0Fd4Izwe7tLmD2jqrAuMiYV8CyXbQ",
  },
  {
    id: 7,
    name: "Sherry",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcngpiIeco72z6lQ8SUiFuyEjbqhdmYDLa9n10",
  },
  {
    id: 8,
    name: "Milad",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcO978GLB0QGMe6IrUjLXH5xBh8dpg2oESlknJ",
  },
  {
    id: 9,
    name: "Eliya",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcgg3JVrhBYOxkSlErAMat34c1f2yWoRi9VTzp",
  },
  {
    id: 10,
    name: "Maldini",
    role: "Event Coordinator",
    image:
      "https://y644vemv1r.ufs.sh/f/xNlIiPpI32zcS2CwbaH9K1wuOayD0GUL8T7xkcvFbXfgdQeW",
  },
];

export default function BoardSection() {
  const plugin = useRef(
    AutoScroll({
      playOnInit: true,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      speed: 1,
    }),
  );

  return (
    <section className="text-text bg-background flex min-h-[60vh] w-full flex-col justify-center overflow-hidden py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 flex w-full flex-col items-center gap-4 px-6 text-center"
      >
        <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
          2026 Board Members
        </h2>
        <p className="text-text/70 max-w-xl text-base">
          Meet the core team driving Hangflow forward.
        </p>
      </motion.div>

      <div className="group relative w-full">
        {/* Fade Masks for clean edges */}
        <div className="from-background pointer-events-none absolute top-0 left-0 z-30 h-full w-16 bg-linear-to-r to-transparent md:w-32" />
        <div className="from-background pointer-events-none absolute top-0 right-0 z-30 h-full w-16 bg-linear-to-l to-transparent md:w-32" />

        <Carousel
          opts={{ loop: true, align: "start", dragFree: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 flex">
            {boardMembers.map((member) => (
              <CarouselItem key={member.id} className="basis-auto pl-4">
                <div className="bg-text/5 border-text/10 relative h-56 w-40 shrink-0 cursor-grab overflow-hidden rounded-2xl border-2 transition-transform duration-300 hover:-translate-y-3 active:cursor-grabbing md:h-64 md:w-48">
                  <div className="bg-secondary/20 absolute inset-0 z-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1000px) 1000px, 1000px"
                    />
                  </div>

                  <div className="from-background via-background/40 absolute inset-0 z-10 bg-linear-to-t to-transparent opacity-90" />

                  <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full p-4">
                    <h3 className="text-text mb-1 text-lg leading-tight font-black drop-shadow-md md:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-primary text-[10px] font-bold tracking-wide uppercase drop-shadow-md md:text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
