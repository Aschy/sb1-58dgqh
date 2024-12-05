export interface AboutContent {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  locations: {
    fr: string[];
    en: string[];
  };
}

export interface MissionVision {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  specialties: {
    fr: string[];
    en: string[];
  };
}

export const aboutContent: AboutContent = {
  id: "about-unite99",
  title: {
    fr: "À propos de UNITE99",
    en: "About UNITE99"
  },
  content: {
    fr: "Chez UNITE99, nous incarnons l'innovation et l'expertise au service de la cybersécurité. Notre nom reflète notre vision : le 99, symbole d'unité sans frontière, s'inspire du département 99, un territoire qui n'a pas de limites physiques, mais qui regroupe diversité et excellence. C'est cette philosophie qui anime notre équipe : une combinaison unique d'expertise et de mindset pour relever les défis les plus complexes en cybersécurité.",
    en: "At UNITE99, we bring innovation and expertise to the forefront of cybersecurity. Our name reflects our vision: 99, a symbol of boundless unity, is inspired by the concept of the 99th department, a territory without physical boundaries but defined by diversity and excellence. This philosophy drives our team, blending unparalleled expertise with a forward-thinking mindset to tackle the most complex cybersecurity challenges."
  },
  locations: {
    fr: ["France", "Tunisie", "États-Unis (Maryland)", "Émirats arabes unis"],
    en: ["France", "Tunisia", "United States (Maryland)", "United Arab Emirates"]
  }
};

export const missionVision: MissionVision = {
  id: "mission-vision",
  title: {
    fr: "Mission et Vision",
    en: "Mission and Vision"
  },
  description: {
    fr: "Notre mission chez UNITE99 est de fournir des solutions de cybersécurité personnalisées qui répondent aux défis complexes d'un monde numérique en constante évolution.",
    en: "Our mission at UNITE99 is to deliver tailored cybersecurity solutions that address the complex challenges of an ever-evolving digital world."
  },
  specialties: {
    fr: [
      "Consulting en cybersécurité",
      "Incident Response et Blue Teaming",
      "SOC, CERT et Forensics",
      "Red Teaming",
      "Analyse de dispositifs",
      "Carving et investigations légales",
      "Benchmarking de solutions de sécurité"
    ],
    en: [
      "Cybersecurity Consulting",
      "Incident Response and Blue Teaming",
      "SOC, CERT, and Forensics",
      "Red Teaming",
      "Device Analysis",
      "Carving and Legal Investigations",
      "Security Solution Benchmarking"
    ]
  }
};