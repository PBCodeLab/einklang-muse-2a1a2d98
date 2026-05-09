import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case studies — Einklang.AI" },
      { name: "description", content: "Real-world results from organisations scaling operational excellence with the Einklang Agent." },
      { property: "og:title", content: "Case studies — Einklang.AI" },
      { property: "og:description", content: "Swiss bank · Swissmem — measurable impact across DACH." },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="txt-label-nav text-primary mb-4">Case studies</div>
      <h1 className="txt-primary-headline text-primary mb-6">Measurable impact, across real organisations.</h1>
      <p className="txt-body max-w-2xl mb-16">From a global Swiss bank to Switzerland's industrial association, Einklang has been validated where the stakes are highest.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <Link to="/case-studies/swiss-bank" className="bg-surface border border-outline-variant p-10 group hover:border-primary transition">
          <div className="txt-label-nav text-on-surface-variant mb-3">Banking</div>
          <h2 className="txt-section-title text-primary mb-3">Switzerland's largest global bank</h2>
          <p className="txt-body text-base mb-5">13 Orchestrators · 5:1 ROI · CHF 200k savings. AI-native audit capability embedded across Switzerland and the UK.</p>
          <span className="text-sm text-primary group-hover:underline">Read the case study →</span>
        </Link>
        <Link to="/case-studies/swissmem" className="bg-surface border border-outline-variant p-10 group hover:border-primary transition">
          <div className="txt-label-nav text-on-surface-variant mb-3">Industrial</div>
          <h2 className="txt-section-title text-primary mb-3">Swissmem · 1,300 member companies</h2>
          <p className="txt-body text-base mb-5">160+ leaders certified · CHF 3.8m+ impact. Three years co-developing OE programmes across the Swiss industrial ecosystem.</p>
          <span className="text-sm text-primary group-hover:underline">Read the case study →</span>
        </Link>
        <Link to="/case-studies/sara" className="bg-surface border border-outline-variant p-10 group hover:border-primary transition">
          <div className="txt-label-nav text-on-surface-variant mb-3">Consulting</div>
          <h2 className="txt-section-title text-primary mb-3">Sara by Brilliant Working</h2>
          <p className="txt-body text-base mb-5">A custom AI agent for Baringa Management Consulting — the Brilliant Working methodology, embedded in AI and deployed via secure Azure architecture.</p>
          <span className="text-sm text-primary group-hover:underline">Read the case study →</span>
        </Link>
      </div>
    </section>
  );
}