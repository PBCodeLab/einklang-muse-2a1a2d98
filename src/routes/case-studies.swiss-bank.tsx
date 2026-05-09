import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/swiss-bank")({
  head: () => ({
    meta: [
      { title: "Swiss global bank — Case study | Einklang Academy" },
      { name: "description", content: "13 Orchestrators · 5:1 ROI · CHF 200k savings. AI-native audit capability embedded across Switzerland and the UK." },
      { property: "og:title", content: "Swiss global bank — Case study" },
      { property: "og:description", content: "Pilot validated 5:1 ROI and led to a full institutional scale-up." },
    ],
  }),
  component: SwissBank,
});

function SwissBank() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      <Link to="/case-studies" className="txt-label-nav text-on-surface-variant hover:text-primary">← All case studies</Link>
      <div className="txt-label-nav text-primary mt-10 mb-4">Banking · DACH & UK</div>
      <h1 className="txt-primary-headline text-primary mb-8">Switzerland's largest global bank.</h1>

      <div className="grid grid-cols-3 gap-6 border-y border-outline-variant py-8 mb-12">
        {[
          { v: "13", l: "Orchestrators trained" },
          { v: "5:1", l: "ROI validated" },
          { v: "CHF 200k", l: "Savings (pilot)" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-3xl text-primary mb-1" style={{ fontWeight: 800, letterSpacing: "-0.03em" }}>{s.v}</div>
            <div className="text-xs text-on-surface-variant">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6 txt-body">
        <p>Switzerland's largest global bank partnered with Einklang to embed an AI-native audit capability across teams in Switzerland and the United Kingdom, a domain where regulatory rigour and methodological discipline cannot be compromised.</p>
        <p>The pilot focused on 13 orchestrators, practitioners trained to run improvement and audit workflows alongside the Einklang Agent inside Microsoft Teams. Within months, the engagement validated a 5:1 return on investment and delivered CHF 200k in measured savings on the pilot scope alone.</p>
        <p>Crucially, the capability stayed inside the bank. The Agent codified the bank's own playbooks and the orchestrators' judgement was strengthened, not replaced. The pilot is now scaling institutionally.</p>
      </div>
    </article>
  );
}