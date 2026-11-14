import { expect, test } from 'vitest'
import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import type { MdxJsxAttribute } from 'mdast-util-mdx-jsx'
import { parse } from 'node-html-parser'
import { rehype_base_links, with_base } from '@/integrations/internal_links.ts'

type Root = Parameters<ReturnType<typeof rehype_base_links>>[0]

test('resolves site-root links and preserves other URLs', { tags: [ 'apps/main/src/integrations/internal_links.ts:with_base' ] }, () => {
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

test('renders Markdown links for root and subpath deployments', { tags: [ 'apps/main/src/integrations/internal_links.ts:rehype_base_links' ] }, async () => {
  for (const base of ['/', '/cs-first-aid/main/', '/cs-first-aid/dev/']) {
    const renderer = await createMarkdownProcessor({
      syntaxHighlight: false,
      rehypePlugins: [[rehype_base_links, { base }]],
    })
    const rendered = await renderer.render([
      '[Rust](/courses-textbooks-and-references/programming/rust-programming/)',
      '[Details][details]',
      '[Local](#details)',
      '[External](https://example.com/)',
      '',
      '[details]: /en/guide/?view=full#details',
    ].join('\n'))
    const links = parse(rendered.code).querySelectorAll('a').map(link => link.getAttribute('href'))
    const prefix = base.replace(/\/$/, '')
    expect(links, `base: ${base}`).toEqual([
      `${prefix}/courses-textbooks-and-references/programming/rust-programming/`,
      `${prefix}/en/guide/?view=full#details`,
      '#details',
      'https://example.com/',
    ])
  }
})

test('rewrites literal MDX hrefs and preserves expressions', { tags: [ 'apps/main/src/integrations/internal_links.ts:rehype_base_links' ] }, () => {
  const literal: MdxJsxAttribute = { type: 'mdxJsxAttribute', name: 'href', value: '/en/guide/#details' }
  const expression: MdxJsxAttribute = { type: 'mdxJsxAttribute', name: 'href', value: { type: 'mdxJsxAttributeValueExpression', value: 'target' } }
  const tree: Root = {
    type: 'root',
    children: [
      { type: 'mdxJsxTextElement', name: 'a', attributes: [literal], children: [] },
      { type: 'mdxJsxFlowElement', name: 'Link', attributes: [expression], children: [] },
    ],
  }
  const transform = rehype_base_links({ base: '/cs-first-aid/main/' })
  transform(tree)
  expect(literal.value).toBe('/cs-first-aid/main/en/guide/#details')
  expect(expression.value).toEqual({ type: 'mdxJsxAttributeValueExpression', value: 'target' })
})
