import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Camera, Sparkles } from "lucide-react";
import { Monument } from "./Monuments";
import { STOPS } from "../data/tour";
import { fadeUp, revealOnScroll } from "../lib/motion";

// Variants de l'étape : la pastille s'illumine quand l'étape entre dans le viewport.
const stepVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const dotVariants = {
  hidden: { scale: 0.7, boxShadow: "0 0 0px rgba(214,177,89,0)" },
  show: {
    scale: 1,
    boxShadow: "0 0 22px rgba(214,177,89,0.65)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Itinerary() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="itineraire" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Entête */}
        <motion.div className="text-center" {...revealOnScroll}>
          <motion.p variants={fadeUp} className="eyebrow">
            L'itinéraire
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-night-gradient mt-3"
          >
            Votre parcours dans Paris illuminé
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-2xl mx-auto">
            Dix monuments, dix arrêts photo, une nuit inoubliable.
          </motion.p>
        </motion.div>

        {/* Timeline verticale */}
        <ol
          ref={trackRef}
          className="relative mt-16 md:mt-20"
          aria-label="Étapes de l'itinéraire nocturne"
        >
          {/* Ligne de base faible */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-night-400/20 left-5 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          {/* Ligne dorée qui se trace au scroll */}
          <motion.div
            style={{ height: lineHeight }}
            className="pointer-events-none absolute top-0 w-0.5 bg-gold-vert shadow-glow left-5 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          {STOPS.map((stop, i) => {
            const isLeft = i % 2 === 0; // étape paire (index 0,2,...) à gauche
            return (
              <motion.li
                key={stop.id}
                variants={stepVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12 mb-12 last:mb-0"
              >
                {/* Pastille numérotée sur la ligne */}
                <motion.span
                  variants={dotVariants}
                  className="stop-dot absolute z-10 left-5 -translate-x-1/2 md:left-1/2"
                  aria-hidden="true"
                >
                  {i + 1}
                </motion.span>

                {/* Carte de l'étape — colonne selon zigzag desktop, décalée à droite sur mobile */}
                <motion.div
                  variants={fadeUp}
                  className={[
                    "pl-12 md:pl-0",
                    isLeft
                      ? "md:col-start-1 md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12",
                  ].join(" ")}
                >
                  <div className="night-card p-6 transition-colors hover:border-gold-400/50">
                    <Monument
                      name={stop.monument}
                      className={[
                        "h-16 w-auto mb-3",
                        isLeft ? "md:ml-auto" : "",
                      ].join(" ")}
                    />
                    <h3 className="font-serif text-2xl text-white">{stop.name}</h3>

                    <p
                      className={[
                        "mt-2 flex items-center gap-2 text-gold-200",
                        isLeft ? "md:justify-end" : "",
                      ].join(" ")}
                    >
                      <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Arrêt {stop.stop}</span>
                    </p>
                    <p
                      className={[
                        "mt-1 flex items-center gap-2 text-night-200",
                        isLeft ? "md:justify-end" : "",
                      ].join(" ")}
                    >
                      <Camera className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{stop.spot}</span>
                    </p>

                    <p className="text-white/60 italic mt-2">{stop.note}</p>
                  </div>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>

        {/* CTA */}
        <motion.div className="text-center mt-16" {...revealOnScroll}>
          <motion.a variants={fadeUp} href="#reservation" className="btn-gold inline-flex items-center gap-2">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            Réserver ce parcours
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Itinerary;
