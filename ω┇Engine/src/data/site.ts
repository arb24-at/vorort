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
  name: "VorOrt",
  shortName: "VorOrt",
  tagline: "IT-Service vor Ort in Berlin",
  defaultTitleSuffix: "VorOrt",
  defaultDescription:
    "IT-Service vor Ort in Berlin für Privatpersonen, Homeoffice und kleine Unternehmen: verständliche Hilfe bei Computern, Software, Microsoft 365, Google Workspace und Netzwerken.",
  serviceDistricts: [
    "Mitte",
    "Friedrichshain-Kreuzberg",
    "Pankow",
    "Charlottenburg-Wilmersdorf",
    "Spandau",
    "Steglitz-Zehlendorf",
    "Tempelhof-Schöneberg",
    "Neukölln",
    "Treptow-Köpenick",
    "Marzahn-Hellersdorf",
    "Lichtenberg",
    "Reinickendorf"
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
      title: "IT-Service auf Englisch",
      text: "Der Techniker kann Sie auch während der eigentlichen technischen Arbeit auf Englisch unterstützen."
    },
    en: {
      title: "English-speaking technical service",
      text: "Your technician can communicate with you in English throughout the technical work."
    }
  }
};
