import type { BlogPost, BlogPostSummary } from '~/types/blog.types'
import type { Project, ProjectSummary } from '~/types/project.types'

export function findPostBySlug(
  posts: BlogPost[],
  slug: string | undefined,
): BlogPost | undefined {
  if (!slug) {
    return undefined
  }
  return posts.find((post) => post.slug === slug)
}

export function findProjectById(
  projects: Project[],
  id: string | undefined,
): Project | undefined {
  // Rejected `Number(id)`: it accepts '', ' ' and '1.5' and turns them into
  // lookups that can only fail, so a bad id and a missing project become the
  // same 404 with no way to tell them apart in a test.
  if (!id || !/^\d+$/.test(id)) {
    return undefined
  }
  return projects.find((project) => project.id === Number(id))
}

export function listPostSummaries(posts: BlogPost[]): BlogPostSummary[] {
  // Rejected a rest-spread omit: the index cards read none of the body, and
  // picking the fields explicitly makes tsc complain when BlogPost grows a
  // field, instead of quietly serializing it into every listing response.
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    author: post.author,
    tags: post.tags,
    readTime: post.readTime,
  }))
}

export function listProjectSummaries(projects: Project[]): ProjectSummary[] {
  return projects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    image: project.image,
    techStack: project.techStack,
    features: project.features,
    status: project.status,
  }))
}
