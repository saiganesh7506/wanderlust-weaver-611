import type { ReactNode } from "react";
import { SearchWidget, type SearchMode } from "./SearchWidget";

export function ProductPage({
  mode,
  kicker,
  title,
  children,
}: {
  mode: SearchMode;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-10">
        <div className="max-w-2xl mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink mb-3">
            {kicker}
          </p>
          <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.03] text-balance">
            {title}
          </h1>
        </div>
        <SearchWidget mode={mode} />
      </section>
      {children}
    </main>
  );
}

export function FareTable({
  rows,
}: {
  rows: { route: string; detail: string; operator: string; price: string }[];
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md ring-1 ring-line divide-y divide-line">
      {rows.map((r) => (
        <div key={r.route + r.detail} className="px-5 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-display font-semibold tracking-tight text-lg truncate">{r.route}</p>
            <p className="font-mono text-[11px] text-inkmuted">{r.detail}</p>
          </div>
          <p className="hidden sm:block font-mono text-[11px] text-inkmuted">{r.operator}</p>
          <div className="text-right shrink-0">
            <p className="font-display font-bold text-xl">{r.price}</p>
            <p className="text-xs font-medium text-accent-ink">Select →</p>
          </div>
        </div>
      ))}
    </div>
  );
}
