import { expect, test } from 'vitest'
import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import { parse } from 'node-html-parser'
import { rewrite_HTML_links, with_base } from '@/html/internal_links.ts'

test('resolves site-root links and preserves other URLs', { tags: [ 'apps/main/src/html/internal_links.ts:with_base' ] }, () => {
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

test('rewrites rendered links for root and subpath deployments', { tags: [ 'apps/main/src/html/internal_links.ts:rewrite_HTML_links' ] }, async () => {
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
