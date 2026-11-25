import { createFileRoute, Link } from "@tanstack/react-router";
import academy from "@/data/academy-programmes.json";
import company from "@/data/company.json";
import { shareImageMeta } from "@/lib/share-image";

const sessionDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(`${academy.liveSession.date}T00:00:00Z`));

const title = `Free live session: ${sessionDate} | Einklang.AI`;
const description = `Join Einklang's free live session on ${sessionDate}.`;

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      ...shareImageMeta,
    ],
    links: [{ rel: "canonical", href: "https://einklang-muse.lovable.app/workshop" }],
  }),
  component: WorkshopPage,
});

function WorkshopPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="txt-label-nav text-primary mb-5">Skill Build Academy</div>
      <h1 className="txt-primary-headline text-primary mb-8 whitespace-nowrap text-3xl md:text-5xl">Free live session</h1>
      <p className="txt-body mb-10">
        Join our free live session on <time dateTime={academy.liveSession.date}>{sessionDate}</time>.
      </p>
      <dl className="flex flex-wrap gap-x-16 gap-y-6 border-y border-outline-variant py-8 mb-10">
        <div>
          <dt className="txt-label-nav text-primary mb-2">Date</dt>
          <dd className="text-lg text-on-surface-variant"><time dateTime={academy.liveSession.date}>{sessionDate}</time></dd>
        </div>
        <div>
          <dt className="txt-label-nav text-primary mb-2">Price</dt>
          <dd className="text-lg text-on-surface-variant">{academy.liveSession.price === 0 ? "Free" : `${academy.currency} ${academy.liveSession.price.toLocaleString("en-GB")}`}</dd>
        </div>
      </dl>
      <div className="flex flex-wrap gap-4">
        <a href={`mailto:${company.contactEmail}?subject=Live%20session%20enquiry`} className="btn-primary">Enquire about the session</a>
        <Link to="/products/academy" className="btn-secondary">Skill Build Academy</Link>
      </div>
    </section>
  );
}