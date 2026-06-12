"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/services/Services";
import Marquee from "@/components/home/Marquee";
import Projects from "@/components/works/Projects";
import Journey from "@/components/works/Journey";
import About from "@/components/about/About";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/pricing/Pricing";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

import CustomCursor from "@/components/common/CustomCursor";
import ParticlesBg from "@/components/common/ParticlesBg";
import PreFooterSpline from "@/components/layout/PreFooterSpline";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 2;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return next;
      });
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Animated Entrance Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-surface-lowest z-[100] flex flex-col justify-end p-8 md:p-20"
          >
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-[1440px] mx-auto z-10 gap-6">
              <div>
                <div className="w-3 h-3 bg-primary rounded-full animate-ping mb-6" />
                <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted mb-2">
                  Portfolio Showcase
                </h2>
                <p className="text-on-surface/60 text-sm">
                  Shubhojit Deb &copy; 2026
                </p>
              </div>
              <div className="font-display text-8xl md:text-[140px] font-black text-on-surface tracking-tighter leading-none select-none">
                {Math.min(progress, 100)}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Animated Elements */}
      <CustomCursor />
      <ParticlesBg />

      {/* Main Page Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main className="min-h-screen relative z-10">
            <Hero />
            <Services />
            <Marquee />
            <Projects />
            <Journey />
            <About />
            <Stats />
            <Testimonials />
            <Pricing />
            <Contact />
            <PreFooterSpline />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
