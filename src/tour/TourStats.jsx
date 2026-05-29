import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { TOUR_STATS } from "../data/tour";

// Compteur count-up animé : 0 -> value au passage dans le viewport (une seule fois).
function StatCounter({ value, suffix = "", label, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1200; // ~1.2s
    let frame = 0;
    let start = null;

    const tick = (now) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // easing easeOutCubic pour une décélération élégante
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const formatted = display.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="font-serif text-4xl md:text-5xl text-gold-100">
        {formatted}
        {suffix}
      </div>
      <div className="mt-3 text-night-200 uppercase tracking-wide text-sm">{label}</div>
    </div>
  );
}

export default function TourStats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TOUR_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={
              i > 0
                ? "md:border-l border-night-400/15 md:pl-6"
                : ""
            }
          >
            <StatCounter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals ?? 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
