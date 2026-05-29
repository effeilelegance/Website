import { motion } from "framer-motion";
import { Moon, Sparkles, Camera, Languages, ChevronDown } from "lucide-react";
import { NightScene } from "./NightScene";
import { Monument } from "./Monuments";
import { fadeUp, staggerContainer } from "../lib/motion";

const MINI = [
  { icon: Camera, label: "Arrêts photo" },
  { icon: Languages, label: "FR / EN" },
  { icon: Moon, label: "10 monuments illuminés" },
];

export default function TourHero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-night-sky"
    >
      {/* Calque de fond nocturne */}
      <NightScene />

      {/* Monument illuminé */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-16">
        <div className="relative animate-float">
          <div className="absolute inset-0 -z-10 rounded-full bg-gold-400/20 blur-[90px] animate-glow-pulse" />
          <Monument
            name="EiffelTower"
            sparkle
            className="h-[55vh] md:h-[65vh] lg:h-[70vh] w-auto opacity-30 lg:opacity-90"
          />
        </div>
      </div>

      {/* Dégradé pour lisibilité mobile */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-midnight via-midnight/70 to-transparent lg:to-midnight/0" />

      {/* Contenu */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full"
      >
        <div className="max-w-2xl">
          <motion.span
            variants={fadeUp}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-gold-400/40 backdrop-blur px-4 py-2 text-gold-100"
          >
            <Moon className="h-4 w-4" />
            Tour privé • Paris by Night
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-night-100"
          >
            Paris <span className="text-night-gradient">s'illumine</span>, et la
            nuit vous appartient
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-night-100/80 text-lg max-w-xl"
          >
            Tour privé des monuments illuminés — Tour Eiffel, Champs-Élysées,
            Louvre… — en berline 100% électrique, avec arrêts photo à chaque
            monument et chauffeur-guide FR/EN.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a href="#reservation" className="btn-gold inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Réserver mon tour
            </a>
            <a href="#itineraire" className="btn-ghost inline-flex items-center gap-2">
              Voir l'itinéraire
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {MINI.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-night-200">
                <Icon className="h-5 w-5 text-gold-400" />
                <span className="text-sm">{label}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.a
        href="#circuits"
        aria-label="Découvrir"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-night-200 hover:text-gold-100 transition-colors"
      >
        <span className="uppercase tracking-luxe text-[11px]">Découvrir</span>
        <ChevronDown className="h-5 w-5 animate-bounce text-gold-400" />
      </motion.a>
    </section>
  );
}
