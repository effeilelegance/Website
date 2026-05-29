import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Languages,
  Users,
} from "lucide-react";
import { NightScene } from "./NightScene";
import { CONTACT } from "../data/content";
import { CIRCUITS } from "../data/tour";
import { whatsappLink, cn } from "../lib/utils";
import { fadeUp, revealOnScroll } from "../lib/motion";

const INPUT_CLASS =
  "bg-midnight-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 outline-none";
const LABEL_CLASS = "text-white/60 text-sm mb-2 block";

export default function TourBooking() {
  const [circuit, setCircuit] = useState(CIRCUITS[1].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("21:00");
  const [people, setPeople] = useState(2);
  const [lang, setLang] = useState("FR");
  const [name, setName] = useState("");

  const whatsappHref = useMemo(() => {
    const message = `Bonjour ${CONTACT.brand}, je souhaite réserver un tour Paris by Night.\nCircuit : ${circuit}\nDate : ${date || "—"} à ${time || "—"}\nPersonnes : ${people}\nLangue : ${lang}\nNom : ${name || "—"}`;
    return whatsappLink(CONTACT.whatsappNumber, message);
  }, [circuit, date, time, people, lang, name]);

  return (
    <section id="reservation" className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        variants={fadeUp}
        {...revealOnScroll}
        className="relative night-card p-8 md:p-12 overflow-hidden"
      >
        <NightScene />

        <div className="relative">
          <div className="text-center max-w-xl mx-auto">
            <p className="eyebrow">Réservation</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-3">
              Réservez votre tour privé
            </h2>
            <p className="text-white/60 mt-4">
              Indiquez vos préférences, nous confirmons votre tour Paris by Night
              en quelques minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <div className="sm:col-span-2">
              <label htmlFor="tour-circuit" className={LABEL_CLASS}>
                Circuit
              </label>
              <select
                id="tour-circuit"
                value={circuit}
                onChange={(e) => setCircuit(e.target.value)}
                className={cn(INPUT_CLASS, "w-full")}
              >
                {CIRCUITS.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="tour-date" className={LABEL_CLASS}>
                Date
              </label>
              <input
                id="tour-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={cn(INPUT_CLASS, "w-full [color-scheme:dark]")}
              />
            </div>

            <div>
              <label htmlFor="tour-time" className={LABEL_CLASS}>
                Heure de départ
              </label>
              <input
                id="tour-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={cn(INPUT_CLASS, "w-full [color-scheme:dark]")}
              />
            </div>

            <div>
              <label htmlFor="tour-people" className={LABEL_CLASS}>
                Personnes
              </label>
              <select
                id="tour-people"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className={cn(INPUT_CLASS, "w-full")}
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n} personne(s)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className={LABEL_CLASS}>Langue du guide</span>
              <div className="flex gap-3">
                {["FR", "EN"].map((code) => {
                  const active = lang === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      aria-pressed={active}
                      aria-label={`Guide en ${code === "FR" ? "français" : "anglais"}`}
                      onClick={() => setLang(code)}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold transition-colors outline-none focus:ring-2 focus:ring-gold-400/30",
                        active
                          ? "bg-gold-400 text-black"
                          : "border border-gold-400/40 text-gold-100 hover:border-gold-400"
                      )}
                    >
                      <Languages className="w-4 h-4" aria-hidden="true" />
                      {code}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="tour-name" className={LABEL_CLASS}>
                Nom (optionnel)
              </label>
              <div className="relative">
                <Users
                  className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="tour-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  className={cn(INPUT_CLASS, "w-full pl-11")}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
              aria-label="Réserver sur WhatsApp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Réserver sur WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="btn-ghost flex items-center justify-center gap-2"
              aria-label={`Appeler le ${CONTACT.phoneDisplay}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Appeler le {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
