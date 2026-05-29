// Données du Tour Mode — "Paris by Night". Source unique de vérité.
// Le contact (téléphone, WhatsApp) reste importé depuis ./content.js (CONTACT).

// Étapes de l'itinéraire nocturne. `monument` correspond au nom d'un composant SVG
// exporté par src/tour/Monuments.jsx (EiffelTower, ArcDeTriomphe, ...).
export const STOPS = [
  {
    id: "eiffel",
    monument: "EiffelTower",
    name: "Tour Eiffel",
    stop: "8 min",
    spot: "Trocadéro, face à la Dame de Fer",
    note: "Le scintillement doré démarre à chaque heure pile pendant 5 minutes.",
  },
  {
    id: "trocadero",
    monument: "EiffelTower",
    name: "Place du Trocadéro",
    stop: "6 min",
    spot: "Esplanade des Droits de l'Homme",
    note: "Le plus beau point de vue panoramique sur la Tour illuminée.",
  },
  {
    id: "arc",
    monument: "ArcDeTriomphe",
    name: "Arc de Triomphe",
    stop: "7 min",
    spot: "Haut des Champs-Élysées",
    note: "La flamme du Soldat inconnu et l'avenue la plus célèbre du monde.",
  },
  {
    id: "concorde",
    monument: "Obelisque",
    name: "Place de la Concorde",
    stop: "5 min",
    spot: "Devant l'Obélisque de Louxor",
    note: "Fontaines et obélisque dorés, entre Tuileries et Champs-Élysées.",
  },
  {
    id: "louvre",
    monument: "LouvrePyramid",
    name: "Louvre & Pyramide",
    stop: "8 min",
    spot: "Cour Napoléon",
    note: "La pyramide de verre illuminée, reflets dans les bassins.",
  },
  {
    id: "pont",
    monument: "PontAlexandre",
    name: "Pont Alexandre III",
    stop: "7 min",
    spot: "Au centre du pont, vers les Invalides",
    note: "Le pont le plus orné de Paris, lampadaires et statues dorées.",
  },
  {
    id: "notredame",
    monument: "NotreDame",
    name: "Notre-Dame de Paris",
    stop: "8 min",
    spot: "Quais de l'Île de la Cité",
    note: "La cathédrale et l'Île de la Cité au fil de la Seine.",
  },
  {
    id: "opera",
    monument: "OperaGarnier",
    name: "Opéra Garnier",
    stop: "5 min",
    spot: "Place de l'Opéra",
    note: "La façade dorée du palais Garnier sous les projecteurs.",
  },
  {
    id: "moulin",
    monument: "MoulinRouge",
    name: "Moulin Rouge",
    stop: "5 min",
    spot: "Boulevard de Clichy, Pigalle",
    note: "Le moulin rouge mythique et ses néons, ambiance cabaret.",
  },
  {
    id: "sacrecoeur",
    monument: "SacreCoeur",
    name: "Sacré-Cœur — Montmartre",
    stop: "10 min",
    spot: "Parvis du Sacré-Cœur",
    note: "Le panorama final : tout Paris illuminé à vos pieds.",
  },
];

export const CIRCUITS = [
  {
    id: "essentiel",
    name: "Paris by Night — Essentiel",
    duration: "1h30",
    price: 149,
    badge: null,
    stops: 6,
    text: "Les incontournables illuminés : Tour Eiffel, Champs-Élysées, Louvre, Concorde et Pont Alexandre III.",
  },
  {
    id: "grand-tour",
    name: "Grand Tour des Illuminations",
    duration: "2h30",
    price: 239,
    badge: "Le plus demandé",
    stops: 10,
    text: "Le circuit complet : tous les monuments majeurs jusqu'au panorama final de Montmartre.",
  },
  {
    id: "romantique",
    name: "Tour Romantique",
    duration: "2h00",
    price: 219,
    badge: "Couples",
    stops: 7,
    text: "Une parenthèse à deux : bouteille offerte, arrêts photo privilégiés et itinéraire intimiste le long de la Seine.",
  },
  {
    id: "surmesure",
    name: "Tour Privé sur-mesure",
    duration: "Flexible",
    price: null,
    badge: null,
    stops: null,
    text: "Vous choisissez les monuments, la durée et le rythme. Devis personnalisé selon vos envies.",
  },
];

