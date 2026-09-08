import { createFileRoute } from "@tanstack/react-router";
import { CategoryRail, OfferStubs, SectionHead } from "@/components/travelx/sections";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Deals and fare codes — TravelX" },
      {
        name: "description",
        content:
          "Live TravelX deals: discounted flights, hotel nights, rail fares and packages with codes you can apply at checkout.",
      },
      { property: "og:title", content: "Deals and fare codes — TravelX" },
      {
        property: "og:description",
        content: "Discounted flights, stays, rail and packages with codes for checkout.",
      },
    ],
  }),
  component: DealsPage,
});

function DealsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-3">
          Deals / updated hourly
        </p>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.03] text-balance max-w-2xl">
          Fares worth tearing off.
        </h1>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <CategoryRail />
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-12">
        <SectionHead kicker="(a) / all live offers" title="Every code, one board" />
        <OfferStubs count={6} />
      </section>
    </main>
  );
}
