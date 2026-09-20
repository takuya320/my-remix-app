// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'

import { projects } from '~/data/projects'
import ProjectsIndex, {
  loader as projectsIndexLoader,
} from '~/routes/_layout.projects._index'
import ProjectDetail, {
  ErrorBoundary as ProjectErrorBoundary,
  loader as projectLoader,
} from '~/routes/_layout.projects.$id'

afterEach(cleanup)

function renderDetail(id: string) {
  const Stub = createRoutesStub([
    {
      path: '/projects/:id',
      Component: ProjectDetail,
      loader: projectLoader,
      ErrorBoundary: ProjectErrorBoundary,
    },
  ])

  render(<Stub initialEntries={[`/projects/${id}`]} />)
}

describe('projects index page', () => {
  it('links each card to its project', async () => {
    const Stub = createRoutesStub([
      {
        path: '/projects',
        Component: ProjectsIndex,
        loader: projectsIndexLoader,
      },
    ])

    render(<Stub initialEntries={['/projects']} />)

    const first = projects[0]
    const link = await screen.findByRole('link', {
      name: new RegExp(first.name),
    })

    expect(link).toHaveProperty('pathname', `/projects/${first.id}`)
  })
})

describe('project detail page', () => {
  it('renders the project', async () => {
    const first = projects[0]

    renderDetail(String(first.id))

    expect(
      await screen.findByRole('heading', { name: first.name, level: 1 }),
    ).toBeDefined()
  })

  it('shows the not-found boundary for an id that is not a project', async () => {
    renderDetail('9999')

    expect(
      await screen.findByRole('heading', {
        name: 'プロジェクトが見つかりません',
      }),
    ).toBeDefined()
  })

  it('shows the not-found boundary for a malformed id', async () => {
    renderDetail('1.5')

    expect(
      await screen.findByRole('heading', {
        name: 'プロジェクトが見つかりません',
      }),
    ).toBeDefined()
  })
})
