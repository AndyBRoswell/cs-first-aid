import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import * as semver from 'semver'
import * as release_stages from '@/components/release_stages.ts'
import package_json from '@package.json' with { type: 'json' }

type Core_Version = `${number}.${number}.${number}` // Keeps generated versions in the required three-part shape.
type Localized = Parameters<typeof release_stages.to_HTML_attr>[0]

const random_component_limit: number = 10_000 // Exclusive upper bound for generated core and prerelease numbers.
const project_version = new semver.SemVer(package_json.version, { loose: true, })
const project_core_version = `${project_version.major}.${project_version.minor}.${project_version.patch}` as Core_Version
const { prerelease_stage_groups, unversioned_releases, } = release_stages

test('to_HTML_attr serializes and validates releases', ({ g, }) => {
  const future_project_version = random_future_version(project_version, g) // Always strictly newer than the package version.
  const localized: Localized = {
    'zh-CN': random_prerelease(future_project_version, g),
    en: 'planned',
    fr: project_core_version,
  }
  expect(JSON.parse(release_stages.to_HTML_attr(localized))).toEqual(localized)
  const serialize = (release: release_stages.Release) => release_stages.to_HTML_attr({ 'zh-CN': release, en: 'blank', })
  expect(() => serialize(random_prerelease(random_older_version(project_version, g), g))).toThrow(/Invalid release/) // Prerelease cannot target an older core.
  expect(() => serialize(future_project_version)).toThrow(/Invalid release/) // A future version cannot already be stable.
})

test('get_stage derives the stage from a semantic version', ({ g, }) => {
  const version = random_version(g)
  const prerelease_number = random_integer(g, random_component_limit)
  expect(release_stages.get_stage(version)).toBe('stable')
  for (const configured_release of unversioned_releases) {
    for (const release of [ configured_release, g(fc.mixedCase, fc.constant(configured_release)), ]) {
      expect.soft(release_stages.get_stage(release), `release ${JSON.stringify(release)}`).toBe('blank')
    }
  }
  for (const semver_prefix of [ '', '=', ]) { // Enumerate strict and loose forms.
    for (const [ canonical, ...aliases ] of prerelease_stage_groups) {
      for (const alias of [ canonical, ...aliases, ]) {
        const release = `${semver_prefix}${version}-${g(fc.mixedCase, fc.constant(alias))}.${prerelease_number}`
        expect.soft(release_stages.get_stage(release), `release ${JSON.stringify(release)}`).toBe(canonical)
      }
    }
  }
})

test('compare orders known stages and canonicalizes their aliases', ({ g, }) => {
  const version = random_version(g)
  const prerelease_number = random_integer(g, random_component_limit - 1)
  const later_prerelease_number = random_integer(g, random_component_limit, prerelease_number + 1)
  for (const release of unversioned_releases) { expect.soft(release_stages.compare(unversioned_releases[0], g(fc.mixedCase, fc.constant(release))), `${unversioned_releases[0]} = ${release}`).toBe(0) }
  for (const [ canonical, ...aliases ] of prerelease_stage_groups) {
    for (const alias of [ canonical, ...aliases, ]) {
      expect.soft(release_stages.compare(`${version}-${canonical}`, `${version}-${g(fc.mixedCase, fc.constant(alias))}`), `${canonical} = ${alias}`).toBe(0)
    }
  }
  const ordered_releases = [ unversioned_releases[0], ...prerelease_stage_groups.map(([ canonical, ]) => `${version}-${canonical}`), version, ] // Compare every adjacent stage.
  for (let index = 1; index < ordered_releases.length; index++) {
    const earlier = ordered_releases[index - 1]!
    const later = ordered_releases[index]!
    expect.soft(release_stages.compare(earlier, later), `${earlier} < ${later}`).toBeLessThan(0)
    expect.soft(release_stages.compare(later, earlier), `${later} > ${earlier}`).toBeGreaterThan(0)
  }
  expect(release_stages.compare(version, version)).toBe(0)
  const numbered_group = prerelease_stage_groups[random_integer(g, prerelease_stage_groups.length)]!
  const numbered_stage = numbered_group[0]
  const numbered_alias = numbered_group[random_integer(g, numbered_group.length)]!
  expect(release_stages.compare(`${version}-${numbered_stage}.${prerelease_number}`, `${version}-${g(fc.mixedCase, fc.constant(numbered_alias))}.${prerelease_number}`)).toBe(0)
  expect(release_stages.compare(`${version}-${numbered_stage}.${prerelease_number}`, `${version}-${numbered_stage}.${later_prerelease_number}`)).toBeLessThan(0)
  expect(release_stages.compare(`${version}-${prerelease_stage_groups.at(-1)![0]}`, `${random_future_version(new semver.SemVer(version), g)}-${prerelease_stage_groups[0][0]}`)).toBeLessThan(0) // Core version takes precedence.
})

