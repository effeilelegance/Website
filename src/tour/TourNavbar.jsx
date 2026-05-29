import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Phone, MessageCircle, Menu, X, Car } from "lucide-react";
import { CONTACT } from "../data/content";
import brand from "../assets/favicon-vtc.png";

const LINKS = [
  { href: "#circuits", label: "Circuits" },
  { href: "#itineraire", label: "Itinéraire" },
  { href: "#reservation", label: "Réservation" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export default function TourNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-midnight-900/80 backdrop-blur-xl border-b border-night-400/15"
          : "bg-transparent"
      }`}
    >
      {/* Barre de progression dorée */}
      <motion.div
        style={{ scaleX: progress, originX: 0 }}
        className="absolute top-0 inset-x-0 h-[2px] bg-gold-400 origin-left"
      />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <img
            src={brand}
            alt={CONTACT.brand}
            className="h-11 w-11 rounded-full border border-gold-400/60 object-cover shadow-[0_0_20px_rgba(214,177,89,0.35)]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-gold-100 text-lg tracking-wide">
              {CONTACT.brand}
            </span>
            <span className="uppercase tracking-luxe text-night-200 text-[11px] mt-1">
              Paris by Night
            </span>
          </span>
        </a>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-night-200 hover:text-gold-100 transition-colors text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Bascule + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="vtc.html"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-4 py-2 text-sm text-gold-100 hover:bg-gold-400 hover:text-black transition-colors"
          >
            <Car className="h-4 w-4" />
            Mode VTC
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-night-400/20 text-gold-100 hover:bg-gold-400 hover:text-black transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-midnight-900/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-serif text-gold-100 text-lg">
                {CONTACT.brand}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                aria-expanded={open}
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-night-400/20 text-gold-100 hover:bg-gold-400 hover:text-black transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              className="flex-1 flex flex-col items-center justify-center gap-6"
            >
              {LINKS.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="font-serif text-3xl text-night-100 hover:text-gold-100 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}

              <motion.a
                href="vtc.html"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-6 py-3 text-gold-100 hover:bg-gold-400 hover:text-black transition-colors"
              >
                <Car className="h-5 w-5" />
                Mode VTC
              </motion.a>
            </motion.nav>

            <div className="px-6 py-8 flex flex-col gap-3">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="btn-gold w-full justify-center inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full justify-center inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
