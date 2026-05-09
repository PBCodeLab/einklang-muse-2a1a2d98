import { createFileRoute, Link } from "@tanstack/react-router";
import { LogoMarquee } from "@/components/LogoMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Einklang.AI — Operational Excellence, finally scalable." },
      { name: "description", content: "Einklang Agent: scaled access to proven OE methods, sustained adoption, and stepwise AI design, for every team." },
      { property: "og:title", content: "Einklang.AI — Operational Excellence, finally scalable." },
      { property: "og:description", content: "The Einklang Agent gives every team access to proven improvement methods, inside Microsoft Teams." },
    ],
  }),
  component: Index,
});

const MAX = "max-w-7xl mx-auto px-6 lg:px-10";

function Index() {
  return (
    <>
      {/* Hero */}
      <section className={`${MAX} pt-20 pb-24`}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="txt-label-nav text-primary mb-5">The Platform</div>
            <h1 className="txt-primary-headline text-primary mb-8">
              Operational Excellence,<br />
              <span className="text-on-surface-variant font-normal">finally scalable.</span>
            </h1>
            <p className="txt-body mb-10 max-w-2xl whitespace-pre-line">
              Scale operational excellence (OE) across your organization: The <strong className="font-semibold">Einklang Agent</strong> gives every team member access to proven OE improvement methods, it develops and keeps OE capability inside your organization, and turns every improvement project into a step toward AI-native ways of working.{"\n\n"}
              With Einklang, raise OE across your organization and evolve it towards AI maturity.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/products/agent"
                className="inline-flex items-center justify-center rounded bg-primary text-on-primary px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:px-5 font-bold hover:opacity-90 transition whitespace-nowrap"
              >
                Discover Einklang Agent capabilities
              </Link>
              <Link
                to="/products/agent"
                hash="pricing"
                className="inline-flex items-center justify-center rounded bg-primary text-on-primary px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:px-5 font-bold hover:opacity-90 transition whitespace-nowrap"
              >
                Discover Einklang Agent pricing
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-outline-variant">
            <div className="text-primary leading-[0.9] text-[112px] md:text-[160px] mb-2" style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 800, letterSpacing: "-0.06em" }}>
              30%+
            </div>
            <div className="txt-label-nav text-on-surface-variant mb-10">Productivity gain · avg. reported by clients</div>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="bg-surface-container-lowest py-28">
        <div className={MAX}>
          <div className="max-w-5xl mb-20">
            <div className="txt-label-nav text-primary mb-4">THE PROBLEM AND SOLUTION</div>
            <h2 className="txt-primary-headline text-primary mb-6 whitespace-pre-line">
              <span className="lg:whitespace-nowrap block">OE methods work great, but few benefit.</span>
              <span className="text-on-surface-variant font-normal lg:whitespace-nowrap block">Our Agent changes that.</span>
            </h2>
            <p className="txt-body">We bridge the gap between traditional improvement challenges and scalable, AI-driven solutions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: "OE consulting is costly and doesn't scale.",
                pBody: "Today, OE methods are mostly delivered through consulting. Because this approach is expensive and time-consuming, many companies simply could not afford it. Much of the economy has not yet profited from OE methods potential to boost productivity and efficiency.",
                title: "Scaled access",
                body: "Einklang agents make expert OE guidance available to every team, 24/7, inside Microsoft Teams and other platforms, at a fraction of the cost of consulting engagements.",
              },
              {
                problem: "OE benefits fade, old routines return.",
                pBody: "After OE consultants leave, employees often return to their routines. Under the pressure of daily work without ongoing support, the new OE methods and their benefits fade.",
                title: "Sustained adoption",
                body: "Einklang agents enable natural interactions adapted to each user's level of experience and involvement, keeping the OE method in use, teams engaged and benefits realized.",
              },
              {
                problem: "AI-native OE strategy lacks execution.",
                pBody: "Leaders know they need to become AI-native, but teams need a practical, structured path – not another, high-level transformation program.",
                title: "Stepwise AI design",
                body: "Beyond delivering traditional OE expertise, Einklang solutions can use every improvement project to reveal where AI can automate, augment, or redesign how work gets done.",
              },
            ].map((c) => (
              <div key={c.title} className="flex flex-col">
                <div className="bg-surface border border-outline-variant p-10 z-10 h-full">
                  <h3 className="txt-section-title text-primary mb-5">{c.problem}</h3>
                  <p className="txt-body text-base">{c.pBody}</p>
                </div>
                <div className="flex justify-center -my-3 relative z-20">
                  <div className="bg-primary rounded-full p-2 border-4 border-surface-container-lowest text-on-primary">
                    <span className="material-symbols-outlined text-[16px] block">arrow_downward</span>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground p-10 pt-12 h-full">
                  <h4 className="txt-section-title text-primary-foreground mb-5">{c.title}</h4>
                  <p className="text-base leading-relaxed text-primary-foreground/90">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Einklang */}
      <section className="py-28 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-5xl mb-16">
            <div className="txt-label-nav text-primary mb-4">Why Einklang</div>
            <h2 className="txt-primary-headline text-primary">
              <span className="lg:whitespace-nowrap block">Decades of OE experience,</span>
              <span className="text-on-surface-variant font-normal lg:whitespace-nowrap block">delivered through AI.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6 txt-body">
              <p>Most AI tools for business are still built by technologists. Einklang is different. Built by operational excellence practitioners with decades of leadership experience across manufacturing, banking, consulting, and technology. <Link to="/about" className="text-primary hover:underline">Learn more about the Einklang team.</Link></p>
              <p>Knowing which method to apply to which problem (e.g. when to use a DMAIC cycle versus a rapid kaizen, how to map a value stream in financial services versus a production line) is the difference between OE that creates lasting change and OE that produces a report.</p>
              <p>This domain knowledge powers the Einklang Agent. It is not a generic chatbot. It is an AI that knows what solid and sustained transformation results like in operational excellence.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
              {[
                { t: "60 years cumulative OE", b: "Across manufacturing, banking, consulting, and technology. Hundreds of OE programmes led from first principles." },
                { t: "Method-first, not tool-first", b: "Built around proven OE methodology (Lean, Six Sigma, VSM, DMAIC), not generalized AI output." },
                { t: "Sector-specific intelligence", b: "OE in a Swiss bank looks different from OE in a manufacturer. The Agent understands the difference." },
                { t: "Built to transfer capability", b: "Every interaction builds the practitioner's own judgement, not dependency on the tool." },
              ].map((f) => (
                <div key={f.t} className="bg-surface p-7">
                  <h3 className="txt-section-title text-primary text-lg mb-2">{f.t}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proven results */}
      <section className="py-28 bg-surface-container-low border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-5xl mb-16">
            <div className="txt-label-nav text-primary mb-4">Proven Results</div>
            <h2 className="txt-primary-headline text-primary">
              <span className="lg:whitespace-nowrap block">Measurable impact,</span>
              <span className="text-on-surface-variant font-normal lg:whitespace-nowrap block">across industry and service sectors.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant border border-outline-variant mb-16">
            {[
              { v: "30%+", l: "Productivity gain", s: "Average reported by clients" },
              { v: "5:1", l: "Return on investment", s: "Validated · Swiss global bank pilot" },
              { v: "160+", l: "Leaders certified", s: "Across DACH" },
            ].map((s) => (
              <div key={s.l} className="bg-surface p-8 text-center">
                <div className="text-4xl md:text-5xl text-primary mb-3" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>{s.v}</div>
                <div className="text-sm font-medium text-primary mb-1">{s.l}</div>
                <div className="text-xs text-on-surface-variant">{s.s}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link to="/case-studies/swiss-bank" className="bg-surface border border-outline-variant p-10 group hover:border-primary transition">
              <div className="txt-label-nav text-on-surface-variant mb-3">Case study</div>
              <h3 className="txt-section-title text-primary mb-3">Switzerland's largest global bank</h3>
              <p className="txt-body text-base mb-5 whitespace-pre-line">13 Orchestrators · 5:1 ROI
AI-native audit capability embedded across Switzerland and the UK.</p>
              <span className="text-sm text-primary group-hover:underline">Read the case study →</span>
            </Link>
            <Link to="/case-studies/swissmem" className="bg-surface border border-outline-variant p-10 group hover:border-primary transition">
              <div className="txt-label-nav text-on-surface-variant mb-3">Case study</div>
              <h3 className="txt-section-title text-primary mb-3">Swissmem · 1,300 member companies</h3>
              <p className="txt-body text-base mb-5 whitespace-pre-line">160+ leaders certified. 
Three years co-developing OE programmes across the Swiss industrial ecosystem.</p>
              <span className="text-sm text-primary group-hover:underline">Read the case study →</span>
            </Link>
          </div>
          <div>
            <LogoMarquee />
          </div>
        </div>
      </section>

      {/* Enterprise ready */}
      <section className="py-28 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-16">
            <div className="txt-label-nav text-primary mb-4">Enterprise Ready</div>
            <h2 className="txt-primary-headline text-primary">Enterprise-ready by design.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { i: "groups", t: "Microsoft Teams", b: "Deployed inside your existing Microsoft 365 environment. No new app, no new login." },
              { i: "shield_lock", t: "EU GDPR compliant", b: "Swiss data protection standards. Your data stays inside your Microsoft tenant." },
              { i: "translate", t: "Four languages", b: "German, English, Portuguese, and Spanish. More on request." },
              { i: "monitoring", t: "Benefit reporting", b: "Monthly reports tracking financial and operational impact from idea to delivery." },
            ].map((f) => (
              <div key={f.t}>
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{f.i}</span>
                <h3 className="txt-section-title text-primary text-lg mb-2">{f.t}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface-container-low py-28 border-t border-outline-variant text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="txt-primary-headline text-primary mb-8 text-3xl md:text-4xl">
            Scale operational excellence across your organisation.<br />
            <span className="text-on-surface-variant font-normal">By anyone, anywhere.</span>
          </h2>
          <p className="txt-body mb-10">See how Einklang can help your teams improve performance today, keep the gains, and identify where AI can redesign work for tomorrow.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/aslamjilani-einklangacademy/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a demo</a>
          </div>
        </div>
      </section>
    </>
  );
}
