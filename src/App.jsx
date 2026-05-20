import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, ShieldCheck, Plane, BriefcaseBusiness, MapPin, Sparkles, Leaf, Star, ChevronRight } from "lucide-react";

const PHONE_DISPLAY = "06 59 53 34 24";
const PHONE_TEL = "+33659533424";
const WHATSAPP_URL = "https://wa.me/33659533424";

const services = [
  {
    icon: Plane,
    title: "Transferts aéroports et gares",
    text: "Prise en charge soignée pour CDG, Orly, Beauvais et les grandes gares parisiennes."
  },
  {
    icon: BriefcaseBusiness,
    title: "Déplacements professionnels",
    text: "Un chauffeur privé pour les rendez vous, les hôtels, les sièges d’entreprise et les journées chargées."
  },
  {
    icon: Sparkles,
    title: "Événements et soirées",
    text: "Mariage, restaurant, spectacle, déplacement VIP ou trajet privé avec une présence discrète."
  }
];

const advantages = [
  "Ponctualité",
  "Discrétion",
  "Confort",
  "Réservation simple",
  "Trajet silencieux",
  "Service prestige"
];

function EiffelTower() {
  return (
    <svg viewBox="0 0 180 280" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="goldTower" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff1b8" />
          <stop offset="45%" stopColor="#c79b45" />
          <stop offset="100%" stopColor="#7a561b" />
        </linearGradient>
      </defs>
      <path d="M89 10 L92 10 L95 40 L85 40 Z" fill="url(#goldTower)" opacity="0.95" />
      <path d="M82 45 H98 L108 100 H72 Z" fill="none" stroke="url(#goldTower)" strokeWidth="4" />
      <path d="M68 108 H112" stroke="url(#goldTower)" strokeWidth="6" strokeLinecap="round" />
      <path d="M70 120 L42 260 M110 120 L138 260" stroke="url(#goldTower)" strokeWidth="7" strokeLinecap="round" />
      <path d="M56 186 H124" stroke="url(#goldTower)" strokeWidth="7" strokeLinecap="round" />
      <path d="M38 260 H142" stroke="url(#goldTower)" strokeWidth="8" strokeLinecap="round" />
      <path d="M58 260 C70 228 110 228 122 260" fill="none" stroke="url(#goldTower)" strokeWidth="5" />
      {[62, 74, 86, 98, 110].map((x, i) => (
        <path key={i} d={`M${x} 58 L${118 - x} 250`} stroke="#d9b35d" strokeWidth="1.2" opacity="0.65" />
      ))}
      <path d="M76 48 L104 100 M104 48 L76 100 M68 125 L112 184 M112 125 L68 184 M52 190 L128 255 M128 190 L52 255" stroke="#f7dda0" strokeWidth="1.4" opacity="0.75" />
    </svg>
  );
}

