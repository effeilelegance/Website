import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS } from "../data/content";
import brand from "../assets/favicon-vtc.png";
import { Phone, MessageCircle, Menu, X, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Fond opaque dès que la page défile au-delà de 30px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le défilement du body quand le menu mobile est ouvert.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Barre de progression de scroll */}
      <motion.div
        style={{ scaleX: progress, transformOrigin: "left" }}
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400"
        aria-hidden="true"
      />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + identité */}
        <a
          href="#top"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60 rounded-full"
          aria-label={`${CONTACT.brand} — accueil`}
        >
          <img
            src={brand}
            alt={CONTACT.brand}
            className="h-11 w-11 rounded-full border border-gold-400/60 object-cover shadow-[0_0_18px_rgba(214,177,89,0.45)] transition-transform duration-500 group-hover:scale-105"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg text-gold-100 tracking-[0.18em]">
              {CONTACT.brand}
            </span>
            <span className="text-[10px] uppercase tracking-luxe text-white/60">
              {CONTACT.tagline}
            </span>
          </span>
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-white/70 transition-colors duration-300 hover:text-gold-100 focus:outline-none focus-visible:text-gold-100 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop + hamburger mobile */}
        <div className="flex items-center gap-3">
          {/* Bascule vers le mode Paris by Night (page principale) */}
          <a
            href="./"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-4 py-2 text-sm text-gold-100 transition-colors hover:bg-gold-400 hover:text-black"
          >
            <Moon className="h-4 w-4" aria-hidden="true" />
            <span>Paris by Night</span>
          </a>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="hidden md:inline-flex btn-ghost items-center gap-2 px-4 py-2 text-sm"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Appeler</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-gold-400/40 text-gold-100 transition-colors hover:border-gold-400/70 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Menu plein écran mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden bg-ink/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
              <span className="font-serif text-lg text-gold-100 tracking-[0.18em]">
                {CONTACT.brand}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-gold-400/40 text-gold-100 transition-colors hover:border-gold-400/70 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex h-[calc(100%-5rem)] flex-col items-center justify-center gap-8 px-6">
              <ul className="flex flex-col items-center gap-7">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i + 0.1, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-3xl text-white/80 transition-colors duration-300 hover:text-gold-100 focus:outline-none focus-visible:text-gold-100"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * NAV_LINKS.length + 0.15, duration: 0.4 }}
                className="flex w-full max-w-xs flex-col gap-4 pt-4"
              >
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  onClick={() => setOpen(false)}
                  className="btn-gold flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span>Appeler</span>
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-ghost flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="./"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border border-gold-400/50 px-4 py-3 text-gold-100 transition-colors hover:bg-gold-400 hover:text-black"
                >
                  <Moon className="h-5 w-5" aria-hidden="true" />
                  <span>Paris by Night</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
