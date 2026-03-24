"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Hangflow ry started as a grassroots movement to give young people in Finland a genuine place to belong. We noticed a gap in the community. Many young individuals lacked access to free, low-threshold spaces where they could explore their creativity without external pressure or expectations.",
  "We exist to build those missing spaces. Our core mission revolves around organizing workshops, open hangouts, and cultural events. We tailor these activities directly to the interests and requests of our community members.",
  "We believe in the power of co-creation. The youth decide what happens inside Hangflow. They pick the music, suggest the workshop topics, and help plan the events. This shared ownership builds confidence and a strong sense of responsibility.",
  "Inclusivity is our foundation. We maintain strict safer space principles across all our activities. Discrimination, bullying, or harassment have absolutely no place in our ecosystem. We protect our environment so everyone can express themselves freely.",
  "Over the years, we have watched quiet individuals grow into confident leaders. We have seen new artists find their voice and witnessed the start of lifelong friendships. The connections made here extend far beyond our scheduled events.",
  "We operate with transparency and an open-door policy. You do not need prior experience or specific skills to join our activities. Bring your curiosity and a willingness to respect others.",
  "Hangflow is more than an organization; it is a shared rhythm. We invite you to join our community, share your ideas, and flow together with us.",
];

export default function AboutSection() {
  return (
    <section className="text-text relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 md:flex-row md:gap-24 md:py-40">
      {/* Left Column: Sticky Title */}
      <div className="w-full md:w-1/3">
        <div className="sticky top-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl leading-tight font-black tracking-tighter uppercase md:text-6xl"
          >
            What is Hangflow?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-primary mt-8 h-1 w-24 origin-left"
          />
        </div>
      </div>

      {/* Right Column: Paragraphs */}
      <div className="flex w-full flex-col gap-8 md:w-2/3 md:gap-12">
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="text-text/80 text-lg leading-relaxed font-medium md:text-2xl"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
