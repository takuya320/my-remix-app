import { describe, expect, it } from 'vitest'

import { currentYearInTokyo } from '~/utils/date'

describe('currentYearInTokyo', () => {
  it('reads the year in JST, not in the host timezone', () => {
    // 2025-12-31 20:00 UTC is already 2026-01-01 05:00 in Tokyo, the window
    // where a UTC server and a JST browser used to disagree.
    expect(currentYearInTokyo(new Date('2025-12-31T20:00:00Z'))).toBe('2026')
  })

  it('still reports the old year just before the boundary', () => {
    expect(currentYearInTokyo(new Date('2025-12-31T14:59:59Z'))).toBe('2025')
  })
})
