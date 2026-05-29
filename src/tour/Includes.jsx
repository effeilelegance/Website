import { motion } from "framer-motion";
import { INCLUDES } from "../data/tour";
import { Icon } from "../lib/icons";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";

export default function Includes() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <p className="eyebrow">Tout compris</p>
        <h2 className="font-serif text-4xl md:text-5xl text-gold-100">
          Une expérience clé en main
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Tout est pensé pour que vous profitiez pleinement de Paris illuminé, sans la moindre
          contrainte.
        </p>
      </div>

      <motion.div
        {...revealOnScroll}
        variants={staggerContainer}
        className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {INCLUDES.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="night-card p-6 transition-colors duration-300 hover:border-gold-400/60"
          >
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl border border-gold-400/40 bg-midnight-900 text-gold-100">
              <Icon name={item.icon} className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl text-white mt-5">{item.title}</h3>
            <p className="text-white/60 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
