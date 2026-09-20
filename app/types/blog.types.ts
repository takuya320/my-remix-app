export interface BlogPost {
  slug: string
  title: string
  /** One-sentence summary. Used on the blog index card and as the meta description. */
  excerpt: string
  /** Article body as an HTML fragment. */
  content: string
  /** ISO date, `YYYY-MM-DD`. */
  date: string
  author: string
  tags: string[]
  readTime: string
}
