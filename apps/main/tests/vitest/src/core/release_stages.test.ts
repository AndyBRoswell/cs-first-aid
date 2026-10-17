// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell. Refactored by Codex.

import { fc, test } from '@fast-check/vitest'
import { afterAll, beforeAll, describe, expect, vi } from 'vitest'
import { SemVer } from 'semver'
import * as release_stages from '@/core/release_stages.ts'
import package_json from '@package.json' with { type: 'json' }

// Business rules: src/content/docs/Technical Information/Features.mdx, 内容版本管理.
const core_version = vi.hoisted(() => '1.2.3') // Keep tests independent of the real package version.
vi.mock('@package.json', () => ({ default: { version: core_version, }, }))

const { major, minor, patch, } = new SemVer(core_version)
const core_components = [ major, minor, patch, ] // Field order is also their comparison priority.
const project_prerelease_number = 9
const increment = fc.integer({ min: 1, })
const property_options = { numRuns: 100, } // Run each property against 100 generated samples.
const component_changes = core_components.map(max => fc.tuple(fc.integer({ min: 1, max, }), increment)) // Each pair is [decrement, increment]; decrements cannot exceed the field.
const core_variants = fc.tuple(...component_changes).map(build_core_variants) // Shrink numeric inputs, then rebuild the version strings.

function build_core_variants(changes: [number, number][]) {
  const higher = core_components.map((value, index) => value + changes[index]![1]) // Use the increment (2nd item) for each component.

  const older: string[] = []
  const newer: string[] = []
  for (const [ index, value, ] of core_components.entries()) {
    const [ decrement, ] = changes[index]!
    const prefix = core_components.slice(0, index) // More significant fields stay unchanged.
    const zero_tail = core_components.slice(index + 1).fill(0) // Less significant fields reset in newer versions.
    older.push([ ...prefix, value - decrement, ...higher.slice(index + 1), ].join('.')) // Larger suffixes must not override the decreased field.
    newer.push([ ...prefix, higher[index]!, ...zero_tail, ].join('.'))
  }
  return { older, newer, }
}

const unversioned = [ 'blank', 'planned', 'backlog', ] as const
const stage_aliases = [
  [ 'dev', [ 'dev', 'snapshot', 'nightly', 'pre-alpha', ], ],
  [ 'alpha', [ 'alpha', 'a', ], ],
  [ 'beta', [ 'beta', 'b', ], ],
  [ 'rc', [ 'rc', ], ],
] as const

function case_variants(value: string) {
  return [
    value, // Lowercase; all names in the test tables are lowercase.
    value.toUpperCase(), // Uppercase.
    value.replace(/\b[a-z]/g, letter => letter.toUpperCase()), // Title case, including hyphen-separated words.
    value.replace(/[a-z]/g, (letter, index) => index % 2 === 0 ? letter : letter.toUpperCase()), // Mixed case.
  ]
}

describe('get_stage / release format', () => {
  test('recognizes the unversioned statuses regardless of case', () => {
    for (const release of unversioned) {
      for (const variant of case_variants(release)) { expect(release_stages.get_stage(variant), variant).toBe('blank') }
    }
  })

  test.each(stage_aliases)('normalizes %s and its aliases regardless of case', (stage, aliases) => {
    for (const alias of aliases) {
      for (const variant of case_variants(alias)) {
        expect(release_stages.get_stage(`${core_version}-${variant}`), variant).toBe(stage)
        expect(release_stages.get_stage(`${core_version}-${variant}.0+build.1`), variant).toBe(stage)
      }
    }
  })

  test('identifies a version without a prerelease as stable', () => {
    expect(release_stages.get_stage('0.0.0')).toBe('stable')
    expect(release_stages.get_stage(`${core_version}+build.1`)).toBe('stable')
  })

  test('preserves the current loose parsing compatibility', () => {
    expect(release_stages.get_stage('=01.02.03-A.01')).toBe('alpha')
  })

  test.each([
    [ 'invalid SemVer', [ '', '1.2', `${core_version}+`, `${core_version}-alpha..1`, `${core_version}-alpha!1`, ], ],
    [ 'unsupported stage', [ 'dev', `${core_version}-preview`, `${core_version}-stable`, `${core_version}-1`, `${core_version}-planned`, `${core_version}-backlog`, `${core_version}-a1`, ], ],
    [ 'nonnumeric or negative number', [ `${core_version}-alpha.preview`, `${core_version}-alpha.-1`, ], ],
    [ 'extra identifiers', [ `${core_version}-alpha.1.2`, `${core_version}-alpha.1.preview`, ], ],
  ] as const)('rejects %s at every public entry point', (_reason, releases) => {
    for (const release of releases) {
      expect(() => release_stages.get_stage(release), release).toThrow(TypeError)
      expect(() => release_stages.compare(release, 'blank'), release).toThrow(TypeError) // An unversioned operand must not hide an invalid version.
      expect(() => release_stages.compare('blank', release), release).toThrow(TypeError)
      expect(() => release_stages.validate({ 'zh-CN': 'blank', en: release, }), release).toThrow(TypeError)
    }
  })
})

