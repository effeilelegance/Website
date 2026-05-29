import { useState } from "react";
import { FAQ } from "../data/content";
import { fadeUp, revealOnScroll } from "../lib/motion";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-24">
      <motion.div variants={fadeUp} {...revealOnScroll} className="text-center">
        <p className="eyebrow">FAQ</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mt-3">
          Questions fréquentes
        </h2>
        <div className="gold-divider mx-auto my-6" />
      </motion.div>

      <div className="mt-10">
        {FAQ.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <div key={i} className="border-b border-white/10">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-lg text-white">{item.q}</span>
                  <span
                    className={`shrink-0 text-gold-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
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
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/65 leading-relaxed pb-5 pr-8">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
