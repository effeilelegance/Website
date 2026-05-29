import { PROCESS } from "../data/content";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          Réservation simple
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-5xl text-white"
        >
          Trois étapes, zéro friction
        </motion.h2>
        <motion.div variants={fadeUp} className="gold-divider mx-auto mt-6" />
      </motion.div>

      <div className="relative mt-16">
        {/* Ligne horizontale or discrète reliant les numéros (desktop) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gold-line"
        />

        <motion.ol
          variants={staggerContainer}
          {...revealOnScroll}
          className="relative grid md:grid-cols-3 gap-8"
        >
          {PROCESS.map((item) => (
            <motion.li
              key={item.step}
              variants={fadeUp}
              className="text-center"
            >
              <div className="relative flex justify-center">
                <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/20 bg-ink-800 shadow-glow">
                  <span className="font-serif text-5xl text-gold-400/40">
                    {item.step}
                  </span>
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-white/60 leading-relaxed">{item.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
