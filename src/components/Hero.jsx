import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Leaf,
  Star,
  ChevronRight,
  Moon,
} from "lucide-react";
import { CONTACT } from "../data/content";
import brand from "../assets/favicon-vtc.png";
import { fadeUp, scaleIn, staggerContainer } from "../lib/motion";

const TRUST = [
  { icon: Clock, label: "Ponctuel" },
  { icon: ShieldCheck, label: "Discret" },
  { icon: Leaf, label: "Électrique" },
];

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      {/* Fond décoratif : vignettes radiales or discrètes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(214,177,89,0.16),transparent_70%)] blur-2xl" />
        <div className="absolute top-1/3 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(246,223,162,0.10),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(214,177,89,0.08),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-14 pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Colonne gauche */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="eyebrow glass-pill inline-flex items-center gap-2 border-gold-400/40 px-4 py-2 text-gold-100"
          >
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden="true" />
            Chauffeur privé haut de gamme à Paris
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl"
          >
            Voyagez avec calme,{" "}
            <span className="text-gold-gradient">élégance</span> et précision
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base text-white/70 md:text-lg"
          >
            Service VTC prestige en Île-de-France : transferts aéroport, déplacements
            professionnels, soirées et trajets privés. Une berline électrique
            silencieuse, un chauffeur discret et une ponctualité irréprochable, pour
            chacun de vos rendez-vous.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${CONTACT.phoneTel}`}
              aria-label={`Appeler le ${CONTACT.phoneDisplay}`}
              className="btn-gold group inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>{CONTACT.phoneDisplay}</span>
              <ChevronRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Réserver sur WhatsApp"
              className="btn-ghost inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>Réserver sur WhatsApp</span>
            </a>
          </motion.div>

          {/* Bascule vers l'expérience Paris by Night */}
          <motion.a
            variants={fadeUp}
            href="./"
            aria-label="Découvrir nos tours Paris by Night"
            className="glass-pill group mt-5 inline-flex items-center gap-3 border-night-400/50 px-5 py-3 text-night-100 transition-colors hover:border-night-300 hover:text-white"
          >
            <Moon className="h-5 w-5 text-gold-300" aria-hidden="true" />
            <span className="font-medium">
              Nouveau&nbsp;: nos tours <span className="text-gold-200">Paris by Night</span>
            </span>
            <ChevronRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </motion.a>

          {/* Mini-cartes trust */}
          <motion.ul
            variants={fadeUp}
            className="mt-10 grid w-full max-w-md grid-cols-3 gap-3"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-gold-400/20 bg-white/[0.03] px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white/[0.06] hover:shadow-glow"
              >
                <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                <span className="text-sm font-medium text-white/80">{label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Colonne droite */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-[560px]"
        >
          {/* Halo derrière le cadre */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 scale-95 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(214,177,89,0.35),transparent_70%)] blur-3xl animate-glow-pulse"
          />

          <div className="relative animate-float overflow-hidden rounded-[2rem] border border-gold-400/30 bg-ink-800 p-2 shadow-card">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src={brand}
                alt="Eiffel Élégance — chauffeur privé VTC de prestige à Paris"
                className="aspect-square w-full object-cover"
                loading="eager"
              />
              {/* Lueurs radiales or en overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(246,223,162,0.18),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(214,177,89,0.20),transparent_55%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Badge flottant verre liquide */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-2xl border border-gold-400/40 bg-white/10 px-4 py-3 shadow-glow ring-1 ring-inset ring-white/20 backdrop-blur-xl">
            <Star className="h-5 w-5 fill-gold-400 text-gold-400" aria-hidden="true" />
            <div className="leading-tight">
              <p className="font-serif text-lg text-gold-100">4.9/5 ★</p>
              <p className="text-xs text-white/70">Clients satisfaits</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
