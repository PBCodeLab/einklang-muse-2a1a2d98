import abb from "@/assets/logos/abb.svg";
import accelleron from "@/assets/logos/accelleron.svg";
import hitachi from "@/assets/logos/hitachi.svg";
import komax from "@/assets/logos/komax.svg";
import pilatus from "@/assets/logos/pilatus.svg";
import pwc from "@/assets/logos/pwc.svg";
import swissmem from "@/assets/logos/swissmem.svg";
import ubs from "@/assets/logos/ubs.png";

const LOGOS = [
  { name: "UBS", src: ubs, h: "h-7 md:h-8" },
  { name: "PwC", src: pwc, h: "h-8 md:h-9" },
  { name: "Pilatus", src: pilatus, h: "h-7 md:h-8" },
  { name: "Swissmem", src: swissmem, h: "h-6 md:h-7" },
  { name: "Komax", src: komax, h: "h-5 md:h-6" },
  { name: "ABB", src: abb, h: "h-6 md:h-7" },
  { name: "Accelleron", src: accelleron, h: "h-5 md:h-6" },
  { name: "Hitachi", src: hitachi, h: "h-5 md:h-6" },
];

function LogoRow() {
  return (
    <ul className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 shrink-0">
      {LOGOS.map((l) => (
        <li key={l.name} className="flex items-center">
          <img
            src={l.src}
            alt={l.name}
            className={`${l.h} w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity`}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <div className="bg-surface-container-lowest border-y border-outline-variant py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-3">
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
    </div>
  );
}
