"use client";

import { motion } from "framer-motion";
import { Diamond, Monitor, Paintbrush } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Brand Identity\n& Strategy",
    icon: Diamond,
    desc: "Crafting cohesive visual identities that communicate your brand's core values and resonate with your audience.",
  },
  {
    num: "02",
    title: "UI/UX Design &\nDigital Experiences",
    icon: Monitor,
    desc: "Designing intuitive interfaces and seamless user journeys that drive engagement and conversion.",
  },
  {
    num: "03",
    title: "Creative\nDirection",
    icon: Paintbrush,
    desc: "Guiding the visual narrative across all touchpoints to ensure a unified, impactful brand presence.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-20 max-w-[1440px] mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {services.map((s) => (
          <motion.div
            key={s.num}
            variants={item}
            className="group relative bg-surface-card backdrop-blur-[30px] border border-white/[0.08] rounded-xl p-8 flex flex-col justify-between aspect-auto md:aspect-[4/3] hover:border-primary/40 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-500 shadow-none hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_20px_rgba(0,102,255,0.05)]"
          >
            <div>
              <s.icon className="text-primary mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-[28px] font-semibold leading-tight text-on-surface whitespace-pre-line">
                {s.num}.<br />{s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
