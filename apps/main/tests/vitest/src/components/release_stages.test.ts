import { randomInt } from 'node:crypto'
import { expect, test } from 'vitest'
import * as semver from 'semver'
import * as release_stages from '@/components/release_stages.ts'
import package_json from '@package.json' with { type: 'json' }

type Core_Version = `${number}.${number}.${number}` // Keeps generated versions in the required three-part shape.
type Localized = Parameters<typeof release_stages.to_HTML_attr>[0]

const random_component_limit = 10_000 // Exclusive upper bound for generated core and prerelease numbers.
const semver_parse_options = { loose: true } as const

const project_version = parse_version(package_json.version)
const project_core_version = get_core_version(project_version) // Stable boundary used by relationship checks.
const future_project_version = random_future_version(project_version) // Always strictly newer than the package version.

test('src/components/release_stages.ts:to_HTML_attr', () => {
  const localized: Localized = {
    'zh-CN': random_prerelease(future_project_version),
    en: random_prerelease(future_project_version),
    fr: project_core_version,
  }

  expect(JSON.parse(release_stages.to_HTML_attr(localized))).toEqual(localized)
})

test('get_stage derives the stage from a semantic version', () => {
  const stable_version = random_version()
  const stage = `stage-${randomInt(random_component_limit)}`
  const numeric_stage = randomInt(random_component_limit)
  const loose_version = `=${stable_version}-${stage}`

  expect(release_stages.get_stage('blank')).toBe('blank')
  expect(release_stages.get_stage(stable_version)).toBe('stable')
  expect(release_stages.get_stage(`${stable_version}-${stage}.0`)).toBe(stage)
  expect(release_stages.get_stage(`${stable_version}-${numeric_stage}`)).toBe(String(numeric_stage))
  expect(release_stages.get_stage(loose_version)).toBe(stage)
})

const invalid_version = random_version()
const [ invalid_major, invalid_minor, invalid_patch, ] = invalid_version.split('.') as [string, string, string]
const invalid_releases = [
  `${invalid_major}.${invalid_minor}-beta`, // The full three-part core version is mandatory.
  `${invalid_version}-stage!${randomInt(10)}`, // Prerelease identifiers cannot contain punctuation outside hyphens.
  `${invalid_version}-beta..${randomInt(10)}`, // Prerelease identifiers cannot be empty.
  `${invalid_version}+`, // A build identifier cannot be empty.
]

test('get_stage rejects every unsupported form', () => {
  for (const release of invalid_releases) {
    expect.soft(() => release_stages.get_stage(release), `release ${JSON.stringify(release)}`)
      .toThrow(/valid semantic version/)
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
  const required_component = randomInt(3) // Guarantees that at least one component increases.
  const get_increment = (component: number) => component === required_component || randomInt(2) === 1
    ? randomInt(1, random_component_limit)
    : 0
  return `${version.major + get_increment(0)}.${version.minor + get_increment(1)}.${version.patch + get_increment(2)}` // Components are preserved or increased, never reset.
}

function random_older_version(version: semver.SemVer): Core_Version {
  if (version.patch > 0) { return `${version.major}.${version.minor}.${version.patch - 1}` }
  if (version.minor > 0) { return `${version.major}.${version.minor - 1}.${randomInt(random_component_limit)}` }
  if (version.major > 0) {
    return `${version.major - 1}.${randomInt(random_component_limit)}.${randomInt(random_component_limit)}`
  }
  throw new RangeError('No semantic version is older than 0.0.0.')
}

function get_core_version(version: semver.SemVer): Core_Version {
  return `${version.major}.${version.minor}.${version.patch}`
}

function parse_version(version: string): semver.SemVer {
  const parsed = semver.parse(version, semver_parse_options)
  if (parsed === null) { throw new TypeError(`Invalid project version ${JSON.stringify(version)}.`) }
  return parsed
}

function random_prerelease(stable_version: Core_Version): release_stages.Release {
  const stage = `stage-${randomInt(random_component_limit)}`
  return `${stable_version}-${stage}.${randomInt(random_component_limit)}`
}

function random_version(): Core_Version {
  return `${randomInt(random_component_limit)}.${randomInt(random_component_limit)}.${randomInt(random_component_limit)}`
}
