import { expect, test, vi } from 'vitest'
import type { APIContext } from 'astro'
import { onRequest } from '@/middleware.ts'

test('rewrites HTML responses and preserves response semantics', { tags: [ 'apps/main/src/middleware.ts:onRequest' ] }, async ({ onTestFinished }) => {
  const base = '/cs-first-aid/main'
  vi.stubEnv('BASE_URL', base)
  onTestFinished(() => { vi.unstubAllEnvs() })
  const context = {} as APIContext
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
  expect(response.status).toBe(201)
  expect(response.statusText).toBe('Created')
  expect(response.headers.get('x-test')).toBe('preserved')
  expect(response.headers.has('content-length')).toBe(false)
  expect(response.headers.has('etag')).toBe(false)

  for (const untouched of [
    new Response('{"href":"/guide/"}', { headers: { 'content-type': 'application/json' } }),
    new Response(null, { status: 204 }),
    new Response(null, { status: 302, headers: { location: '/login/' } }),
  ]) {
    expect(await onRequest(context, async () => untouched)).toBe(untouched)
    expect(untouched.bodyUsed).toBe(false)
  }
  const unchanged_response = await onRequest(context, async () => new Response('<a href="https://example.com/">External</a>', {
    headers: { 'content-type': 'text/html', etag: 'unchanged' },
  }))
  if (!(unchanged_response instanceof Response)) { throw new Error('Expected an unchanged HTML response.') }
  expect(unchanged_response.headers.get('etag')).toBe('unchanged')
  expect(await unchanged_response.text()).toBe('<a href="https://example.com/">External</a>')

  const root_response = new Response(source, { headers: { 'content-type': 'text/html' } })
  vi.stubEnv('BASE_URL', '/')
  const root_result = await onRequest(context, async () => root_response)
  if (!(root_result instanceof Response)) { throw new Error('Expected a root deployment response.') }
  expect(await root_result.text()).toBe(source)
})
