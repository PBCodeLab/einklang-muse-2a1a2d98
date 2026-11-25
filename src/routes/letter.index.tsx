import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookCover from "@/assets/books/ai-by-design-cover.jpg.asset.json";
import { shareImageMeta } from "@/lib/share-image";

export const Route = createFileRoute("/letter/")({
  head: () => ({
    meta: [
      { title: "AI by Design: The Human Way to Make AI Work | Einklang.AI" },
      { name: "description", content: "By Lascelles, Maguire and Jilani. Practical steps to make AI work for the people who do the work. Available to pre-order on Amazon." },
      { property: "og:title", content: "AI by Design: The Human Way to Make AI Work | Einklang.AI" },
      { property: "og:description", content: "By Lascelles, Maguire and Jilani. Practical steps to make AI work for the people who do the work. Available to pre-order on Amazon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      ...shareImageMeta,
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-7 min-w-0">
            <div className="txt-label-nav text-primary mb-5">The book</div>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-normal text-primary mb-6">
              <span className="block whitespace-nowrap">AI by Design:</span>{" "}
              <span className="block text-balance">The Human Way to Make AI Work</span>
            </h1>
            <p className="txt-body mb-8">
              By Lascelles, Maguire and Jilani. Available to pre-order on Amazon.
            </p>
            <figure className="border-l-2 border-outline-variant pl-5 mb-8">
              <blockquote className="txt-body italic text-primary">
                “Wise, accessible and deeply practical, an essential companion for any leader.”
              </blockquote>
              <figcaption className="text-sm font-medium text-on-surface-variant mt-3">
                George Walkley
              </figcaption>
            </figure>
            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-3 items-stretch sm:items-start md:items-start">
              <Button asChild className="h-auto min-h-11 whitespace-normal rounded-sm px-5 py-3 text-sm font-semibold shadow-none w-full sm:w-auto">
                <a href="https://www.amazon.co.uk/dp/1739894693" target="_blank" rel="noopener noreferrer">
                  Pre-order on Amazon <ExternalLink aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal rounded-sm border-primary bg-transparent px-5 py-3 text-sm font-semibold text-primary shadow-none hover:bg-surface-container-low w-full sm:w-auto">
                <a href="https://calendly.com/aslamjilani-einklangacademy/30min" target="_blank" rel="noopener noreferrer">
                  Book a 30-min call with Aslam
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end lg:pr-10">
            <img
              src={bookCover.url}
              alt="Cover of AI by Design: The Human Way to Make AI Work"
              width={1000}
              height={1500}
              className="block w-full max-w-64 lg:max-w-80 h-auto shadow-book-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant bg-surface-container-lowest py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-6 md:gap-16">
          <h2 className="txt-section-title text-primary tracking-normal md:col-span-4">Why we wrote it</h2>
          <p className="txt-body md:col-span-8 max-w-3xl">
            AI only creates value when it is designed around the people who do the work. The book shows leaders how to get there in practical steps, drawing on decades of operational excellence in industry, banking and consulting.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-16">
        <h2 className="txt-section-title text-primary tracking-normal mb-8">From the book to your organisation</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <Button asChild variant="outline" className="group h-auto min-h-28 w-full justify-between whitespace-normal rounded-sm border-outline-variant bg-surface px-6 md:px-8 py-8 text-left shadow-none hover:border-primary hover:bg-surface-container-lowest">
            <Link to="/products/agent">
              <span className="txt-section-title tracking-normal text-primary">Einklang Agent</span>
              <ArrowRight className="text-primary" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="group h-auto min-h-28 w-full justify-between whitespace-normal rounded-sm border-outline-variant bg-surface px-6 md:px-8 py-8 text-left shadow-none hover:border-primary hover:bg-surface-container-lowest">
            <Link to="/products/academy">
              <span className="txt-section-title tracking-normal text-primary">Skill Build Academy</span>
              <ArrowRight className="text-primary" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
