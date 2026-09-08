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
          "Search return and one-way flights on TravelX. Compare fares, cabins and durations across 12,400+ routes with no booking fees.",
      },
      { property: "og:title", content: "Flight search — TravelX" },
      {
        property: "og:description",
        content: "Compare fares, cabins and durations across 12,400+ routes.",
      },
    ],
  }),
  component: FlightsPage,
});

const fares = [
  { route: "LHR → HND", detail: "14 Mar · 12h 40m · direct", operator: "Skybridge 041", price: "£1,284" },
  { route: "LHR → LIS", detail: "14 Mar · 2h 35m · direct", operator: "Atlantic Blue 220", price: "£214" },
  { route: "LHR → NAP", detail: "16 Mar · 2h 15m · direct", operator: "Meridian 118", price: "£189" },
  { route: "LHR → ATH", detail: "18 Mar · 3h 20m · direct", operator: "Aegean Line 77", price: "£246" },
  { route: "LHR → DPS", detail: "02 Apr · 15h 05m · 1 stop", operator: "Skybridge 902", price: "£1,118" },
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
