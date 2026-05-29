// Monuments.jsx — silhouettes dorées illuminées des monuments parisiens.
// Style cohérent : trait fin or, lueur douce, esprit "ligne lumineuse de nuit".
// Palette : or chaud #d6b159 (gold), or clair #f6dfa2 (highlight).

const GOLD = "#d6b159";
const GOLD_LIGHT = "#f6dfa2";
const STROKE = 1.4;

// Filtre de lueur dorée partagé (id unique par instance via préfixe).
function Glow({ id }) {
  return (
    <defs>
      <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="1.6"
          floodColor={GOLD_LIGHT}
          floodOpacity="0.7"
        />
      </filter>
      <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.35" />
        <stop offset="100%" stopColor={GOLD} stopOpacity="0.12" />
      </linearGradient>
    </defs>
  );
}

// Petits éclats scintillants en croix (réutilisé via sparkle).
function Sparkles({ points }) {
  return (
    <g>
      {points.map((p, i) => (
        <g
          key={i}
          className="animate-sparkle"
          style={{ animationDelay: `${(i * 0.45).toFixed(2)}s`, transformOrigin: `${p.x}px ${p.y}px` }}
        >
          <path
            d={`M${p.x} ${p.y - 3} L${p.x} ${p.y + 3} M${p.x - 3} ${p.y} L${p.x + 3} ${p.y}`}
            stroke={GOLD_LIGHT}
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <circle cx={p.x} cy={p.y} r="0.9" fill="#fff" />
        </g>
      ))}
    </g>
  );
}

const svgBase = {
  fill: "none",
  stroke: GOLD,
  strokeWidth: STROKE,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function EiffelTower({ className, sparkle }) {
  const id = "glow-eiffel";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Pieds évasés + treillis (section basse) */}
        <path d="M28 150 C44 120 50 110 54 100 M92 150 C76 120 70 110 66 100" />
        <path d="M34 150 C46 124 52 114 56 102 M86 150 C74 124 68 114 64 102" />
        {/* Arche basse */}
        <path d="M36 138 Q60 122 84 138" />
        {/* Plateforme 1 */}
        <line x1="44" y1="100" x2="76" y2="100" />
        {/* Section médiane */}
        <path d="M54 100 L57 64 M66 100 L63 64" />
        <path d="M52 92 L68 80 M68 92 L52 80 M53 78 L67 70 M67 78 L53 70" />
        {/* Plateforme 2 */}
        <line x1="52" y1="64" x2="68" y2="64" />
        {/* Section haute effilée */}
        <path d="M57 64 L59 28 M63 64 L61 28" />
        <path d="M57 52 L63 44 M63 52 L57 44" />
        <line x1="57.5" y1="40" x2="62.5" y2="40" />
        {/* Pointe + antenne */}
        <path d="M59 28 L60 16 L61 28 Z" fill={`url(#${id}-fill)`} />
        <line x1="60" y1="16" x2="60" y2="8" />
      </g>
      {sparkle && (
        <Sparkles
          points={[
            { x: 60, y: 12 },
            { x: 60, y: 46 },
            { x: 53, y: 84 },
            { x: 67, y: 84 },
            { x: 42, y: 130 },
            { x: 78, y: 130 },
          ]}
        />
      )}
    </svg>
  );
}

export function ArcDeTriomphe({ className, sparkle }) {
  const id = "glow-arc";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Bloc massif */}
        <rect x="26" y="46" width="68" height="96" rx="2" fill={`url(#${id}-fill)`} />
        {/* Corniche supérieure */}
        <line x1="22" y1="46" x2="98" y2="46" />
        <line x1="24" y1="54" x2="96" y2="54" />
        {/* Ouverture centrale en plein cintre */}
        <path d="M48 142 L48 92 Q60 74 72 92 L72 142" />
        {/* Attiques latéraux décoratifs */}
        <line x1="38" y1="64" x2="38" y2="86" />
        <line x1="82" y1="64" x2="82" y2="86" />
        {/* Base */}
        <line x1="22" y1="142" x2="98" y2="142" />
      </g>
      {sparkle && (
        <Sparkles points={[{ x: 33, y: 50 }, { x: 87, y: 50 }, { x: 60, y: 80 }]} />
      )}
    </svg>
  );
}

