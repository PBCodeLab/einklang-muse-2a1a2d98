const COMPANIES = [
  "UBS",
  "PwC",
  "Pilatus",
  "Swissmem",
  "Komax",
  "ABB",
  "Accelleron",
  "Hitachi",
];

function LogoRow() {
  return (
    <ul className="flex items-center gap-10 pr-10 shrink-0" aria-hidden="false">
      {COMPANIES.map((name) => (
        <li
          key={name}
          className="text-on-surface-variant/70 hover:text-primary transition-colors text-base md:text-lg tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <section className="bg-surface-container-lowest border-y border-outline-variant py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-2">
        <div className="txt-label-nav text-on-surface-variant text-center text-[10px]">
          Trusted by teams at
        </div>
      </div>
      <div className="marquee-mask marquee-track overflow-hidden">
        <div className="animate-marquee flex w-max">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}