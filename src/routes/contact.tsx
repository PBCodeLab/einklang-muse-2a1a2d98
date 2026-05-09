import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Einklang.AI" },
      { name: "description", content: "Book a 30-minute demo or start a pilot with the Einklang team." },
      { property: "og:title", content: "Contact — Einklang.AI" },
      { property: "og:description", content: "Book a 30-minute demo with the Einklang team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24 text-center">
      <div className="txt-label-nav text-primary mb-4">Get in touch</div>
      <h1 className="txt-primary-headline text-primary mb-6">Let's talk about scaling operational excellence.</h1>
      <p className="txt-body mb-10">
        Book a 30-minute introduction with our team. We'll walk you through the Einklang Agent, show how it embeds inside Microsoft Teams, and discuss what a pilot could look like in your organisation.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="https://calendly.com/aslamjilani-einklangacademy/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a demo</a>
        <a href="https://calendly.com/aslamjilani-einklangacademy/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">Start a pilot</a>
      </div>
      <div className="border-t border-outline-variant pt-8 text-sm text-on-surface-variant">
        Operating in Switzerland (DACH) · Germany / Austria · Brazil · LatAm · EU / UK
      </div>
    </section>
  );
}