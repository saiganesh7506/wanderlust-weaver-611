import { Link } from "@tanstack/react-router";

export type SearchMode = "flights" | "hotels" | "trains" | "packages";

const tabs = [
  { to: "/flights", mode: "flights", label: "Flights" },
  { to: "/hotels", mode: "hotels", label: "Hotels" },
  { to: "/trains", mode: "trains", label: "Trains" },
  { to: "/packages", mode: "packages", label: "Packages" },
] as const;

type Field = { label: string; value: string; mono?: string; span: string };

const fieldsFor: Record<SearchMode, { fields: Field[]; footnote: React.ReactNode }> = {
  flights: {
    fields: [
      { label: "From", value: "London · ", mono: "LHR", span: "md:col-span-3" },
      { label: "To", value: "Tokyo · ", mono: "HND", span: "md:col-span-3" },
      { label: "Depart", value: "14 Mar", span: "md:col-span-2" },
      { label: "Return", value: "28 Mar", span: "md:col-span-2" },
      { label: "Cab", value: "Eco", span: "md:col-span-1" },
    ],
    footnote: (
      <>
        2 adults · Economy · 1 checked bag · from{" "}
        <span className="text-accent-ink font-medium">£1,284</span>
      </>
    ),
  },
  hotels: {
    fields: [
      { label: "City", value: "Lisbon · ", mono: "LIS", span: "md:col-span-3" },
      { label: "Property", value: "Any · ", mono: "4★+", span: "md:col-span-3" },
      { label: "Check in", value: "14 Mar", span: "md:col-span-2" },
      { label: "Check out", value: "18 Mar", span: "md:col-span-2" },
      { label: "Room", value: "1", span: "md:col-span-1" },
    ],
    footnote: (
      <>
        2 guests · 1 room · breakfast optional · from{" "}
        <span className="text-accent-ink font-medium">£96/nt</span>
      </>
    ),
  },
  trains: {
    fields: [
      { label: "From", value: "London · ", mono: "STP", span: "md:col-span-3" },
      { label: "To", value: "Paris · ", mono: "PNO", span: "md:col-span-3" },
      { label: "Outbound", value: "14 Mar", span: "md:col-span-2" },
      { label: "Return", value: "16 Mar", span: "md:col-span-2" },
      { label: "Class", value: "Std", span: "md:col-span-1" },
    ],
    footnote: (
      <>
        1 adult · Standard · seat reservation incl · from{" "}
        <span className="text-accent-ink font-medium">£58</span>
      </>
    ),
  },
  packages: {
    fields: [
      { label: "From", value: "London · ", mono: "LHR", span: "md:col-span-3" },
      { label: "Going to", value: "Bali · ", mono: "DPS", span: "md:col-span-3" },
      { label: "Start", value: "02 Apr", span: "md:col-span-2" },
      { label: "Nights", value: "9", span: "md:col-span-2" },
      { label: "Board", value: "B&B", span: "md:col-span-1" },
    ],
    footnote: (
      <>
        2 adults · flights + villa + transfers · from{" "}
        <span className="text-accent-ink font-medium">£1,118</span>
      </>
    ),
  },
};

export function SearchWidget({ mode = "flights" }: { mode?: SearchMode }) {
  const { fields, footnote } = fieldsFor[mode];

  return (
    <div className="relative rounded-2xl bg-frost-deep backdrop-blur-2xl ring-1 ring-white/50">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/70 to-transparent pointer-events-none" />
      <div className="relative p-3 sm:p-4">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <Link
              key={t.mode}
              to={t.to}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
                t.mode === mode ? "text-ink" : "text-inkmuted hover:text-ink"
              }`}
            >
              {t.label}
              <span
                className={`block h-0.5 mt-1.5 rounded-full transition-colors ${
                  t.mode === mode ? "bg-accent-brand" : "bg-transparent"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3">
          {fields.map((f) => (
            <div
              key={f.label}
              className={`${f.span} flex items-center bg-white/70 backdrop-blur-md rounded-xl px-4 py-3 ring-1 ring-white/60`}
            >
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-inkmuted">
                  {f.label}
                </p>
                <p className="font-display font-semibold text-lg leading-none tracking-tight truncate">
                  {f.value}
                  {f.mono ? <span className="font-mono text-sm">{f.mono}</span> : null}
                </p>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="md:col-span-1 flex items-center justify-center bg-accent-brand text-white font-display font-semibold text-sm rounded-xl px-4 py-3 hover:bg-accent-ink transition-colors"
          >
            Search
          </button>
        </div>
        <p className="mt-3 px-1 font-mono text-[11px] text-inkmuted">{footnote}</p>
      </div>
    </div>
  );
}