export const INCLUDES = [
  { icon: "Camera", title: "Arrêts photo garantis", text: "Le chauffeur s'arrête à chaque monument pour vos plus belles photos." },
  { icon: "Languages", title: "Chauffeur-guide FR / EN", text: "Anecdotes et histoire des monuments en français ou en anglais." },
  { icon: "Leaf", title: "Berline 100% électrique", text: "Un trajet silencieux et confortable, zéro émission dans Paris." },
  { icon: "GlassWater", title: "Eau & Wi-Fi à bord", text: "Bouteilles d'eau offertes et connexion Wi-Fi pendant tout le tour." },
  { icon: "Clock", title: "Flexibilité totale", text: "Départ à l'heure de votre choix, rythme adapté à vos envies." },
  { icon: "Users", title: "Jusqu'à 4 personnes", text: "Tour 100% privatisé, rien que pour vous et vos proches." },
];

export const TOUR_STATS = [
  { value: 10, suffix: "", label: "Monuments illuminés" },
  { value: 4.9, suffix: "/5", label: "Note des voyageurs", decimals: 1 },
  { value: 2, suffix: " langues", label: "Chauffeur-guide FR/EN" },
  { value: 100, suffix: "%", label: "Tour privatisé" },
];

export const TOUR_TESTIMONIALS = [
  {
    name: "Emma & Lucas",
    role: "Tour Romantique",
    text: "Une soirée magique. Les arrêts photo devant la Tour Eiffel scintillante étaient inoubliables, et le chauffeur passionnant.",
    rating: 5,
  },
  {
    name: "The Johnson family",
    role: "Grand Tour — EN",
    text: "Best way to see Paris by night! Our driver-guide spoke perfect English and stopped at every monument for photos.",
    rating: 5,
  },
  {
    name: "Inès B.",
    role: "Paris by Night Essentiel",
    text: "Paris illuminé depuis une berline silencieuse, c'est un autre monde. Le Pont Alexandre III de nuit, à couper le souffle.",
    rating: 5,
  },
  {
    name: "Marco & Giulia",
    role: "Tour Romantique",
    text: "Bottiglia offerta, musica soft, monumenti illuminati. Un'esperienza che consigliamo a tutti gli innamorati.",
    rating: 5,
  },
];

export const TOUR_FAQ = [
  {
    q: "À quelle heure partent les tours ?",
    a: "Les tours débutent généralement après le coucher du soleil, lorsque les monuments s'illuminent : entre 20h et 22h selon la saison. L'heure de départ est flexible et choisie avec vous.",
  },
  {
    q: "Peut-on descendre du véhicule pour les photos ?",
    a: "Oui ! C'est tout l'intérêt : le chauffeur s'arrête à chaque monument et vous pouvez descendre prendre vos photos en toute tranquillité avant de repartir.",
  },
  {
    q: "Le chauffeur parle-t-il anglais ?",
    a: "Oui, le tour est commenté en français ou en anglais selon votre préférence, avec des anecdotes sur chaque monument.",
  },
  {
    q: "Combien de personnes peuvent participer ?",
    a: "Le tour est 100% privatisé pour 1 à 4 personnes. Pour les groupes plus grands, contactez-nous pour une solution adaptée.",
  },
  {
    q: "Que se passe-t-il s'il pleut ?",
    a: "Le tour se déroule confortablement à l'abri dans la berline. En cas de météo difficile, les arrêts photo sont adaptés et le tour reste tout aussi magique.",
  },
  {
    q: "Comment réserver et payer ?",
    a: "Réservez par téléphone ou WhatsApp en indiquant le circuit, la date et le nombre de personnes. Le tarif est confirmé à l'avance, paiement par carte, espèces ou virement.",
  },
];
