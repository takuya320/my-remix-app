/**
 * The copyright year, always read in JST.
 *
 * Rejected `new Date().getFullYear()`: it reads the host timezone, and the
 * server runs in UTC while the audience is in JST. Between 00:00 and 09:00 JST
 * on 1 January the server would render the previous year and the hydrating
 * browser the current one, which React reports as a hydration mismatch.
 */
export function currentYearInTokyo(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
  }).format(now)
}
