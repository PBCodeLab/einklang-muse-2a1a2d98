import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "Letter to our CEO clients — Einklang Academy" },
      { name: "description", content: "An open letter from Einklang Academy to the CEOs we partner with." },
      { property: "og:title", content: "Letter to our CEO clients — Einklang Academy" },
      { property: "og:description", content: "An open letter from Einklang Academy to the CEOs we partner with." },
    ],
  }),
  component: LetterPage,
});

function LetterPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24">
      <div className="txt-label-nav text-primary mb-4">A letter</div>
      <h1 className="txt-primary-headline text-primary mb-6">To our CEO clients.</h1>
      <p className="txt-body">
        Coming soon — a direct note from our founders on what AI-native operational excellence means for your organisation, and how we partner with you to get there.
      </p>
    </section>
  );
}
