import { createFileRoute } from "@tanstack/react-router";
import teamsLogo from "@/assets/teams-logo.png";
import browsersLogo from "@/assets/browsers-2x2.png";

export const Route = createFileRoute("/products/agent")({
  head: () => ({
    meta: [
      { title: "Einklang Agent — AI-powered OE advisor in Microsoft Teams" },
      { name: "description", content: "An always-on OE advisor inside Microsoft Teams. Waste analysis, VSM, root cause, and benefit realisation — guided 24/7 in your language." },
      { property: "og:title", content: "Einklang Agent — AI-powered OE advisor in Microsoft Teams" },
      { property: "og:description", content: "Eight OE capabilities, deployed inside your Microsoft tenant. EU GDPR compliant. Live in two weeks." },
    ],
  }),
  component: AgentPage,
});

const MAX = "max-w-7xl mx-auto px-6 lg:px-10";
const CALENDLY = "https://calendly.com/aslamjilani-einklangacademy/30min";
const SIGNUP = "https://einklang.ai/agent/billing";

const CAPABILITIES = [
  { tag: "Core", title: "Waste identification", body: "Structured Lean waste analysis — including waste created by poor AI deployments." },
  { tag: "Core", title: "Value stream mapping", body: "Walks teams through VSM step by step, with embedded kyro integration for digital mapping." },
  { tag: "Core", title: "Root cause analysis", body: "Structured 5-Why and fishbone facilitation — links causes to value stream gaps." },
  { tag: "Differentiator", title: "Benefit realisation", body: "Tracks and validates financial and operational benefits from idea to impact." },
  { tag: "Core", title: "Value drivers & KPIs", body: "Identifies value drivers, connects them to KPIs, and coaches on corrective action." },
  { tag: "Differentiator", title: "AI-native improvement planning", body: "Turns blue-sky thinking into an implementable roadmap in one session." },
  { tag: "Support", title: "Methodology & technology support", body: "On-demand guidance on Lean, Six Sigma, and OE frameworks — answered instantly." },
  { tag: "Support", title: "Multilingual, always on", body: "Fully operational in DE, EN, PT, and ES. Additional languages on request." },
];

const STEPS = [
  { n: "01", title: "Connect your tenant", body: "Deployed inside your Microsoft 365 environment. IT approval typically takes one meeting." },
  { n: "02", title: "Configure your context", body: "We tailor the agent to your industry, terminology, and KPIs. Takes 2–3 days." },
  { n: "03", title: "Train your team", body: "A 90-minute onboarding session. Practitioners independent within a week." },
  { n: "04", title: "Measure & realise", body: "Monthly benefit realisation reports. Average client sees 30% cost reduction within 6 months." },
];

const TIERS = [
  { tag: "Single user", audience: "Individuals and company trials", price: "CHF 179", unit: "/ month", note: "60-day free trial · the way in", cta: "Start free trial", link: SIGNUP, featured: false,
    features: ["All modules and benefit realisation", "Paid monthly by card through Stripe", "Cancel anytime", "Upgrade to Team or Enterprise anytime"] },
  { tag: "Team", audience: "Mid-sized companies", price: "CHF 149", unit: "/ seat / month", note: "Minimum 3 seats · invoiced yearly", cta: "Get started", link: CALENDLY, featured: false,
    features: ["All modules and benefit realisation", "From 3 seats upwards", "Shared team projects", "Invoiced yearly"] },
  { tag: "Enterprise", audience: "Larger organisations", price: "CHF 2,490", unit: "/ month", note: "Unlimited users · CHF 29,880 a year", cta: "Talk to us", link: CALENDLY, featured: true,
    features: ["All modules and benefit realisation", "Unlimited users across the organisation", "Organisation-wide rollout and reporting", "Invoiced yearly"] },
];

const FAQ = [
  { q: "Does it work with our existing Microsoft 365 setup?", a: "Yes — it deploys as a Teams app inside your existing tenant. No new infrastructure or separate login. IT approval typically takes one meeting." },
  { q: "What about data security and GDPR?", a: "Your data never leaves your Microsoft tenant. EU GDPR and Swiss data protection standards. A data processing agreement is included with every contract." },
  { q: "How does benefit realisation work?", a: "The agent tracks improvement initiatives from initiation to completion, quantifying financial and operational benefits at each stage. Monthly reports show leadership the real impact." },
  { q: "How long does implementation take?", a: "Most organisations are live within two weeks. Configuration takes 2–3 days; the first team is onboarded in a single 90-minute session." },
  { q: "Which languages are supported?", a: "German, English, Portuguese, and Spanish out of the box. Additional languages on request." },
  { q: "What support is included?", a: "All plans include ongoing methodology and technology support. Our team handles escalations — you are never left on your own." },
];

