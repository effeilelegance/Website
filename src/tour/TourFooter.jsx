import { CONTACT } from "../data/content";
import brand from "../assets/favicon-vtc.png";
import { Phone, MessageCircle, Mail, MapPin, Car } from "lucide-react";

const TOUR_LINKS = [
  { href: "#circuits", label: "Circuits" },
  { href: "#itineraire", label: "Itinéraire" },
  { href: "#galerie", label: "Galerie" },
  { href: "#reservation", label: "Réservation" },
  { href: "#faq", label: "FAQ" },
];

export default function TourFooter() {
  return (
    <footer className="border-t border-night-400/15 bg-midnight-900">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Colonne marque */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={brand}
                alt={CONTACT.brand}
                className="h-11 w-11 rounded-full border border-gold-400/60 object-cover"
              />
              <div>
                <div className="font-serif text-gold-100 text-lg leading-tight">
                  {CONTACT.brand}
                </div>
                <div className="text-night-200 uppercase tracking-luxe text-xs">
                  Paris by Night
                </div>
              </div>
            </div>
            <p className="mt-5 text-white/55 text-sm leading-relaxed">
              Tours privés des monuments illuminés de Paris en berline électrique. Une parenthèse
              nocturne, silencieuse et élégante.
            </p>
          </div>

          {/* Colonne Le tour */}
          <div>
            <h3 className="font-serif text-gold-100 text-lg">Le tour</h3>
            <ul className="mt-5 space-y-3 text-white/55 text-sm">
              {TOUR_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Contact */}
          <div>
            <h3 className="font-serif text-gold-100 text-lg">Contact</h3>
            <ul className="mt-5 space-y-3 text-white/55 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-100"
                >
                  <Phone className="h-4 w-4 text-gold-400" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-gold-100"
                >
                  <MessageCircle className="h-4 w-4 text-gold-400" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-100"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold-400" />
                {CONTACT.area}
              </li>
            </ul>
          </div>

          {/* Colonne Autre service */}
          <div>
            <h3 className="font-serif text-gold-100 text-lg">Autre service</h3>
            <div className="mt-5 night-card p-5">
              <a
                href="vtc.html"
                className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-4 py-2 text-sm text-gold-100 transition-colors hover:bg-gold-400 hover:text-black"
              >
                <Car className="h-4 w-4" />
                Découvrir notre service VTC
              </a>
              <p className="mt-3 text-white/55 text-xs">
                Transferts aéroports &amp; déplacements privés.
              </p>
            </div>
          </div>
        </div>

        <div className="gold-divider my-10" />

        <div className="flex justify-between flex-wrap gap-2 text-white/45 text-sm">
          <span>
            © {new Date().getFullYear()} Eiffel Élégance — Paris by Night. Tous droits réservés.
          </span>
          <span>VTC Prestige • Paris et Île-de-France</span>
        </div>
      </div>
    </footer>
  );
}
