export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "incident-response-steps",
    title: "Les étapes essentielles d'une réponse à un incident cyber",
    excerpt: "Un guide complet des étapes clés à suivre pour une réponse à incident réussie, inspiré des meilleures pratiques de l'industrie.",
    content: `Dans un monde où les cybermenaces sont de plus en plus sophistiquées, chaque entreprise doit être préparée à réagir rapidement et efficacement à un incident de sécurité. Une réponse bien structurée limite les impacts, réduit les coûts et restaure la confiance des parties prenantes...`,
    date: "2024-01-15",
    author: "UNITE99 Team",
    category: "Cybersécurité",
    tags: ["incident response", "cybersécurité", "guide", "best practices"]
  },
  {
    id: "digital-evidence-management",
    title: "La gestion des preuves numériques : un pilier pour porter plainte dans le cyberespace",
    excerpt: "Guide des meilleures pratiques en gestion des preuves numériques, inspiré des principes de la chaîne de garde.",
    content: `Dans le domaine des enquêtes cyber, la gestion des preuves numériques joue un rôle clé, notamment lorsqu'il s'agit de porter plainte ou de poursuivre les auteurs d'un acte malveillant...`,
    date: "2024-01-10",
    author: "UNITE99 Team",
    category: "Forensics",
    tags: ["forensics", "preuves numériques", "cybercrime", "investigation"]
  }
];