function AgentPage() {
  return (
    <>
      <section className={`${MAX} pt-20 pb-16`}>
        <div className="txt-label-nav text-primary mb-5">Einklang Agent</div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10 mb-8">
          <div className="flex-1 min-w-0">
            <h1 className="txt-primary-headline text-primary mb-8">
              <span className="block">Your AI-powered OE advisor,</span>
              <span className="text-on-surface-variant font-normal block">inside Microsoft Teams or browser.</span>
            </h1>
            <p className="txt-body">
              Guides your team through waste identification, value stream mapping, root cause analysis, and benefit realisation — 24/7, in your language. No consultant required. Improvement that sustains because capability stays inside your organisation.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
            <div className="border border-outline-variant bg-surface px-5 py-4 flex items-center gap-4 md:w-64">
              <img
                src={teamsLogo}
                alt="Microsoft Teams logo"
                width={64}
                height={64}
                className="w-12 h-12 shrink-0"
              />
              <div>
                <div className="txt-label-nav text-primary">Microsoft Teams</div>
                <div className="text-xs text-on-surface-variant">Deploy inside your tenant</div>
              </div>
            </div>
            <div className="border border-outline-variant bg-surface px-5 py-4 flex items-center gap-4 md:w-64">
              <img
                src={browsersLogo}
                alt="Chrome, Safari, Firefox, Edge browser logos"
                width={512}
                height={512}
                loading="lazy"
                className="w-12 h-12 shrink-0"
              />
              <div>
                <div className="txt-label-nav text-primary">Any browser</div>
                <div className="text-xs text-on-surface-variant">Platform-independent web app</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-primary text-on-primary px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:px-5 font-bold hover:opacity-90 transition whitespace-nowrap"
          >
            Book a demo
          </a>
        </div>
        <div className="txt-label-nav text-on-surface-variant">Microsoft Teams &amp; Copilot · EU GDPR · Swiss data protection</div>
      </section>

      <section className="bg-surface-container-lowest py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">What it does</div>
            <h2 className="txt-primary-headline text-primary mb-4 whitespace-nowrap">Eight things the Einklang Agent does every day.</h2>
            <p className="txt-body">Available 24/7 inside Teams. No login, no separate app, no waiting for the next consultant visit.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="bg-surface p-7 flex flex-col">
                <div className="txt-label-nav text-primary mb-3">{c.tag}</div>
                <h3 className="txt-section-title text-primary text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">How it works</div>
            <h2 className="txt-primary-headline text-primary mb-4 whitespace-nowrap">Up and running in four steps.</h2>
            <p className="txt-body">Deployed via your existing Microsoft tenant. No new infrastructure, no IT project.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-surface p-7">
                <div className="text-3xl text-primary mb-3" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>{s.n}</div>
                <h3 className="txt-section-title text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-surface-container-low border-t border-outline-variant scroll-mt-24">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">Pricing</div>
            <h2 className="txt-primary-headline text-primary mb-4 md:whitespace-nowrap">Three tiers from one user to the whole company.</h2>
            <p className="txt-body">Everyone starts on the same 60-day free trial, then picks one of three plans. No setup fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <div key={t.tag} className={`bg-surface p-8 flex flex-col ${t.featured ? "border-2 border-primary" : "border border-outline-variant"}`}>
                <div className={`txt-label-nav self-start px-4 py-1.5 rounded mb-3 ${t.featured ? "bg-primary text-on-primary" : "bg-surface-container-low text-primary"}`}>{t.tag}</div>
                <div className="text-sm text-on-surface-variant mb-5">{t.audience}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl text-primary" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>{t.price}</span>
                  <span className="text-sm text-on-surface-variant">{t.unit}</span>
                </div>
                <div className="text-sm italic font-semibold text-primary mb-6 pb-6 border-b border-outline-variant">{t.note}</div>
                <ul className="text-sm text-on-surface-variant space-y-2 mb-8 flex-1">
                  {t.features.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
                <a href={t.link} target="_blank" rel="noopener noreferrer" className="btn-primary self-start">{t.cta}</a>
              </div>
            ))}
          </div>
          <p className="text-sm italic font-semibold text-primary mt-4">Companies start on a single licence and move up as the team grows.</p>
          <div className="grid md:grid-cols-4 gap-4 mt-10">
            {[
              { t: "Inside Microsoft 365", b: "Teams and Copilot. No new login." },
              { t: "EU data residency", b: "Your data stays in your tenant." },
              { t: "Four languages", b: "German, English, Portuguese, Spanish." },
            ].map((x) => (
              <div key={x.t} className="bg-surface border-l-4 border-primary p-5">
                <div className="text-sm font-bold text-primary mb-1">{x.t}</div>
                <div className="text-xs text-on-surface-variant">{x.b}</div>
              </div>
            ))}
            <div className="bg-primary text-on-primary p-5">
              <div className="txt-label-nav mb-2">Options on request</div>
              <div className="text-xs">Upload your data, private to your users</div>
              <div className="text-xs">Your own dedicated instance</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant">
        <div className={MAX}>
          <div className="max-w-2xl mb-14">
            <div className="txt-label-nav text-primary mb-4">Common questions</div>
            <h2 className="txt-primary-headline text-primary whitespace-nowrap">Questions we hear most often.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
            {FAQ.map((f) => (
              <div key={f.q} className="bg-surface p-7">
                <h3 className="txt-section-title text-primary text-lg mb-2">{f.q}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 border-t border-outline-variant text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="txt-primary-headline text-primary mb-6 text-3xl md:text-4xl">
            Ready to see the Einklang Agent in your environment?
          </h2>
          <p className="txt-body mb-10">Start with a no-commitment pilot. We'll deploy it in your Teams tenant and measure the impact together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a pilot</a>
          </div>
        </div>
      </section>
    </>
  );
}