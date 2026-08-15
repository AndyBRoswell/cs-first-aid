import { expect, test } from 'vitest'
import * as release_stages from '@/components/release_stages.ts'
import package_json from '@package.json' with { type: 'json' }

type Localized = Parameters<typeof release_stages.to_HTML_attr>[0]

test('src/components/release_stages.ts:to_HTML_attr', () => {
  const localized: Localized = {
    'zh-CN': '2026.1.0-alpha',
    en: '2026.1.0b0',
    fr: '2026.0.0',
  }

  expect(JSON.parse(release_stages.to_HTML_attr(localized))).toEqual(localized)
})

test.each([
  [ 'blank', 'blank', ],
  [ '2026.0.0', 'stable', ],
  [ '2026.1.0dev', 'dev', ],
  [ '2026.1.0-dev', 'dev', ],
  [ '2026.1.0.dev.0', 'dev', ],
  [ '2026.1.0alpha', 'alpha', ],
  [ '2026.1.0-alpha.1', 'alpha', ],
  [ '2026.1.0.a-1', 'alpha', ],
  [ '2026.1.0beta', 'beta', ],
  [ '2026.1.0-b', 'beta', ],
  [ '2026.1.0.b', 'beta', ],
  [ '2026.1.0b0', 'beta', ],
  [ '2026.1.0b.0', 'beta', ],
  [ '2026.1.0b-0', 'beta', ],
  [ '2026.1.0-b0', 'beta', ],
  [ '2026.1.0.b.0', 'beta', ],
  [ '2026.1.0rc', 'rc', ],
  [ '2026.1.0-rc.1', 'rc', ],
  [ '2026.1.0.rc-1', 'rc', ],
] satisfies [release_stages.Release, release_stages.Stage][])(
  'get_stage(%s) returns %s',
  (release, expected_stage) => {
    expect(release_stages.get_stage(release)).toBe(expected_stage)
  },
)

test.each([
  'v2026.1.0-beta',
  '2026.1-beta',
  '2026.01.0-beta',
  '2026.1.0-preview',
  '2026.1.0-beta.01',
])('get_stage rejects invalid release %s', release => {
  expect(() => release_stages.get_stage(release)).toThrow(/full three-part version/)
})

test('to_HTML_attr enforces the relationship with the project version', () => {
  expect(() => release_stages.to_HTML_attr({
    'zh-CN': '2026.0.0-dev',
    en: 'blank',
  })).toThrow(/Invalid release/)

  expect(() => release_stages.to_HTML_attr({
    'zh-CN': '2026.1.0',
    en: 'blank',
  })).toThrow(/Invalid release/)
})
