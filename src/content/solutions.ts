export interface Solution {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  features: {
    fr: string[];
    en: string[];
  };
}

export const solutions: Solution[] = [
  {
    id: "rd-innovation",
    title: {
      fr: "Des Solutions de Cybersécurité Sur-Mesure grâce à l'Innovation en R&D",
      en: "Tailored Cybersecurity Solutions through R&D Innovation"
    },
    description: {
      fr: "Chez UNITE99, nous sommes fiers de disposer d'une équipe dédiée à la Recherche & Développement (R&D), qui expérimente et développe des solutions de cybersécurité de pointe. Cette équipe s'engage à répondre aux besoins spécifiques de notre organisation ainsi qu'à ceux de nos clients, garantissant une sécurité optimale et une adaptabilité face aux défis numériques en constante évolution.",
      en: "At UNITE99, we pride ourselves on having a dedicated Research & Development (R&D) department that is constantly experimenting with and developing cutting-edge cybersecurity solutions. Our R&D team works tirelessly to address the unique needs of both our organization and our clients, ensuring optimal security and adaptability in a rapidly evolving digital landscape."
    },
    features: {
      fr: [
        "La conception d'outils personnalisés pour renforcer la protection des systèmes et la détection des menaces.",
        "Le développement de solutions avancées adaptées à des secteurs et des défis spécifiques.",
        "L'amélioration continue des méthodes existantes pour assurer leur robustesse et leur efficacité."
      ],
      en: [
        "Designing customized tools to enhance system protection and threat detection.",
        "Developing advanced solutions tailored to specific industries and challenges.",
        "Continuously testing and improving existing methods to ensure robustness and efficiency."
      ]
    }
  }
];