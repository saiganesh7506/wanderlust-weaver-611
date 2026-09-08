import { createFileRoute } from "@tanstack/react-router";
import heroCoast from "@/assets/hero-coast.jpg";
import { SearchWidget } from "@/components/travelx/SearchWidget";
import {
  CategoryRail,
  DestinationGrid,
  OfferStubs,
  SectionHead,
  TrustBand,
  ViewAllLink,
} from "@/components/travelx/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TravelX — Book flights, hotels, trains and packages" },
      {
        name: "description",
        content:
          "Where are you boarding next? Compare flights, hotels, rail and holiday packages on TravelX with clear fares and zero booking fees.",
      },
      { property: "og:title", content: "TravelX — Book flights, hotels, trains and packages" },
      {
        property: "og:description",
        content: "One search for flights, stays, rail and packages. Clear fares, no booking fees.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* HERO / SEARCH BAND */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroCoast}
            alt="Misty coastline at dawn"
            width={1920}
            height={1080}
            className="w-full h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-paper/50 to-paper" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-12 pb-24">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-3">
              Round-trip · Economy · Bookable now
            </p>
            <h1 className="font-display font-bold tracking-tight text-5xl sm:text-6xl leading-[1.02] text-balance">
              Where are you boarding next?
            </h1>
          </div>
          <SearchWidget mode="flights" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 -mt-6">
        <CategoryRail />
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <SectionHead
          kicker="(a) / inspiration"
          title="Trending this week"
          action={<ViewAllLink to="/flights" label="View all routes →" />}
        />
        <DestinationGrid />
      </section>

      {/* OFFERS */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <SectionHead
          kicker="(b) / limited fares"
          title="Offers on the wire"
          action={<ViewAllLink to="/deals" label="All deals →" />}
        />
        <OfferStubs />
      </section>

      {/* TRUST BAND */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <TrustBand />
      </section>
    </main>
  );
}
