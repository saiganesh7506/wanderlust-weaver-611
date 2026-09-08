import { createFileRoute } from "@tanstack/react-router";
import { SectionHead } from "@/components/travelx/sections";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support and fare rules — TravelX" },
      {
        name: "description",
        content:
          "TravelX support: changes and cancellations, refunds, baggage rules and how to reach a human 24 hours a day.",
      },
      { property: "og:title", content: "Support and fare rules — TravelX" },
      {
        property: "og:description",
        content: "Changes, refunds, baggage rules and 24/7 human support.",
      },
    ],
  }),
  component: SupportPage,
});

const faqs = [
  {
    q: "Can I change a booked flight?",
    a: "Most economy fares on domestic Indian routes can be moved to another date for the fare difference plus the airline's change charge. Flexible fares change free up to 2 hours before departure.",
  },
  {
    q: "How fast are refunds?",
    a: "Refundable tickets are returned to the original card within 5 working days of approval. Indian Railways refunds usually clear the next working day.",
  },
  {
    q: "What baggage is included?",
    a: "Every fare shown includes one cabin bag. Checked bags are priced during checkout so the total you see is the total you pay.",
  },
  {
    q: "Is there a booking fee?",
    a: "No. TravelX charges nothing on top of the fare or nightly rate — the rupee price on the card is the price at checkout.",
  },
];

function SupportPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-3">
          Support / 24 hours
        </p>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.03] text-balance max-w-2xl">
          Talk to a person, quickly.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4">
        <SectionHead kicker="(a) / answers" title="Common questions" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-line p-5">
              <h2 className="font-display font-semibold tracking-tight text-lg">{f.q}</h2>
              <p className="text-sm text-inkmuted mt-2 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="rounded-2xl bg-ink text-paper px-6 py-8 sm:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-2xl">Still stuck?</p>
            <p className="text-sm text-paper/60 mt-1">
              Our team answers in under 4 minutes, day or night.
            </p>
          </div>
          <a
            href="mailto:help@travelx.example"
            className="self-start bg-accent-brand text-white font-display font-semibold text-sm rounded-xl px-5 py-3 hover:bg-accent-ink transition-colors"
          >
            Message support
          </a>
        </div>
      </section>
    </main>
  );
}
