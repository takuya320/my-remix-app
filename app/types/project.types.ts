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

/** A project without its long-form fields, for the index cards. */
export type ProjectSummary = Omit<Project, 'details' | 'demoUrl' | 'githubUrl'>
