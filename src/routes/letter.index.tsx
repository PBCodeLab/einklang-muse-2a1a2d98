import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/letter/")({
  head: () => ({
    meta: [
      { title: "TO OUR CEO CLIENTS — Einklang.AI" },
      { name: "description", content: "An open letter from Einklang.AI to the CEOs we partner with." },
      { property: "og:title", content: "TO OUR CEO CLIENTS — Einklang.AI" },
      { property: "og:description", content: "An open letter from Einklang.AI to the CEOs we partner with." },
    ],
  }),
  component: LetterPage,
});

function LetterPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24">
      <div className="txt-label-nav text-primary mb-4">A letter</div>
      <h1 className="txt-primary-headline text-primary mb-6">TO OUR CEO CLIENTS</h1>
      <p className="txt-body">
        Coming soon. A direct note from our founders on what AI-native operational excellence means for your organisation, and how we partner with you to get there.
      </p>
    </section>
  );
}
