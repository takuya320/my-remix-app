export interface Project {
  id: number
  name: string
  description: string
  /** Emoji shown in place of a thumbnail. */
  image: string
  techStack: string[]
  features: string[]
  status: string
  /** Long-form description as an HTML fragment. */
  details: string
  demoUrl: string
  githubUrl: string
}
