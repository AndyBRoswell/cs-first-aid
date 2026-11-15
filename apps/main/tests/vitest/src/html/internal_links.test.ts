import { expect, test } from 'vitest'
import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import { CommentNode, TextNode, parse } from 'node-html-parser'
import * as util from '@cs-first-aid/util'
import { rewrite_HTML_links, with_base } from '@/html/internal_links.ts'

test('resolves site-root links and preserves other URLs', { tags: [ 'apps/main/src/html/internal_links.ts:with_base' ] }, () => {
  const main = '/cs-first-aid/main'
  const dev = '/cs-first-aid/dev'
  const course = 'courses/example/'
  for (const [href, base, expected] of [
    [`/${course}`                     , '/'       , `/${course}`],
    [`/${course}`                     , main      , `${main}/${course}`],
    [`/en/${course}?view=full#details`, `${dev}/` , `${dev}/en/${course}?view=full#details`],
    ['/'                              , `${main}/`, `${main}/`],
    [main                             , `${main}/`, main], // An existing deployment prefix must not be added twice.
    [`${main}/#details`               , main      , `${main}/#details`],
    [`${main}?view=full`              , main      , `${main}?view=full`],
    [`${main}land/`                   , main      , `${main}${main}land/`], // A shared string prefix is not necessarily the same path segment.
    ['#details'                       , main      , '#details'],
    ['../example/'                    , main      , '../example/'],
    ['?view=full'                     , main      , '?view=full'],
    ['https://example.com/page'       , main      , 'https://example.com/page'],
    ['//example.com/page'             , main      , '//example.com/page'], // A network-path reference changes the host, not the local path.
    ['mailto:reader@example.com'      , main      , 'mailto:reader@example.com'],
  ] as const) {
    expect(with_base(href, base), `${href} (base: ${base})`).toBe(expected)
  }
})

test('rewrites rendered links for root and subpath deployments', { tags: [ 'apps/main/src/html/internal_links.ts:rewrite_HTML_links' ] }, async () => {
  const renderer = await createMarkdownProcessor({ syntaxHighlight: false })
  const rendered = await renderer.render([
    '[Rust](/courses-textbooks-and-references/programming/rust-programming/)',
    '[Details][details]', // Reference-style Markdown links must be handled after rendering too.
    '[Local](#details)',
    '[External](https://example.com/)',
    '',
    '[details]: /en/guide/?view=full#details',
  ].join('\n'))
  const HTML = util.create_HTML_document()
  const head = HTML.querySelector('head')!
  const body = HTML.querySelector('body')!
  head.appendChild(util.create_HTML_element('base', { href: '/' }))
  head.appendChild(util.create_HTML_element('link', { rel: 'stylesheet', href: '/style.css' }))
  body.appendChild(new CommentNode('preserved'))
  body.insertAdjacentHTML('beforeend', rendered.code) // Combine rendered Markdown with programmatically created HTML.
  body.appendChild(util.create_HTML_element('a', { href: '/generated/?a=1&b=2#details' }, 'Generated'))
  const map = body.appendChild(util.create_HTML_element('map', { name: 'navigation' }))
  map.appendChild(util.create_HTML_element('area', { href: '/area/', alt: 'Area' })) // Image-map links also need the deployment prefix.
  body.appendChild(util.create_HTML_element('a', {}, 'No href'))
  body.appendChild(util.create_HTML_element('img', { src: '/image.png' }))
  body.appendChild(util.create_HTML_element('pre', {}, '<a href="/code/">')) // The helper escapes this as displayed code, not a real link.
  const script = body.appendChild(util.create_HTML_element('script'))
  script.appendChild(new TextNode("const example = '<a href=\"/script/\">';")) // Preserve raw JavaScript without parsing its string as HTML.
  const source = HTML.toString()
  for (const base of ['/', '/cs-first-aid/main/', '/cs-first-aid/dev/']) {
    const document = rewrite_HTML_links(parse(source, { comment: true }), base)
    const transformed = document.toString()
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
    expect(document.querySelector('base')?.getAttribute('href')).toBe('/') // The document's URL resolution base must remain unchanged.
    expect(document.querySelector('link')?.getAttribute('href')).toBe('/style.css')
    expect(document.querySelector('img')?.getAttribute('src')).toBe('/image.png') // Resource URLs are outside this navigation-link transformation.
    expect(transformed).toContain('<!--preserved-->')
    expect(document.querySelector('pre')?.text).toBe('<a href="/code/">')
    expect(document.querySelector('script')?.rawText).toBe("const example = '<a href=\"/script/\">';")
    expect(rewrite_HTML_links(document, base)).toBe(document) // Reuse the existing tree rather than create a replacement.
    expect(document.toString()).toBe(transformed) // Repeated processing must be idempotent.
    const uppercase = rewrite_HTML_links(parse('<a HREF="/case/">Case</a>'), base) // HTML attribute names are case-insensitive.
    expect(uppercase.querySelector('a')?.getAttribute('href')).toBe(`${prefix}/case/`)
  }
})
