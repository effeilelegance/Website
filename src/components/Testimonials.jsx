import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { fadeUp, revealOnScroll } from "../lib/motion";

const AUTO_DELAY = 6000; // ms

export default function Testimonials() {
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const paginate = useCallback(
    (dir) => {
      setState(([prev]) => [(prev + dir + count) % count, dir]);
    },
    [count]
  );

  const goTo = useCallback(
    (target) => {
      setState(([prev]) => [target, target > prev ? 1 : -1]);
    },
    []
  );

  const intervalRef = useRef(null);
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => paginate(1), AUTO_DELAY);
    return () => clearInterval(intervalRef.current);
  }, [paused, paginate]);

  const current = TESTIMONIALS[index];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section id="avis" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div {...revealOnScroll} variants={fadeUp} className="text-center mb-12">
        <p className="eyebrow">Avis clients</p>
        <h2 className="font-serif text-4xl md:text-5xl text-gold-100 mt-3">
          Ils nous ont fait confiance
        </h2>
      </motion.div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="luxe-card p-8 md:p-12 text-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              aria-roledescription="témoignage"
              aria-label={`Avis ${index + 1} sur ${count}`}
            >
              <Quote
                className="mx-auto text-gold-400 mb-6"
                size={44}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <blockquote className="font-serif text-2xl text-white/85 italic leading-relaxed">
                {current.text}
              </blockquote>

              <div
                className="flex justify-center gap-1 mt-8"
                aria-label={`Note : ${current.rating} sur 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < current.rating
                        ? "text-gold-400 fill-gold-400"
                        : "text-white/20"
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>

              <figcaption className="mt-6">
                <span className="block text-gold-100 font-medium">{current.name}</span>
                <span className="block text-white/50 text-sm">{current.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Avis précédent"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-gold-400/40 text-gold-100 hover:border-gold-400 hover:text-gold-400 transition-colors"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2.5" role="tablist" aria-label="Sélection des avis">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Aller à l'avis ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold-400" : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Avis suivant"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-gold-400/40 text-gold-100 hover:border-gold-400 hover:text-gold-400 transition-colors"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
