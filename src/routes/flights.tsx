import { createFileRoute } from "@tanstack/react-router";
import { FareTable, ProductPage } from "@/components/travelx/ProductPage";
import { DestinationGrid, SectionHead } from "@/components/travelx/sections";

export const Route = createFileRoute("/flights")({
  head: () => ({
    meta: [
      { title: "Flight search — TravelX" },
      {
        name: "description",
        content:
          "Search domestic flights across India on TravelX. Compare fares, cabins and durations across 1,900+ domestic Indian routes with no booking fees.",
      },
      { property: "og:title", content: "Flight search — TravelX" },
      {
        property: "og:description",
        content: "Compare fares, cabins and durations on 1,900+ Indian routes.",
      },
    ],
  }),
  component: FlightsPage,
});

const fares = [
  { route: "DEL → JAI", detail: "14 Mar · 1h 05m · direct", operator: "Aravalli Air 041", price: "₹2,480" },
  { route: "BOM → COK", detail: "14 Mar · 1h 50m · direct", operator: "Coastline 220", price: "₹3,940" },
  { route: "DEL → GOI", detail: "16 Mar · 2h 35m · direct", operator: "Konkan Wings 118", price: "₹4,260" },
  { route: "BLR → VNS", detail: "18 Mar · 2h 45m · 1 stop", operator: "Ganga Air 77", price: "₹4,610" },
  { route: "BOM → UDR", detail: "02 Apr · 1h 30m · direct", operator: "Aravalli Air 902", price: "₹3,180" },
];

function FlightsPage() {
  return (
    <ProductPage mode="flights" kicker="Flights / return · economy" title="Fares, laid out plainly.">
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / today's fares" title="Cheapest departures" />
        <FareTable rows={fares} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <SectionHead kicker="(b) / inspiration" title="Popular flight routes" />
        <DestinationGrid count={3} />
      </section>
    </ProductPage>
  );
}
