// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { afterEach, expect, test, vi } from 'vitest'
import { deployed_URL, get_round_robin_site, local_test_server, resolve_E2E_target, } from '@tests/util/config/e2e-targets.ts'

afterEach(() => vi.unstubAllEnvs())

test('resolve_E2E_target resolves supported targets and rejects unknown targets', () => {
  vi.stubEnv('E2E_target', '')
  expect(resolve_E2E_target()).toEqual({ name: 'Local Astro preview', URL: local_test_server, start_web_server: true, })
  for (const [ name, URL ] of Object.entries(deployed_URL)) {
    vi.stubEnv('E2E_target', name)
    expect(resolve_E2E_target()).toEqual({ name, URL, start_web_server: false, })
  }
  for (const E2E_target of [ 'unknown', 'https://example.com', ]) {
    vi.stubEnv('E2E_target', E2E_target)
    expect(() => resolve_E2E_target()).toThrow(/Unknown E2E target/u)
  }
})

test('get_round_robin_site advances once per UTC day and repeats after every site', () => {
  const site_names = Object.keys(deployed_URL) as (keyof typeof deployed_URL)[]
  for (const [ index, name ] of site_names.entries()) { expect(get_round_robin_site(new Date(Date.UTC(1970, 0, index + 1)))).toEqual({ name, URL: deployed_URL[name] }) }
  expect(get_round_robin_site(new Date(Date.UTC(1970, 0, site_names.length + 1)))).toEqual({ name: site_names[0], URL: deployed_URL[site_names[0]!], })
})
