interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    solutions: "Solutions",
    resources: "Resources",
    contact: "Contact",
    heroTitle: "When every DIGIT counts",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    solutions: "Solutions",
    resources: "Ressources",
    contact: "Contact",
    heroTitle: "Quand chaque DIGIT compte",
  }
};