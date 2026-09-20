import { describe, expect, it } from 'vitest'

import type { BlogPost } from '~/types/blog.types'
import type { Project } from '~/types/project.types'
import {
  findPostBySlug,
  findProjectById,
  listPostSummaries,
  listProjectSummaries,
} from '~/utils/content'

const post = (overrides: Partial<BlogPost> = {}): BlogPost => ({
  slug: 'a-post',
  title: 'A post',
  excerpt: 'One sentence.',
  content: '<h2>Body</h2>',
  date: '2026-01-01',
  author: 'Author',
  tags: ['tag'],
  readTime: '5分',
  ...overrides,
})

const project = (overrides: Partial<Project> = {}): Project => ({
  id: 1,
  name: 'A project',
  description: 'A description.',
  image: '🛒',
  techStack: ['React Router'],
  features: ['A feature'],
  status: '完成',
  details: '<h2>Details</h2>',
  demoUrl: '#',
  githubUrl: '#',
  ...overrides,
})

describe('findPostBySlug', () => {
  const posts = [post({ slug: 'first' }), post({ slug: 'second' })]

  it('returns the post with the matching slug', () => {
    expect(findPostBySlug(posts, 'second')?.slug).toBe('second')
  })

  it('returns undefined for a slug that is not in the collection', () => {
    expect(findPostBySlug(posts, 'third')).toBeUndefined()
  })

  it('returns undefined when the route param is missing', () => {
    expect(findPostBySlug(posts, undefined)).toBeUndefined()
  })

  it('returns undefined for an empty slug rather than matching an empty one', () => {
    expect(findPostBySlug([...posts, post({ slug: '' })], '')).toBeUndefined()
  })
})

describe('findProjectById', () => {
  const projects = [project({ id: 1 }), project({ id: 2 })]

  it('returns the project with the matching id', () => {
    expect(findProjectById(projects, '2')?.id).toBe(2)
  })

  it('returns undefined for an id that is not in the collection', () => {
    expect(findProjectById(projects, '99')).toBeUndefined()
  })

  it.each(['', ' ', 'abc', '1.5', '-1', '1e0', ' 1'])(
    'rejects %j instead of coercing it to a number',
    (id) => {
      expect(findProjectById(projects, id)).toBeUndefined()
    },
  )

  it('returns undefined when the route param is missing', () => {
    expect(findProjectById(projects, undefined)).toBeUndefined()
  })
})

describe('listPostSummaries', () => {
  it('drops the body so it is not serialized into the index payload', () => {
    const [summary] = listPostSummaries([post()])

    expect(summary).not.toHaveProperty('content')
  })

  it('keeps every field the index cards render', () => {
    const [summary] = listPostSummaries([post()])

    expect(summary).toEqual({
      slug: 'a-post',
      title: 'A post',
      excerpt: 'One sentence.',
      date: '2026-01-01',
      author: 'Author',
      tags: ['tag'],
      readTime: '5分',
    })
  })

  it('preserves the order of the collection', () => {
    const summaries = listPostSummaries([
      post({ slug: 'first' }),
      post({ slug: 'second' }),
    ])

    expect(summaries.map((summary) => summary.slug)).toEqual([
      'first',
      'second',
    ])
  })
})

describe('listProjectSummaries', () => {
  it('drops the long-form fields the card grid never reads', () => {
    const [summary] = listProjectSummaries([project()])

    expect(summary).not.toHaveProperty('details')
    expect(summary).not.toHaveProperty('demoUrl')
    expect(summary).not.toHaveProperty('githubUrl')
  })

  it('keeps every field the cards render', () => {
    const [summary] = listProjectSummaries([project()])

    expect(summary).toEqual({
      id: 1,
      name: 'A project',
      description: 'A description.',
      image: '🛒',
      techStack: ['React Router'],
      features: ['A feature'],
      status: '完成',
    })
  })
})
