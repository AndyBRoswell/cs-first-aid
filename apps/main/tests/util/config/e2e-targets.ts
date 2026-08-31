// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

export const local_test_server = 'http://localhost:4321'

export const deployed_URL = {
  'Cloudflare Pages': 'https://cs-first-aid.pages.dev',
  Vercel: 'https://cs-first-aid.vercel.app',
  Netlify: 'https://cs-first-aid.netlify.app',
  'GitHub Pages': 'https://andybroswell.github.io/cs-first-aid/main',
} as const

type Deployed_Site_Name = keyof typeof deployed_URL
const deployed_site_names = Object.keys(deployed_URL) as Deployed_Site_Name[]

export type E2E_Target = {
  name: string
  URL: string
  start_web_server: boolean // launch a local web server
}

const milliseconds_per_day = 24 * 60 * 60 * 1_000

export function get_round_robin_site(now: Date = new Date()): { name: Deployed_Site_Name, URL: string } {
  const day = Math.floor(now.getTime() / milliseconds_per_day) // Epoch days make the choice deterministic across runners and independent of missed workflow runs. Always non-positive since epoch.
  const index = day % deployed_site_names.length
  const name = deployed_site_names[index]!
  return { name, URL: deployed_URL[name] }
}

export function resolve_E2E_target(now: Date = new Date()): E2E_Target {
  const requested_target = process.env.E2E_target?.trim() || 'local' // Must be "local", "round-robin", or a key of deployed_URL.
  if (requested_target === 'local') { return { name: 'Local Astro preview', URL: local_test_server, start_web_server: true, } }
  if (requested_target === 'round-robin') { return { ...get_round_robin_site(now), start_web_server: false } }
  if (Object.hasOwn(deployed_URL, requested_target)) {
    const deployed_site_name = requested_target as Deployed_Site_Name
    return { name: deployed_site_name, URL: deployed_URL[deployed_site_name], start_web_server: false }
  }
  const valid_targets = [ 'local', 'round-robin', ...deployed_site_names, ]
  throw new Error(`Unknown E2E target "${requested_target}". Expected one of: ${valid_targets.join(', ')}.`)
}
