import { createFileRoute, Link } from "@tanstack/react-router";
import heroIndia from "@/assets/hero-india.jpg";
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
      { title: "TravelX — Book flights, hotels, trains and India trips" },
      {
        name: "description",
        content:
          "Search domestic flights, hotels, trains and holiday packages across India on TravelX, and build a day-by-day India itinerary with the AI Trip Planner.",
      },
      {
        property: "og:title",
        content: "TravelX — Book flights, hotels, trains and India trips",
      },
      {
        property: "og:description",
        content:
          "One search for flights, stays, rail and packages across India. Plus an AI Trip Planner for day-by-day itineraries.",
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
            src={heroIndia}
            alt="Misty Kerala backwaters at dawn with a houseboat and palms"
            width={1920}
            height={1080}
            className="w-full h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-paper/50 to-paper" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-12 pb-24">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-3">
              India only · Round-trip · Economy · Bookable now
            </p>
            <h1 className="font-display font-bold tracking-tight text-5xl sm:text-6xl leading-[1.02] text-balance">
              Where in India are you boarding next?
            </h1>
          </div>
          <SearchWidget mode="flights" />
        </div>
      </section>

      {/* AI TRIP PLANNER */}
      <section className="mx-auto max-w-7xl px-6 -mt-14 relative">
        <div className="rounded-2xl bg-ink text-paper px-6 py-8 sm:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 mb-2">
              New / AI Trip Planner
            </p>
            <h2 className="font-display font-bold tracking-tight text-3xl text-balance">
              Tell us your cities, dates and budget. Get a full India itinerary.
            </h2>
            <p className="text-sm text-paper/70 mt-3 leading-relaxed">
              Day-by-day activities, stays, local travel and rupee costs — planned only inside India.
            </p>
          </div>
          <Link
            to="/planner"
            className="self-start shrink-0 bg-accent-brand text-white font-display font-semibold rounded-xl px-6 py-3.5 hover:bg-accent-ink transition-colors"
          >
            Plan my trip →
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <CategoryRail />
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <SectionHead
          kicker="(a) / inspiration"
          title="Trending across India"
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
