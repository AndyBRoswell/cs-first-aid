import { expect, test, vi } from 'vitest'
import type { APIContext } from 'astro'
import { onRequest } from '@/middleware.ts'

test('rewrites HTML responses and preserves response semantics', { tags: [ 'apps/main/src/middleware.ts:onRequest' ] }, async ({ onTestFinished }) => {
  const base = '/cs-first-aid/main'
  vi.stubEnv('BASE_URL', base) // Simulate deployment under a path prefix.
  onTestFinished(() => { vi.unstubAllEnvs() }) // Restore environment variables even if an assertion fails.
  const context = {} as APIContext // This middleware does not access context properties.
  const source = '<a href="/guide/">Guide</a>'
  const response = await onRequest(context, async () => new Response(source, {
    status: 201,
    statusText: 'Created',
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'content-length': new TextEncoder().encode(source).byteLength.toString(), // Content-Length counts UTF-8 bytes.
      etag: 'original',
      'x-test': 'preserved',
    },
  }))
  if (!(response instanceof Response)) { throw new Error('Expected an HTML response.') }
  expect(await response.text()).toBe(`<a href="${base}/guide/">Guide</a>`)
  expect(response.status).toBe(201) // Rebuilding the response must preserve its HTTP status.
  expect(response.statusText).toBe('Created')
  expect(response.headers.get('x-test')).toBe('preserved') // Unrelated response headers must survive the rewrite.
  expect(response.headers.has('content-length')).toBe(false) // The original byte count is invalid after rewriting the body and should be removed.
  expect(response.headers.has('etag')).toBe(false) // The original validator no longer describes the rewritten content.

  for (const untouched of [
    new Response('{"href":"/guide/"}', { headers: { 'content-type': 'application/json' } }), // JSON must bypass HTML processing, even when it contains a URL.
    new Response(null, { status: 204 }), // A response without a body needs no transformation.
    new Response(null, { status: 302, headers: { location: '/login/' } }), // Bodyless redirects also pass through unchanged.
  ]) {
    expect(await onRequest(context, async () => untouched)).toBe(untouched) // Return the original response object.
    expect(untouched.bodyUsed).toBe(false) // Passing through must not consume the body.
  }
  const external_source = '<a href="https://example.com/">External</a>'
  const unchanged_response = await onRequest(context, async () => new Response(external_source, {
    headers: { 'content-type': 'text/html', etag: 'unchanged' },
  }))
  if (!(unchanged_response instanceof Response)) { throw new Error('Expected an unchanged HTML response.') }
  expect(unchanged_response.headers.get('etag')).toBe('unchanged') // HTML processing that leaves the body unchanged must retain its validator.
  expect(await unchanged_response.text()).toBe(external_source) // External links need no deployment prefix.

  const root_response = new Response(source, { headers: { 'content-type': 'text/html' } })
  vi.stubEnv('BASE_URL', '/') // Simulate deployment at the site root.
  const root_result = await onRequest(context, async () => root_response)
  if (!(root_result instanceof Response)) { throw new Error('Expected a root deployment response.') }
  expect(await root_result.text()).toBe(source) // Root deployment must preserve /guide/ rather than produce //guide/.
})
