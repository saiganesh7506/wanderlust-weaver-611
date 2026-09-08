import { createFileRoute } from "@tanstack/react-router";
import { FareTable, ProductPage } from "@/components/travelx/ProductPage";
import { OfferStubs, SectionHead } from "@/components/travelx/sections";

export const Route = createFileRoute("/trains")({
  head: () => ({
    meta: [
      { title: "Train tickets — TravelX" },
      {
        name: "description",
        content:
          "Book rail across Europe on TravelX. Seat reservations included, advance fares from £39, tickets on your phone.",
      },
      { property: "og:title", content: "Train tickets — TravelX" },
      {
        property: "og:description",
        content: "Rail across Europe with seat reservations included and advance fares from £39.",
      },
    ],
  }),
  component: TrainsPage,
});

const services = [
  { route: "STP → PNO", detail: "14 Mar · 2h 16m · direct", operator: "Channel 9024", price: "£58" },
  { route: "PAR → MRS", detail: "15 Mar · 3h 10m · direct", operator: "Sud Express 6117", price: "£39" },
  { route: "AMS → BER", detail: "16 Mar · 6h 22m · 1 change", operator: "Nordline 208", price: "£64" },
  { route: "ZRH → MIL", detail: "17 Mar · 3h 17m · direct", operator: "Alpine 512", price: "£47" },
];

function TrainsPage() {
  return (
    <ProductPage mode="trains" kicker="Trains / standard class" title="Rail, seat included.">
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / departures" title="Advance rail fares" />
        <FareTable rows={services} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <SectionHead kicker="(b) / rail offers" title="Cheap seats this week" />
        <OfferStubs count={3} />
      </section>
    </ProductPage>
  );
}
