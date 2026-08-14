export type ContactConfig = {
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  street: string;
  postalCity: string;
};

export type LanguageSupportConfig = {
  enabled: boolean;
  de: {
    title: string;
    text: string;
  };
  en: {
    title: string;
    text: string;
  };
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  defaultTitleSuffix: string;
  defaultDescription: string;
  serviceDistricts: string[];
  contact: ContactConfig;
  languageSupport: LanguageSupportConfig;
};

export const siteConfig: SiteConfig = {
  name: "BerlinTech Support",
  shortName: "BerlinTech Support",
  tagline: "Vor-Ort-Service für Privat & Business",
  defaultTitleSuffix: "BerlinTech Support",
  defaultDescription:
    "Professioneller IT-Service in Berlin für Privatpersonen und Unternehmen: Vor-Ort-Support, Microsoft-Umgebungen, Systemoptimierung, Software-Installation und datenschutzbewusste Prozesse.",
  serviceDistricts: [
    "Mitte",
    "Pankow",
    "Charlottenburg",
    "Kreuzberg",
    "Neukölln",
    "Friedrichshain",
    "Wilmersdorf",
    "Prenzlauer Berg"
  ],
  contact: {
    phoneDisplay: "+49 (0)30 123 45 67",
    phoneHref: "tel:+49301234567",
    whatsappHref: "https://wa.me/49301234567",
    email: "kontakt@berlintech-support.de",
    street: "Musterstrasse 10",
    postalCity: "10115 Berlin"
  },
  languageSupport: {
    enabled: true,
    de: {
      title: "IT-Service auch auf Englisch",
      text: "Kontakt, Beratung und Techniker-Service sind auf Wunsch vollständig auf Englisch verfügbar."
    },
    en: {
      title: "IT support available in English",
      text: "Contact, consultation and technician service can be provided entirely in English."
    }
  }
};
