import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who we are — Einklang Academy" },
      { name: "description", content: "The team and the thinking behind Einklang Academy." },
      { property: "og:title", content: "Who we are — Einklang Academy" },
      { property: "og:description", content: "The team and the thinking behind Einklang Academy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24">
      <div className="txt-label-nav text-primary mb-4">Who we are</div>
      <h1 className="txt-primary-headline text-primary mb-6">A team built for AI-native operational excellence.</h1>
      <p className="txt-body">
        Einklang Academy partners with leaders across Switzerland, DACH, the EU/UK and Latin America to scale operational excellence — combining decades of OE expertise with AI-native delivery.
      </p>
    </section>
  );
}
