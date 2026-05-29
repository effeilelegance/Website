// Petits helpers partagés.

// Concatène des classes conditionnelles (façon clsx léger).
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Formate un nombre en euros (sans décimales par défaut).
export function euro(amount, decimals = 0) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

// Construit un lien WhatsApp avec message pré-rempli encodé.
export function whatsappLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
