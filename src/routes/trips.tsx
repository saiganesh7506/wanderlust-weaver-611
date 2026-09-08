import { createFileRoute } from "@tanstack/react-router";
import { FareTable } from "@/components/travelx/ProductPage";
import { SectionHead, TrustBand } from "@/components/travelx/sections";

export const Route = createFileRoute("/trips")({
  head: () => ({
    meta: [
      { title: "Manage your trips — TravelX" },
      {
        name: "description",
        content:
          "See upcoming bookings, boarding details and change options for every TravelX flight, stay, rail ticket and package.",
      },
      { property: "og:title", content: "Manage your trips — TravelX" },
      {
        property: "og:description",
        content: "Upcoming bookings, boarding details and change options in one place.",
      },
    ],
  }),
  component: TripsPage,
});

const upcoming = [
  { route: "DEL → JAI", detail: "14 Mar · 09:40 · gate 2B", operator: "Ref TX-4K19QD", price: "₹2,480" },
  { route: "Backwater House, Kochi", detail: "22 Mar · check-in 15:00", operator: "Ref TX-7P02LM", price: "₹7,400" },
  { route: "NDLS → AGC", detail: "05 Apr · 07:01 · coach C4", operator: "Ref TX-1R88AZ", price: "₹560" },
];

function TripsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-3">
          Trips / 3 upcoming
        </p>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.03] text-balance max-w-2xl">
          Everything you've booked.
        </h1>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / upcoming" title="Next departures" />
        <FareTable rows={upcoming} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <TrustBand />
      </section>
    </main>
  );
}
