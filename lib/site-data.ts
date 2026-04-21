export type ServiceCategory = {
  name: string;
  icon: string;
  items: Array<{
    title: string;
    desc: string;
  }>;
};

export type Specialization = {
  name: string;
  certified: boolean;
  details?: string;
  brands?: string[];
};

export const siteConfig = {
  companyName: "MI Engineers & Services",
  owner: "Mohd. Imran",
  tagline: "HVAC • Electrical • Fire Protection Solutions",
  siteUrl: "https://miengineers.in",
  description:
    "Premium MEP, HVAC, electrical, and fire protection services for commercial and residential projects across Delhi NCR.",
  email: "contact.miengineers@gmail.com",
  address: "R-126, Joga Bai Extension, Jamia Nagar, New Delhi - 110025",
  phones: ["9810842481", "7678669843", "8873566997"],
  businessHours: "24/7 Emergency Service • Mon-Sat: 9AM-7PM",
  serviceAreas: ["Delhi NCR", "Noida", "Ghaziabad", "Faridabad", "Gurugram"],
  keywords: [
    "HVAC contractor Delhi",
    "VRV VRF installation",
    "fire fighting system Delhi",
    "AC repair Jamia Nagar",
    "MEP services Delhi NCR",
  ],
  whatsappUrl: "https://wa.me/919810842481",
  social: {
    linkedin: "#",
    instagram: "#",
  },
  rentalServices:
    "AC on rent for short-term and long-term needs, ideal for events, offices, retail fit-outs, and temporary site setups.",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Specializations", href: "#specializations" },
  { label: "Why Us", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

export const services: ServiceCategory[] = [
  {
    name: "HVAC Solutions",
    icon: "❄️",
    items: [
      {
        title: "All Types of AC Installation & Repair",
        desc: "Window, split, cassette, ducted, and floor-standing systems.",
      },
      {
        title: "VRV / VRF Systems",
        desc: "Installation, maintenance, retrofitting, and performance upgrades.",
      },
      {
        title: "Centralized AC",
        desc: "Chillers, AHU, FCU, fresh air systems, and precision ducting.",
      },
      {
        title: "AMC Contracts",
        desc: "Preventive and corrective maintenance plans with response SLAs.",
      },
    ],
  },
  {
    name: "Electrical Works",
    icon: "⚡",
    items: [
      {
        title: "Single Phase & 3 Phase Systems",
        desc: "Wiring, panel upgrades, load balancing, and fault diagnostics.",
      },
      {
        title: "Electronic Accessories",
        desc: "Stabilizers, MCBs, switches, sensors, and protection devices.",
      },
      {
        title: "Appliance Repair",
        desc: "Refrigerators and electrical appliances across major brands.",
      },
    ],
  },
  {
    name: "Fire Protection Systems",
    icon: "🔥",
    items: [
      {
        title: "Fire Fighting Systems",
        desc: "Hydrant, sprinkler, wet riser, and fire pump installation.",
      },
      {
        title: "Fire Alarm Systems",
        desc: "Addressable and conventional alarms, detectors, panels, and hooters.",
      },
      {
        title: "Portable Extinguishers",
        desc: "CO2, dry powder, foam systems, installation, and refilling.",
      },
      {
        title: "Testing & Commissioning",
        desc: "Inspection and commissioning aligned with NBC and local fire norms.",
      },
    ],
  },
];

export const specializations: Specialization[] = [
  {
    name: "VRV / VRF HVAC Systems",
    certified: true,
    brands: ["Daikin", "LG", "Samsung", "Hitachi"],
  },
  {
    name: "Centralized Air Conditioning",
    certified: false,
    details: "Concept-to-commissioning support for mid-size and large facilities.",
  },
  {
    name: "Fire Fighting Systems",
    certified: true,
    details: "Hydrant, sprinkler, wet riser, fire pump room, and compliance support.",
  },
  {
    name: "Fire Alarm Integration",
    certified: false,
    details: "Detection, notification, zoning, and system integration.",
  },
  {
    name: "Electrical LT/HT Works",
    certified: false,
    details: "Distribution, panel work, and emergency resilience planning.",
  },
  {
    name: "All Types of AC Solutions",
    certified: false,
    details: "Residential, commercial, and project-based cooling systems.",
  },
];

export const trustMetrics = [
  { label: "Emergency Response", value: 24, suffix: "/7" },
  { label: "Projects & Service Calls", value: 850, suffix: "+" },
  { label: "Service Coverage", value: 5, suffix: " Cities" },
  { label: "Lead Response Goal", value: 30, suffix: " min" },
];

export const brandMarquee = [
  "Daikin",
  "LG",
  "Samsung",
  "Hitachi",
  "Voltas",
  "Blue Star",
  "Carrier",
  "Mitsubishi Electric",
];

export const faqs = [
  {
    question: "Do you handle both commercial and residential HVAC projects?",
    answer:
      "Yes. We support single-unit residential jobs, offices, retail outlets, restaurants, and multi-system commercial installations.",
  },
  {
    question: "Can you provide AMC and emergency breakdown support?",
    answer:
      "Yes. We provide scheduled AMC coverage as well as urgent breakdown response for HVAC, electrical, and fire systems.",
  },
  {
    question: "Do you support fire compliance and commissioning?",
    answer:
      "We support testing, commissioning, and system readiness aligned with NBC and local fire authority expectations.",
  },
  {
    question: "Is rental AC available for short-term requirements?",
    answer:
      "Yes. Rental AC can be arranged for events, temporary offices, and project-site requirements on short or long tenures.",
  },
];

export const defaultWhatsAppMessage =
  "Hello MI Engineers, I need help with HVAC / Electrical / Fire Protection services.";
