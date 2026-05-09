import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/sara")({
  head: () => ({
    meta: [
      { title: "Sara by Brilliant Working — Custom AI agent case study" },
      { name: "description", content: "How Einklang built a custom AI agent for Baringa Management Consulting, trained on the Brilliant Working methodology and deployed via secure Microsoft Azure architecture." },
      { property: "og:title", content: "Sara by Brilliant Working — Custom AI agent case study" },
      { property: "og:description", content: "From methodology support to scalable AI platform — a domain-specific AI orchestration layer, not a chatbot." },
    ],
  }),
  component: SaraCaseStudy,
});

const MAX = "max-w-7xl mx-auto px-6 lg:px-10";
const CALENDLY = "https://calendly.com/aslamjilani-einklangacademy/30min";

function SaraCaseStudy() {
  return (
    <>
      <section className={`${MAX} pt-20 pb-16`}>
        <div className="txt-label-nav text-primary mb-5">Case study</div>
        <h1 className="txt-primary-headline text-primary mb-8">
          <span className="md:whitespace-nowrap block">Sara by Brilliant Working —</span>
          <span className="text-on-surface-variant font-normal lg:whitespace-nowrap block">from methodology support to a scalable AI platform.</span>
        </h1>
        <p className="txt-body max-w-3xl mb-10">
          Einklang built a fully custom AI agent for Baringa Management Consulting — trained on the Brilliant Working methodology and deployed across client engagements via secure Microsoft Azure architecture.
        </p>
        <div className="grid sm:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
          {[
            { v: "Custom AI", l: "Domain orchestration layer" },
            { v: "Azure", l: "Secure enterprise architecture" },
            { v: "100%", l: "Methodology scaled digitally" },
          ].map((s) => (
            <div key={s.l} className="bg-surface p-7 text-center">
              <div className="text-2xl md:text-3xl text-primary mb-2" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>{s.v}</div>
              <div className="text-sm text-on-surface-variant">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">The brief</div>
            <h2 className="txt-primary-headline text-primary mb-4">Build an AI companion for the Brilliant Working methodology.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
            <div className="bg-surface p-7">
              <h3 className="txt-section-title text-primary text-lg mb-3">Strategic objective</h3>
              <ul className="text-sm text-on-surface-variant leading-relaxed space-y-2">
                <li>· Custom AI agent for Baringa Management Consulting</li>
                <li>· Designed to reinforce the Brilliant Working methodology</li>
                <li>· Acts as digital companion between workshops and coaching sessions</li>
              </ul>
            </div>
            <div className="bg-surface p-7">
              <h3 className="txt-section-title text-primary text-lg mb-3">AI-native enablement</h3>
              <ul className="text-sm text-on-surface-variant leading-relaxed space-y-2">
                <li>· On-demand coaching for speed, quality, and adoption</li>
                <li>· Seamless integration via secure Microsoft Azure architecture</li>
                <li>· Embedded domain knowledge and structured guidance</li>
                <li>· Instantly scalable across client environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">The important shift</div>
            <h2 className="txt-primary-headline text-primary mb-4">Not a chatbot — a domain-specific AI orchestration layer.</h2>
            <p className="txt-body">Sara combines methodology, context, and LLM intelligence in a way that a generic chatbot cannot. She knows the Brilliant Working framework deeply — and guides users through it, not around it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
            {[
              { t: "Methodology embedded", b: "The Brilliant Working framework is built into every interaction — methodology-specific guidance, not generic advice." },
              { t: "Context aware", b: "Sara understands where a client is in their transformation journey and adapts her guidance accordingly — between sessions, not just during them." },
              { t: "Human expertise amplified", b: "Consultants focus on high-value advisory work while Sara handles on-demand reinforcement and structured guidance at scale." },
            ].map((c) => (
              <div key={c.t} className="bg-surface p-7">
                <h3 className="txt-section-title text-primary text-lg mb-2">{c.t}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">Enterprise implications</div>
            <h2 className="txt-primary-headline text-primary mb-4">What this means for organisations.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
            {[
              "Methodologies become scalable digital assets — not locked in consultants' heads.",
              "Domain knowledge becomes AI-embedded capability that scales infinitely.",
              "Organisations build their own AI-native operating model without external dependency.",
              "Human expertise is amplified — not replaced — by AI that knows your methodology.",
            ].map((t) => (
              <div key={t} className="bg-surface p-7 text-sm text-on-surface-variant leading-relaxed">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-10">
            <div className="txt-label-nav text-primary mb-4">Beyond operational excellence</div>
            <h2 className="txt-primary-headline text-primary mb-4">Transferable across domains.</h2>
            <p className="txt-body">The Sara model — a custom AI agent trained on a proprietary methodology — applies wherever an organisation has deep domain knowledge it wants to scale.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
            {["Strategy execution", "Risk & Compliance", "Audit", "Transformation programmes", "Industry methodologies", "New AI business models"].map((d) => (
              <div key={d} className="bg-surface p-6 text-sm font-medium text-primary">{d}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant">
        <div className={MAX}>
          <figure className="max-w-3xl mx-auto text-center">
            <blockquote className="txt-primary-headline text-primary text-2xl md:text-3xl mb-6">
              "Our collaboration with Einklang has been fantastic. Their deep expertise in both operational excellence and AI has taken the Brilliant Working methodology to the next level with Sara — making it practical, relevant, and impactful in the AI era."
            </blockquote>
            <figcaption className="text-sm text-on-surface-variant">
              <span className="font-medium text-primary">James Lascelles</span> · Co-founder, Brilliant Working Ltd
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 border-t border-outline-variant">
        <div className={MAX}>
          <div className="bg-surface border border-outline-variant p-10 max-w-3xl">
            <div className="txt-label-nav text-primary mb-3">Also from Brilliant Working</div>
            <h3 className="txt-section-title text-primary mb-3">e-Learning &amp; LCS Lean Practitioner certification</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Alongside Sara, Brilliant Working offers e-learning programmes that take practitioners through the methodology at their own pace. Practitioners can become certified as LCS Lean Practitioners, accredited by the globally recognised Lean Competency System.
            </p>
            <a href="https://brilliantworking.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline underline-offset-4">Visit Brilliant Working →</a>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 border-t border-outline-variant text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="txt-primary-headline text-primary mb-6 text-3xl md:text-4xl">Want to build your own custom agent?</h2>
          <p className="txt-body mb-10">Book a call to explore how we could embed your methodology into a custom AI agent.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a discovery call</a>
            <Link to="/products/custom" className="inline-flex items-center justify-center rounded border border-outline-variant px-5 py-2.5 text-sm font-bold text-primary hover:bg-surface-container-low transition">About Custom Agents →</Link>
          </div>
        </div>
      </section>
    </>
  );
}