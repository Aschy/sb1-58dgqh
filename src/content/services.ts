export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "security-audit",
    title: "Audit de Sécurité",
    description: "Évaluation complète de votre infrastructure informatique",
    icon: "shield-check",
    features: [
      "Analyse des vulnérabilités",
      "Tests de pénétration",
      "Revue de code",
      "Évaluation des risques"
    ]
  },
  {
    id: "incident-response",
    title: "Réponse aux Incidents",
    description: "Gestion et résolution rapide des incidents de sécurité",
    icon: "alert-circle",
    features: [
      "Disponibilité 24/7",
      "Analyse forensique",
      "Plan de remédiation",
      "Support dédié"
    ]
  }
];