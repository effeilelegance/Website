import { useState, useMemo } from "react";
import { CONTACT, FARE } from "../data/content";
import { euro, whatsappLink, cn } from "../lib/utils";
import { fadeUp, revealOnScroll, scaleIn } from "../lib/motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  Users,
  Calculator,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Preset "sur-mesure" par défaut : un trajet type dans Paris.
const CUSTOM_PRESET = { label: "Autre / sur-mesure", km: 8, min: 20 };

// Détermine si une heure (HH:MM) tombe dans la plage de nuit (21h → 6h).
function isNightTime(time) {
  if (!time) return false;
  const hour = Number(time.split(":")[0]);
  if (Number.isNaN(hour)) return false;
  return hour >= 21 || hour < 6;
}

export default function BookingEstimator() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [activePreset, setActivePreset] = useState(null); // index dans la liste ou "custom"
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);

  // Le preset effectivement utilisé pour le calcul (null tant que rien n'est choisi).
  const selectedPreset = useMemo(() => {
    if (activePreset === null) return null;
    if (activePreset === "custom") return CUSTOM_PRESET;
    return FARE.presets[activePreset] ?? null;
  }, [activePreset]);

  const night = isNightTime(time);

  // Estimation tarifaire (TTC) en euros, arrondie à l'entier.
  const estimate = useMemo(() => {
    if (!selectedPreset) return null;
    const { km, min } = selectedPreset;
    let price = FARE.base + FARE.perKm * km + FARE.perMin * min;
    if (night) price *= FARE.nightSurcharge;
    price = Math.max(price, FARE.minFare);
    return Math.round(price);
  }, [selectedPreset, night]);

  // Message WhatsApp recalculé à la volée — toujours valide.
  const whatsappHref = useMemo(() => {
    const dash = (v) => (v && String(v).trim() !== "" ? v : "—");
    const dateLine = date || time ? `${dash(date)} à ${dash(time)}` : "—";
    const estimateLine = estimate !== null ? `${estimate} €` : "—";
    const message =
      `Bonjour ${CONTACT.brand}, je souhaite réserver une course.\n` +
      `Départ : ${dash(departure)}\n` +
      `Arrivée : ${dash(arrival)}\n` +
      `Date : ${dateLine}\n` +
      `Passagers : ${dash(passengers)}\n` +
      `Estimation : ${estimateLine}`;
    return whatsappLink(CONTACT.whatsappNumber, message);
  }, [departure, arrival, date, time, passengers, estimate]);

  const inputClass =
    "w-full rounded-xl bg-ink-700 border border-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors duration-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30";
  const labelClass = "block text-sm text-white/60 mb-2";
  const iconClass =
    "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold-400/70";

  return (
    <section id="reservation" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={scaleIn}
          {...revealOnScroll}
          className="luxe-card p-8 md:p-12 shadow-glow"
        >
          {/* Entête */}
          <motion.div variants={fadeUp} className="text-center">
            <span className="eyebrow inline-flex items-center gap-2">
              <Calculator size={16} className="text-gold-400" />
              Réservation
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
              Estimez votre course en 30 secondes
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Choisissez votre trajet, ajustez les détails et recevez une
              estimation instantanée. Réservation finalisée en un clic sur
              WhatsApp.
            </p>
          </motion.div>

          {/* Formulaire */}
          <div className="mt-10 space-y-6">
            {/* Adresses */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="be-departure" className={labelClass}>
                  Départ
                </label>
                <div className="relative">
                  <MapPin size={18} className={iconClass} />
                  <input
                    id="be-departure"
                    type="text"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="Ex. 12 rue de Rivoli, Paris"
                    className={cn(inputClass, "pl-11")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="be-arrival" className={labelClass}>
                  Arrivée
                </label>
                <div className="relative">
                  <MapPin size={18} className={iconClass} />
                  <input
                    id="be-arrival"
                    type="text"
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                    placeholder="Ex. Aéroport CDG, Terminal 2"
                    className={cn(inputClass, "pl-11")}
                  />
                </div>
              </div>
            </div>

            {/* Sélecteur de trajet type */}
            <div>
              <span className={labelClass}>Trajet type</span>
              <div className="flex flex-wrap gap-2">
                {FARE.presets.map((preset, index) => {
                  const active = activePreset === index;
                  return (
                    <button
                      key={preset.label}
                      type="button"
                      aria-label={`Choisir le trajet ${preset.label}`}
                      aria-pressed={active}
                      onClick={() => {
                        setActivePreset(index);
                        setArrival(preset.label);
                      }}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-gold-400/40",
                        active
                          ? "bg-gold-400 text-black shadow-glow"
                          : "border border-gold-400/30 text-white/80 hover:border-gold-400/60 hover:text-white"
                      )}
                    >
                      {preset.label}
                    </button>
                  );
                })}
                <button
                  type="button"
                  aria-label="Choisir un trajet sur-mesure"
                  aria-pressed={activePreset === "custom"}
                  onClick={() => setActivePreset("custom")}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-gold-400/40",
                    activePreset === "custom"
                      ? "bg-gold-400 text-black shadow-glow"
                      : "border border-gold-400/30 text-white/80 hover:border-gold-400/60 hover:text-white"
                  )}
                >
                  <Sparkles size={14} />
                  Autre / sur-mesure
                </button>
              </div>
            </div>

            {/* Date, heure, passagers */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label htmlFor="be-date" className={labelClass}>
                  Date
                </label>
                <div className="relative">
                  <Calendar size={18} className={iconClass} />
                  <input
                    id="be-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={cn(inputClass, "pl-11 [color-scheme:dark]")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="be-time" className={labelClass}>
                  Heure
                </label>
                <div className="relative">
                  <Clock size={18} className={iconClass} />
                  <input
                    id="be-time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={cn(inputClass, "pl-11 [color-scheme:dark]")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="be-passengers" className={labelClass}>
                  Passagers
                </label>
                <div className="relative">
                  <Users size={18} className={iconClass} />
                  <select
                    id="be-passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className={cn(
                      inputClass,
                      "pl-11 appearance-none [color-scheme:dark] cursor-pointer"
                    )}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n} className="bg-ink-700 text-white">
                        {n} passager{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Résultat */}
          <AnimatePresence mode="wait">
            {estimate !== null && (
              <motion.div
                key={`${activePreset}-${night}`}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 rounded-2xl border border-gold-400/30 bg-ink-800 p-6 md:p-8"
              >
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <p className="text-sm text-white/50">Estimation indicative TTC</p>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-serif text-5xl text-gold-100">
                        {euro(estimate)}
                      </span>
                      {night && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-300">
                          <Sparkles size={12} />
                          Tarif de nuit
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Clock size={18} className="text-gold-400" />
                    <span className="text-sm">
                      Durée approximative&nbsp;:{" "}
                      <span className="text-white font-medium">
                        {selectedPreset.min} min
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Réserver votre course sur WhatsApp"
              className="btn-gold flex-1 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Réserver sur WhatsApp
              <ArrowRight size={18} />
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              aria-label={`Appeler le ${CONTACT.phoneDisplay}`}
              className="btn-ghost flex-1 inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Appeler le {CONTACT.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
