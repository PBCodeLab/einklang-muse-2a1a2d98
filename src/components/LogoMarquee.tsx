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
  { name: "PwC", src: pwc, h: "h-10 md:h-11" },
  { name: "Pilatus", src: pilatus, h: "h-[13px] md:h-[15px]" },
  { name: "Swissmem", src: swissmem, h: "h-10 md:h-11" },
  { name: "Komax", src: komax, h: "h-4 md:h-5", center: true },
  { name: "ABB", src: abb, h: "h-10 md:h-12" },
  { name: "Accelleron", src: accelleron, h: "h-6 md:h-7" },
  { name: "Hitachi", src: hitachi, h: "h-16 md:h-20" },
];

function LogoRow() {
  return (
    <ul className="flex items-center gap-10 md:gap-12 pr-10 md:pr-12 shrink-0">
      {LOGOS.map((l) => (
        <li key={l.name} className="h-20 flex items-center">
          <img
            src={l.src}
            alt={l.name}
            className={`${l.h} w-auto object-contain grayscale opacity-70`}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <div className="bg-surface border border-outline-variant flex flex-col md:flex-row">
      <div className="md:w-56 shrink-0 px-6 py-4 md:py-0 flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-outline-variant">
        <div className="txt-label-nav text-on-surface-variant text-[10px] tracking-wider leading-snug text-center md:text-left">
          EINKLANG SOLUTIONS<br className="hidden md:inline" /> TRUSTED BY MEMBERS OF
        </div>
      </div>
      <div className="marquee-mask marquee-track overflow-hidden flex-1">
        <div className="animate-marquee flex w-max">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </div>
  );
}
