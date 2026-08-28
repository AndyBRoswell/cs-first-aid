// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { defineMiddleware } from 'astro:middleware'
import * as badges_HTML from '@/components/badges_HTML.ts'

export const inject_sidebar_badges = defineMiddleware(async function inject_sidebar_badges(_context, next) {
  const response = await next()
  const content_type = response.headers.get('content-type')
  if (response.body === null || content_type?.toLowerCase().includes('text/html') !== true) { return response }

  const transformed_HTML = badges_HTML.inject(await response.text())
  const headers = new Headers(response.headers)
  headers.delete('content-length') // The transformed body has a different byte length; do not preserve the stale value.
  headers.delete('etag') // The transformed body is a different representation; do not preserve its stale validator.
  return new Response(transformed_HTML, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
})
