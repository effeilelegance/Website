import { ADVANTAGES } from "../data/content";

export default function Marquee() {
  // Liste dupliquée (2x) côte à côte pour un défilement infini et fluide
  // (l'animation translateX 0 -> -50% boucle sans saut visible).
  const items = [...ADVANTAGES, ...ADVANTAGES];

  return (
    <section
      aria-label="Nos atouts"
      className="overflow-hidden border-y border-gold-400/15 bg-white/[0.025] py-5"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <ul className="flex w-max items-center" aria-hidden="false">
          {items.map((advantage, index) => (
            <li
              key={`${advantage}-${index}`}
              className="flex items-center"
            >
              <span className="px-6 text-sm uppercase tracking-luxe text-white/55">
                {advantage}
              </span>
              <span
                aria-hidden="true"
                className="text-xs text-gold-400/60"
              >
                ◆
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
