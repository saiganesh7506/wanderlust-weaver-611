import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const footerLinks = [
  { to: "/flights", label: "Flights" },
  { to: "/hotels", label: "Hotels" },
  { to: "/trains", label: "Trains" },
  { to: "/packages", label: "Packages" },
  { to: "/deals", label: "Deals" },
  { to: "/support", label: "Support" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line mt-4">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-start justify-between gap-6">
        <Logo />
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-inkmuted">
          {footerLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="font-mono text-[11px] text-inkmuted">© 2026 TravelX · LHR hub</p>
      </div>
    </footer>
  );
}
