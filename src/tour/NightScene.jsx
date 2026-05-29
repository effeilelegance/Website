// NightScene — calque de fond ciel de nuit parisien, réutilisable partout.
// Pur CSS/Tailwind, zéro timer JS. Positions figées hors composant.

// Génération déterministe (pas de Math.random au rendu) via Math.sin.
const rand = (seed) => {
  const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v); // 0..1 stable
};

const STARS = Array.from({ length: 60 }, (_, i) => {
  const left = rand(i + 1) * 100;
  const top = rand(i + 7) * 78; // plutôt vers le haut du ciel
  const size = 1 + Math.round(rand(i + 13) * 2); // 1..3 px
  const gold = rand(i + 19) > 0.72; // une minorité dorée
  const opacity = 0.35 + rand(i + 23) * 0.6;
  const delay = rand(i + 29) * 6; // s
  const duration = 2.4 + rand(i + 31) * 3.6; // s
  return { left, top, size, gold, opacity, delay, duration };
});

const PARTICLES = Array.from({ length: 8 }, (_, i) => {
  const left = 6 + rand(i + 101) * 88;
  const size = 6 + Math.round(rand(i + 107) * 6); // 6..12 px
  const delay = rand(i + 109) * 8; // s
  const duration = 7 + rand(i + 113) * 6; // s
  return { left, size, delay, duration };
});

export function NightScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Voile de profondeur : dégradé radial subtil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 12%, rgba(214,177,89,0.10), transparent 45%), radial-gradient(100% 100% at 50% 100%, rgba(5,6,15,0.65), transparent 60%)",
        }}
      />

      {/* Lune discrète, en haut à droite */}
      <div className="absolute right-[8%] top-[9%]">
        <div className="absolute inset-0 -m-6 rounded-full bg-gold-200/20 blur-2xl" />
        <div className="absolute inset-0 -m-2 rounded-full bg-white/20 blur-xl" />
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-white to-gold-100 shadow-[0_0_40px_12px_rgba(246,223,162,0.35)] animate-glow-pulse" />
      </div>

      {/* Champ d'étoiles */}
      {STARS.map((s, i) => (
        <span
          key={`star-${i}`}
          className={`absolute rounded-full animate-twinkle ${
            s.gold ? "bg-gold-100" : "bg-white"
          }`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Particules de lumière dorée montantes (bas de l'écran) */}
      {PARTICLES.map((p, i) => (
        <span
          key={`particle-${i}`}
          className="absolute bottom-0 rounded-full bg-gold-300/60 blur-[1px] animate-drift"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default NightScene;