function ChauffeurCarScene() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[650px] overflow-hidden rounded-[2rem] border border-[#c9a24a]/25 bg-black/40 shadow-2xl shadow-black/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_30%,rgba(214,177,89,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute right-10 top-6 h-72 w-44 opacity-90">
        <EiffelTower />
      </div>
      <div className="absolute left-10 top-24 h-64 w-28">
        <div className="absolute left-6 top-0 h-14 w-14 rounded-full border border-[#d6b159] bg-black shadow-[0_0_25px_rgba(214,177,89,0.3)]" />
        <div className="absolute left-0 top-2 h-6 w-20 -rotate-6 rounded-[50%] border border-[#d6b159] bg-black" />
        <div className="absolute left-11 top-[4.5rem] h-20 w-[2px] bg-[#f5e1a7]" />
        <div className="absolute left-5 top-16 h-36 w-20 rounded-t-[2rem] border border-[#d6b159] bg-black" />
        <div className="absolute left-7 top-[6.25rem] h-24 w-[1px] bg-[#d6b159]/70" />
        <div className="absolute left-14 top-[6.25rem] h-24 w-[1px] bg-[#d6b159]/50" />
        <div className="absolute left-4 top-52 h-20 w-5 rounded-b-full border border-[#d6b159] bg-black" />
        <div className="absolute left-[4.5rem] top-52 h-20 w-5 rounded-b-full border border-[#d6b159] bg-black" />
        <div className="absolute left-7 top-24 h-4 w-14 bg-white/95" />
        <div className="absolute left-10 top-24 h-20 w-3 bg-black" />
        <div className="absolute left-7 top-[9.25rem] h-3 w-10 bg-[#d6b159]" />
      </div>
      <svg viewBox="0 0 720 330" className="absolute bottom-2 left-1/2 h-[260px] w-[620px] -translate-x-[42%]" aria-label="Silhouette d’une Hyundai Ioniq Electric 2021">
        <defs>
          <linearGradient id="carGold" x1="0" x2="1">
            <stop offset="0" stopColor="#fff3c4" />
            <stop offset="0.5" stopColor="#d6b159" />
            <stop offset="1" stopColor="#8b6424" />
          </linearGradient>
        </defs>
        <path d="M70 205 C105 145 168 117 245 115 H390 C475 116 545 148 615 205 C642 226 653 250 646 271 H70 C52 252 51 229 70 205 Z" fill="#070707" stroke="url(#carGold)" strokeWidth="5" />
        <path d="M170 116 C198 72 242 55 315 55 H374 C419 58 454 80 492 126" fill="none" stroke="#f2d48b" strokeWidth="5" strokeLinecap="round" />
        <path d="M206 117 C230 82 263 70 320 70 H370 C395 73 420 88 447 122" fill="rgba(255,255,255,0.08)" stroke="#d6b159" strokeWidth="3" />
        <path d="M91 214 C125 205 165 199 210 202" stroke="#f4e1ae" strokeWidth="4" strokeLinecap="round" />
        <path d="M478 197 H598 C612 197 622 206 625 220 H498 C487 218 477 210 478 197 Z" fill="#fff7db" opacity="0.9" />
        <path d="M500 226 H645" stroke="#d6b159" strokeWidth="4" strokeLinecap="round" />
        <path d="M235 200 H455" stroke="#d6b159" strokeWidth="3" opacity="0.85" />
        <path d="M158 146 H220 M456 145 H524" stroke="#f8e7b9" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <circle cx="205" cy="269" r="43" fill="#030303" stroke="#f1d78d" strokeWidth="5" />
        <circle cx="205" cy="269" r="22" fill="none" stroke="#cfa34f" strokeWidth="3" />
        <circle cx="537" cy="269" r="43" fill="#030303" stroke="#f1d78d" strokeWidth="5" />
        <circle cx="537" cy="269" r="22" fill="none" stroke="#cfa34f" strokeWidth="3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
          <g key={r} transform={`rotate(${r} 205 269)`}>
            <path d="M205 247 L205 225" stroke="#d6b159" strokeWidth="2" />
          </g>
        ))}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
          <g key={r} transform={`rotate(${r} 537 269)`}>
            <path d="M537 247 L537 225" stroke="#d6b159" strokeWidth="2" />
          </g>
        ))}
        <path d="M620 239 C642 239 655 246 661 259" stroke="#f5e6bd" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <div className="absolute bottom-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#d6b159] to-transparent" />
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,177,89,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#accueil" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b159]/60 bg-black text-xl font-serif text-[#f6dfa2] shadow-[0_0_25px_rgba(214,177,89,0.25)]">
              EE
            </div>
            <div>
              <p className="font-serif text-xl tracking-[0.18em] text-[#f6dfa2]">Eiffel Élégance</p>
              <p className="text-[11px] uppercase tracking-[0.42em] text-white/[0.55]">VTC Prestige</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-[#f6dfa2]">Services</a>
            <a href="#vehicule" className="transition hover:text-[#f6dfa2]">Véhicule</a>
            <a href="#reservation" className="transition hover:text-[#f6dfa2]">Réservation</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="hidden rounded-full border border-[#d6b159]/60 px-5 py-3 text-sm font-medium text-[#f6dfa2] transition hover:bg-[#d6b159] hover:text-black md:inline-flex">
            Appeler
          </a>
        </header>

        <section id="accueil" className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-14">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6b159]/40 bg-white/[0.03] px-4 py-2 text-sm text-[#f6dfa2] backdrop-blur">
              <Star className="h-4 w-4" />
              Chauffeur privé haut de gamme à Paris
            </div>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight text-white md:text-7xl">
              Voyagez avec calme élégance et précision
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Eiffel Élégance propose un service VTC prestige pour vos transferts aéroport vos rendez vous professionnels vos soirées et vos déplacements privés en Île de France
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${PHONE_TEL}`} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b159] px-7 py-4 font-semibold text-black shadow-[0_0_35px_rgba(214,177,89,0.35)] transition hover:bg-[#f4d98f]">
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
                <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-[#d6b159]/70 hover:text-[#f6dfa2]">
                <MessageCircle className="h-5 w-5" />
                Réserver sur WhatsApp
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <Clock className="mb-3 h-5 w-5 text-[#f6dfa2]" />
                <p className="text-sm text-white/[0.65]">Ponctuel</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <ShieldCheck className="mb-3 h-5 w-5 text-[#f6dfa2]" />
                <p className="text-sm text-white/[0.65]">Discret</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <Leaf className="mb-3 h-5 w-5 text-[#f6dfa2]" />
                <p className="text-sm text-white/[0.65]">Électrique</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }}>
            <ChauffeurCarScene />
          </motion.div>
        </section>

        <section className="border-y border-[#d6b159]/[0.15] bg-white/[0.025] px-6 py-5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm uppercase tracking-[0.25em] text-white/[0.55]">
            {advantages.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-[#d6b159]">Services</p>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">Un service pensé pour les trajets importants</h2>
            <p className="mt-5 text-lg leading-8 text-white/[0.62]">
              Une présence élégante un véhicule propre une conduite souple et une communication simple avant chaque trajet
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-7 shadow-2xl shadow-black/30">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b159]/40 bg-black text-[#f6dfa2]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/[0.62]">{service.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="vehicule" className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2rem] border border-[#d6b159]/20 bg-[#0b0b0b] p-8 shadow-2xl shadow-black/50">
            <p className="text-sm uppercase tracking-[0.45em] text-[#d6b159]">Véhicule</p>
            <h2 className="mt-5 font-serif text-4xl text-white md:text-5xl">Hyundai Ioniq Electric 2021</h2>
            <p className="mt-6 text-lg leading-8 text-white/[0.65]">
              Une berline électrique silencieuse sobre et confortable idéale pour les trajets urbains les transferts et les rendez vous professionnels
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Trajet silencieux",
                "Conduite souple",
                "Transport responsable",
                "Ambiance propre et soignée"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#121212] to-black p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,177,89,0.22),transparent_40%)]" />
            <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-end">
              <svg viewBox="0 0 760 260" className="w-full" aria-label="Profil stylisé Hyundai Ioniq Electric 2021">
                <path d="M72 168 C118 104 190 74 302 73 H438 C540 76 614 105 694 169 C715 185 727 209 722 225 H55 C44 205 48 184 72 168 Z" fill="#060606" stroke="#d6b159" strokeWidth="5" />
                <path d="M200 75 C235 34 283 20 360 20 H430 C480 24 520 47 563 86" fill="none" stroke="#f6dfa2" strokeWidth="5" strokeLinecap="round" />
                <path d="M230 78 C260 45 302 35 365 35 H427 C455 38 485 53 520 87" fill="rgba(255,255,255,0.08)" stroke="#d6b159" strokeWidth="3" />
                <path d="M95 176 C135 165 184 160 238 163" stroke="#f6dfa2" strokeWidth="4" strokeLinecap="round" />
                <path d="M555 157 H695 C704 157 710 164 713 176 H575 C564 176 555 168 555 157 Z" fill="#f6dfa2" opacity="0.95" />
                <path d="M238 164 H535" stroke="#d6b159" strokeWidth="3" />
                <circle cx="210" cy="224" r="38" fill="#030303" stroke="#f6dfa2" strokeWidth="5" />
                <circle cx="210" cy="224" r="18" fill="none" stroke="#d6b159" strokeWidth="3" />
                <circle cx="585" cy="224" r="38" fill="#030303" stroke="#f6dfa2" strokeWidth="5" />
                <circle cx="585" cy="224" r="18" fill="none" stroke="#d6b159" strokeWidth="3" />
              </svg>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
                <span className="rounded-full border border-[#d6b159]/30 px-4 py-2">Berline électrique</span>
                <span className="rounded-full border border-[#d6b159]/30 px-4 py-2">Paris et Île de France</span>
                <span className="rounded-full border border-[#d6b159]/30 px-4 py-2">Service privé</span>
              </div>
            </div>
          </div>
        </section>

        <section id="reservation" className="px-6 pb-28 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#d6b159]/25 bg-[linear-gradient(135deg,rgba(214,177,89,0.18),rgba(255,255,255,0.04),rgba(0,0,0,0.6))] p-8 text-center shadow-2xl shadow-black/60 md:p-14">
            <MapPin className="mx-auto mb-5 h-8 w-8 text-[#f6dfa2]" />
            <h2 className="font-serif text-4xl text-white md:text-6xl">Besoin d’un chauffeur privé</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.66]">
              Appelez directement ou envoyez votre demande sur WhatsApp avec l’adresse de départ l’adresse d’arrivée la date et l’heure souhaitée
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b159] px-8 py-4 font-semibold text-black transition hover:bg-[#f4d98f]">
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.15] px-8 py-4 font-semibold text-white transition hover:border-[#d6b159] hover:text-[#f6dfa2]">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center text-sm text-white/[0.45] md:flex-row md:items-center md:justify-between md:text-left">
            <p className="font-serif text-xl tracking-[0.18em] text-[#f6dfa2]">Eiffel Élégance</p>
            <p>VTC Prestige Paris et Île de France</p>
            <a href={`tel:${PHONE_TEL}`} className="text-white/70 hover:text-[#f6dfa2]">{PHONE_DISPLAY}</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
