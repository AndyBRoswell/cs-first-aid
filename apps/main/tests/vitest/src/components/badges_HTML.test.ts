import { expect, test } from 'vitest'
import * as node_HTML_parser from 'node-html-parser'
import * as util from '@cs-first-aid/util'
import * as badges_HTML from '@/components/badges_HTML.ts'

const localized_releases = JSON.stringify({ 'zh-CN': '2026.1.0-dev', en: 'blank', }) // Locale-specific release selection.
const localized_subject = JSON.stringify([ // Localized custom badge text and classes.
  {
    text: { 'zh-CN': '数学', en: 'Math', },
    class: [ 'subject', 'Math', ],
  },
])

test('inject renders localized badges into the initial HTML', () => {
  const transformed = badges_HTML.inject(create_HTML(localized_releases, localized_subject)) // Run the same transformer used by the middleware.
  const root = node_HTML_parser.parse(transformed, { comment: true, }) // Inspect the generated server HTML without browser JavaScript.
  const link = root.querySelector('nav.sidebar a')! // This test fixture intentionally contains one badge host.
  const container = link.querySelector('.badges')! // Injection should append one shared badge container.
  const rendered_badges = container.querySelectorAll('.badge') // Release and subject badges must remain separate elements.

  expect(rendered_badges.map((badge: node_HTML_parser.HTMLElement) => badge.text)).toEqual([ '2026.1.0-dev', '数学', ])
  expect(rendered_badges.map((badge: node_HTML_parser.HTMLElement) => badge.classList.value)).toEqual([
    [ 'badge', 'release', 'dev', ],
    [ 'badge', 'subject', 'Math', ],
  ])
  expect(link.getAttribute('data-release-stage')).toBe(localized_releases) // Keep source metadata available for diagnostics and tests.
  expect(link.getAttribute('data-badges')).toBe(localized_subject) // Rendering must not consume the custom badge metadata.
  expect(transformed).toContain('<!--preserved-->') // Astro marker comments must survive the HTML round trip.

  const reinjected = node_HTML_parser.parse(badges_HTML.inject(transformed)) // A second middleware pass must be harmless.
  expect(reinjected.querySelectorAll('nav.sidebar .badges')).toHaveLength(1)
  expect(reinjected.querySelectorAll('nav.sidebar .badge')).toHaveLength(2)
})

test('inject reports incomplete localized metadata with its sidebar item', () => {
  const incomplete_releases = JSON.stringify({ en: 'blank', }) // Omit the root language intentionally to exercise build-time validation.
  expect(() => badges_HTML.inject(create_HTML(incomplete_releases, null))).toThrow('sidebar item {"label":"Fixture","href":"/fixture"}',)
})

function create_HTML(serialized_releases: string, serialized_badges: string | null): string {
  const document_element = util.create_HTML_element('html', { lang: 'zh-CN', }) // The document language drives localized badge resolution.
  const body = util.create_HTML_element('body')
  const sidebar = util.create_HTML_element('nav', { class: 'sidebar', }) // Match the Starlight sidebar boundary used by the transformer.
  const link_attributes: Record<string, string> = {
    href: '/fixture',
    'data-release-stage': serialized_releases,
  }
  if (serialized_badges !== null) { link_attributes['data-badges'] = serialized_badges } // Leave the optional attribute absent in the negative fixture.
  const link = util.create_HTML_element('a', link_attributes)

  link.appendChild(util.create_HTML_element('span', {}, 'Fixture')) // Build label content as a child node, just like Starlight does.
  sidebar.appendChild(link)
  body.appendChild(new node_HTML_parser.CommentNode('preserved')) // Verify that the transformer preserves existing HTML comments.
  body.appendChild(sidebar)
  document_element.appendChild(body)
  return document_element.toString() // Serialize only after the complete fixture tree has been assembled.
}
