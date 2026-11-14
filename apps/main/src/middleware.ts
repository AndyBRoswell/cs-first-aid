// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import type { MiddlewareHandler } from 'astro'
import * as badges_HTML from '@/html/badges.ts'
import { rewrite_HTML_links } from '@/html/internal_links.ts'

export const onRequest: MiddlewareHandler = async function onRequest(_context, next) {
  const response = await next()
  const content_type = response.headers.get('content-type')
  if (response.body === null || content_type?.toLowerCase().includes('text/html') !== true) { return response }

  const source = await response.text()
  let HTML = rewrite_HTML_links(source, import.meta.env.BASE_URL)
  HTML = badges_HTML.inject(HTML)
  const headers = new Headers(response.headers)
  if (HTML !== source) {
    headers.delete('content-length') // The transformed body has a different byte length and invalidates the original validator.
    headers.delete('etag')
  }
  return new Response(HTML, { status: response.status, statusText: response.statusText, headers })
}
