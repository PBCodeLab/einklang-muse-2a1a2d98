import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products/custom")({
  head: () => ({
    meta: [
      { title: "Custom Agents — Your methodology, embedded in AI" },
      { name: "description", content: "Domain-specific AI built on your proprietary methodology. Scales your expertise across teams and geographies, deployed in your Microsoft tenant." },
      { property: "og:title", content: "Custom Agents — Your methodology, embedded in AI" },
      { property: "og:description", content: "Not a chatbot — an AI orchestration layer for your proprietary OE, audit, or transformation methodology." },
    ],
  }),
  component: CustomPage,
});

const MAX = "max-w-7xl mx-auto px-6 lg:px-10";
const CALENDLY = "https://calendly.com/aslamjilani-einklangacademy/30min";

const PROPS = [
  { t: "Your methodology, embedded", b: "Trained on your proprietary framework — methodology-specific guidance, not generic AI answers." },
  { t: "Context aware", b: "Understands where users are in their journey and adapts guidance — between sessions, across geographies, at any time of day." },
  { t: "Human expertise amplified", b: "Your experts focus on high-value advisory work. The agent handles on-demand reinforcement and methodology coaching at scale." },
  { t: "Methodology becomes a digital asset", b: "Your framework is no longer locked in consultants' heads — it becomes an AI-embedded capability that scales infinitely." },
];

const AUDIENCES = [
  { t: "Large enterprises", b: "Organisations with established internal OE, audit, or transformation methodologies wanting to scale consistent practice across global teams." },
  { t: "Consulting firms", b: "Firms with a proprietary client methodology that want to embed it in AI — so clients get on-demand coaching between engagements. Sara by Brilliant Working is the reference case." },
  { t: "Industry associations", b: "Associations like Swissmem that serve a large membership base with shared methodology needs — and want to provide always-on AI capability to members." },
];

const PROCESS = [
  { n: "01", t: "Discovery", b: "We map your methodology, use cases, and user needs. One structured workshop." },
  { n: "02", t: "Knowledge build", b: "We extract, structure, and encode your methodology into the agent's knowledge base." },
  { n: "03", t: "Build & test", b: "We build the agent, test extensively with real methodology scenarios, and refine with your team." },
  { n: "04", t: "Deploy", b: "Deployed inside your Microsoft tenant via secure Azure architecture. EU GDPR compliant from day one." },
  { n: "05", t: "Run & evolve", b: "We manage the agent monthly — updates, improvements, new methodology additions as your practice evolves." },
];

