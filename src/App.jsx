import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, ShieldCheck, Plane, BriefcaseBusiness, MapPin, Sparkles, Leaf, Star, ChevronRight } from "lucide-react";
import brandImage from "./assets/favicon-vtc.png";
import vehicleFrontImage from "./assets/car-front.png";
import vehicleProfileImage from "./assets/car-profile.png";

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

function MainImage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-[#c9a24a]/25 bg-black/55 p-5 shadow-2xl shadow-black/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(214,177,89,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_55%)]" />
      <img
        src={brandImage}
        alt="Eiffel Élégance VTC Prestige"
        className="relative z-10 h-full w-full rounded-[1.5rem] object-cover"
        loading="eager"
      />
    </div>
  );
}

function VehicleImageHover() {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#121212] to-black p-4 shadow-2xl shadow-black/45">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,177,89,0.2),transparent_42%)]" />
      <div className="relative aspect-[1672/941] min-h-[260px] overflow-hidden rounded-[1.5rem] bg-black">
        <img
          src={vehicleProfileImage}
          alt="Hyundai Ioniq Electric 2021 vue de profil"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
        />
        <img
          src={vehicleFrontImage}
          alt="Hyundai Ioniq Electric 2021 vue de face"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
        />
      </div>
      <div className="relative z-10 mt-5 flex flex-wrap gap-3 text-sm text-white/60">
        <span className="rounded-full border border-[#d6b159]/30 px-4 py-2">Berline électrique</span>
        <span className="rounded-full border border-[#d6b159]/30 px-4 py-2">Paris et Île de France</span>
        <span className="rounded-full border border-[#d6b159]/30 px-4 py-2">Service privé</span>
      </div>
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
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#d6b159]/60 bg-black shadow-[0_0_25px_rgba(214,177,89,0.25)]">
              <img src={brandImage} alt="" className="h-full w-full object-cover" />
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
            <MainImage />
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
          <VehicleImageHover />
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
