import { SERVICES } from "../data/content";
import { Icon } from "../lib/icons";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      {/* Entête centré */}
      <motion.div
        variants={fadeUp}
        {...revealOnScroll}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="eyebrow">Services</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-gold-100">
          Un service pensé pour les trajets importants
        </h2>
        <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
        <p className="mt-6 text-white/60">
          Une conduite discrète et ponctuelle, des véhicules irréprochables et
          une attention de chaque instant pour vos déplacements à Paris et en
          Île-de-France.
        </p>
      </motion.div>

      {/* Grille des services */}
      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {SERVICES.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="luxe-card p-7 transition-colors duration-300 hover:border-gold-400/60"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/40 bg-black text-gold-100">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-white/60">{service.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
