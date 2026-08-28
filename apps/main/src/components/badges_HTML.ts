// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import * as node_HTML_parser from 'node-html-parser'
import * as util from '@cs-first-aid/util'
import * as badges from './badges.ts'

export function inject(source: string): string {
  if (!source.includes('data-release-stage') && !source.includes('data-badges')) { return source } // Avoid parsing unrelated HTML responses.
  const root = node_HTML_parser.parse(source, { comment: true, }) // Preserve comments that Astro or integrations may use as markers.
  const sidebar = root.querySelector('nav.sidebar') // Limit badge injection to Starlight's sidebar.
  if (sidebar === null) { return source }
  const badge_hosts = sidebar.querySelectorAll('[data-release-stage], [data-badges]')
  if (badge_hosts.length === 0) { return source }
  const language = root.querySelector('html')?.getAttribute('lang') // The document language selects localized badge content.
  if (language === undefined || language.length === 0) { throw new Error('Cannot render sidebar badges without a language on the document element.') }
  for (const host of badge_hosts) {
    if (host.childNodes.some((child: node_HTML_parser.Node) => child instanceof node_HTML_parser.HTMLElement && child.classList.contains('badges'))) { continue } // Keep repeated transformations idempotent.
    const sidebar_item: badges.Sidebar_Item = {
      label: host.getAttribute('aria-label') ?? host.textContent.replace(/\s+/g, ' ').trim(),
      href: host.getAttribute('href') ?? null,
    }
    const rendered_badges = badges.render(
      language,
      host.getAttribute('data-release-stage') ?? null,
      host.getAttribute('data-badges') ?? null,
      sidebar_item,
    )
    const container = util.create_HTML_element('span', { class: 'badges', })
    for (const rendered_badge of rendered_badges) {
      container.appendChild(util.create_HTML_element('span', { class: rendered_badge.class.join(' '), }, rendered_badge.text))
    }
    host.appendChild(container)
  }
  return root.toString()
}
