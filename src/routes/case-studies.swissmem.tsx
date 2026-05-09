import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/swissmem")({
  head: () => ({
    meta: [
      { title: "Swissmem — Case study | Einklang.AI" },
      { name: "description", content: "160+ leaders certified · CHF 3.8m+ impact across Swissmem's 1,300 member companies." },
      { property: "og:title", content: "Swissmem — Case study" },
      { property: "og:description", content: "Three years co-developing OE programmes across the Swiss industrial ecosystem." },
    ],
  }),
  component: Swissmem,
});

function Swissmem() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
      <Link to="/case-studies" className="txt-label-nav text-on-surface-variant hover:text-primary">← All case studies</Link>
      <div className="txt-label-nav text-primary mt-10 mb-4">Industrial · Switzerland</div>
      <h1 className="txt-primary-headline text-primary mb-8">Swissmem — 1,300 member companies.</h1>

      <div className="grid grid-cols-3 gap-6 border-y border-outline-variant py-8 mb-12">
        {[
          { v: "160+", l: "Leaders certified" },
          { v: "CHF 3.8m+", l: "Measured impact" },
          { v: "3 yrs", l: "Co-development" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-3xl text-primary mb-1" style={{ fontWeight: 800, letterSpacing: "-0.03em" }}>{s.v}</div>
            <div className="text-xs text-on-surface-variant">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6 txt-body">
        <p>Swissmem represents 1,300 member companies that form the backbone of Switzerland's mechanical, electrical and metalworking industries. Together with Swissmem, Einklang spent three years co-developing operational-excellence programmes tailored to the realities of mid-sized industrial operations.</p>
        <p>Across that engagement, more than 160 leaders earned certification and the programmes generated more than CHF 3.8m in measured impact across participating companies. Improvements that sustain because the methods now live with the practitioners themselves.</p>
        <p>The next chapter is scaling these programmes through the Einklang Agent, bringing the same rigour to every team without requiring an on-site consultant.</p>
      </div>
    </article>
  );
}