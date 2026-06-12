"use client";

export default function Marquee() {
  const items = [
    "Next.js",
    "React.js",
    "GSAP Animations",
    "Framer Motion",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "Figma Integration",
    "Stitch Design",
    "API Development",
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-8 mx-8">
            <span className="font-display text-2xl md:text-4xl font-semibold text-on-surface/20 hover:text-primary/60 transition-colors duration-500 cursor-default">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary/30" />
          </span>
        ))}
      </div>
    </section>
  );
}
