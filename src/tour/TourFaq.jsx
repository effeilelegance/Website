// TourFaq.jsx — accordéon des questions fréquentes "Paris by Night".
// Un seul panneau ouvert à la fois (re-clic referme), animation height + opacity.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { TOUR_FAQ } from "../data/tour";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";

export default function TourFaq() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen((cur) => (cur === i ? null : i));

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-24">
      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          FAQ
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-5xl text-gold-100"
        >
          Questions fréquentes
        </motion.h2>
        <motion.div variants={fadeUp} className="gold-divider mx-auto mt-6" />
      </motion.div>

      <motion.ul
        variants={staggerContainer}
        {...revealOnScroll}
        className="mt-14"
      >
        {TOUR_FAQ.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-button-${i}`;
          return (
            <motion.li
              key={item.q}
              variants={fadeUp}
              className="border-b border-night-400/15"
            >
              <h3>
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg text-white">{item.q}</span>
                  <span className="shrink-0 text-gold-400">
                    {isOpen ? (
                      <Minus className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Plus className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 leading-relaxed text-white/65">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
