export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  linkedinUrl: string;
  coverImage?: string;
};

// Newest first. To add a new post, prepend an entry here.
export const posts: Post[] = [
  {
    id: "ai-enabled-to-ai-native",
    title: "From AI-Enabled to AI-Native: Why Most Organisations Are Already Behind",
    excerpt:
      "AI does not fix a broken process. It accelerates it. The real challenge is not adoption, it is redesign. The organisations that will pull ahead are not the ones with the most tools, but the ones that understand their value streams and build the people to lead the transition.",
    date: "2026-06-01",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7467186994331144193/?commentUrn=urn%3Ali%3Acomment%3A(activity%3A7467186994331144193%2C7468036200524808192)&dashCommentUrn=urn%3Ali%3Afsd_comment%3A(7468036200524808192%2Curn%3Ali%3Aactivity%3A7467186994331144193)&dashReplyUrn=urn%3Ali%3Afsd_comment%3A(7468294771762106369%2Curn%3Ali%3Aactivity%3A7467186994331144193)&replyUrn=urn%3Ali%3Acomment%3A(activity%3A7467186994331144193%2C7468294771762106369)",
  },
];