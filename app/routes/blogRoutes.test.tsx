// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'

import { blogPosts } from '~/data/posts'
import BlogIndex, {
  loader as blogIndexLoader,
} from '~/routes/_layout.blog._index'
import BlogPost, {
  ErrorBoundary as BlogPostErrorBoundary,
  loader as blogPostLoader,
} from '~/routes/_layout.blog.$slug'

afterEach(cleanup)

describe('blog index page', () => {
  it('renders a card per post, linking to the post', async () => {
    const Stub = createRoutesStub([
      { path: '/blog', Component: BlogIndex, loader: blogIndexLoader },
    ])

    render(<Stub initialEntries={['/blog']} />)

    const first = blogPosts[0]
    const link = await screen.findByRole('link', {
      name: new RegExp(first.title),
    })

    expect(link).toHaveProperty('pathname', `/blog/${first.slug}`)
    expect(screen.getByText(first.excerpt)).toBeDefined()
  })
})

describe('blog post page', () => {
  function renderPost(slug: string) {
    const Stub = createRoutesStub([
      {
        path: '/blog/:slug',
        Component: BlogPost,
        loader: blogPostLoader,
        ErrorBoundary: BlogPostErrorBoundary,
      },
    ])

    render(<Stub initialEntries={[`/blog/${slug}`]} />)
  }

  it('renders the article body as markup, not as escaped text', async () => {
    const post = blogPosts[0]

    renderPost(post.slug)

    expect(
      await screen.findByRole('heading', { name: post.title, level: 1 }),
    ).toBeDefined()
    expect(
      screen.getByRole('heading', { name: 'はじめに', level: 2 }),
    ).toBeDefined()
  })

  it('shows the not-found boundary for an unknown slug', async () => {
    renderPost('no-such-post')

    expect(
      await screen.findByRole('heading', { name: '記事が見つかりません' }),
    ).toBeDefined()
    expect(screen.getByRole('link', { name: 'ブログ一覧に戻る' })).toBeDefined()
  })
})
