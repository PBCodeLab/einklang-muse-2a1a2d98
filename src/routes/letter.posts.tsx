import { createFileRoute } from "@tanstack/react-router";
import { posts, type Post } from "@/data/posts";

export const Route = createFileRoute("/letter/posts")({
  head: () => ({
    meta: [
      { title: "Posts — AI Strategy — Einklang.AI" },
      { name: "description", content: "Curated posts from Einklang on AI strategy, AI-native organizations, and operational excellence." },
      { property: "og:title", content: "Posts — AI Strategy — Einklang.AI" },
      { property: "og:description", content: "Curated posts from Einklang on AI strategy, AI-native organizations, and operational excellence." },
    ],
  }),
  component: PostsPage,
});

function formatDate(iso: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

// Posts without a date yet are treated as the newest.
function sortPosts() {
  return [...posts].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return -1;
    if (!b.date) return 1;
    return a.date < b.date ? 1 : -1;
  });
}

function PostBody({ post }: { post: Post }) {
  const date = formatDate(post.date);
  return (
    <>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt=""
          className="w-full h-44 md:h-64 object-cover -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-5 md:mb-6"
          loading="lazy"
        />
      )}
      <div>
        {date && (
          <div className="txt-label-nav text-on-surface-variant mb-2">{date}</div>
        )}
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:underline underline-offset-4">
          {post.title}
        </h2>
        <p className="txt-body mb-4">{post.excerpt}</p>
        {post.linkedinUrl && (
          <span className="text-sm text-primary font-medium">
            Read on LinkedIn →
          </span>
        )}
      </div>
    </>
  );
}

function PostsPage() {
  const sorted = sortPosts();

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-10 py-24">
      <div className="txt-label-nav text-primary mb-4">AI Strategy</div>
      <h1 className="txt-primary-headline text-primary mb-6">Posts</h1>
      <p className="txt-body mb-12 max-w-2xl">
        Notes from the field on AI-native organizations, operational excellence,
        and the craft of scaling change.
      </p>

      {sorted.length === 0 ? (
        <p className="txt-body text-on-surface-variant">
          New posts coming soon.
        </p>
      ) : (
        <ul className="space-y-6">
          {sorted.map((post) => (
            <li key={post.id}>
              {post.linkedinUrl ? (
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-outline-variant bg-surface p-6 md:p-8 hover:border-primary transition"
                >
                  <PostBody post={post} />
                </a>
              ) : (
                <div className="group block border border-outline-variant bg-surface p-6 md:p-8">
                  <PostBody post={post} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
