import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products/academy")({
  head: () => ({
    meta: [
      { title: "Skill Build Academy — AI-Native OE certification" },
      { name: "description", content: "Practitioner and Orchestrator certifications combining proven OE methodology with AI-native tools, supported by the Einklang Agent." },
      { property: "og:title", content: "Skill Build Academy — AI-Native OE certification" },
      { property: "og:description", content: "Two certification pathways for DACH and LatAm. 160+ leaders certified. 5:1 ROI demonstrated." },
    ],
  }),
  component: AcademyPage,
});

const MAX = "max-w-7xl mx-auto px-6 lg:px-10";
const CALENDLY = "https://calendly.com/aslamjilani-einklangacademy/30min";
const SWISSMEM_GREEN = "https://www.swissmem-academy.ch/de/kurse/lean-six-sigma-green-belt-zertifizierung.html";
const SWISSMEM_BLACK = "https://www.swissmem-academy.ch/de/kurse/lean-six-sigma-black-belt-zertifizierung.html";

const DELIVERABLES = [
  { t: "Certification", b: "AI-Native Green Belt or Black Belt — recognised across DACH and LatAm." },
  { t: "Equipped team", b: "An internal team ready to lead improvement independently in the AI-native era." },
  { t: "Transformation roadmap", b: "Clear strategic steps and prioritised initiatives for AI transformation." },
  { t: "AI-native process redesign", b: "Core processes redesigned for the AI-native environment, ready for implementation." },
  { t: "Measurable KPI framework", b: "Quantifiable KPIs to track efficiency gains and cost reductions." },
  { t: "Guaranteed 5:1 ROI", b: "Demonstrable return on investment, validated by specific KPIs and real improvements." },
];

function AcademyPage() {
  return (
    <>
      <section className={`${MAX} pt-20 pb-16`}>
        <div className="txt-label-nav text-primary mb-5">Skill Build Academy</div>
        <h1 className="txt-primary-headline text-primary mb-8 max-w-4xl">
          Build real OE capability —<br />
          <span className="text-on-surface-variant font-normal">certified, practical, AI-native.</span>
        </h1>
        <p className="txt-body max-w-3xl mb-10">
          Two certification pathways designed for DACH and LatAm. Practitioner and Orchestrator programmes combine structured methodology with AI-native tools — supported by the Einklang Agent throughout.
        </p>
      </section>

      <section className="bg-surface-container-lowest py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">Certification programmes</div>
            <h2 className="txt-primary-headline text-primary mb-4">Two pathways — one methodology.</h2>
            <p className="txt-body">Both follow the same 6-sprint AI-Native OE journey. Practitioner joins from Sprint 3. Orchestrator covers the full programme at senior leadership depth.</p>
          </div>

          <div className="bg-surface border border-outline-variant p-6 mb-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex-1">
              <div className="txt-label-nav text-primary mb-1">Always-on coach</div>
              <p className="text-sm text-on-surface-variant">Both programmes include the Einklang Agent — your 24/7 OE coach inside Microsoft Teams, supporting statistical analysis, root cause reflection, and structured improvement work.</p>
            </div>
            <Link to="/products/agent" className="inline-flex items-center justify-center rounded border border-outline-variant px-4 py-2 text-sm font-bold text-primary hover:bg-surface-container-low transition whitespace-nowrap">About the Agent →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface border border-outline-variant p-10">
              <div className="txt-label-nav text-primary mb-3">Practitioner</div>
              <h3 className="txt-section-title text-primary mb-3">AI-Native Green Belt</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">A focused certification for practitioners applying DMAIC methodology on the job. Starts at Sprint 3 — straight into value stream analysis and improvement work.</p>
              <div className="text-xs text-on-surface-variant mb-6">DE · EN available now · PT, ES coming</div>
              <a href={SWISSMEM_GREEN} target="_blank" rel="noopener noreferrer" className="btn-primary">Enrol now</a>
            </div>
            <div className="bg-surface border border-outline-variant p-10">
              <div className="txt-label-nav text-primary mb-3">Orchestrator</div>
              <h3 className="txt-section-title text-primary mb-3">AI-Native Black Belt</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">For senior leaders running OE programmes at scale. Covers all 6 sprints — from AI-Native foundations through to value stream design, change orchestration, and benefit realisation.</p>
              <div className="text-xs text-on-surface-variant mb-6">EN · DE available now · PT, ES coming</div>
              <a href={SWISSMEM_BLACK} target="_blank" rel="noopener noreferrer" className="btn-primary">Enrol now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-outline-variant">
        <div className={MAX}>
          <div className="bg-surface border border-outline-variant p-10">
            <div className="txt-label-nav text-primary mb-3">Swissmem partnership</div>
            <h3 className="txt-section-title text-primary mb-3">Swissmem member? You get preferential access.</h3>
            <p className="text-sm text-on-surface-variant mb-6">Discounted Practitioner and Orchestrator courses for all Swissmem members.</p>
            <div className="flex flex-wrap gap-4">
              <a href={SWISSMEM_GREEN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded border border-outline-variant px-4 py-2 text-sm font-bold text-primary hover:bg-surface-container-low transition">Practitioner — Green Belt</a>
              <a href={SWISSMEM_BLACK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded border border-outline-variant px-4 py-2 text-sm font-bold text-primary hover:bg-surface-container-low transition">Orchestrator — Black Belt</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">What you receive</div>
            <h2 className="txt-primary-headline text-primary mb-4">Programme deliverables.</h2>
            <p className="txt-body">Six concrete outcomes for participants and their organisations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
            {DELIVERABLES.map((d) => (
              <div key={d.t} className="bg-surface p-7">
                <h3 className="txt-section-title text-primary text-lg mb-2">{d.t}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{d.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-24 border-t border-outline-variant text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="txt-primary-headline text-primary mb-6 text-3xl md:text-4xl">
            Ready to build AI-Native OE capability in your organisation?
          </h2>
          <p className="txt-body mb-10">Start with a discovery call — or register your interest in the next cohort.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a discovery call</a>
        </div>
      </section>
    </>
  );
}