function CustomPage() {
  return (
    <>
      <section className={`${MAX} pt-20 pb-16`}>
        <div className="txt-label-nav text-primary mb-5">Custom Agents</div>
        <h1 className="txt-primary-headline text-primary mb-8 max-w-4xl">
          Your methodology. Your knowledge.<br />
          <span className="text-on-surface-variant font-normal">Embedded in AI.</span>
        </h1>
        <p className="txt-body max-w-3xl mb-10">
          Clients have appreciated our Einklang agent so much they ask us to develop their specific methodologies into agentic AI. While we focus on scaling OE expertise worldwide, we have taken on custom development mandates when there are mutual learning benefits. A Custom Agent is a domain-specific AI built on your organisation's proprietary methodology — not a generic chatbot. It scales your expertise across teams, geographies, and time zones, without scaling your headcount.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a discovery call</a>
        </div>
        <div className="txt-label-nav text-on-surface-variant uppercase">Secure Azure architecture · Microsoft Teams · EU GDPR</div>
      </section>

      <section className="bg-surface-container-lowest py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">What it is</div>
            <h2 className="txt-primary-headline text-primary mb-4">Not a chatbot — a domain-specific AI orchestration layer.</h2>
            <p className="txt-body">Combines your methodology, your context, and LLM intelligence into a single AI that knows your framework as deeply as your best practitioner — available 24/7 to everyone in your organisation.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-outline-variant border border-outline-variant mb-12">
            {PROPS.map((p) => (
              <div key={p.t} className="bg-surface p-7">
                <h3 className="txt-section-title text-primary text-lg mb-2">{p.t}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-outline-variant p-8">
            <div className="txt-label-nav text-primary mb-4">Einklang Agent vs Custom Agent</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="txt-section-title text-primary text-lg mb-2">Einklang Agent</h4>
                <p className="text-sm text-on-surface-variant mb-3">Standard OE methodology — ready to deploy immediately. Ideal for organisations without a proprietary framework.</p>
                <p className="text-sm font-medium text-primary mb-2">CHF 149/seat or CHF 2,500/month</p>
                <Link to="/products/agent" className="text-sm text-primary underline underline-offset-4">See the Agent →</Link>
              </div>
              <div>
                <h4 className="txt-section-title text-primary text-lg mb-2">Custom Agent</h4>
                <p className="text-sm text-on-surface-variant mb-3">Your proprietary methodology, embedded in AI. Built specifically for your organisation or your clients.</p>
                <p className="text-sm font-medium text-primary">CHF 28,000–45,000 build + CHF 590/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">Who it's for</div>
            <h2 className="txt-primary-headline text-primary mb-4">Built for organisations with deep domain knowledge to scale.</h2>
            <p className="txt-body">A Custom Agent makes most sense when you have a proprietary methodology, a large practitioner base, or a consulting practice that relies on consistent application of a framework.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant mb-8">
            {AUDIENCES.map((a) => (
              <div key={a.t} className="bg-surface p-7">
                <h3 className="txt-section-title text-primary text-lg mb-2">{a.t}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{a.b}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-on-surface-variant">Also transferable across: strategy execution · risk &amp; compliance · audit · transformation programmes · industry-specific methodologies.</p>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">The process</div>
            <h2 className="txt-primary-headline text-primary mb-4">From methodology to deployed agent — in five steps.</h2>
            <p className="txt-body">We handle the full build — from methodology extraction to deployment inside your Microsoft tenant.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-outline-variant border border-outline-variant">
            {PROCESS.map((s) => (
              <div key={s.n} className="bg-surface p-6">
                <div className="text-2xl text-primary mb-3" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>{s.n}</div>
                <h3 className="txt-section-title text-primary text-base mb-2">{s.t}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant mt-6">EU GDPR compliant &amp; enterprise-grade data security. Deployed inside your Microsoft tenant — your data and your clients' data never leave your organisation's environment.</p>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">Pricing</div>
            <h2 className="txt-primary-headline text-primary mb-4">Transparent build + run pricing.</h2>
            <p className="txt-body">No hidden fees. The build engagement delivers a fully deployed, tested agent. The monthly run fee keeps it current as your methodology evolves.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface border border-outline-variant p-10">
              <div className="txt-label-nav text-primary mb-3">Build engagement</div>
              <div className="text-4xl text-primary mb-1" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>CHF 28k–45k</div>
              <div className="text-sm text-on-surface-variant mb-6">One-time build fee · scope dependent</div>
              <ul className="text-sm text-on-surface-variant space-y-2 mb-8">
                <li>✓ Discovery workshop and methodology extraction</li>
                <li>✓ Full agent build and knowledge base construction</li>
                <li>✓ Testing and refinement with your team</li>
                <li>✓ Deployment inside your Microsoft tenant</li>
                <li>✓ EU GDPR compliant architecture</li>
              </ul>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a discovery call</a>
            </div>
            <div className="bg-surface border border-outline-variant p-10">
              <div className="txt-label-nav text-on-surface-variant mb-3">Monthly run fee</div>
              <div className="text-4xl text-primary mb-1" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>CHF 590</div>
              <div className="text-sm text-on-surface-variant mb-6">Per month · ongoing after deployment</div>
              <ul className="text-sm text-on-surface-variant space-y-2 mb-8">
                <li>✓ Agent monitoring and performance management</li>
                <li>✓ Methodology updates as your framework evolves</li>
                <li>✓ Monthly usage and performance reporting</li>
                <li>✓ Technical support and escalation</li>
                <li>✓ Cancel with 30 days notice</li>
              </ul>
              <p className="text-xs text-on-surface-variant">The monthly fee ensures your agent stays current — as your methodology grows, your agent grows with it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 border-t border-outline-variant text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="txt-primary-headline text-primary mb-6 text-3xl md:text-4xl">Ready to embed your methodology in AI?</h2>
          <p className="txt-body mb-10">Book a 30-minute discovery call. We'll explore your methodology, your use case, and whether a Custom Agent is the right fit.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a discovery call</a>
            <Link to="/case-studies/sara" className="inline-flex items-center justify-center rounded border border-outline-variant px-5 py-2.5 text-sm font-bold text-primary hover:bg-surface-container-low transition">Read the Sara case study →</Link>
          </div>
        </div>
      </section>
    </>
  );
}