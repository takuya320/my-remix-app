// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'

import Navigation from '~/components/Navigation'

afterEach(cleanup)

function renderAt(pathname: string) {
  const Stub = createRoutesStub([{ path: '*', Component: Navigation }])

  render(<Stub initialEntries={[pathname]} />)
}

const activeClass = 'border-b-2'

describe('Navigation', () => {
  it('links to every section', () => {
    renderAt('/')

    expect(screen.getByRole('link', { name: 'ブログ' })).toHaveProperty(
      'pathname',
      '/blog',
    )
    expect(screen.getAllByRole('link')).toHaveLength(9)
  })

  it('marks the item for the current page', () => {
    renderAt('/blog')

    expect(screen.getByRole('link', { name: 'ブログ' }).className).toContain(
      activeClass,
    )
    expect(
      screen.getByRole('link', { name: 'ホーム' }).className,
    ).not.toContain(activeClass)
  })

  it('marks nothing on a page below a section, because the match is exact', () => {
    renderAt('/blog/understanding-loaders')

    expect(
      screen
        .getAllByRole('link')
        .filter((link) => link.className.includes(activeClass)),
    ).toHaveLength(0)
  })
})
