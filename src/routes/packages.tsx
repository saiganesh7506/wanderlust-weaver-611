import { createFileRoute } from "@tanstack/react-router";
import { FareTable, ProductPage } from "@/components/travelx/ProductPage";
import { DestinationGrid, SectionHead } from "@/components/travelx/sections";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Holiday packages — TravelX" },
      {
        name: "description",
        content:
          "Flight, stay and transfer bundled into one price. Browse TravelX packages from 3 to 14 nights with a single confirmation.",
      },
      { property: "og:title", content: "Holiday packages — TravelX" },
      {
        property: "og:description",
        content: "Flight, stay and transfers in one price, one confirmation.",
      },
    ],
  }),
  component: PackagesPage,
});

const bundles = [
  { route: "Bali · 9 nights", detail: "LHR → DPS · villa · transfers", operator: "B&B", price: "£1,118" },
  { route: "Athens & islands · 7 nights", detail: "LHR → ATH · 2 hotels · ferry", operator: "Room only", price: "£742" },
  { route: "Kyoto & Tokyo · 10 nights", detail: "LHR → KIX · rail pass · hotels", operator: "B&B", price: "£1,960" },
  { route: "Amalfi · 5 nights", detail: "LHR → NAP · sea-view stay", operator: "Half board", price: "£586" },
];

function PackagesPage() {
  return (
    <ProductPage mode="packages" kicker="Packages / flight + stay" title="One price, whole trip.">
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / bundles" title="Ready-made trips" />
        <FareTable rows={bundles} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <SectionHead kicker="(b) / inspiration" title="Where packages go" />
        <DestinationGrid count={6} />
      </section>
    </ProductPage>
  );
}
