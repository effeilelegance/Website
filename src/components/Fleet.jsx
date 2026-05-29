import { VEHICLE } from "../data/content";
import { fadeUp, scaleIn, revealOnScroll } from "../lib/motion";
import vehicleFront from "../assets/car-front.png";
import vehicleProfile from "../assets/car-profile.png";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Fleet() {
  return (
    <section
      id="flotte"
      className="max-w-7xl mx-auto px-6 pb-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
    >
      {/* Carte gauche — détails du véhicule */}
      <motion.div
        variants={fadeUp}
        {...revealOnScroll}
        className="rounded-[2rem] border border-gold-400/20 bg-ink-800 p-8"
      >
        <p className="eyebrow">Véhicule</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <h2 className="font-serif text-3xl md:text-4xl text-gold-100">
            {VEHICLE.name}
          </h2>
          <span className="inline-flex items-center rounded-full border border-gold-400/40 bg-black px-3 py-1 text-xs uppercase tracking-wide text-gold-100">
            {VEHICLE.category}
          </span>
        </div>
        <p className="mt-4 text-white/60">{VEHICLE.description}</p>

        {/* Caractéristiques 2x2 */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {VEHICLE.specs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-2xl border border-white/10 bg-black/40 p-4"
            >
              <p className="font-serif text-2xl text-gold-100">{spec.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-white/50">
                {spec.label}
              </p>
            </div>
          ))}
        </div>

        {/* Équipements */}
        <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {VEHICLE.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-400"
                aria-hidden="true"
              />
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Bloc droit — showcase image */}
      <motion.div
        variants={scaleIn}
        {...revealOnScroll}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-700 to-black p-4"
      >
        {/* Lueur or radiale */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(214,177,89,0.18),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative aspect-[1672/941] min-h-[260px] overflow-hidden rounded-[1.5rem]">
          <img
            src={vehicleProfile}
            alt={`${VEHICLE.name} vue de profil`}
            className="absolute inset-0 h-full w-full object-cover opacity-100 transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            src={vehicleFront}
            alt={`${VEHICLE.name} vue de face`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>

        {/* Chips */}
        <div className="relative mt-4 flex flex-wrap gap-3">
          {["Berline électrique", "Paris et Île-de-France", "Service privé"].map(
            (chip) => (
              <span
                key={chip}
                className="rounded-full border border-gold-400/30 px-4 py-2 text-sm text-white/60"
              >
                {chip}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
