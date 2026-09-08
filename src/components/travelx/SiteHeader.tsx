import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Book" },
  { to: "/planner", label: "AI Trip Planner" },
  { to: "/deals", label: "Deals" },
  { to: "/trips", label: "Trips" },
  { to: "/support", label: "Support" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 backdrop-blur-xl bg-paper/70">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" aria-label="TravelX home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-inkmuted">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-ink font-medium" }}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/support"
            className="hidden sm:block text-sm text-inkmuted hover:text-ink transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/trips"
            className="text-sm font-medium bg-ink text-paper px-4 py-2 rounded-full hover:bg-ink/85 transition-colors"
          >
            Manage trips
          </Link>
        </div>
      </div>
    </header>
  );
}
