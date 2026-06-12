"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Assets from "@/Assets/Assets.jsx";

const projects = [
  {
    title: "Techzuno Agency",
    category: "Full Stack & Design Services",
    year: "2025",
    image: Assets.Techzuno,
    link: "https://techzuno.vercel.app/",
    tech: ["Next.js", "MERN Stack", "GSAP Animations", "Tailwind CSS"],
  },
  {
    title: "Hostzuno Platform",
    category: "Web Hosting Services Layout",
    year: "2025",
    image: Assets.Hostzuno,
    link: "https://hostzuno.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "MERN Stack", "GSAP Animations"],
  },
  {
    title: "Yocom E-Commerce",
    category: "E-Commerce Frontend UI Showcase",
    year: "2024",
    image: Assets.Yocom,
    link: "https://yocom-rho.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "GSAP Animations", "Framer Motion"],
  },
  {
    title: "Visit India",
    category: "Tourism Showcase & Platform",
    year: "2024",
    image: Assets.India,
    link: "https://visit-india-pi.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "MERN Stack", "GSAP Animations"],
  },
  {
    title: "Wati Homepage",
    category: "Interactive Homepage Reconstruction",
    year: "2024",
    image: Assets.Wati,
    link: "https://wati-ashy.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Significo Web Clone",
    category: "Immersive Canvas & Scroll Showcase",
    year: "2024",
    image: Assets.Significo,
    link: "https://significo-p2tf.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "MERN Stack", "GSAP ScrollTrigger"],
  },
  {
    title: "DevFeed Hub",
    category: "Developer Social Feed Web Application",
    year: "2024",
    image: Assets.India,
    link: "https://devfeed-zero.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Node.js & Express", "MongoDB"],
  },
  {
    title: "HireTrack System",
    category: "Full-Stack Job Application Tracker",
    year: "2024",
    image: Assets.India,
    link: "https://hiretrack-shubhojit.vercel.app/",
    tech: ["React.js", "Node.js & Express", "MongoDB", "JWT Auth"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    const maxRotateX = 12;
    const maxRotateY = 12;

    const rX = -mouseY * maxRotateX;
    const rY = mouseX * maxRotateY;

    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`;

    const glare = card.querySelector(".card-glare");
    if (glare) {
      const gX = (mouseX + 0.5) * 100;
      const gY = (mouseY + 0.5) * 100;
      glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60%)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";

    const glare = card.querySelector(".card-glare");
    if (glare) {
      glare.style.background = "none";
    }
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card.style.transition = "none";
  };

  return (
    <section id="projects" className="px-6 md:px-16 py-24 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
      >
        <div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-on-surface">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent font-black">
              Creations
            </span>
          </h2>
          <p className="text-muted text-lg mt-3 max-w-lg leading-relaxed">
            A showcase of production systems, e-commerce applications, and interactive web layouts.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="group relative bg-surface-card backdrop-blur-[20px] border border-white/[0.08] rounded-2xl p-5 overflow-hidden cursor-pointer hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-500 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)]"
            style={{ transformStyle: "preserve-3d" }}
            data-cursor="project"
            data-cursor-text="VISIT"
            onClick={() => p.link && window.open(p.link, "_blank")}
          >
            <div className="card-glare absolute inset-0 pointer-events-none rounded-2xl z-20" />

            <div
              className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6 bg-surface-high relative"
              style={{ transform: "translateZ(30px)" }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-[0_0_20px_rgba(0,102,255,0.6)]">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div
              className="flex justify-between items-start px-2 pb-2"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="flex-1 pr-4">
                <h3 className="font-display text-xl md:text-2xl font-bold text-on-surface leading-snug">
                  {p.title}
                </h3>
                <p className="text-muted text-sm mt-1">{p.category}</p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-white/[0.04] text-muted border border-white/[0.06] px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[11px] uppercase tracking-[0.1em] text-muted border border-muted/20 px-3 py-1 rounded-full whitespace-nowrap">
                {p.year}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
