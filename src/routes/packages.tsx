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
          "Flight, stay and transfer bundled into one price. Browse TravelX India packages from 3 to 14 nights with a single confirmation.",
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
  { route: "Goa · 5 nights", detail: "DEL → GOI · resort · transfers", operator: "B&B", price: "₹18,400" },
  { route: "Kerala backwaters · 7 nights", detail: "BOM → COK · houseboat · Munnar", operator: "Room only", price: "₹31,900" },
  { route: "Rajasthan circuit · 8 nights", detail: "Jaipur · Jodhpur · Udaipur · car", operator: "B&B", price: "₹36,700" },
  { route: "Ladakh circuit · 6 nights", detail: "DEL → IXL · Nubra · Pangong", operator: "Half board", price: "₹42,600" },
];

function PackagesPage() {
  return (
    <ProductPage mode="packages" kicker="Packages / flight + stay" title="One price, whole trip.">
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / bundles" title="Ready-made trips" />
        <FareTable rows={bundles} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <SectionHead kicker="(b) / inspiration" title="Where India packages go" />
        <DestinationGrid count={6} />
      </section>
    </ProductPage>
  );
}
