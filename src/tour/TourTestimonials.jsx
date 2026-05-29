// TourTestimonials.jsx — carrousel des avis voyageurs "Paris by Night".
// Un témoignage à la fois, transition fondu + slide directionnel,
// auto-défilement en boucle (pause au survol), contrôles + points.

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TOUR_TESTIMONIALS } from "../data/tour";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";

const AUTOPLAY_MS = 6000;

export default function TourTestimonials() {
  const count = TOUR_TESTIMONIALS.length;
  // [index actif, direction du slide : +1 suivant, -1 précédent].
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback(
    (dir) => {
      setState(([i]) => [(i + dir + count) % count, dir]);
    },
    [count]
  );

  const goTo = (i) => {
    setState(([cur]) => [i, i > cur ? 1 : -1]);
  };

  // Auto-défilement infini, mis en pause au survol.
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, paginate]);

  const t = TOUR_TESTIMONIALS[index];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section id="avis" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          Avis voyageurs
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-5xl text-gold-100"
        >
          Ils ont vécu Paris by Night
        </motion.h2>
        <motion.div variants={fadeUp} className="gold-divider mx-auto mt-6" />
      </motion.div>

      <div
        className="mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="night-card p-8 md:p-12 text-center"
            >
              <Quote className="mx-auto h-10 w-10 text-gold-400" aria-hidden="true" />

              <blockquote className="mt-6 font-serif text-2xl italic text-white/85">
                “{t.text}”
              </blockquote>

              <div
                className="mt-8 flex items-center justify-center gap-1"
                aria-label={`Note : ${t.rating} sur 5`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold-400 text-gold-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <figcaption className="mt-6">
                <span className="block font-medium text-gold-100">{t.name}</span>
                <span className="block text-sm text-night-200">{t.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Témoignage précédent"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/40 text-gold-100 transition-colors hover:border-gold-400 hover:bg-gold-400/10"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-3" role="tablist" aria-label="Avis">
            {TOUR_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Aller à l'avis ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-gold-400"
                    : "w-2.5 bg-night-400/40 hover:bg-night-400/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Témoignage suivant"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/40 text-gold-100 transition-colors hover:border-gold-400 hover:bg-gold-400/10"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
