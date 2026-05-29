import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../data/content";
import { fadeUp, revealOnScroll } from "../lib/motion";

const DURATION = 1200; // ms
const EASE_OUT = (t) => 1 - Math.pow(1 - t, 3);

function formatValue(value, decimals) {
  if (decimals) return value.toFixed(decimals);
  return Math.round(value).toLocaleString("fr-FR");
}

function Counter({ value, suffix, decimals, active }) {
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    let startTime = null;
    const step = (now) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / DURATION, 1);
      setDisplay(value * EASE_OUT(progress));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, value]);

  return (
    <span className="font-serif text-4xl md:text-5xl text-gold-100 tabular-nums">
      {formatValue(display, decimals)}
      <span>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        {...revealOnScroll}
        variants={fadeUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center px-2 py-4 ${
              i > 0
                ? "border-t border-white/10 md:border-t-0 md:border-l md:border-gold-400/20"
                : ""
            }`}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals}
              active={inView}
            />
            <span className="mt-3 text-white/55 uppercase tracking-wide text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
