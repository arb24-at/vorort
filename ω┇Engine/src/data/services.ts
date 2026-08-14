export type Locale = "de" | "en";
export type Audience = "private" | "business";

export type LocalizedService = {
  id: string;
  audience: Audience;
  locale: Locale;
  slug: string;
  alternateSlug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  problemsTitle: string;
  problems: string[];
  includedTitle: string;
  included: string[];
  outcomeTitle: string;
  outcome: string;
  ctaTitle: string;
  ctaText: string;
};

type ServiceCopy = Omit<LocalizedService, "id" | "audience" | "locale" | "alternateSlug">;

type ServiceRecord = {
  id: string;
  audience: Audience;
  de: ServiceCopy;
  en: ServiceCopy;
};

const services: ServiceRecord[] = [
  {
    id: "computer-laptop",
    audience: "private",
    de: {
      slug: "computer-laptop-hilfe",
      eyebrow: "Privatkunden · Computerhilfe",
      title: "Computer- und Laptop-Hilfe in Berlin",
      seoTitle: "Computer- & Laptop-Hilfe Berlin",
      description:
        "Vor-Ort-Hilfe in Berlin bei langsamen Computern, Startproblemen, Abstürzen, Updates, Schadsoftware und der Einrichtung neuer PCs oder Laptops.",
      intro:
        "Wenn ein Computer langsam wird, nicht mehr startet oder ständig Fehlermeldungen zeigt, grenzen wir die Ursache strukturiert ein. Wir helfen bei Windows-PCs und Laptops, erklären die notwendigen Schritte verständlich und prüfen die Funktionen gemeinsam mit Ihnen.",
      problemsTitle: "Typische Anliegen",
      problems: [
        "Startprobleme, Abstürze und auffällig langsame Systeme",
        "Fehler nach Windows-, Treiber- oder Software-Updates",
        "Verdächtige Pop-ups, Schadsoftware und unsichere Konten",
        "Einrichtung eines neuen Computers inklusive Drucker und Zubehör"
      ],
      includedTitle: "So kann die Hilfe aussehen",
      included: [
        "Erstdiagnose und verständliche Einschätzung der nächsten Schritte",
        "Systembereinigung, Updates und sinnvolle Grundeinstellungen",
        "Einrichtung von Programmen, Benutzerkonten und Peripherie",
        "Abschlusskontrolle mit Hinweisen für den sicheren Alltag"
      ],
      outcomeTitle: "Pragmatisch statt rätselhaft",
      outcome:
        "Sie erhalten eine nachvollziehbare Lösung und wissen anschließend, was geändert wurde. Wenn ein Austausch oder eine Spezialreparatur wirtschaftlicher ist, sprechen wir das offen an, bevor unnötige Arbeit entsteht.",
      ctaTitle: "Computerproblem schildern",
      ctaText: "Nennen Sie Gerät, Fehlermeldung und Dringlichkeit – telefonisch, per E-Mail oder WhatsApp."
    },
    en: {
      slug: "computer-laptop-help",
      eyebrow: "Private customers · Computer help",
      title: "Computer and laptop help in Berlin",
      seoTitle: "Computer & Laptop Help Berlin",
      description:
        "On-site help in Berlin for slow computers, startup failures, crashes, updates, malware and the setup of new PCs or laptops.",
      intro:
        "When a computer becomes slow, no longer starts or repeatedly displays errors, we narrow down the cause methodically. We help with Windows PCs and laptops, explain the necessary work clearly and check the result together with you.",
      problemsTitle: "Common requests",
      problems: [
        "Startup failures, crashes and unusually slow systems",
        "Problems after Windows, driver or software updates",
        "Suspicious pop-ups, malware and compromised accounts",
        "Setting up a new computer, printer and accessories"
      ],
      includedTitle: "What support can include",
      included: [
        "Initial diagnosis and a clear recommendation for the next step",
        "System cleanup, updates and sensible baseline settings",
        "Setup of software, user accounts and peripherals",
        "A final functional check and practical security guidance"
      ],
      outcomeTitle: "Practical and understandable",
      outcome:
        "You receive a traceable solution and know what was changed. If replacement or a specialist repair is more economical, we explain that before unnecessary work is carried out.",
      ctaTitle: "Describe your computer problem",
      ctaText: "Tell us the device, error message and urgency by phone, email or WhatsApp."
    }
  },
  {
    id: "wifi-home-network",
    audience: "private",
    de: {
      slug: "wlan-heimnetz",
      eyebrow: "Privatkunden · WLAN",
      title: "WLAN- und Heimnetz-Hilfe in Berlin",
      seoTitle: "WLAN & Heimnetz Hilfe Berlin",
      description:
        "Hilfe in Berlin bei schwachem WLAN, Verbindungsabbrüchen, Routerwechsel, Mesh-Systemen, Druckern, Smart-TV und Homeoffice-Geräten.",
      intro:
        "Stabiles WLAN hängt nicht nur vom Internettarif ab. Position, Gebäudestruktur, Funkkanäle, Router, Repeater und die angeschlossenen Geräte wirken zusammen. Wir prüfen das Heimnetz vor Ort und bauen eine verständliche, wartbare Lösung auf.",
      problemsTitle: "Typische Netzwerkprobleme",
      problems: [
        "Schwaches Signal oder Funklöcher in einzelnen Zimmern",
        "Abbrüche bei Videokonferenzen, Streaming oder Homeoffice",
        "Unübersichtliche Router-, Repeater- oder Mesh-Konfiguration",
        "Drucker, Smart-TV oder andere Geräte verlieren die Verbindung"
      ],
      includedTitle: "Mögliche Leistungen",
      included: [
        "Analyse von Abdeckung, Störquellen und Gerätekonfiguration",
        "Einrichtung oder Optimierung von Router, Mesh und Repeatern",
        "Sicheres WLAN, Gastzugang und nachvollziehbare Benennung",
        "Verbindung von Computern, Mobilgeräten, Druckern und Smart-TV"
      ],
      outcomeTitle: "Ein Netz, das im Alltag funktioniert",
      outcome:
        "Ziel ist nicht maximale technische Komplexität, sondern stabile Abdeckung und eine Konfiguration, die Sie später verstehen. Falls neue Hardware sinnvoll ist, erhalten Sie zuerst eine begründete Empfehlung.",
      ctaTitle: "WLAN-Situation beschreiben",
      ctaText: "Teilen Sie uns Wohnungsgröße, Routermodell und betroffene Räume oder Geräte mit."
    },
    en: {
      slug: "wifi-home-network",
      eyebrow: "Private customers · Wi-Fi",
      title: "Wi-Fi and home network help in Berlin",
      seoTitle: "Wi-Fi & Home Network Help Berlin",
      description:
        "Berlin support for weak Wi-Fi, connection drops, router changes, mesh systems, printers, smart TVs and home-office devices.",
      intro:
        "Reliable Wi-Fi depends on more than the internet plan. Position, building structure, radio channels, routers, repeaters and connected devices all interact. We inspect the home network on site and create a clear, maintainable setup.",
      problemsTitle: "Common network problems",
      problems: [
        "Weak signal or dead zones in individual rooms",
        "Dropouts during video calls, streaming or home-office work",
        "Confusing router, repeater or mesh configurations",
        "Printers, smart TVs or other devices repeatedly disconnect"
      ],
      includedTitle: "Possible services",
      included: [
        "Assessment of coverage, interference and device configuration",
        "Setup or optimisation of routers, mesh systems and repeaters",
        "Secure Wi-Fi, guest access and understandable network naming",
        "Connection of computers, mobile devices, printers and smart TVs"
      ],
      outcomeTitle: "A network that works day to day",
      outcome:
        "The goal is not unnecessary complexity but stable coverage and a configuration you can understand later. If new hardware would help, you receive a reasoned recommendation first.",
      ctaTitle: "Describe your Wi-Fi situation",
      ctaText: "Tell us the approximate space, router model and affected rooms or devices."
    }
  },
  {
    id: "setup-data-transfer",
    audience: "private",
    de: {
      slug: "einrichtung-datenumzug",
      eyebrow: "Privatkunden · Einrichtung",
      title: "PC-Einrichtung und Datenumzug in Berlin",
      seoTitle: "PC-Einrichtung & Datenumzug Berlin",
      description:
        "Neue Computer einrichten, persönliche Daten übertragen, E-Mail, Programme, Drucker und Backups für Privatkunden in Berlin konfigurieren.",
      intro:
        "Ein neuer Computer soll sich schnell vertraut anfühlen, ohne alte Probleme ungeprüft zu übernehmen. Wir planen den Umzug, richten Konten und Programme ein und kontrollieren, ob wichtige Dateien, E-Mails und Geräte erreichbar sind.",
      problemsTitle: "Geeignet für",
      problems: [
        "Wechsel von einem alten auf einen neuen Windows-PC oder Laptop",
        "Übernahme von Dokumenten, Fotos und ausgewählten Einstellungen",
        "Einrichtung von E-Mail, Microsoft 365, Browsern und Druckern",
        "Aufbau einer verständlichen lokalen oder cloudbasierten Sicherung"
      ],
      includedTitle: "Strukturierter Umzug",
      included: [
        "Bestandsaufnahme der vorhandenen Daten und Anwendungen",
        "Abstimmung, was übertragen, neu installiert oder bereinigt wird",
        "Einrichtung des neuen Geräts mit Updates und Basisschutz",
        "Funktionsprüfung und Übergabe des alten Geräts nach Absprache"
      ],
      outcomeTitle: "Wichtige Daten im Blick behalten",
      outcome:
        "Vor dem Umzug klären wir Umfang und Zustand der vorhandenen Daten. Datenrettung von beschädigten Datenträgern ist ein eigener Spezialfall; normale Übertragung und Sicherung können dagegen planbar vorbereitet werden.",
      ctaTitle: "Gerätewechsel planen",
      ctaText: "Nennen Sie altes und neues Gerät sowie die wichtigsten Programme und Daten."
    },
    en: {
      slug: "setup-data-transfer",
      eyebrow: "Private customers · Setup",
      title: "PC setup and data transfer in Berlin",
      seoTitle: "PC Setup & Data Transfer Berlin",
      description:
        "Set up a new computer, transfer personal files and configure email, software, printers and backups for private customers in Berlin.",
      intro:
        "A new computer should feel familiar quickly without blindly carrying over old problems. We plan the move, configure accounts and software, and check that important files, email and devices are accessible.",
      problemsTitle: "Suitable for",
      problems: [
        "Moving from an old Windows PC or laptop to a new device",
        "Transferring documents, photos and selected settings",
        "Configuring email, Microsoft 365, browsers and printers",
        "Creating an understandable local or cloud-based backup"
      ],
      includedTitle: "A structured migration",
      included: [
        "Review of existing data and applications",
        "Agreement on what should be transferred, reinstalled or cleaned up",
        "New-device setup with updates and baseline protection",
        "Functional testing and agreed handling of the old device"
      ],
      outcomeTitle: "Keep important data in view",
      outcome:
        "Before the move, we clarify the amount and condition of the existing data. Recovery from damaged storage is a separate specialist case; normal transfer and backup can be prepared predictably.",
      ctaTitle: "Plan a device change",
      ctaText: "Tell us the old and new device and the most important programs and data."
    }
  },
  {
    id: "microsoft-365-workplaces",
    audience: "business",
    de: {
      slug: "microsoft-365-arbeitsplaetze",
      eyebrow: "Unternehmen · Microsoft 365",
      title: "Microsoft 365 und Arbeitsplätze für Berliner Unternehmen",
      seoTitle: "Microsoft 365 Support Berlin",
      description:
        "Microsoft-365-Support und Arbeitsplatz-Einrichtung für kleine Unternehmen, Büros und Selbstständige in Berlin.",
      intro:
        "Zuverlässige Arbeitsplätze verbinden Geräte, Benutzerkonten, E-Mail, Dateien und Berechtigungen. Wir unterstützen kleine Berliner Unternehmen bei der Einrichtung und Fehlerbehebung rund um Windows und Microsoft 365.",
      problemsTitle: "Typische Anforderungen",
      problems: [
        "Neue Mitarbeiter, Gerätewechsel oder zusätzliche Arbeitsplätze",
        "Outlook-, Teams-, OneDrive- oder Zugriffsprobleme",
        "Unklare Benutzerkonten, Lizenzen und Berechtigungen",
        "Uneinheitliche Updates, Gerätekonfigurationen oder Dateiablagen"
      ],
      includedTitle: "Mögliche Unterstützung",
      included: [
        "Einrichtung von Windows-Arbeitsplätzen und Microsoft-365-Anwendungen",
        "Benutzer-, Lizenz- und grundlegende Rechteverwaltung",
        "Fehleranalyse bei Anmeldung, Synchronisierung und E-Mail",
        "Dokumentierte Übergabe für den laufenden Büroalltag"
      ],
      outcomeTitle: "Arbeitsfähig ohne unnötige Komplexität",
      outcome:
        "Der Umfang wird an Teamgröße und vorhandene Umgebung angepasst. Für komplexe Migrationen oder sicherheitskritische Änderungen werden Voraussetzungen und Verantwortlichkeiten vor Beginn klar festgelegt.",
      ctaTitle: "Microsoft-365-Anliegen einordnen",
      ctaText: "Nennen Sie Teamgröße, betroffene Dienste und gewünschtes Ergebnis."
    },
    en: {
      slug: "microsoft-365-workplaces",
      eyebrow: "Business · Microsoft 365",
      title: "Microsoft 365 and workplace support for Berlin businesses",
      seoTitle: "Microsoft 365 Support Berlin",
      description:
        "Microsoft 365 support and workplace setup for small businesses, offices and self-employed professionals in Berlin.",
      intro:
        "Reliable workplaces connect devices, user accounts, email, files and permissions. We support small Berlin businesses with setup and troubleshooting across Windows and Microsoft 365.",
      problemsTitle: "Typical requirements",
      problems: [
        "New employees, device replacements or additional workplaces",
        "Outlook, Teams, OneDrive or access problems",
        "Unclear user accounts, licences and permissions",
        "Inconsistent updates, device configurations or file storage"
      ],
      includedTitle: "Possible support",
      included: [
        "Setup of Windows workplaces and Microsoft 365 applications",
        "User, licence and baseline permission management",
        "Troubleshooting sign-in, synchronisation and email issues",
        "Documented handover for day-to-day office operation"
      ],
      outcomeTitle: "Productive without unnecessary complexity",
      outcome:
        "The scope is adapted to the team and existing environment. For complex migrations or security-sensitive changes, prerequisites and responsibilities are agreed before work begins.",
      ctaTitle: "Discuss your Microsoft 365 request",
      ctaText: "Tell us the team size, affected services and desired result."
    }
  },
  {
    id: "google-workspace-cloud",
    audience: "business",
    de: {
      slug: "google-workspace-cloud",
      eyebrow: "Unternehmen · Google Workspace",
      title: "Google Workspace Support für Berliner Unternehmen",
      seoTitle: "Google Workspace Support Berlin",
      description:
        "Google-Workspace-Support in Berlin für Gmail, Drive, gemeinsame Ablagen, Benutzer, Geräte und den praktischen Büroalltag.",
      intro:
        "Google Workspace kann für kleine Teams eine schlanke Arbeitsumgebung sein, wenn Konten, Freigaben und Geräte sauber organisiert sind. Wir helfen bei Einrichtung, Nutzerwechseln und typischen Zugriffs- oder Synchronisierungsproblemen.",
      problemsTitle: "Typische Anforderungen",
      problems: [
        "Gmail-, Kalender- oder Drive-Probleme auf Arbeitsplatzgeräten",
        "Neue Benutzer, ausscheidende Mitarbeiter und Gerätewechsel",
        "Unübersichtliche Freigaben oder gemeinsam genutzte Dateien",
        "Parallele Nutzung von Google- und Microsoft-Diensten"
      ],
      includedTitle: "Mögliche Unterstützung",
      included: [
        "Einrichtung von Workspace-Konten auf Computern und Mobilgeräten",
        "Grundlegende Benutzer-, Gruppen- und Freigabestruktur",
        "Fehlerbehebung bei Anmeldung, Synchronisierung und Dateizugriff",
        "Dokumentation der vorgenommenen Änderungen"
      ],
      outcomeTitle: "Klare Zuständigkeiten für gemeinsame Daten",
      outcome:
        "Wir richten die technische Hilfe am tatsächlichen Arbeitsablauf aus. Größere Datenmigrationen, Compliance-Anforderungen und administrative Dauerbetreuung werden vorab separat geplant.",
      ctaTitle: "Google-Workspace-Anliegen besprechen",
      ctaText: "Beschreiben Sie Nutzerzahl, betroffene Dienste und aktuelle Störung oder Aufgabe."
    },
    en: {
      slug: "google-workspace-cloud",
      eyebrow: "Business · Google Workspace",
      title: "Google Workspace support for Berlin businesses",
      seoTitle: "Google Workspace Support Berlin",
      description:
        "Google Workspace support in Berlin for Gmail, Drive, shared storage, users, devices and practical office workflows.",
      intro:
        "Google Workspace can provide a streamlined environment for small teams when accounts, sharing and devices are organised properly. We help with setup, user changes and common access or synchronisation problems.",
      problemsTitle: "Typical requirements",
      problems: [
        "Gmail, Calendar or Drive problems on workplace devices",
        "New users, departing employees and device changes",
        "Confusing sharing permissions or jointly used files",
        "Parallel use of Google and Microsoft services"
      ],
      includedTitle: "Possible support",
      included: [
        "Workspace account setup on computers and mobile devices",
        "Baseline user, group and sharing structures",
        "Troubleshooting sign-in, synchronisation and file access",
        "Documentation of the changes made"
      ],
      outcomeTitle: "Clear ownership of shared information",
      outcome:
        "We align technical support with the real workflow. Larger data migrations, compliance requirements and ongoing administration are planned separately before work begins.",
      ctaTitle: "Discuss your Google Workspace request",
      ctaText: "Describe the user count, affected services and current issue or task."
    }
  },
  {
    id: "network-it-support",
    audience: "business",
    de: {
      slug: "netzwerk-it-betreuung",
      eyebrow: "Unternehmen · Netzwerk & Support",
      title: "Netzwerk- und IT-Betreuung für Berliner Büros",
      seoTitle: "Netzwerk & IT-Betreuung Berlin",
      description:
        "Praktische Netzwerk- und IT-Unterstützung für kleine Büros, Praxen, Studios und Unternehmen in Berlin.",
      intro:
        "Kleine Unternehmen brauchen eine stabile technische Basis, auch ohne eigene IT-Abteilung. Wir unterstützen bei Arbeitsplatzproblemen, WLAN, Druckern, Netzwerkgeräten und wiederkehrenden Störungen im Büroalltag.",
      problemsTitle: "Typische Büroprobleme",
      problems: [
        "Instabiles WLAN oder Verbindungsprobleme in Besprechungsräumen",
        "Drucker, Scanner, Freigaben oder Geräte sind nicht erreichbar",
        "Wiederkehrende Störungen ohne dokumentierte Ursache",
        "Neue Arbeitsplätze oder ein kleiner Standortwechsel"
      ],
      includedTitle: "Mögliche Unterstützung",
      included: [
        "Bestandsaufnahme von Netzwerk, Geräten und betroffenen Abläufen",
        "Fehleranalyse und nachvollziehbare Priorisierung",
        "Einrichtung von WLAN, Druckern und grundlegender Infrastruktur",
        "Dokumentation und Empfehlungen gegen wiederkehrende Ausfälle"
      ],
      outcomeTitle: "Eine wartbare technische Basis",
      outcome:
        "Einzelne Störungen können kurzfristig behoben werden; wiederkehrende Probleme brauchen häufig eine strukturierte Bestandsaufnahme. Wir trennen akute Hilfe von weiterführenden Verbesserungen, damit Aufwand und Nutzen sichtbar bleiben.",
      ctaTitle: "Büro-IT kurz beschreiben",
      ctaText: "Nennen Sie Standort, Teamgröße, betroffene Geräte und die Auswirkung auf den Betrieb."
    },
    en: {
      slug: "network-it-support",
      eyebrow: "Business · Network & support",
      title: "Network and IT support for Berlin offices",
      seoTitle: "Network & IT Support Berlin",
      description:
        "Practical network and IT support for small offices, practices, studios and businesses in Berlin.",
      intro:
        "Small businesses need a stable technical foundation even without an internal IT department. We help with workplace problems, Wi-Fi, printers, network devices and recurring disruptions in everyday office work.",
      problemsTitle: "Common office problems",
      problems: [
        "Unstable Wi-Fi or connection problems in meeting rooms",
        "Printers, scanners, file shares or devices are unavailable",
        "Recurring disruptions without a documented cause",
        "New workplaces or a small office move"
      ],
      includedTitle: "Possible support",
      included: [
        "Review of the network, devices and affected workflows",
        "Troubleshooting and transparent prioritisation",
        "Setup of Wi-Fi, printers and baseline infrastructure",
        "Documentation and recommendations to reduce recurring failures"
      ],
      outcomeTitle: "A maintainable technical foundation",
      outcome:
        "Individual incidents can be resolved quickly; recurring problems often require a structured review. We separate immediate support from longer-term improvements so effort and benefit remain visible.",
      ctaTitle: "Describe your office IT",
      ctaText: "Tell us the location, team size, affected equipment and operational impact."
    }
  }
];

export function getServices(audience: Audience, locale: Locale): LocalizedService[] {
  const alternateLocale: Locale = locale === "de" ? "en" : "de";

  return services
    .filter((service) => service.audience === audience)
    .map((service) => ({
      id: service.id,
      audience: service.audience,
      locale,
      alternateSlug: service[alternateLocale].slug,
      ...service[locale]
    }));
}

export function getServicePath(service: LocalizedService): string {
  if (service.locale === "en") {
    return `en/services/${service.audience}/${service.slug}/`;
  }

  const audiencePath = service.audience === "private" ? "privatpersonen" : "unternehmen";
  return `leistungen/${audiencePath}/${service.slug}/`;
}

export function getAlternateServicePath(service: LocalizedService): string {
  if (service.locale === "de") {
    return `en/services/${service.audience}/${service.alternateSlug}/`;
  }

  const audiencePath = service.audience === "private" ? "privatpersonen" : "unternehmen";
  return `leistungen/${audiencePath}/${service.alternateSlug}/`;
}
