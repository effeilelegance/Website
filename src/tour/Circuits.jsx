import { motion } from "framer-motion";
import { Clock, Camera } from "lucide-react";
import { CONTACT } from "../data/content";
import { CIRCUITS } from "../data/tour";
import { euro, whatsappLink, cn } from "../lib/utils";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";

export default function Circuits() {
  return (
    <section id="circuits" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="eyebrow">Nos circuits</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mt-3">
          Choisissez votre Paris by Night
        </h2>
        <p className="text-white/60 mt-4">
          Quatre façons de découvrir les monuments illuminés, au rythme d'une
          berline silencieuse et d'un chauffeur-guide attentionné.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
      >
        {CIRCUITS.map((circuit) => {
          const featured = Boolean(circuit.badge);
          const message = `Bonjour ${CONTACT.brand}, je suis intéressé(e) par le circuit "${circuit.name}" (${circuit.duration}).`;
          return (
            <motion.div
              key={circuit.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={cn(
                "night-card p-6 flex flex-col relative transition-colors",
                featured
                  ? "border-gold-400/50 lg:scale-105 animate-glow-pulse"
                  : "hover:border-gold-400/40"
              )}
            >
              {circuit.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {circuit.badge}
                </span>
              )}

              <h3 className="font-serif text-xl text-white">{circuit.name}</h3>

              <div className="flex items-center gap-4 text-sm text-night-200 mt-3">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold-400" aria-hidden="true" />
                  {circuit.duration}
                </span>
                {circuit.stops != null && (
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-gold-400" aria-hidden="true" />
                    {circuit.stops} arrêts
                  </span>
                )}
              </div>

              <p className="text-white/60 flex-1 my-4">{circuit.text}</p>

              <div className="mb-4">
                {circuit.price != null ? (
                  <>
                    <p className="text-white/50 text-sm">à partir de</p>
                    <span className="font-serif text-3xl text-gold-100">
                      {euro(circuit.price)}
                    </span>
                  </>
                ) : (
                  <span className="font-serif text-2xl text-gold-100">
                    Sur devis
                  </span>
                )}
              </div>

              <a
                href={whatsappLink(CONTACT.whatsappNumber, message)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("text-center", featured ? "btn-gold" : "btn-ghost")}
                aria-label={`Réserver le circuit ${circuit.name}`}
              >
                Réserver
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
