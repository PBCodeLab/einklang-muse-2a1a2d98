import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Einklang.AI" },
      { name: "description", content: "How the Einklang Agent embeds proven improvement methods into every team's daily work." },
      { property: "og:title", content: "Solutions — Einklang.AI" },
      { property: "og:description", content: "How the Einklang Agent embeds proven improvement methods into every team's daily work." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24">
      <div className="txt-label-nav text-primary mb-4">Solutions</div>
      <h1 className="txt-primary-headline text-primary mb-6">Operational excellence, embedded where work happens.</h1>
      <p className="txt-body">
        The Einklang Agent gives every team access to proven improvement methods inside Microsoft Teams, turning every project into a step toward AI-native ways of working.
      </p>
    </section>
  );
}
