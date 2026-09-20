import type { LoaderFunctionArgs } from 'react-router'
import { describe, expect, it } from 'vitest'

import { blogPosts } from '~/data/posts'
import { projects } from '~/data/projects'
import {
  loader as blogPostLoader,
  meta as blogPostMeta,
} from '~/routes/_layout.blog.$slug'
import {
  loader as projectLoader,
  meta as projectMeta,
} from '~/routes/_layout.projects.$id'

// The loaders read no other part of the request, so a bare params object is
// the whole input; the cast keeps the test from constructing a full Request
// and router context that nothing under test touches.
const args = (params: Record<string, string>) =>
  ({ params }) as unknown as LoaderFunctionArgs

async function statusOfThrown(run: () => Promise<unknown>) {
  try {
    await run()
  } catch (thrown) {
    return thrown instanceof Response ? thrown.status : thrown
  }
  return 'did not throw'
}

describe('blog post loader', () => {
  it('returns the post for a slug that exists', async () => {
    const { slug } = blogPosts[0]

    const data = await blogPostLoader(args({ slug }))

    expect(data.post.slug).toBe(slug)
  })

  it('throws a 404 response for an unknown slug', async () => {
    expect(
      await statusOfThrown(() => blogPostLoader(args({ slug: 'nope' }))),
    ).toBe(404)
  })

  it('throws a 404 response when the param is missing', async () => {
    expect(await statusOfThrown(() => blogPostLoader(args({})))).toBe(404)
  })
})

describe('project loader', () => {
  it('returns the project for an id that exists', async () => {
    const { id } = projects[0]

    const data = await projectLoader(args({ id: String(id) }))

    expect(data.project.id).toBe(id)
  })

  it('throws a 404 response for an unknown id', async () => {
    expect(
      await statusOfThrown(() => projectLoader(args({ id: '9999' }))),
    ).toBe(404)
  })

  it.each(['abc', '1.5', ''])(
    'throws a 404 response for the malformed id %j',
    async (id) => {
      expect(await statusOfThrown(() => projectLoader(args({ id })))).toBe(404)
    },
  )
})

// `meta` runs without loader data whenever the loader threw, which is the 404
// path above.
const metaArgs = <T>(loaderData: T) =>
  ({ loaderData }) as unknown as Parameters<typeof blogPostMeta>[0]

describe('blog post meta', () => {
  it('describes the post with its excerpt, not with its raw HTML body', async () => {
    const post = blogPosts[0]
    const descriptors = blogPostMeta(metaArgs({ post }))

    expect(descriptors).toContainEqual({
      name: 'description',
      content: post.excerpt,
    })
  })

  it('falls back to a not-found title when the loader threw', () => {
    expect(blogPostMeta(metaArgs(undefined))).toEqual([
      { title: '記事が見つかりません' },
    ])
  })
})

describe('project meta', () => {
  it('falls back to a not-found title when the loader threw', () => {
    expect(
      projectMeta(
        metaArgs(undefined) as unknown as Parameters<typeof projectMeta>[0],
      ),
    ).toEqual([{ title: 'プロジェクトが見つかりません' }])
  })
})
