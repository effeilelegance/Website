import { CONTACT, PRICING } from "../data/content";
import { Icon } from "../lib/icons";
import { euro } from "../lib/utils";
import { fadeUp, staggerContainer, revealOnScroll } from "../lib/motion";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="tarifs" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        variants={fadeUp}
        {...revealOnScroll}
        className="text-center"
      >
        <p className="eyebrow">Tarifs</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mt-3">
          Forfaits transparents
        </h2>
        <div className="gold-divider mx-auto my-6" />
        <p className="text-white/60 max-w-2xl mx-auto">
          Tarifs indicatifs TTC, confirmés avant le départ.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealOnScroll}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
      >
        {PRICING.map((item, i) => (
          <motion.article
            key={i}
            variants={fadeUp}
            className="luxe-card p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/25 text-gold-400">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/60">
                <Clock className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {item.duration}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-2 flex-wrap">
              <span className="text-white/60">{item.from}</span>
              <ArrowRight className="h-4 w-4 text-gold-400 shrink-0" aria-hidden="true" />
              <span className="font-serif text-xl text-white">{item.to}</span>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-white/40">
                à partir de
              </p>
              <p className="font-serif text-3xl text-gold-100 mt-1">
                {euro(item.price)}
              </p>
            </div>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-100 transition-colors group"
            >
              Réserver ce trajet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
