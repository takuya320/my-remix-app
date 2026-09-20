// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { ErrorBoundary } from '~/root'

afterEach(cleanup)

function renderThrowing(thrown: unknown) {
  const Stub = createRoutesStub([
    {
      path: '/',
      Component: () => null,
      loader() {
        throw thrown
      },
      ErrorBoundary,
    },
  ])

  render(<Stub initialEntries={['/']} />)
}

describe('root ErrorBoundary', () => {
  it('shows the not-found page for a 404 response', async () => {
    renderThrowing(new Response('Not Found', { status: 404 }))

    expect(
      await screen.findByRole('heading', { name: 'ページが見つかりません' }),
    ).toBeDefined()
    expect(
      screen.getByRole('link', { name: 'トップページに戻る' }),
    ).toBeDefined()
  })

  it('reports the status for other error responses', async () => {
    renderThrowing(new Response('Boom', { status: 503 }))

    expect(
      await screen.findByRole('heading', { name: 'エラーが発生しました' }),
    ).toBeDefined()
    expect(screen.getByText(/503/)).toBeDefined()
  })

  it('keeps the thrown value off the page and logs it instead', async () => {
    const logged = vi.spyOn(console, 'error').mockImplementation(() => {})

    renderThrowing(new Error('connection string leaked'))

    expect(
      await screen.findByRole('heading', { name: 'エラーが発生しました' }),
    ).toBeDefined()
    expect(screen.queryByText(/connection string leaked/)).toBeNull()
    expect(
      logged.mock.calls.some((call) =>
        call.some(
          (arg) =>
            arg instanceof Error && arg.message === 'connection string leaked',
        ),
      ),
    ).toBe(true)

    logged.mockRestore()
  })
})
