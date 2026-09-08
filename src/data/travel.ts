import jaipur from "@/assets/in-jaipur.jpg";
import kochi from "@/assets/in-kochi.jpg";
import goa from "@/assets/in-goa.jpg";
import manali from "@/assets/in-manali.jpg";
import varanasi from "@/assets/in-varanasi.jpg";
import udaipur from "@/assets/in-udaipur.jpg";

export type Destination = {
  city: string;
  image: string;
  route: string;
  duration: string;
  price: string;
};

export const destinations: Destination[] = [
  { city: "Jaipur, Rajasthan", image: jaipur, route: "DEL → JAI", duration: "1h 05m", price: "₹2,480" },
  { city: "Kochi, Kerala", image: kochi, route: "BOM → COK", duration: "1h 50m", price: "₹3,940" },
  { city: "Goa", image: goa, route: "DEL → GOI", duration: "2h 35m", price: "₹4,260" },
  { city: "Manali, Himachal", image: manali, route: "DEL → KUU", duration: "1h 25m", price: "₹5,180" },
  { city: "Varanasi, Uttar Pradesh", image: varanasi, route: "BLR → VNS", duration: "2h 45m", price: "₹4,610" },
  { city: "Udaipur, Rajasthan", image: udaipur, route: "BOM → UDR", duration: "1h 30m", price: "₹3,180" },
];

/** Indian cities offered across search, suggestions and the AI planner. */
export const indianCities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Jaipur",
  "Udaipur",
  "Jodhpur",
  "Agra",
  "Varanasi",
  "Amritsar",
  "Rishikesh",
  "Manali",
  "Shimla",
  "Leh",
  "Srinagar",
  "Darjeeling",
  "Goa",
  "Kochi",
  "Munnar",
  "Alleppey",
  "Ooty",
  "Coorg",
  "Hampi",
  "Pondicherry",
  "Mysuru",
  "Andaman Islands",
];

export const interestOptions = [
  "Heritage & forts",
  "Temples & spiritual",
  "Beaches",
  "Himalayan treks",
  "Wildlife & safari",
  "Street food",
  "Backwaters",
  "Shopping & bazaars",
  "Photography",
  "Ayurveda & wellness",
];

export const categories = [
  { icon: "✈", label: "City breaks", meta: "from ₹2,480" },
  { icon: "⛰", label: "Himalayas", meta: "from ₹5,180" },
  { icon: "☀", label: "Beaches", meta: "from ₹4,260" },
  { icon: "🚈", label: "Rail", meta: "from ₹560" },
  { icon: "🛏", label: "Stays", meta: "from ₹1,850/nt" },
];

export type Offer = {
  route: string;
  meta: string;
  price: string;
  code: string;
  action: string;
};

export const offers: Offer[] = [
  { route: "DEL → JAI", meta: "12 Mar · Economy", price: "₹2,480", code: "PINKCITY", action: "Grab →" },
  { route: "Kochi stay", meta: "Night · 4-star", price: "₹1,850", code: "KERALA20", action: "Book →" },
  { route: "DEL → GOI", meta: "5 nights · Flights + stay", price: "₹18,400", code: "SUSEGAD", action: "Claim →" },
  { route: "BLR → MAA", meta: "20 Mar · Economy", price: "₹1,990", code: "SOUTHRUN", action: "Grab →" },
  { route: "DEL → AGC", meta: "Rail · Vande Bharat 1h 50m", price: "₹560", code: "TAJ560", action: "Book →" },
  { route: "Leh · 6 nights", meta: "Package · Ladakh circuit", price: "₹42,600", code: "LADAKH6", action: "Claim →" },
];

export const trustStats = [
  { value: "1,900+", label: "Indian routes bookable" },
  { value: "98.4%", label: "on-time confirmations" },
  { value: "24/7", label: "support in 8 languages" },
  { value: "₹0", label: "booking fees" },
];