test('get_stage rejects unsupported forms', ({ g, }) => {
  const version = random_version(g)
  const [ major, minor, ] = version.split('.') as [string, string, string]
  const prerelease_number = random_integer(g, random_component_limit)
  const unsupported_prerelease_identifier = `unsupported-${random_integer(g, random_component_limit)}`
  const compact_alias = prerelease_stage_groups.flat().find(identifier => identifier.length === 1)!
  const unsupported_releases = [
    `${version}-${unsupported_prerelease_identifier}.${prerelease_number}`,
    `${version}-${prerelease_number}`,
    `${version}-${compact_alias}${prerelease_number}`,
    `${version}-${compact_alias}-${prerelease_number}`,
  ]
  for (const unsupported_release of unsupported_releases) {
    expect.soft(semver.parse(unsupported_release, { loose: true, }), `node-semver accepts ${JSON.stringify(unsupported_release)}`).not.toBeNull()
    expect.soft(() => release_stages.get_stage(unsupported_release), `release ${JSON.stringify(unsupported_release)}`).toThrow(/Unsupported prerelease identifier/)
    expect.soft(() => release_stages.compare(unsupported_release, version), `compare ${JSON.stringify(unsupported_release)}`).toThrow(/Unsupported prerelease identifier/)
    expect.soft(() => release_stages.compare(unversioned_releases[0], unsupported_release), `compare unversioned release with ${JSON.stringify(unsupported_release)}`).toThrow(/Unsupported prerelease identifier/)
    expect.soft(() => release_stages.compare(unsupported_release, unversioned_releases[0]), `compare unversioned release with ${JSON.stringify(unsupported_release)}`).toThrow(/Unsupported prerelease identifier/)
  }
  const supported_identifier = prerelease_stage_groups[random_integer(g, prerelease_stage_groups.length)]![0]
  const invalid_releases = [
    `unversioned-${random_integer(g, random_component_limit)}`, // Only the configured unversioned names bypass SemVer parsing.
    `${major}.${minor}-${supported_identifier}`, // The full three-part core version is mandatory.
    `${version}-${supported_identifier}!${random_integer(g, 10)}`, // SemVer rejects this punctuation.
    `${version}-${supported_identifier}..${random_integer(g, 10)}`, // Identifiers cannot be empty.
    `${version}+`, // Build identifiers cannot be empty.
    `${version}-${supported_identifier}.preview`, // The optional identifier after a stage must be numeric.
    `${version}-${supported_identifier}.${prerelease_number}.${supported_identifier}.preview`, // Only one optional numeric identifier is allowed.
  ]
  for (const release of invalid_releases) {
    expect.soft(() => release_stages.get_stage(release), `release ${JSON.stringify(release)}`).toThrow(/semantic version|Prerelease/)
  }
})

function random_future_version(version: semver.SemVer, g: fc.GeneratorValue): Core_Version {
  const increments: [number, number, number] = [ random_integer(g, random_component_limit), random_integer(g, random_component_limit), random_integer(g, random_component_limit), ]
  increments[random_integer(g, increments.length)] = random_integer(g, random_component_limit, 1) // Force at least one component to increase.
  return `${version.major + increments[0]}.${version.minor + increments[1]}.${version.patch + increments[2]}` // Other components may remain unchanged; none resets.
}

function random_older_version(version: semver.SemVer, g: fc.GeneratorValue): Core_Version {
  const components: [number, number, number] = [ version.major, version.minor, version.patch, ]
  const reducible_indices = components.flatMap((component, index) => component === 0 ? [] : [ index, ])
  if (reducible_indices.length === 0) { throw new RangeError('No semantic version is older than 0.0.0.') }
  const reduced_index = reducible_indices[random_integer(g, reducible_indices.length)]!
  const decrements = components.map(component => random_integer(g, component + 1))
  decrements[reduced_index] = random_integer(g, components[reduced_index]! + 1, 1) // Force at least one component to decrease.
  return components.map((component, index) => component - decrements[index]!).join('.') as Core_Version // Other components may remain unchanged or also decrease.
}

function random_prerelease(stable_version: Core_Version, g: fc.GeneratorValue): release_stages.Release {
  const group = prerelease_stage_groups[random_integer(g, prerelease_stage_groups.length)]!
  const prerelease_identifier = group[random_integer(g, group.length)]!
  return `${stable_version}-${prerelease_identifier}.${random_integer(g, random_component_limit)}`
}

function random_version(g: fc.GeneratorValue): Core_Version { return `${random_integer(g, random_component_limit)}.${random_integer(g, random_component_limit)}.${random_integer(g, random_component_limit)}` }

function random_integer(g: fc.GeneratorValue, maximum_exclusive: number, minimum = 0): number { return g(fc.integer, { min: minimum, max: maximum_exclusive - 1, }) }
