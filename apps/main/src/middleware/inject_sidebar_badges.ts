// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { defineMiddleware } from 'astro:middleware'
import * as badges_HTML from '@/components/badges_HTML.ts'

export const inject_sidebar_badges = defineMiddleware(async function inject_sidebar_badges(_context, next) {
  const response = await next()
  const content_type = response.headers.get('content-type')
  if (response.body === null || content_type?.toLowerCase().includes('text/html') !== true) { return response }

  const transformed_HTML = badges_HTML.inject(await response.text())
  const headers = new Headers(response.headers)
  headers.delete('content-length') // Badge injection changes the body byte length, so let the downstream server recalculate it.
  headers.delete('etag') // The copied ETag identifies the original body, so let the downstream server generate a new one.
  return new Response(transformed_HTML, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
})
