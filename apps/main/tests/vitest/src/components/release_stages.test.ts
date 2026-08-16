import { randomInt } from 'node:crypto'
import { expect, test } from 'vitest'
import * as semver from 'semver'
import * as release_stages from '@/components/release_stages.ts'
import package_json from '@package.json' with { type: 'json' }

type Core_Version = `${number}.${number}.${number}` // Keeps generated versions in the required three-part shape.
type Localized = Parameters<typeof release_stages.to_HTML_attr>[0]

const random_component_limit: number = 10_000 // Exclusive upper bound for generated core and prerelease numbers.
const project_version = new semver.SemVer(package_json.version, { loose: true, })
const project_core_version = `${project_version.major}.${project_version.minor}.${project_version.patch}` as Core_Version
const future_project_version = random_future_version(project_version) // Always strictly newer than the package version.
const stage_groups = [ // The first name is canonical; group order is the expected release order.
  [ 'dev', 'snapshot', 'nightly', 'pre-alpha', ],
  [ 'alpha', 'a', ],
  [ 'beta', 'b', ],
  [ 'rc', ],
] as const

test('to_HTML_attr serializes and validates releases', () => {
  const localized: Localized = {
    'zh-CN': random_prerelease(future_project_version),
    en: 'planned',
    fr: project_core_version,
  }
  expect(JSON.parse(release_stages.to_HTML_attr(localized))).toEqual(localized)
  const serialize = (release: release_stages.Release) => release_stages.to_HTML_attr({ 'zh-CN': release, en: 'blank', })
  const older_version = `${project_version.major - 1}.${randomInt(random_component_limit)}.${randomInt(random_component_limit)}` as Core_Version
  expect(() => serialize(random_prerelease(older_version))).toThrow(/Invalid release/) // Prerelease cannot target an older core.
  expect(() => serialize(future_project_version)).toThrow(/Invalid release/) // A future version cannot already be stable.
})

test('get_stage derives the stage from a semantic version', () => {
  const version = random_version()
  const prerelease_number = randomInt(random_component_limit)
  const expected_stages = [
    [ 'blank', 'blank', ],
    [ 'PLANNED', 'blank', ],
    [ 'Backlog', 'blank', ],
    [ version, 'stable', ],
    [ `=${version}-DEV`, 'dev', ], // Loose parsing remains enabled.
  ] as const
  for (const [ release, expected_stage ] of expected_stages) {
    expect.soft(release_stages.get_stage(release), `release ${JSON.stringify(release)}`).toBe(expected_stage)
  }
  for (const [ canonical, ...aliases ] of stage_groups) {
    for (const alias of [ canonical, ...aliases, ]) {
      const release = `${version}-${alias.toUpperCase()}.${prerelease_number}`
      expect.soft(release_stages.get_stage(release), `release ${JSON.stringify(release)}`).toBe(canonical)
    }
  }
})

test('to_HTML_attr enforces the relationship with the project version', () => {
  expect(() => release_stages.to_HTML_attr({
    'zh-CN': random_prerelease(project_core_version), // Alpha/beta project releases may use the current core version.
    en: 'blank',
  })).not.toThrow()

  expect(() => release_stages.to_HTML_attr({
    'zh-CN': random_prerelease(random_older_version(project_version)), // A prerelease cannot target an older core version.
    en: 'blank',
  })).toThrow(/Invalid release/)

  expect(() => release_stages.to_HTML_attr({
    'zh-CN': future_project_version, // A future version cannot already be marked stable.
    en: 'blank',
  })).toThrow(/Invalid release/)
})

function random_future_version(version: semver.SemVer): Core_Version {
  return `${version.major + randomInt(1, random_component_limit)}.${version.minor + randomInt(1, random_component_limit)}.${version.patch + randomInt(1, random_component_limit)}` // Every increment is random; no component resets.
}

function random_prerelease(stable_version: Core_Version): release_stages.Release {
  const group = stage_groups[randomInt(stage_groups.length)]!
  const prerelease_identifier = group[randomInt(group.length)]!
  return `${stable_version}-${prerelease_identifier}.${randomInt(random_component_limit)}`
}

function random_version(): Core_Version { return `${randomInt(random_component_limit)}.${randomInt(random_component_limit)}.${randomInt(random_component_limit)}` }
