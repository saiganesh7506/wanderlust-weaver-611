import tokyo from "@/assets/dest-tokyo.jpg";
import lisbon from "@/assets/dest-lisbon.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import naples from "@/assets/dest-naples.jpg";
import athens from "@/assets/dest-athens.jpg";
import bali from "@/assets/dest-bali.jpg";

export type Destination = {
  city: string;
  image: string;
  route: string;
  duration: string;
  price: string;
};

export const destinations: Destination[] = [
  { city: "Tokyo, JP", image: tokyo, route: "LHR → HND", duration: "12h 40m", price: "£1,284" },
  { city: "Lisbon, PT", image: lisbon, route: "LHR → LIS", duration: "2h 35m", price: "£214" },
  { city: "Kyoto, JP", image: kyoto, route: "LHR → KIX", duration: "13h 10m", price: "£1,352" },
  { city: "Naples, IT", image: naples, route: "LHR → NAP", duration: "2h 15m", price: "£189" },
  { city: "Athens, GR", image: athens, route: "LHR → ATH", duration: "3h 20m", price: "£246" },
  { city: "Bali, ID", image: bali, route: "LHR → DPS", duration: "15h 05m", price: "£1,118" },
];

export const categories = [
  { icon: "✈", label: "City breaks", meta: "from £214" },
  { icon: "⛰", label: "Mountain", meta: "from £486" },
  { icon: "☀", label: "Beach", meta: "from £329" },
  { icon: "🚈", label: "Rail", meta: "from £58" },
  { icon: "🛏", label: "Stay", meta: "from £96/nt" },
];

export type Offer = {
  route: string;
  meta: string;
  price: string;
  code: string;
  action: string;
};

export const offers: Offer[] = [
  { route: "LHR → FRA", meta: "12 Mar · Economy", price: "£58", code: "RAIL58", action: "Grab →" },
  { route: "LIS → OPO", meta: "Night · 4-star", price: "£96", code: "STAY20", action: "Book →" },
  { route: "LHR → KEF", meta: "5 days · Flights", price: "£412", code: "KRAKEN", action: "Claim →" },
  { route: "LHR → BCN", meta: "20 Mar · Economy", price: "£74", code: "SUNRUN", action: "Grab →" },
  { route: "PAR → MRS", meta: "Rail · 3h 10m", price: "£39", code: "TGV39", action: "Book →" },
  { route: "LHR → DPS", meta: "9 nights · Package", price: "£1,118", code: "ISLAND9", action: "Claim →" },
];

export const trustStats = [
  { value: "12,400+", label: "routes bookable" },
  { value: "98.4%", label: "on-time confirmations" },
  { value: "24/7", label: "human support" },
  { value: "0", label: "booking fees" },
];
