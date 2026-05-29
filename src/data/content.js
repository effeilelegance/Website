// Source unique de vérité pour tout le contenu du site Eiffel Élégance.
// Les composants importent depuis ce fichier — ne pas dupliquer ailleurs.

export const CONTACT = {
  brand: "Eiffel Élégance",
  tagline: "VTC Prestige",
  phoneDisplay: "06 59 53 34 24",
  phoneTel: "+33659533424",
  whatsapp: "https://wa.me/33659533424",
  whatsappNumber: "33659533424",
  email: "contact@eiffel-elegance.fr",
  area: "Paris et Île-de-France",
};

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#flotte", label: "Véhicule" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#reservation", label: "Réservation" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export const ADVANTAGES = [
  "Ponctualité",
  "Discrétion",
  "Confort",
  "Réservation simple",
  "Trajet silencieux",
  "Service prestige",
  "100% électrique",
  "Paiement sécurisé",
];

export const SERVICES = [
  {
    icon: "Plane",
    title: "Transferts aéroports et gares",
    text: "Prise en charge soignée pour CDG, Orly, Beauvais et les grandes gares parisiennes. Suivi des vols et accueil personnalisé.",
  },
  {
    icon: "BriefcaseBusiness",
    title: "Déplacements professionnels",
    text: "Un chauffeur privé pour vos rendez-vous, hôtels, sièges d'entreprise et journées chargées. Facturation sur demande.",
  },
  {
    icon: "Sparkles",
    title: "Événements et soirées",
    text: "Mariage, restaurant, spectacle, déplacement VIP ou trajet privé avec une présence discrète et élégante.",
  },
  {
    icon: "Map",
    title: "Mise à disposition",
    text: "Chauffeur dédié à l'heure ou à la journée pour vos visites, shopping ou tournées de rendez-vous.",
  },
  {
    icon: "MoonStar",
    title: "Trajets de nuit",
    text: "Sorties tardives, retours de soirée et trajets nocturnes en toute sérénité, 7 jours sur 7.",
  },
  {
    icon: "Building2",
    title: "Tourisme & découverte",
    text: "Tours privés de Paris et excursions vers Versailles, Giverny ou la vallée de la Loire.",
  },
];

export const VEHICLE = {
  name: "Hyundai Ioniq Electric 2021",
  category: "Berline électrique",
  description:
    "Une berline électrique silencieuse, sobre et confortable, idéale pour les trajets urbains, les transferts et les rendez-vous professionnels.",
  features: [
    "Trajet 100% silencieux",
    "Conduite souple et fluide",
    "Transport zéro émission",
    "Habitacle propre et soigné",
    "Eau et chargeurs offerts",
    "Wi-Fi à bord sur demande",
  ],
  specs: [
    { label: "Passagers", value: "Jusqu'à 4" },
    { label: "Bagages", value: "3 valises" },
    { label: "Énergie", value: "100% électrique" },
    { label: "Autonomie", value: "300+ km" },
  ],
};

// Forfaits indicatifs (TTC) — base pour l'estimateur et la grille tarifaire.
export const PRICING = [
  { from: "Paris", to: "Aéroport CDG", price: 75, duration: "45 min", icon: "Plane" },
  { from: "Paris", to: "Aéroport Orly", price: 60, duration: "35 min", icon: "Plane" },
  { from: "Paris", to: "Aéroport Beauvais", price: 160, duration: "1h15", icon: "Plane" },
  { from: "Paris", to: "Gare du Nord / Lyon", price: 35, duration: "20 min", icon: "TrainFront" },
  { from: "Paris", to: "Disneyland Paris", price: 95, duration: "50 min", icon: "Sparkles" },
  { from: "Paris", to: "Château de Versailles", price: 85, duration: "45 min", icon: "Building2" },
];

// Paramètres pour l'estimateur de prix (BookingEstimator).
export const FARE = {
  base: 15, // prise en charge
  perKm: 2.2,
  perMin: 0.5,
  nightSurcharge: 1.15, // 21h-6h
  minFare: 25,
  presets: [
    { label: "Aéroport CDG", km: 30, min: 45 },
    { label: "Aéroport Orly", km: 22, min: 35 },
    { label: "Aéroport Beauvais", km: 85, min: 75 },
    { label: "Disneyland Paris", km: 38, min: 50 },
    { label: "Versailles", km: 25, min: 45 },
    { label: "Trajet dans Paris", km: 8, min: 20 },
  ],
};

export const ZONES = [
  "Paris (75)",
  "Hauts-de-Seine (92)",
  "Seine-Saint-Denis (93)",
  "Val-de-Marne (94)",
  "Yvelines (78)",
  "Essonne (91)",
  "Val-d'Oise (95)",
  "Seine-et-Marne (77)",
];

export const STATS = [
  { value: 1200, suffix: "+", label: "Courses réalisées" },
  { value: 4.9, suffix: "/5", label: "Note moyenne", decimals: 1 },
  { value: 100, suffix: "%", label: "Véhicule électrique" },
  { value: 24, suffix: "/7", label: "Disponibilité" },
];

export const TESTIMONIALS = [
  {
    name: "Camille D.",
    role: "Cliente affaires",
    text: "Chauffeur ponctuel et véhicule impeccable. Le trajet vers CDG était d'un calme parfait, je recommande vivement.",
    rating: 5,
  },
  {
    name: "Olivier M.",
    role: "Transfert aéroport",
    text: "Réservation simple sur WhatsApp, prix annoncé respecté et conduite très souple. Un vrai service prestige.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Soirée mariage",
    text: "Présence discrète et élégante pour notre mariage. La berline électrique est silencieuse et très confortable.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    role: "Déplacement pro",
    text: "Je fais appel à Eiffel Élégance chaque semaine. Fiabilité exemplaire et accueil toujours soigné.",
    rating: 5,
  },
];

export const FAQ = [
  {
    q: "Comment réserver une course ?",
    a: "Par téléphone ou via WhatsApp en indiquant l'adresse de départ, l'adresse d'arrivée, la date et l'heure souhaitées. Vous pouvez aussi utiliser l'estimateur en ligne qui prépare votre message automatiquement.",
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Carte bancaire, espèces et virement pour les professionnels. Le tarif est annoncé et confirmé avant le départ, sans surprise.",
  },
  {
    q: "Intervenez-vous la nuit et le week-end ?",
    a: "Oui, le service est disponible 7 jours sur 7, y compris la nuit. Une majoration s'applique pour les trajets entre 21h et 6h.",
  },
  {
    q: "Combien de passagers et de bagages ?",
    a: "Jusqu'à 4 passagers et 3 valises grand format. Pour les groupes plus importants, contactez-nous pour une solution adaptée.",
  },
  {
    q: "Suivez-vous les vols pour les transferts aéroport ?",
    a: "Oui, nous suivons votre numéro de vol et ajustons la prise en charge en cas de retard, sans frais supplémentaires.",
  },
  {
    q: "Puis-je réserver à l'avance ?",
    a: "Absolument. Nous recommandons de réserver au moins 12h à l'avance pour garantir la disponibilité, mais les demandes de dernière minute sont étudiées.",
  },
];

export const PROCESS = [
  { step: "01", title: "Vous demandez", text: "Appel ou WhatsApp avec vos détails de trajet." },
  { step: "02", title: "On confirme", text: "Tarif et horaire confirmés en quelques minutes." },
  { step: "03", title: "On vous conduit", text: "Prise en charge ponctuelle et trajet serein." },
];
