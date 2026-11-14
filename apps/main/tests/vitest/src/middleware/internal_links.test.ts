import { expect, test, vi } from 'vitest'
import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import type { APIContext } from 'astro'
import { parse } from 'node-html-parser'
import { rewrite_HTML_links, with_base } from '@/middleware/internal_links.ts'
import { onRequest } from '@/middleware/index.ts'

test('resolves site-root links and preserves other URLs', { tags: [ 'apps/main/src/middleware/internal_links.ts:with_base' ] }, () => {
  const main = '/cs-first-aid/main'
  const dev = '/cs-first-aid/dev'
  const course = 'courses/example/'
  for (const [href, base, expected] of [
    [`/${course}`, '/', `/${course}`],
    [`/${course}`, main, `${main}/${course}`],
    [`/en/${course}?view=full#details`, `${dev}/`, `${dev}/en/${course}?view=full#details`],
    ['/', `${main}/`, `${main}/`],
    [main, `${main}/`, main],
    [`${main}/#details`, main, `${main}/#details`],
    [`${main}?view=full`, main, `${main}?view=full`],
    [`${main}land/`, main, `${main}${main}land/`],
    ['#details', main, '#details'],
    ['../example/', main, '../example/'],
    ['?view=full', main, '?view=full'],
    ['https://example.com/page', main, 'https://example.com/page'],
    ['//example.com/page', main, '//example.com/page'],
    ['mailto:reader@example.com', main, 'mailto:reader@example.com'],
  ] as const) {
    expect(with_base(href, base), `${href} (base: ${base})`).toBe(expected)
  }
})

test('rewrites rendered links for root and subpath deployments', { tags: [ 'apps/main/src/middleware/internal_links.ts:rewrite_HTML_links' ] }, async () => {
  const renderer = await createMarkdownProcessor({ syntaxHighlight: false })
  const rendered = await renderer.render([
    '[Rust](/courses-textbooks-and-references/programming/rust-programming/)',
    '[Details][details]',
    '[Local](#details)',
    '[External](https://example.com/)',
    '',
    '[details]: /en/guide/?view=full#details',
  ].join('\n'))
  const source = `<!DOCTYPE html><html><head><base href="/"><link rel="stylesheet" href="/style.css"></head><body>
    <!--preserved-->${rendered.code}
    <a href="/generated/?a=1&amp;b=2#details">Generated</a>
    <map name="navigation"><area href="/area/" alt="Area"></map>
    <a>No href</a><img src="/image.png">
    <pre>&lt;a href="/code/"&gt;</pre>
    <script>const example = '<a href="/script/">';</script>
  </body></html>`
  for (const base of ['/', '/cs-first-aid/main/', '/cs-first-aid/dev/']) {
    const transformed = rewrite_HTML_links(source, base)
    const document = parse(transformed)
    const links = document.querySelectorAll('a[href], area[href]').map(link => link.getAttribute('href'))
    const prefix = base.replace(/\/$/, '')
    expect(links, `base: ${base}`).toEqual([
      `${prefix}/courses-textbooks-and-references/programming/rust-programming/`,
      `${prefix}/en/guide/?view=full#details`,
      '#details',
      'https://example.com/',
      `${prefix}/generated/?a=1&b=2#details`,
      `${prefix}/area/`,
    ])
    expect(document.querySelector('base')?.getAttribute('href')).toBe('/')
    expect(document.querySelector('link')?.getAttribute('href')).toBe('/style.css')
    expect(document.querySelector('img')?.getAttribute('src')).toBe('/image.png')
    expect(transformed).toContain('<!--preserved-->')
    expect(transformed).toContain('<pre>&lt;a href="/code/"&gt;</pre>')
    expect(transformed).toContain("const example = '<a href=\"/script/\">';")
    expect(rewrite_HTML_links(transformed, base)).toBe(transformed)
    const uppercase = parse(rewrite_HTML_links('<a HREF="/case/">Case</a>', base))
    expect(uppercase.querySelector('a')?.getAttribute('href')).toBe(`${prefix}/case/`)
  }
})

test('rewrites HTML responses and preserves response semantics', { tags: [ 'apps/main/src/middleware/index.ts:onRequest' ] }, async ({ onTestFinished }) => {
  const base = '/cs-first-aid/main'
  vi.stubEnv('BASE_URL', base)
  onTestFinished(() => { vi.unstubAllEnvs() })
  const middleware = onRequest
  const context = {} as APIContext
  const response = await middleware(context, async () => new Response('<a href="/guide/">Guide</a>', {
    status: 201,
    statusText: 'Created',
    headers: { 'content-type': 'text/html; charset=utf-8', 'content-length': '27', etag: 'original', 'x-test': 'preserved' },
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
    expect(await middleware(context, async () => untouched)).toBe(untouched)
    expect(untouched.bodyUsed).toBe(false)
  }
  const unchanged = new Response('<a href="https://example.com/">External</a>', {
    headers: { 'content-type': 'text/html', etag: 'unchanged' },
  })
  const unchanged_response = await middleware(context, async () => unchanged)
  if (!(unchanged_response instanceof Response)) { throw new Error('Expected an unchanged HTML response.') }
  expect(unchanged_response.headers.get('etag')).toBe('unchanged')
  expect(await unchanged_response.text()).toBe('<a href="https://example.com/">External</a>')

  const root_response = new Response('<a href="/guide/">Guide</a>', { headers: { 'content-type': 'text/html' } })
  vi.stubEnv('BASE_URL', '/')
  const root_result = await middleware(context, async () => root_response)
  if (!(root_result instanceof Response)) { throw new Error('Expected a root deployment response.') }
  expect(await root_result.text()).toBe('<a href="/guide/">Guide</a>')
})
