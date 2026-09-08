import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { categories, destinations, offers, trustStats } from "@/data/travel";

export function SectionHead({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-1">
          {kicker}
        </p>
        <h2 className="font-display font-bold tracking-tight text-3xl text-balance">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function CategoryRail() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((c) => (
        <div
          key={c.label}
          className="shrink-0 rounded-xl bg-white/70 backdrop-blur-md ring-1 ring-white/60 px-4 py-3 flex items-center gap-3"
        >
          <span className="grid place-items-center size-8 rounded-lg bg-ink/5 text-ink" aria-hidden="true">
            {c.icon}
          </span>
          <div>
            <p className="text-sm font-medium leading-tight">{c.label}</p>
            <p className="font-mono text-[11px] text-inkmuted">{c.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DestinationGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {destinations.slice(0, count).map((d) => (
        <article
          key={d.city}
          className="rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md ring-1 ring-line hover:-translate-y-1 transition-transform duration-300"
        >
          <img
            src={d.image}
            alt={d.city}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-4 flex items-end justify-between gap-3">
            <div>
              <p className="font-display font-semibold text-lg tracking-tight">{d.city}</p>
              <p className="font-mono text-[11px] text-inkmuted">
                {d.route} · {d.duration}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase text-inkmuted">from</p>
              <p className="font-display font-bold text-xl">{d.price}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function OfferStubs({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {offers.slice(0, count).map((o) => (
        <div key={o.code} className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md ring-1 ring-line">
          <div className="px-4 pt-4 pb-4 flex items-center justify-between">
            <div>
              <p className="font-display font-semibold tracking-tight text-lg">{o.route}</p>
              <p className="font-mono text-[11px] text-inkmuted">{o.meta}</p>
            </div>
            <p className="font-display font-bold text-xl text-accent-ink">{o.price}</p>
          </div>
          <div className="relative border-t-2 border-dashed border-line">
            <span className="absolute -left-2 -top-2 size-4 rounded-full bg-paper" />
            <span className="absolute -right-2 -top-2 size-4 rounded-full bg-paper" />
          </div>
          <div className="px-4 py-3 flex items-center justify-between">
            <p className="font-mono text-[11px] text-inkmuted">
              Code <span className="text-ink font-medium">{o.code}</span>
            </p>
            <span className="text-xs font-medium text-accent-ink">{o.action}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrustBand() {
  return (
    <div className="rounded-2xl bg-ink text-paper px-6 py-8 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
      {trustStats.map((s) => (
        <div key={s.label}>
          <p className="font-display font-bold text-2xl">{s.value}</p>
          <p className="text-sm text-paper/60 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ViewAllLink({ to, label }: { to: "/flights" | "/deals" | "/trips"; label: string }) {
  return (
    <Link
      to={to}
      className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-ink transition-colors"
    >
      {label}
    </Link>
  );
}
