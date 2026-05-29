// Registre d'icônes : mappe un nom (string venant de content.js) vers le composant lucide-react.
// Usage : <Icon name="Plane" className="h-6 w-6" />
import {
  Plane,
  BriefcaseBusiness,
  Sparkles,
  Map,
  MoonStar,
  Building2,
  TrainFront,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Leaf,
  Star,
  MapPin,
  Car,
} from "lucide-react";

const REGISTRY = {
  Plane,
  BriefcaseBusiness,
  Sparkles,
  Map,
  MoonStar,
  Building2,
  TrainFront,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Leaf,
  Star,
  MapPin,
  Car,
};

export function Icon({ name, ...props }) {
  const Cmp = REGISTRY[name] ?? Sparkles;
  return <Cmp {...props} />;
}
