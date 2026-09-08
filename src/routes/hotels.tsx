import { createFileRoute } from "@tanstack/react-router";
import { FareTable, ProductPage } from "@/components/travelx/ProductPage";
import { SectionHead, TrustBand } from "@/components/travelx/sections";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotel search — TravelX" },
      {
        name: "description",
        content:
          "Find hotels, homestays and heritage havelis across India on TravelX. Nightly rates shown up front, free cancellation options, no booking fees.",
      },
      { property: "og:title", content: "Hotel search — TravelX" },
      {
        property: "og:description",
        content: "Nightly rates up front, free cancellation options, no booking fees.",
      },
    ],
  }),
  component: HotelsPage,
});

const stays = [
  { route: "Backwater House, Kochi", detail: "4★ · 4 nights · breakfast", operator: "Free cancellation", price: "₹1,850/nt" },
  { route: "Haveli Rangmahal, Jaipur", detail: "4★ · 3 nights · courtyard view", operator: "Pay at property", price: "₹2,640/nt" },
  { route: "Sands & Palms, Goa", detail: "3★ · 5 nights · sea view", operator: "Free cancellation", price: "₹2,180/nt" },
  { route: "Lake Terrace, Udaipur", detail: "5★ · 3 nights · half board", operator: "Non-refundable", price: "₹6,900/nt" },
];

function HotelsPage() {
  return (
    <ProductPage mode="hotels" kicker="Hotels / rooms · nightly" title="Stays priced by the night.">
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / available now" title="Rooms held for you" />
        <FareTable rows={stays} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <TrustBand />
      </section>
    </ProductPage>
  );
}
