export interface JobPosting {
  id: string;
  title: string;
  location: string;
  contractType: string;
  experienceRequired: string;
  educationLevel: string;
  description: string;
  responsibilities: {
    title: string;
    items: string[];
  }[];
  technicalRequirements: string[];
  personalRequirements: string[];
  certifications: string[];
  benefits: string[];
  applicationEmail: string;
  reference: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: "soc-analyst",
    title: "Analyste SOC / Réponse à Incident (H/F)",
    location: "Paris/télétravail",
    contractType: "CDI",
    experienceRequired: "2+ ans en cybersécurité",
    educationLevel: "Bac+3 à Bac+5 en cybersécurité ou informatique",
    description: "Nous recherchons un Analyste SOC / Réponse à Incident (H/F) passionné(e) par la cybersécurité et prêt(e) à relever les défis d'un environnement dynamique. Vous intégrerez notre Centre Opérationnel de Sécurité (SOC) et serez un acteur clé dans la surveillance, la détection, et la réponse aux incidents de sécurité.",
    responsibilities: [
      {
        title: "Missions principales",
        items: [
          "Surveillance des systèmes : Analyser en temps réel les alertes de sécurité générées par les outils SIEM (ex. Splunk, QRadar, etc.) et détecter les comportements suspects.",
          "Gestion des incidents : Identifier, contenir, éradiquer et résoudre les incidents de sécurité conformément aux procédures en place.",
          "Investigation et analyse forensique : Réaliser des analyses approfondies pour identifier la cause racine des incidents et proposer des mesures préventives.",
          "Amélioration continue : Contribuer à l'amélioration des règles de détection et à l'optimisation des outils du SOC.",
          "Rapport et documentation : Rédiger des rapports d'incident clairs et précis, ainsi que des post-mortems pour les incidents majeurs.",
          "Sensibilisation : Participer à la formation et à la sensibilisation des collaborateurs aux bonnes pratiques de cybersécurité."
        ]
      }
    ],
    technicalRequirements: [
      "Bonne connaissance des outils de sécurité : SIEM, EDR, IDS/IPS, pare-feu",
      "Maîtrise des systèmes d'exploitation (Windows, Linux) et des concepts réseau",
      "Compréhension des cybermenaces (malwares, attaques DDoS, phishing, etc.)",
      "Expérience en gestion d'incidents et en investigation numérique"
    ],
    personalRequirements: [
      "Capacité à analyser et résoudre rapidement les problèmes",
      "Rigueur, organisation et aptitude à travailler sous pression",
      "Esprit d'équipe et bonnes qualités relationnelles"
    ],
    certifications: [
      "CEH",
      "GCIH",
      "GCFA",
      "CISSP",
      "CompTIA Security+",
      "ou équivalent"
    ],
    benefits: [
      "Environnement stimulant : Travaillez sur des projets variés avec des technologies de pointe",
      "Formation continue : Accédez à des certifications et à des programmes de développement professionnel"
    ],
    applicationEmail: "community@greensauce.io",
    reference: "SOC-2024-01"
  },
  {
    id: "pentester",
    title: "Consultant en Pentest (H/F)",
    location: "Paris/télétravail",
    contractType: "CDI / CDD / Freelance",
    experienceRequired: "3+ ans en cybersécurité",
    educationLevel: "Bac+3 à Bac+5 en cybersécurité, informatique ou domaine connexe",
    description: "Nous recherchons un(e) Pentester / Consultant en Test d'Intrusion (H/F) pour rejoindre notre équipe de spécialistes en cybersécurité. Votre mission sera d'évaluer la sécurité des systèmes, applications et infrastructures de nos clients en réalisant des tests d'intrusion approfondis et en proposant des recommandations adaptées.",
    responsibilities: [
      {
        title: "Réalisation de tests d'intrusion",
        items: [
          "Évaluer la sécurité des infrastructures réseau, des applications web, mobiles ou cloud",
          "Simuler des attaques sur les environnements clients pour identifier les failles exploitées par les cybercriminels"
        ]
      },
      {
        title: "Analyse et reporting",
        items: [
          "Rédiger des rapports clairs et détaillés, incluant les vulnérabilités découvertes, leur impact et des recommandations concrètes",
          "Présenter les résultats aux équipes techniques et aux décideurs"
        ]
      },
      {
        title: "Recherche et développement",
        items: [
          "Explorer de nouvelles méthodes et techniques d'attaque",
          "Développer des outils internes pour automatiser et améliorer les tests"
        ]
      },
      {
        title: "Accompagnement des clients",
        items: [
          "Conseiller sur les bonnes pratiques de sécurité et les stratégies de remédiation",
          "Participer à des missions de sensibilisation ou de formation en cybersécurité"
        ]
      }
    ],
    technicalRequirements: [
      "Excellente maîtrise des outils de pentest : Burp Suite, Metasploit, Nessus, Nmap, etc.",
      "Solides connaissances en systèmes d'exploitation (Windows, Linux) et en protocoles réseau",
      "Capacité à comprendre et exploiter des failles (OWASP Top 10, CVE, etc.)",
      "Connaissances en programmation et scripting (Python, Bash, PowerShell, etc.)"
    ],
    personalRequirements: [
      "Rigueur et capacité d'analyse pour résoudre des problématiques complexes",
      "Créativité et curiosité pour découvrir des approches innovantes",
      "Bon relationnel et aptitude à vulgariser des concepts techniques"
    ],
    certifications: [
      "OSCP",
      "OSWE",
      "CEH",
      "GPEN",
      "CISSP",
      "ou équivalent"
    ],
    benefits: [
      "Projets variés : Intervenez auprès d'une clientèle diversifiée, des PME aux grandes entreprises",
      "Formation continue : Possibilité de passer des certifications reconnues et de participer à des conférences en cybersécurité",
      "Technologies de pointe : Travaillez avec des outils et environnements à la pointe de l'innovation",
      "Flexibilité : Télétravail possible et horaires adaptables"
    ],
    applicationEmail: "community@greensauce.io",
    reference: "PENTEST-2024-01"
  }
];