describe('compare / two release versions', () => {
  test('treats unversioned statuses as equivalent and below every core version', () => {
    for (const release of unversioned) {
      expect(release_stages.compare(release, 'BLANK')).toBe(0)
      expect(release_stages.compare(release, '0.0.0-dev')).toBeLessThan(0)
      expect(release_stages.compare('0.0.0-dev', release)).toBeGreaterThan(0)
    }
  })

  for (const [ rule, component_index, ] of [
    [ 'major before minor and patch', 0, ],
    [ 'minor before patch', 1, ],
    [ 'patch before stage', 2, ],
  ] as const) {
    test.prop({ cores: core_variants, }, property_options)(`orders by ${rule}`, ({ cores, }) => {
      const earlier = cores.older[component_index]!
      const later = `${core_version}-dev` // Opposing stages ensure the core difference decides the result.
      expect(release_stages.compare(earlier, later), `${earlier} < ${later}`).toBeLessThan(0)
      expect(release_stages.compare(later, earlier), `${later} > ${earlier}`).toBeGreaterThan(0)
    })
  }

  test.prop({ number: fc.nat(), delta: increment, }, property_options)('orders stages before numbers', ({ number, delta, }) => {
    const ordered: string[] = []
    for (const [ stage, ] of stage_aliases) {
      ordered.push(`${core_version}-${stage}.${number}`, `${core_version}-${stage}.${number + delta}`) // The larger number must still precede the next stage.
    }
    ordered.push(core_version) // Stable follows every prerelease of the same core.
    for (let index = 1; index < ordered.length; index++) {
      const earlier = ordered[index - 1]!
      const later = ordered[index]!
      expect(release_stages.compare(earlier, later), `${earlier} < ${later}`).toBeLessThan(0)
      expect(release_stages.compare(later, earlier), `${later} > ${earlier}`).toBeGreaterThan(0)
    }
  })

  test.each([
    [ 'absent number before zero', `${core_version}-rc`, `${core_version}-rc.0`, ],
    [ 'numeric rather than lexicographic order', `${core_version}-rc.2`, `${core_version}-rc.10`, ],
    [ 'adjacent numbers beyond safe integer precision', `${core_version}-rc.9007199254740992`, `${core_version}-rc.9007199254740993`, ],
  ] as const)('preserves %s', (_rule, earlier, later) => {
    expect(release_stages.compare(earlier, later)).toBeLessThan(0)
    expect(release_stages.compare(later, earlier)).toBeGreaterThan(0)
  })

  test.each(stage_aliases)('equates %s aliases with the same number', (stage, aliases) => {
    for (const alias of aliases) {
      expect(release_stages.compare(`${core_version}-${stage}.2`, `${core_version}-${alias.toUpperCase()}.2`)).toBe(0)
    }
  })

  test.each([ core_version, `${core_version}-rc.2`, ])('ignores build metadata in %s', release => {
    expect(release_stages.compare(release, `${release}+build.1`)).toBe(0)
    expect(release_stages.compare(`${release}+build.2`, `${release}+build.1`)).toBe(0)
  })
})

describe('validate / page and project versions', () => {
  for (const language of [ 'zh-CN', 'en', 'fr', ]) {
    test.prop({ cores: core_variants, }, property_options)(`validates ${language} and identifies it in the error`, ({ cores, }) => {
      const releases: release_stages.Localized_Release = { 'zh-CN': core_version, en: 'blank', fr: 'planned', }
      releases[language] = `${cores.older[2]}-rc`
      expect(() => release_stages.validate(releases)).toThrow(`Invalid release for language "${language}"`)
    })
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
