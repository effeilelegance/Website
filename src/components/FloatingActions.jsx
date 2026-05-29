import { useState, useEffect } from "react";
import { CONTACT } from "../data/content";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Bouton WhatsApp toujours visible */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Réserver sur WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-glow"
        style={{ backgroundColor: "#25D366" }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full animate-glow-pulse"
          style={{ backgroundColor: "#25D366" }}
        />
        <MessageCircle className="relative h-6 w-6 text-white" aria-hidden="true" />
      </a>

      {/* Bouton retour en haut, après scroll > 500px */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Retour en haut de page"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/40 bg-ink-800/70 text-gold-100 shadow-glow ring-1 ring-inset ring-white/10 backdrop-blur-xl transition-colors hover:bg-ink-700/80"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
