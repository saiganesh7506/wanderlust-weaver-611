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
          "Find hotels, apartments and guesthouses on TravelX. Nightly rates shown up front, free cancellation options, no booking fees.",
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
  { route: "Casa Alfama, Lisbon", detail: "4★ · 4 nights · breakfast", operator: "Free cancellation", price: "£96/nt" },
  { route: "Hotel Kanazawa, Kyoto", detail: "4★ · 5 nights · garden view", operator: "Pay at property", price: "£128/nt" },
  { route: "Vico Marina, Naples", detail: "3★ · 3 nights · sea view", operator: "Free cancellation", price: "£74/nt" },
  { route: "Caldera Suites, Athens", detail: "5★ · 6 nights · half board", operator: "Non-refundable", price: "£186/nt" },
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
