export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Startseite", href: "" },
  { label: "Unternehmen", href: "leistungen/unternehmen/" },
  { label: "Privatpersonen", href: "leistungen/privatpersonen/" },
  { label: "System & Software", href: "leistungen/reparatur-installation/" },
  { label: "Datensicherheit", href: "datensicherheit-zertifizierungen/" }
];

export const mainNavigationEn: NavItem[] = [
  { label: "Home", href: "en/" },
  { label: "Business", href: "en/services/business/" },
  { label: "Private customers", href: "en/services/private/" }
];

export const legalNavigation: NavItem[] = [
  { label: "Impressum", href: "impressum/" },
  { label: "Datenschutzerklaerung", href: "datenschutz/" }
];

export const legalNavigationEn: NavItem[] = [
  { label: "Legal notice (German)", href: "impressum/" },
  { label: "Privacy policy (German)", href: "datenschutz/" }
];
