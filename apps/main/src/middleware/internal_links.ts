import { parse } from 'node-html-parser'

export function with_base(href: string, base: string): string {
  const prefix = base.replace(/\/+$/, '')
  if (!prefix || !href.startsWith('/') || href.startsWith('//')) { return href }
  if (href.startsWith(prefix) && [undefined, '/', '?', '#'].includes(href[prefix.length])) { return href }
  return prefix + href
}

export function rewrite_HTML_links(source: string, base: string): string {
  const root = parse(source, { comment: true })
  let changed = false
  for (const link of root.querySelectorAll('a[href], area[href]')) { // todo: support more elements that support hyperlinks
    const href = link.getAttribute('href')!
    const rewritten = with_base(href, base)
    if (rewritten === href) { continue }
    link.setAttribute('href', rewritten)
    changed = true
  }
  return changed ? root.toString() : source
}
