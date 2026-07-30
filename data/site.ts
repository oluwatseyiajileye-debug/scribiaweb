export const siteConfig = {
  name: "SCRIBIA Writing Services",
  shortName: "SCRIBIA",
  tagline: "Excellent Writing, Delivered.",
  description:
    "SCRIBIA Writing Services is a Nigerian academic and professional writing consultancy supporting students, researchers, lecturers, and professionals with high-quality academic writing, research support, data analysis, and professional writing.",
  url: "https://scribiawritingservices.com",
  email: "scribiawritingservices@gmail.com",
  whatsappNumber: "2348123633499",
  whatsappDisplay: "0812 363 3499",
  phoneNumbers: [
    { display: "0812 363 3499", href: "tel:+2348123633499" },
    { display: "+234 903 929 2304", href: "tel:+2349039292304" },
  ],
  linkedin:
    "https://www.linkedin.com/in/scribia-writing-services-19a5ab416",
  address: "Ojo, Lagos, Nigeria",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Ojo,+Lagos,+Nigeria&output=embed",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Data Analysis", href: "/data-analysis" },
  { label: "Research Blueprint", href: "/blueprint" },
  { label: "Get a Quote", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
