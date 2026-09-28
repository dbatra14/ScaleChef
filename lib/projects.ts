export type Project = {
  id: string;
  name: string;
  category: string;
  categories: string[];
  desc: string;
  url: string;
  image: string;
  alt: string;
  scope?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "misaki",
    name: "Misaki Med Spa",
    category: "Healthcare / Brand Website",
    categories: ["WEB", "BRAND"],
    desc: "For Misaki Medspa, we brought the brand’s focus on beauty, care, and personal attention into its online presence. The website combines treatment information, an introduction to the team, and clear consultation prompts to guide visitors from initial curiosity to making an enquiry. The approach balances an aspirational brand experience with practical navigation, helping visitors understand the offering and find their next step.",
    url: "https://misaki-medspa.vercel.app/",
    image: "/portfolio-misaki.png",
    alt: "Misaki Med Spa website",
    scope: "Web Design · Development · UX",
  },
  {
    id: "drishtivision",
    name: "DrishtiVision CRM",
    category: "CRM / Business Software",
    categories: ["CRM", "WEB"],
    desc: "A dedicated CRM built to bring structure to customer management and daily business workflows. The interface brings contacts, pipelines, follow-ups and reporting into one place, so a team always knows where each deal stands. The result is a calmer, more connected way of working that scales with the business rather than against it.",
    url: "https://drishtivision-crm.vercel.app/",
    image: "/portfolio-drishtivision.png",
    alt: "DrishtiVision CRM interface",
    scope: "Product Design · Development",
  },
  {
    id: "dayhr",
    name: "Day HR",
    category: "HR Technology / SaaS",
    categories: ["HR TECH", "WEB"],
    desc: "A focused HR platform to simplify everyday people and workforce workflows. Attendance, leave and payroll are handled inside one system instead of a patchwork of spreadsheets and disconnected tools. The build gives operations teams a single source of truth, cuts the admin that slows them down, and keeps payroll accurate across the whole workforce.",
    url: "https://dayhr.vercel.app/",
    image: "/portfolio-dayhr.png",
    alt: "Day HR platform",
    scope: "Web App · Design · Development",
  },
  {
    id: "riverview",
    name: "Riverview Roofing",
    category: "Local Business / Lead Generation",
    categories: ["WEB", "BRAND"],
    desc: "A conversion-focused digital presence built to communicate services and make it easier to get in touch. The site presents the range of roofing work clearly and gives every visitor a direct path to requesting an inspection. Each section is shaped around local search intent, so enquiries arrive qualified and the phone stops being the only source of new work.",
    url: "https://riverview-roofing.vercel.app/",
    image: "/portfolio-riverview.png",
    alt: "Riverview Roofing website",
    scope: "Web Design · Development",
  },
  {
    id: "extngo",
    name: "Extngo",
    category: "Product / Industrial Design",
    categories: ["PRODUCT"],
    desc: "A product-focused digital experience for a retractable flat CAT6 cable reel engineered around cleaner storage and safer spaces. The page walks through the reel’s industrial design, its 50 ft reach, and the zero-tangle routing that keeps workspaces clear and trip-free. Hardware detail is presented with the precision it deserves.",
    url: "https://extngo-iota.vercel.app/",
    image: "/portfolio-extngo.png",
    alt: "Extngo product website",
    scope: "Product Website · Industrial Detail",
  },
  {
    id: "aurum",
    name: "AURUM",
    category: "Luxury / Fragrance",
    categories: ["BRAND", "ECOMMERCE"],
    desc: "An editorial digital experience for a heritage-inspired perfume house built around five rare fragrance compositions. The narrative moves through each scent like a chapter, pairing restrained typography with rich product imagery. The result is a storefront that reads like a maison rather than a catalogue, where the story of each composition is allowed to land before the buy button does.",
    url: "https://aurum-maison-noir-theta.vercel.app/",
    image: "/portfolio-aurum.png",
    alt: "AURUM heritage perfume house website",
    scope: "Brand · Editorial · Commerce",
  },
];

export const FILTERS = ["ALL", "WEB", "PRODUCT", "CRM", "HR TECH", "BRAND"];
