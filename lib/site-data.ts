export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  bullets: string[];
  sectors: string[];
};

export const siteConfig = {
  companyName: "MI Engineers & Services",
  owner: "Mohd. Imran",
  tagline: "HVAC • Electrical • Fire Protection Solutions",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://miengineers.in",
  description:
    "Professional HVAC, electrical, and fire protection services for homes, offices, retail spaces, and project sites across Delhi NCR.",
  email: "contact.miengineers@gmail.com",
  address: "R-126, Joga Bai Extension, Jamia Nagar, New Delhi - 110025",
  phones: ["9810842481", "7678669843", "8873566997", "9466965041"],
  businessHours: "Mon-Sat: 9:00 AM to 7:00 PM",
  emergencyLine: "24/7 emergency service support",
  serviceAreas: ["Delhi", "Noida", "Ghaziabad", "Faridabad", "Gurugram"],
  keywords: [
    "HVAC contractor Delhi",
    "VRV VRF installation Delhi NCR",
    "fire fighting system contractor Delhi",
    "electrical works contractor Delhi NCR",
    "AC repair Jamia Nagar",
    "AMC services Delhi NCR",
  ],
  whatsappUrl: "https://wa.me/919810842481",
  social: {
    linkedin: "#",
    instagram: "#",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const serviceItems: ServiceItem[] = [
  {
    id: "hvac",
    title: "HVAC Solutions",
    shortTitle: "HVAC",
    summary:
      "Installation, servicing, maintenance, and system improvement for residential and commercial cooling setups.",
    description:
      "We support AC installation, breakdown maintenance, centralized air conditioning, VRV / VRF systems, and long-term maintenance planning with practical site execution.",
    bullets: [
      "Split, window, cassette, ducted, and floor standing AC systems",
      "VRV / VRF installation, servicing, and retrofitting",
      "AHU, FCU, ducting, and centralized air conditioning works",
      "Preventive and corrective AMC support",
    ],
    sectors: ["Homes", "Offices", "Retail", "Restaurants", "Commercial sites"],
  },
  {
    id: "electrical",
    title: "Electrical Works",
    shortTitle: "Electrical",
    summary:
      "Reliable electrical support for day-to-day servicing, upgrades, and project-level requirements.",
    description:
      "From fault tracing and rewiring to panel upgrades and load balancing, we deliver electrical support that suits both maintenance jobs and larger site scopes.",
    bullets: [
      "Single phase and three phase electrical works",
      "Panel upgrades, MCBs, protection devices, and accessories",
      "Wiring corrections, load balancing, and fault diagnostics",
      "Appliance and refrigerator service support",
    ],
    sectors: ["Homes", "Shops", "Offices", "Small facilities", "Project interiors"],
  },
  {
    id: "fire-protection",
    title: "Fire Protection Systems",
    shortTitle: "Fire Protection",
    summary:
      "Execution and maintenance for fire fighting and fire alarm systems with compliance-focused attention.",
    description:
      "We handle hydrant, sprinkler, wet riser, pump room, fire alarm, extinguisher, testing, and commissioning support for practical project delivery.",
    bullets: [
      "Hydrant, sprinkler, wet riser, and fire pump systems",
      "Addressable and conventional fire alarm systems",
      "Detector, hooter, control panel, and cabling support",
      "Testing, commissioning, and readiness checks",
    ],
    sectors: ["Commercial buildings", "Institutional projects", "Retail", "Mixed-use spaces"],
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts",
    shortTitle: "AMC",
    summary:
      "Structured preventive maintenance plans to reduce downtime and improve service predictability.",
    description:
      "Our AMC approach is built for regular inspections, scheduled maintenance, and timely support so equipment stays dependable through the year.",
    bullets: [
      "Scheduled inspections and preventive checks",
      "Corrective maintenance support",
      "Service log coordination and response planning",
      "Flexible plans for equipment type and site size",
    ],
    sectors: ["Offices", "Retail chains", "Residential communities", "Facility operators"],
  },
  {
    id: "rental-ac",
    title: "AC on Rent",
    shortTitle: "Rental AC",
    summary:
      "Temporary cooling arrangements for events, temporary offices, and urgent operational needs.",
    description:
      "We provide rental AC options for short-term and long-term requirements where quick deployment matters more than full installation.",
    bullets: [
      "Short-term and long-term rental options",
      "Suitable for events, offices, cabins, and temporary spaces",
      "Fast deployment support depending on requirement",
      "Practical option during repair or project transition periods",
    ],
    sectors: ["Events", "Temporary offices", "Project sites", "Retail launches"],
  },
];

export const stats = [
  { label: "Emergency Support", value: "24/7" },
  { label: "Lead Response Goal", value: "30 mins" },
  { label: "Service Coverage", value: "Delhi NCR" },
  { label: "Core Service Areas", value: "HVAC • Electrical • Fire" },
];

export const whyChooseUs = [
  {
    title: "Practical field execution",
    description:
      "The site is designed around what customers need from a contractor: responsiveness, clarity, and dependable service delivery.",
  },
  {
    title: "Balanced service range",
    description:
      "HVAC, electrical, fire protection, AMC, and rental support are presented in a clear structure instead of a crowded one-page pitch.",
  },
  {
    title: "Professional local positioning",
    description:
      "The visual style now fits a Delhi NCR servicing business better: lighter, cleaner, and more trustworthy for real inquiries.",
  },
  {
    title: "Lead-ready contact flow",
    description:
      "Quote requests, direct call actions, WhatsApp, and Appwrite-ready forms are kept prominent without overwhelming the user.",
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Requirement discussion",
    description:
      "We understand the site type, issue, urgency, and service scope before suggesting the right support.",
  },
  {
    step: "02",
    title: "Visit or assessment",
    description:
      "Site inspection or technical review is arranged where needed for installation, repair, or system improvement.",
  },
  {
    step: "03",
    title: "Execution and support",
    description:
      "Work is completed with practical coordination, followed by maintenance or follow-up planning where applicable.",
  },
];

export const sectors = [
  "Residential homes and apartments",
  "Offices and commercial workspaces",
  "Retail shops and showrooms",
  "Restaurants and hospitality spaces",
  "Temporary site offices and events",
  "Small and mid-sized project sites",
];

export const brands = [
  "Daikin",
  "LG",
  "Samsung",
  "Hitachi",
  "Voltas",
  "Blue Star",
  "Carrier",
  "Mitsubishi Electric",
];

export const aboutPoints = [
  "Focused on HVAC, electrical, and fire protection works",
  "Suitable for homes, offices, retail, and project-based requirements",
  "Available for maintenance, emergency service, and planned installations",
  "Positioned for practical response and long-term client relationships",
];

export const faqs = [
  {
    question: "Do you handle both commercial and residential HVAC work?",
    answer:
      "Yes. MI Engineers supports residential, office, retail, and project-based HVAC requirements depending on the scope.",
  },
  {
    question: "Can you provide AMC and breakdown support?",
    answer:
      "Yes. AMC and corrective maintenance support are part of the service offering for HVAC and related systems.",
  },
  {
    question: "Do you work on fire fighting and fire alarm systems?",
    answer:
      "Yes. Fire fighting and fire alarm system work is part of the core service profile, including testing and commissioning support.",
  },
  {
    question: "Is rental AC available for temporary needs?",
    answer:
      "Yes. Rental AC can be arranged for temporary offices, events, and urgent short-term cooling requirements.",
  },
];

export const defaultWhatsAppMessage =
  "Hello MI Engineers, I need support for HVAC, electrical, or fire protection services.";
