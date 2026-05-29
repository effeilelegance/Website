import { CONTACT, NAV_LINKS } from "../data/content";
import brand from "../assets/favicon-vtc.png";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Colonne marque */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={brand}
                alt={CONTACT.brand}
                className="h-11 w-11 rounded-full border border-gold-400/40 object-cover"
              />
              <div>
                <p className="font-serif text-gold-100 text-lg leading-tight">
                  {CONTACT.brand}
                </p>
                <p className="text-white/45 text-sm">{CONTACT.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-white/60 leading-relaxed">
              Chauffeur privé de prestige à {CONTACT.area}. Ponctualité,
              discrétion et confort à bord d'une berline électrique silencieuse.
            </p>
          </div>

          {/* Colonne navigation */}
          <div>
            <h3 className="font-serif text-gold-100 text-base">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 transition-colors hover:text-gold-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne contact */}
          <div>
            <h3 className="font-serif text-gold-100 text-base">Contact</h3>
            <ul className="mt-4 space-y-3 text-white/60">
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold-100"
                >
                  <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-gold-100"
                >
                  <MessageCircle
                    className="h-4 w-4 text-gold-400"
                    aria-hidden="true"
                  />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold-100"
                >
                  <Mail className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {CONTACT.area}
              </li>
            </ul>
          </div>

          {/* Colonne réserver */}
          <div className="md:col-span-4 md:flex md:items-center md:justify-between md:gap-6 md:border-t md:border-white/10 md:pt-10">
            <h3 className="font-serif text-gold-100 text-base md:sr-only">
              Réserver
            </h3>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="btn-gold mt-4 inline-flex md:mt-0"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Appeler maintenant
            </a>
            <p className="mt-3 text-white/45 text-sm md:mt-0">
              Disponible 7j/7, jour et nuit.
            </p>
          </div>
        </div>

        <div className="gold-divider mt-12" />

        <div className="mt-6 flex flex-col gap-2 text-white/45 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Eiffel Élégance. Tous droits réservés.</p>
          <p>VTC Prestige — Paris et Île-de-France</p>
        </div>
      </div>
    </footer>
  );
}
