export const company = {
  name: "Vantara",
  legalName: "Vantara Premium Water",
  tagline: "Pure by Nature, Better for Tomorrow.",
  hours: "Mon–Sat, 8:00 AM – 7:00 PM",
  email: "orders@vantara.in",
  founders: [
    {
      name: "B.U.V Bhaskar Reddy",
      role: "Founder",
      initials: "BR",
      note: "Built Vantara to bring clean, mineral-balanced water to West Godavari — sourced with care, bottled with pride.",
    },
    {
      name: "B. Manikanta Reddy",
      role: "Co-Founder",
      initials: "MR",
      note: "Leads craft, quality, and the daily promise that every bottle leaves the line as pure as the source.",
    },
  ],
  address: {
    building: "R.S. No. 431/5",
    street: "Ramannagudem",
    locality: "Ramannagudem",
    city: "Tadepalligudem",
    district: "West Godavari",
    state: "Andhra Pradesh",
    landmark: "Near Vasavi Engineering College",
  },
} as const;

export function formatAddress() {
  const a = company.address;
  return `${a.building}, ${a.street}, ${a.locality}, ${a.city}, ${a.district}, ${a.state}`;
}

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Collection", to: "/shop" },
  { label: "Source", to: "/about" },
  { label: "Reach Us", to: "/contact" },
] as const;
