export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  linkedinUrl: string;
  coverImage?: string;
};

// Newest first. To add a new post, prepend an entry here.
export const posts: Post[] = [];