export function Obelisque({ className, sparkle }) {
  const id = "glow-obel";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Aiguille effilée */}
        <path d="M54 134 L57 28 L63 28 L66 134 Z" fill={`url(#${id}-fill)`} />
        {/* Pyramidion */}
        <path d="M57 28 L60 14 L63 28 Z" fill={GOLD} fillOpacity="0.3" />
        {/* Hiéroglyphes stylisés */}
        <line x1="58" y1="48" x2="62" y2="48" />
        <line x1="58" y1="64" x2="62" y2="64" />
        <line x1="57.5" y1="82" x2="62.5" y2="82" />
        {/* Socle */}
        <rect x="48" y="134" width="24" height="14" rx="1" />
        <line x1="44" y1="148" x2="76" y2="148" />
      </g>
      {sparkle && <Sparkles points={[{ x: 60, y: 16 }, { x: 60, y: 56 }]} />}
    </svg>
  );
}

export function LouvrePyramid({ className, sparkle }) {
  const id = "glow-louvre";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Triangle principal */}
        <path d="M20 138 L60 40 L100 138 Z" fill={`url(#${id}-fill)`} />
        {/* Résille verticale */}
        <path d="M47 138 L60 40 L73 138 M34 138 L60 70 L86 138" strokeOpacity="0.8" />
        {/* Résille losangée (horizontales) */}
        <path d="M40 113 L80 113 M33 138 L87 138 M47 88 L73 88 M53 64 L67 64" strokeOpacity="0.7" />
        {/* Sol */}
        <line x1="14" y1="138" x2="106" y2="138" />
      </g>
      {sparkle && <Sparkles points={[{ x: 60, y: 46 }, { x: 60, y: 96 }]} />}
    </svg>
  );
}

export function PontAlexandre({ className, sparkle }) {
  const id = "glow-pont";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Tablier + arche surbaissée */}
        <path d="M14 96 Q60 60 106 96" />
        <path d="M14 104 Q60 70 106 104" />
        <line x1="14" y1="104" x2="106" y2="104" />
        {/* Reflets/balustrade */}
        <path d="M22 104 L22 116 M40 104 L40 118 M60 104 L60 120 M80 104 L80 118 M98 104 L98 116" strokeOpacity="0.6" />
        {/* Colonnes/lampadaires aux extrémités */}
        <line x1="18" y1="96" x2="18" y2="44" />
        <line x1="102" y1="96" x2="102" y2="44" />
        <circle cx="18" cy="40" r="3.5" fill={GOLD_LIGHT} fillOpacity="0.5" />
        <circle cx="102" cy="40" r="3.5" fill={GOLD_LIGHT} fillOpacity="0.5" />
        {/* Statue dorée stylisée au sommet */}
        <path d="M60 60 L60 40 M54 46 L60 40 L66 46" />
        <path d="M48 42 Q60 30 72 42" strokeOpacity="0.7" />
      </g>
      {sparkle && <Sparkles points={[{ x: 18, y: 40 }, { x: 102, y: 40 }, { x: 60, y: 38 }]} />}
    </svg>
  );
}

export function NotreDame({ className, sparkle }) {
  const id = "glow-notre";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Deux tours jumelles */}
        <rect x="22" y="46" width="26" height="96" fill={`url(#${id}-fill)`} />
        <rect x="72" y="46" width="26" height="96" fill={`url(#${id}-fill)`} />
        <line x1="20" y1="46" x2="50" y2="46" />
        <line x1="70" y1="46" x2="100" y2="46" />
        {/* Ogives des tours */}
        <path d="M28 70 Q35 58 42 70 M78 70 Q85 58 92 70" strokeOpacity="0.75" />
        {/* Corps central + grande rosace */}
        <rect x="48" y="70" width="24" height="72" />
        <circle cx="60" cy="92" r="9" />
        <path d="M60 83 L60 101 M51 92 L69 92 M54 86 L66 98 M66 86 L54 98" strokeOpacity="0.6" />
        {/* Flèche centrale */}
        <path d="M55 70 L60 44 L65 70" />
        <line x1="60" y1="44" x2="60" y2="34" />
        {/* Base */}
        <line x1="18" y1="142" x2="102" y2="142" />
      </g>
      {sparkle && <Sparkles points={[{ x: 60, y: 36 }, { x: 35, y: 52 }, { x: 85, y: 52 }, { x: 60, y: 92 }]} />}
    </svg>
  );
}

