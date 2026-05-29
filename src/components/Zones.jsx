import { CONTACT, ZONES } from "../data/content";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Zones() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <motion.div variants={fadeUp} {...revealOnScroll}>
          <p className="eyebrow">Zones desservies</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3">
            Paris et toute l'Île-de-France
          </h2>
          <div className="gold-divider my-6" />
          <p className="text-white/60 leading-relaxed max-w-md">
            Prise en charge dans tous les départements franciliens. Transferts
            longue distance et trajets sur mesure disponibles sur demande.
          </p>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8 inline-flex"
          >
            Demander un trajet
          </a>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          {...revealOnScroll}
          className="grid grid-cols-2 sm:grid-cols-2 gap-3"
        >
          {ZONES.map((zone, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="rounded-xl border border-gold-400/25 bg-white/[0.03] px-4 py-3 flex items-center gap-2 transition-colors hover:border-gold-400/60"
            >
              <MapPin className="h-4 w-4 text-gold-400 shrink-0" aria-hidden="true" />
              <span className="text-white/75">{zone}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
