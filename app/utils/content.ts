import type { BlogPost } from '~/types/blog.types'
import type { Project } from '~/types/project.types'

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