export function OperaGarnier({ className, sparkle }) {
  const id = "glow-opera";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Soubassement + façade */}
        <rect x="22" y="92" width="76" height="50" fill={`url(#${id}-fill)`} />
        {/* Colonnade */}
        <path d="M30 92 L30 118 M42 92 L42 118 M54 92 L54 118 M66 92 L66 118 M78 92 L78 118 M90 92 L90 118" strokeOpacity="0.7" />
        <line x1="24" y1="118" x2="96" y2="118" />
        {/* Fronton */}
        <path d="M28 92 L60 68 L92 92 Z" fill={GOLD} fillOpacity="0.18" />
        <line x1="24" y1="92" x2="96" y2="92" />
        {/* Coupole / dôme */}
        <path d="M48 68 Q60 40 72 68 Z" fill={`url(#${id}-fill)`} />
        <line x1="60" y1="40" x2="60" y2="32" />
        <circle cx="60" cy="31" r="1.6" fill={GOLD_LIGHT} />
        {/* Base */}
        <line x1="18" y1="142" x2="102" y2="142" />
      </g>
      {sparkle && <Sparkles points={[{ x: 60, y: 32 }, { x: 60, y: 56 }, { x: 36, y: 80 }, { x: 84, y: 80 }]} />}
    </svg>
  );
}

export function MoulinRouge({ className, sparkle }) {
  const id = "glow-moulin";
  const RED = "#e3344c";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Bâtiment */}
        <rect x="30" y="86" width="60" height="56" fill={`url(#${id}-fill)`} />
        <line x1="26" y1="86" x2="94" y2="86" />
        {/* Fenêtres */}
        <path d="M40 100 L40 118 M52 100 L52 118 M68 100 L68 118 M80 100 L80 118" strokeOpacity="0.6" />
        <line x1="60" y1="86" x2="60" y2="142" strokeOpacity="0.4" />
        {/* Base */}
        <line x1="24" y1="142" x2="96" y2="142" />
      </g>
      {/* Moulin à vent — accent rouge */}
      <g fill="none" stroke={RED} strokeWidth={STROKE} strokeLinecap="round" filter={`url(#${id})`}>
        <line x1="60" y1="86" x2="60" y2="52" />
        <circle cx="60" cy="46" r="6" fill={RED} fillOpacity="0.25" />
        {/* 4 ailes en croix */}
        <path d="M60 46 L60 28 M60 46 L78 46 M60 46 L60 64 M60 46 L42 46" />
        <path d="M57 28 L63 28 M78 43 L78 49 M57 64 L63 64 M42 43 L42 49" strokeOpacity="0.85" />
      </g>
      {sparkle && (
        <Sparkles points={[{ x: 60, y: 46 }, { x: 60, y: 28 }, { x: 78, y: 46 }, { x: 42, y: 46 }, { x: 60, y: 64 }]} />
      )}
    </svg>
  );
}

export function SacreCoeur({ className, sparkle }) {
  const id = "glow-sacre";
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <Glow id={id} />
      <g {...svgBase} filter={`url(#${id})`}>
        {/* Base */}
        <rect x="20" y="104" width="80" height="38" fill={`url(#${id}-fill)`} />
        <path d="M32 104 L32 142 M48 104 L48 142 M72 104 L72 142 M88 104 L88 142" strokeOpacity="0.5" />
        {/* Dômes latéraux byzantins */}
        <path d="M26 104 Q34 86 42 104 Z" fill={`url(#${id}-fill)`} />
        <path d="M78 104 Q86 86 94 104 Z" fill={`url(#${id}-fill)`} />
        {/* Dôme central */}
        <path d="M44 104 Q44 64 60 56 Q76 64 76 104 Z" fill={`url(#${id}-fill)`} />
        <line x1="60" y1="56" x2="60" y2="44" />
        <path d="M56 48 Q60 42 64 48" />
        {/* Lanternes */}
        <line x1="34" y1="86" x2="34" y2="80" />
        <line x1="86" y1="86" x2="86" y2="80" />
        {/* Sol */}
        <line x1="16" y1="142" x2="104" y2="142" />
      </g>
      {sparkle && <Sparkles points={[{ x: 60, y: 46 }, { x: 34, y: 80 }, { x: 86, y: 80 }, { x: 60, y: 88 }]} />}
    </svg>
  );
}

const MAP = {
  EiffelTower,
  ArcDeTriomphe,
  Obelisque,
  LouvrePyramid,
  PontAlexandre,
  NotreDame,
  OperaGarnier,
  MoulinRouge,
  SacreCoeur,
};

export function Monument({ name, ...props }) {
  const M = MAP[name] ?? EiffelTower;
  return <M {...props} />;
}

export default Monument;
