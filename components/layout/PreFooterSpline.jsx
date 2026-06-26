"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-primary/30 text-[10px] tracking-widest uppercase">
      Loading Interactive Element...
    </div>
  ),
});

export default function PreFooterSpline() {
  return (
    <section className="relative w-full hidden md:block md:h-[600px] bg-surface-lowest overflow-hidden flex items-center justify-center border-t border-white/[0.06]">
      {/* Background gradients for blending */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none z-0" />
      
      <div className="absolute inset-0 z-10">
        <Spline scene="https://prod.spline.design/xUhOyVrG9hPkgu3t/scene.splinecode" />
      </div>

      {/* Gradient to seamlessly blend into the footer */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-surface to-transparent pointer-events-none z-20" />
    </section>
  );
}
