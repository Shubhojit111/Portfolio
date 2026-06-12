"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Hero() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textRowVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12 relative z-10 ">
        {/* Left Side: Text Content — always visible immediately */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl relative z-10 w-fit "
        >
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-4">
            <motion.div
              variants={elementVariants}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              Frontend-focused Full-Stack Developer
            </motion.div>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[64px] font-bold leading-[1.05] tracking-[0.01em] text-on-surface mb-8">
            <span className="block overflow-hidden py-1">
              <motion.span variants={textRowVariants} className="inline-block">
                Hi, I&apos;m Shubhojit Deb
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span variants={textRowVariants} className="inline-block">
                I build{" "}
                <span className="bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent font-serif italic font-normal">
                  exceptional
                </span>
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span variants={textRowVariants} className="inline-block">
                digital experiences.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={elementVariants}
            className="text-muted text-base md:text-[18px] leading-relaxed max-w-2xl mb-12"
          >
            Frontend Specialist &amp; Full-Stack Developer based in Kolkata, India.
            Primarily focused on engineering highly performant, custom-animated
            interfaces while maintaining solid backend implementations.
          </motion.p>

          <motion.div
            variants={elementVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start "
          >
            <a
              href="#projects"
              data-cursor="hover"
              className="inline-flex items-center justify-center bg-primary text-white text-[11px] uppercase tracking-[0.15em] font-semibold px-8 py-4 rounded-md hover:bg-primary-hover transition-colors duration-300 shadow-[0_10px_30px_rgba(0,102,255,0.25)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.4)]"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center justify-center border border-white/20 text-white text-[11px] uppercase tracking-[0.15em] font-semibold px-8 py-4 rounded-md hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Spline 3D Model */}
        <div className="lg:w-[45%] h-[400px] sm:h-[600px] relative z-10 flex-shrink-0">
          {/* Skeleton placeholder — shown while Spline loads */}
          {!splineLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-primary/40 border-t-primary animate-spin" />
              </div>
              <span className="text-primary/40 text-xs uppercase tracking-[0.2em]">
                Loading 3D Scene
              </span>
            </div>
          )}

          {/* Spline fades in only after it's ready */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: splineLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Spline
              scene="https://prod.spline.design/wTpLHcrC3aNV8r2c/scene.splinecode"
              onLoad={() => setSplineLoaded(true)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
