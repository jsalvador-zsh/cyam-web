export interface NavItem {
  text: string;
  href: string;
  dataAttr?: string;
}

export interface HeaderData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  navItems: NavItem[];
  ctaButton: NavItem;
}

export const headerData: HeaderData = {
  logo: {
    src: "/assets/images/logo-invertido.png",
    alt: "Logo CYAM S.R.L.",
    href: "/"
  },
  navItems: [
    {
      text: "Sobre nosotros",
      href: "/#aboutus",
    },
    {
      text: "Servicios",
      href: "/#services",
    },
    {
      text: "Bolsa de trabajo",
      href: "/jobs",
    },
    {
      text: "Quejas",
      href: "/complaints",
    }
  ],
  ctaButton: {
    text: "Contáctanos",
    href: "/#contactus",
  }
};