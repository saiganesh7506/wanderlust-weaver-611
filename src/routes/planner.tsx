import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { indianCities, interestOptions } from "@/data/travel";
import { planIndiaTrip, type Itinerary } from "@/lib/planner.functions";
import { SectionHead } from "@/components/travelx/sections";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Trip Planner for India — TravelX" },
      {
        name: "description",
        content:
          "Tell TravelX your Indian cities, dates, budget and interests and get a day-by-day India itinerary with stays, local travel and costs in rupees.",
      },
      { property: "og:title", content: "AI Trip Planner for India — TravelX" },
      {
        property: "og:description",
        content: "Day-by-day India itineraries with stays, local travel and rupee costs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlannerPage,
});

const inputClass =
  "w-full bg-white/70 backdrop-blur-md rounded-xl px-4 py-3 ring-1 ring-line font-display font-semibold text-lg tracking-tight outline-none focus:ring-2 focus:ring-accent-brand placeholder:text-inkmuted placeholder:font-normal placeholder:text-base";
const labelClass = "font-mono text-[10px] uppercase tracking-wider text-inkmuted mb-1.5 block";

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

function PlannerPage() {
  const plan = useServerFn(planIndiaTrip);
  const [destinations, setDestinations] = useState("Jaipur, Udaipur");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("60000");
  const [travellers, setTravellers] = useState("2");
  const [pace, setPace] = useState("Balanced");
  const [interests, setInterests] = useState<string[]>(["Heritage & forts", "Street food"]);

  const mutation = useMutation<Itinerary, Error>({
    mutationFn: () =>
      plan({
        data: {
          destinations,
          startDate,
          endDate,
          budgetInr: Number(budget) || 0,
          travellers: Number(travellers) || 1,
          interests,
          pace,
        },
      }) as Promise<Itinerary>,
  });

  const toggleInterest = (i: string) =>
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const itinerary = mutation.data;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-3">
          AI Trip Planner / India only
        </p>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.03] text-balance max-w-3xl">
          Your India trip, planned day by day.
        </h1>
        <p className="text-inkmuted mt-4 max-w-2xl leading-relaxed">
          Pick your Indian cities, dates, budget and what you love. TravelX builds an itinerary with
          activities, stays, local travel and rupee costs for every day.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
          className="rounded-2xl bg-frost-deep backdrop-blur-2xl ring-1 ring-white/50 p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6">
              <label className={labelClass} htmlFor="destinations">
                Indian destination(s)
              </label>
              <input
                id="destinations"
                list="india-cities"
                className={inputClass}
                value={destinations}
                onChange={(e) => setDestinations(e.target.value)}
                placeholder="Jaipur, Udaipur"
                required
              />
              <datalist id="india-cities">
                {indianCities.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div className="md:col-span-3">
              <label className={labelClass} htmlFor="start">
                Start date
              </label>
              <input
                id="start"
                type="date"
                className={inputClass}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-3">
              <label className={labelClass} htmlFor="end">
                End date
              </label>
              <input
                id="end"
                type="date"
                className={inputClass}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-4">
              <label className={labelClass} htmlFor="budget">
                Total budget (₹)
              </label>
              <input
                id="budget"
                type="number"
                min={1000}
                step={1000}
                className={inputClass}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-4">
              <label className={labelClass} htmlFor="travellers">
                Travellers
              </label>
              <input
                id="travellers"
                type="number"
                min={1}
                max={20}
                className={inputClass}
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-4">
              <label className={labelClass} htmlFor="pace">
                Pace
              </label>
              <select
                id="pace"
                className={inputClass}
                value={pace}
                onChange={(e) => setPace(e.target.value)}
              >
                <option>Relaxed</option>
                <option>Balanced</option>
                <option>Packed</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <span className={labelClass}>Interests</span>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((i) => {
                const on = interests.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleInterest(i)}
                    className={`rounded-full px-3.5 py-1.5 text-sm ring-1 transition-colors ${
                      on
                        ? "bg-ink text-paper ring-ink"
                        : "bg-white/70 text-inkmuted ring-line hover:text-ink"
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-accent-brand text-white font-display font-semibold rounded-xl px-6 py-3.5 hover:bg-accent-ink transition-colors disabled:opacity-60"
            >
              {mutation.isPending ? "Planning your India trip…" : "Build my itinerary"}
            </button>
            <p className="font-mono text-[11px] text-inkmuted">
              India-only planning · usually takes 20–40 seconds
            </p>
          </div>

          {mutation.isError ? (
            <p className="mt-4 rounded-xl bg-accent-brand/10 ring-1 ring-accent-brand/30 px-4 py-3 text-sm text-accent-ink">
              {mutation.error.message}
            </p>
          ) : null}
        </form>
      </section>

      {mutation.isPending ? (
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-12">
          <div className="grid gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-28 rounded-2xl bg-white/60 ring-1 ring-line animate-pulse"
              />
            ))}
          </div>
        </section>
      ) : null}

      {itinerary ? (
        <>
          <section className="mx-auto max-w-7xl px-6 pt-12">
            <SectionHead kicker="(a) / your plan" title={itinerary.trip_title} />
            <div className="rounded-2xl bg-ink text-paper px-6 py-8 sm:px-10 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <p className="leading-relaxed">{itinerary.summary}</p>
                <p className="text-sm text-paper/60 mt-3">{itinerary.best_time_note}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
                  Estimated total
                </p>
                <p className="font-display font-bold text-3xl mt-1">
                  {inr(itinerary.total_estimated_inr)}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {itinerary.budget_breakdown.map((b) => (
                    <li key={b.label} className="flex justify-between text-sm text-paper/75">
                      <span>{b.label}</span>
                      <span className="font-mono">{inr(b.amount_inr)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pt-16">
            <SectionHead kicker="(b) / day by day" title="Your daily itinerary" />
            <div className="grid gap-4">
              {itinerary.days.map((d) => (
                <article
                  key={`${d.day}-${d.date}`}
                  className="rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-line p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-accent-ink">
                        Day {d.day} · {d.date} · {d.city}
                      </p>
                      <h3 className="font-display font-semibold tracking-tight text-xl mt-1">
                        {d.title}
                      </h3>
                    </div>
                    <p className="font-display font-bold text-lg">{inr(d.day_cost_inr)}</p>
                  </div>
                  <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      ["Morning", d.morning],
                      ["Afternoon", d.afternoon],
                      ["Evening", d.evening],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-inkmuted">
                          {k}
                        </dt>
                        <dd className="text-sm mt-1 leading-relaxed">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <dl className="mt-4 grid gap-3 sm:grid-cols-3 border-t border-line pt-4">
                    {[
                      ["Stay", d.stay],
                      ["Local travel", d.local_travel],
                      ["Eat", d.food_pick],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-inkmuted">
                          {k}
                        </dt>
                        <dd className="text-sm mt-1 leading-relaxed text-inkmuted">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
            <SectionHead kicker="(c) / good to know" title="Tips for this trip" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {itinerary.tips.map((t) => (
                <li
                  key={t}
                  className="rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-line p-4 text-sm leading-relaxed"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}
    </main>
  );
}
