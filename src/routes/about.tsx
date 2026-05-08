import { createFileRoute } from "@tanstack/react-router";
import aslam from "../assets/team/aslam-sketch.jpeg";
import andre from "../assets/team/andre-sketch.jpeg";
import diego from "../assets/team/diego-sketch.jpeg";
import philipp from "../assets/team/philipp-sketch.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who we are — Einklang Academy" },
      { name: "description", content: "Built by practitioners, for practitioners. The team and thinking behind Einklang Academy — making world-class operational excellence accessible to every organisation." },
      { property: "og:title", content: "Who we are — Einklang Academy" },
      { property: "og:description", content: "Built by practitioners, for practitioners. The team behind Einklang Academy." },
    ],
  }),
  component: AboutPage,
});

const founders = [
  {
    img: aslam,
    name: "Aslam Jilani",
    role: "CEO & Founder",
    location: "Zurich, Switzerland",
    bio: "30 years driving continuous improvement at GE, IBM, and Shell. Expert in complex stakeholder management across Energy, Finance, and Technology sectors. Founded Einklang to make world-class OE accessible at scale.",
  },
  {
    img: andre,
    name: "Andre Andreazzi",
    role: "LatAm Lead & Co-Founder",
    location: "São Paulo, Brazil",
    bio: "28 years leading transformation at McKinsey, IBM, and HP. MBA in AI & Big Data from USP. Leads Einklang's Brazil and LatAm expansion.",
  },
  {
    img: diego,
    name: "Diego Castillo",
    role: "CTO & Co-Founder",
    location: "Utrecht, Netherlands",
    bio: "Ex-McKinsey Senior Digital Manager with 20 years scaling technology platforms. Led AI and Cloud solutions reaching 20M+ users. Leads the architecture behind the Einklang Agent platform.",
  },
  {
    img: philipp,
    name: "Philipp Bubenzer",
    role: "Co-Founder & Academic Lead",
    location: "HEG-FR / ETH Zurich",
    bio: "25+ years in Deep Tech. Professor at HEG-FR and researcher at ETH Zurich. Specialist in innovation management and scaling — brings the academic rigour that underpins Einklang's methodology and certification framework.",
  },
];

const partners = [
  {
    name: "Swissmem",
    role: "Strategic partner — Swiss industry",
    desc: "Switzerland's leading industrial association with 1,300 member companies. 160+ leaders certified through Einklang, with CHF 3.8m in measured impact across the membership.",
  },
  {
    name: "Brilliant Working Ltd",
    role: "Reference implementation partner",
    desc: "The organisation behind the Brilliant Working methodology. Einklang built Sara — a fully custom AI agent trained on their proprietary framework — as the reference Customer Agent implementation.",
  },
  {
    name: "kyro",
    role: "VSM technology partner",
    desc: "Digital value stream mapping tool embedded within the Einklang Skill Build VSM module. kyro enables practitioners to build and share live process maps as part of their improvement work.",
  },
];

const regions = [
  { flag: "🇨🇭", name: "Switzerland — DACH anchor", desc: "Headquarters in Zurich. Swissmem partnership. Swiss industrial sector focus." },
  { flag: "🇧🇷", name: "Brazil — LatAm growth market", desc: "Andre Andreazzi leads from São Paulo. Active pipeline from Swiss Consulate São Paulo and LATC Mannheim 2026." },
  { flag: "🇬🇧", name: "EU / UK — adjacent market", desc: "Brilliant Working Ltd reference case. Growing pipeline across European enterprise clients." },
];

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
      {/* Hero */}
      <section className="max-w-3xl mb-20">
        <div className="t-eyebrow text-primary mb-4">About Einklang</div>
        <h1 className="t-display mb-6">
          Built by practitioners, for practitioners — with a clear purpose.
        </h1>
        <p className="t-body">
          We started Einklang because we saw the same problem everywhere: world-class operational excellence methodology locked inside expensive consulting engagements, inaccessible to the organisations that need it most.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-20">
        <div className="t-eyebrow text-primary mb-3">Why we exist</div>
        <h2 className="t-h2 mb-8">Our vision & mission</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-outline-variant rounded p-8 bg-surface-container-lowest">
            <div className="t-eyebrow text-primary mb-3">Vision</div>
            <h3 className="t-h3 mb-3">OE for everyone</h3>
            <p className="t-body">A world where every organisation — from a São Paulo SME to a Swiss industrial group — can access and apply world-class operational excellence methodology.</p>
          </div>
          <div className="border border-outline-variant rounded p-8 bg-surface-container-lowest">
            <div className="t-eyebrow text-primary mb-3">Mission</div>
            <h3 className="t-h3 mb-3">Embed AI into how work improves</h3>
            <p className="t-body">We build AI-native tools and certified learning programmes that put OE capability directly in the hands of practitioners, not just consultants.</p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="mb-20">
        <div className="t-eyebrow text-primary mb-3">The team</div>
        <h2 className="t-h2 mb-8">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((f) => (
            <div key={f.name} className="flex flex-col">
              <img src={f.img} alt={f.name} className="w-28 h-28 rounded-full object-cover mb-4" />
              <div className="t-h3">{f.name}</div>
              <div className="t-small mb-1">{f.role}</div>
              <div className="t-eyebrow text-on-surface-variant mb-3">{f.location}</div>
              <p className="t-body">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mb-20">
        <div className="t-eyebrow text-primary mb-3">Ecosystem</div>
        <h2 className="t-h2 mb-4">Partners & advisors</h2>
        <p className="t-body mb-8 max-w-2xl">We work with organisations that share our belief that operational excellence should be accessible to everyone.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="border border-outline-variant rounded p-6 bg-surface-container-lowest">
              <div className="t-h3 mb-1">{p.name}</div>
              <div className="t-eyebrow text-on-surface-variant mb-3">{p.role}</div>
              <p className="t-body">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regions */}
      <section className="mb-20">
        <div className="t-eyebrow text-primary mb-3">Where we operate</div>
        <h2 className="t-h2 mb-4">DACH and LatAm — with global reach</h2>
        <p className="t-body mb-8 max-w-2xl">Headquartered in Zurich, with teams in São Paulo and Utrecht. Serving clients across Switzerland, Germany, Austria, Brazil, and the wider LatAm region.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((r) => (
            <div key={r.name} className="border border-outline-variant rounded p-6 bg-surface-container-lowest">
              <div className="text-3xl mb-3">{r.flag}</div>
              <div className="t-h3 mb-2">{r.name}</div>
              <p className="t-body">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-outline-variant pt-16 text-center">
        <h2 className="t-h2 mb-4">Want to know more about Einklang?</h2>
        <p className="t-body mb-8 max-w-xl mx-auto">Book a 30-minute call with Aslam — no commitment, just a conversation.</p>
        <a
          href="https://calendly.com/aslamjilani-einklangacademy/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="t-eyebrow inline-flex items-center justify-center rounded bg-primary text-on-primary px-6 py-3 hover:opacity-90 transition"
        >
          Book a call
        </a>
      </section>
    </div>
  );
}
