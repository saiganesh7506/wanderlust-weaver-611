export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid place-items-center size-8 bg-ink rounded-[7px]" aria-hidden="true">
        <svg viewBox="0 0 20 20" className="size-3.5">
          <path d="M10 2.5 17.5 10 10 17.5 2.5 10Z" fill="hsl(12 82% 58%)" />
          <path d="M10 6.5 13.5 10 10 13.5 6.5 10Z" fill="hsl(210 18% 13%)" />
        </svg>
      </span>
      <span className="font-display font-bold tracking-tight text-lg leading-none text-ink">
        Travel<span className="text-accent-brand">X</span>
      </span>
    </span>
  );
}
