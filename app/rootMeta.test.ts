import type { MetaFunction } from 'react-router'
import { describe, expect, it } from 'vitest'

import { meta } from '~/root'

const metaArgs = (error?: unknown) =>
  ({ error }) as unknown as Parameters<MetaFunction>[0]

// `isRouteErrorResponse` checks the shape rather than a class, and it requires
// `internal` and `data` as well as the status, so a fixture without them is
// read as an ordinary thrown value.
const routeErrorResponse = (status: number, statusText: string) => ({
  status,
  statusText,
  internal: false,
  data: null,
})

describe('root meta', () => {
  it('titles the 404 document so the tab does not show the raw URL', () => {
    expect(meta(metaArgs(routeErrorResponse(404, 'Not Found')))).toEqual([
      { title: 'ページが見つかりません - Remix情報ページ' },
    ])
  })

  it('titles other route error responses as a generic error', () => {
    expect(
      meta(metaArgs(routeErrorResponse(500, 'Internal Server Error'))),
    ).toEqual([{ title: 'エラーが発生しました - Remix情報ページ' }])
  })

  it('titles a thrown error as a generic error', () => {
    expect(meta(metaArgs(new Error('boom')))).toEqual([
      { title: 'エラーが発生しました - Remix情報ページ' },
    ])
  })

  it('contributes nothing when a route rendered normally', () => {
    expect(meta(metaArgs(undefined))).toEqual([])
  })
})
