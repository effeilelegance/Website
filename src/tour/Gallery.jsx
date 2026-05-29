// Gallery.jsx — "Paris illuminé en images".
// Mosaïque nocturne des monuments. Les silhouettes <Monument/> sont des
// placeholders : pour de vraies photos plus tard, remplacer <Monument/> par
// <img src=... alt={m.name} className="h-full w-full object-cover" /> dans la
// cellule (le cadre, l'overlay et le halo restent identiques).

import { motion } from "framer-motion";
import { Monument } from "./Monuments";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";

// 8 monuments à afficher dans la mosaïque.
const ITEMS = [
  { name: "Tour Eiffel", monument: "EiffelTower" },
  { name: "Arc de Triomphe", monument: "ArcDeTriomphe" },
  { name: "Louvre & Pyramide", monument: "LouvrePyramid" },
  { name: "Pont Alexandre III", monument: "PontAlexandre" },
  { name: "Notre-Dame", monument: "NotreDame" },
  { name: "Opéra Garnier", monument: "OperaGarnier" },
  { name: "Moulin Rouge", monument: "MoulinRouge" },
  { name: "Sacré-Cœur", monument: "SacreCoeur" },
];

// Cellules mises en avant pour le relief "masonry".
const SPANS = {
  0: "md:col-span-2 md:row-span-2", // grande vignette d'entrée (Tour Eiffel)
  3: "md:row-span-2", // colonne haute (Pont Alexandre III)
};

export default function Gallery() {
  return (
    <section id="galerie" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          Galerie
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-5xl text-gold-100"
        >
          Paris illuminé en images
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-white/60 max-w-2xl mx-auto"
        >
          Chaque monument capturé dans la lumière dorée de la nuit parisienne,
          tel que vous le découvrirez au fil de votre tour privé.
        </motion.p>
        <motion.div variants={fadeUp} className="gold-divider mx-auto mt-6" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]"
      >
        {ITEMS.map((m) => (
          <motion.figure
            key={m.monument}
            variants={fadeUp}
            className={`group relative overflow-hidden rounded-2xl border border-gold-400/20 bg-midnight-800 bg-night-sky transition-colors duration-500 hover:border-gold-400/50 ${
              SPANS[ITEMS.indexOf(m)] ?? ""
            }`}
          >
            {/* Halo doré flou et pulsant derrière la silhouette. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-3xl animate-glow-pulse"
            />

            {/* Cellule : remplacer ce bloc par une <img/> pour de vraies photos. */}
            <div className="relative z-10 flex min-h-[180px] h-full items-center justify-center p-6">
              <Monument
                name={m.monument}
                className="h-full max-h-40 w-auto drop-shadow transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay dégradé + légende. */}
            <figcaption className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-midnight-900 to-transparent p-4 pt-10">
              <span className="font-serif text-gold-100">{m.name}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
