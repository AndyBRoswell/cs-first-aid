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
    [main                             , `${main}/`, main],
    [`${main}/#details`               , main      , `${main}/#details`],
    [`${main}?view=full`              , main      , `${main}?view=full`],
    [`${main}land/`                   , main      , `${main}${main}land/`],
    ['#details'                       , main      , '#details'],
    ['../example/'                    , main      , '../example/'],
    ['?view=full'                     , main      , '?view=full'],
    ['https://example.com/page'       , main      , 'https://example.com/page'],
    ['//example.com/page'             , main      , '//example.com/page'],
    ['mailto:reader@example.com'      , main      , 'mailto:reader@example.com'],
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
  const HTML = parse('<!DOCTYPE html><html><head></head><body></body></html>') // todo: init an html document
  const head = HTML.querySelector('head')!
  const body = HTML.querySelector('body')!
  head.appendChild(util.create_HTML_element('base', { href: '/' }))
  head.appendChild(util.create_HTML_element('link', { rel: 'stylesheet', href: '/style.css' }))
  body.appendChild(new CommentNode('preserved'))
  body.insertAdjacentHTML('beforeend', rendered.code)
  body.appendChild(util.create_HTML_element('a', { href: '/generated/?a=1&b=2#details' }, 'Generated'))
  const map = body.appendChild(util.create_HTML_element('map', { name: 'navigation' }))
  map.appendChild(util.create_HTML_element('area', { href: '/area/', alt: 'Area' }))
  body.appendChild(util.create_HTML_element('a', {}, 'No href'))
  body.appendChild(util.create_HTML_element('img', { src: '/image.png' }))
  body.appendChild(util.create_HTML_element('pre', {}, '<a href="/code/">'))
  const script = body.appendChild(util.create_HTML_element('script'))
  script.appendChild(new TextNode("const example = '<a href=\"/script/\">';"))
  const source = HTML.toString()
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
    expect(document.querySelector('pre')?.text).toBe('<a href="/code/">')
    expect(document.querySelector('script')?.rawText).toBe("const example = '<a href=\"/script/\">';")
    expect(rewrite_HTML_links(transformed, base)).toBe(transformed)
    const uppercase = parse(rewrite_HTML_links('<a HREF="/case/">Case</a>', base))
    expect(uppercase.querySelector('a')?.getAttribute('href')).toBe(`${prefix}/case/`)
  }
})
