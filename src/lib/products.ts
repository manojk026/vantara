export type BottleKind = "slim" | "tall" | "family" | "jar" | "crate";
export type ProductCategory = "single" | "pack" | "home";

export type Product = {
  slug: string;
  name: string;
  size: string;
  packLabel: string;
  price: number;
  compareAt?: number;
  image: string;
  blurb: string;
  story: string;
  details: string[];
  minerals: { label: string; value: string }[];
  bottle: BottleKind;
  featured?: boolean;
  category: ProductCategory;
  bestFor: string;
};

export const products: Product[] = [
  {
    slug: "vantara-500ml",
    name: "Vantara 500 ml",
    size: "500 ml",
    packLabel: "Single bottle",
    price: 40,
    image: "/images/bottle-500ml.jpg",
    blurb: "The everyday sip. Pocket-light, mineral-balanced, ready for the road.",
    story:
      "A slim 500 ml bottle for desks, dashboards, and long walks through Tadepalligudem heat. Same source water, same careful mineral finish.",
    details: [
      "Purified and mineral-balanced drinking water",
      "Food-grade PET with a tamper-evident blue cap",
      "Best chilled, equally clean at room temperature",
      "Recyclable bottle — rinse and return with bulk orders",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "slim",
    featured: true,
    category: "single",
    bestFor: "Travel, school, work",
  },
  {
    slug: "vantara-1l",
    name: "Vantara 1 Litre",
    size: "1 L",
    packLabel: "Single bottle",
    price: 70,
    image: "/images/bottle-1l.jpg",
    blurb: "The house favourite. One litre of quiet, cold clarity.",
    story:
      "Our signature litre — the bottle on the garden table. Generous without being heavy, with the same mountain-still finish in every pour.",
    details: [
      "Signature litre for home and office",
      "Added minerals for a clean, round taste",
      "Spiral-grip PET body, blue hygiene cap",
      "Ideal as a daily pair: one at the desk, one in the kitchen",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "tall",
    featured: true,
    category: "single",
    bestFor: "Home, office, dining",
  },
  {
    slug: "vantara-2l",
    name: "Vantara 2 Litre",
    size: "2 L",
    packLabel: "Family bottle",
    price: 110,
    image: "/images/bottle-2l.jpg",
    blurb: "For the table. Share a long lunch without sending anyone to the shop.",
    story:
      "A two-litre bottle meant to live at the centre of the table — meals, guests, and slow Sundays in Ramannagudem.",
    details: [
      "Family-size PET with a secure blue cap",
      "Same mineral profile as the signature litre",
      "Stays fresh refrigerated for 3 days after opening",
      "A quieter, cheaper way to hydrate a household",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "tall",
    featured: true,
    category: "single",
    bestFor: "Family meals",
  },
  {
    slug: "vantara-5l",
    name: "Vantara 5 Litre",
    size: "5 L",
    packLabel: "Handle bottle",
    price: 180,
    image: "/images/bottle-5l.jpg",
    blurb: "Kitchen workhorse with a handle — refill glasses all week.",
    story:
      "Built for the kitchen counter. A five-litre handle bottle that keeps a family in clean water between larger jar deliveries.",
    details: [
      "Side handle for easy pours",
      "Food-grade PET, hygiene-sealed",
      "Perfect beside the filter-stand or on a pantry shelf",
      "Pairs well with a weekly 20 L jar schedule",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "family",
    category: "home",
    bestFor: "Kitchen, pantry",
  },
  {
    slug: "vantara-20l",
    name: "Vantara 20 L Jar",
    size: "20 L",
    packLabel: "Dispenser jar",
    price: 250,
    image: "/images/jar-20l.jpg",
    blurb: "The home and office standard. One jar, a week of clean water.",
    story:
      "Our 20-litre jar is the quiet engine of homes, hostels, and shops around Vasavi Engineering College. Delivered sealed, collected, washed, and refilled.",
    details: [
      "Food-grade reusable jar",
      "Sealed at the plant in Ramannagudem",
      "Same-day delivery in Tadepalligudem",
      "Empty jars collected on the next drop",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "jar",
    featured: true,
    category: "home",
    bestFor: "Home, office, hostel",
  },
  {
    slug: "vantara-500-case",
    name: "Case of 24 × 500 ml",
    size: "24 × 500 ml",
    packLabel: "Wholesale case",
    price: 840,
    compareAt: 960,
    image: "/images/case-500ml.jpg",
    blurb: "A full case for events, shops, and long weeks on the move.",
    story:
      "Twenty-four pocket bottles, packed in Ramannagudem and ready for kirana shelves, college stalls, and family functions.",
    details: [
      "24 sealed 500 ml bottles",
      "Save versus buying singles",
      "Ideal for shops, events, and offices",
      "Free local delivery on cases",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "slim",
    category: "pack",
    bestFor: "Retail, events",
  },
  {
    slug: "vantara-1l-case",
    name: "Case of 12 × 1 L",
    size: "12 × 1 L",
    packLabel: "Wholesale case",
    price: 780,
    compareAt: 840,
    image: "/images/bottle-1l.jpg",
    blurb: "A dozen litres — the easiest way to keep a pantry honest.",
    story:
      "Twelve signature litres in one drop. The standing order for small offices and joint families who prefer bottles over a jar.",
    details: [
      "12 sealed 1 L bottles",
      "Case pricing versus singles",
      "Stacks cleanly in a crate or car boot",
      "Free local delivery on cases",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "tall",
    category: "pack",
    bestFor: "Pantry, office",
  },
  {
    slug: "vantara-gift-crate",
    name: "Garden Gift Crate",
    size: "6 × 500 ml",
    packLabel: "Gift crate",
    price: 399,
    compareAt: 480,
    image: "/images/gift-crate.jpg",
    blurb: "Six bottles in a wooden crate — a small, serious present.",
    story:
      "Packed by hand in a wooden crate with straw. For housewarmings, festival hampers, and anyone who already has everything except better water.",
    details: [
      "Six 500 ml bottles",
      "Natural wooden crate",
      "Ready to gift — no extra wrapping",
      "Limited weekly packing run",
    ],
    minerals: [
      { label: "TDS", value: "80–120 ppm" },
      { label: "pH", value: "7.0 – 7.4" },
      { label: "Calcium", value: "Balanced" },
      { label: "Magnesium", value: "Balanced" },
    ],
    bottle: "crate",
    category: "pack",
    bestFor: "Gifting",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export const features = [
  {
    id: "pure",
    title: "Pure Water",
    copy: "Multi-stage purification so the glass tastes of nothing but water.",
  },
  {
    id: "minerals",
    title: "Added Minerals",
    copy: "Calcium and magnesium returned in balance — not stripped, not spiked.",
  },
  {
    id: "safe",
    title: "Safe & Hygienic",
    copy: "Sealed in a clean facility in Ramannagudem. Cap on, seal intact.",
  },
  {
    id: "source",
    title: "Natural Source",
    copy: "Drawn from a carefully watched source, minutes from our bottling line.",
  },
] as const;
