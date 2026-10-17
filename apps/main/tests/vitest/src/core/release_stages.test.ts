// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell. Refactored by Codex.

import { fc, test } from '@fast-check/vitest'
import { afterAll, beforeAll, describe, expect, vi } from 'vitest'
import { SemVer } from 'semver'
import * as release_stages from '@/core/release_stages.ts'

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

  // Project stages follow dev, alpha, beta, rc, stable. Stable pages are covered separately.
  describe.each([ 'NIGHTLY', 'A', 'b', 'RC', undefined, ].map((stage, project_stage_index) => ({
    project: `${core_version}${stage === undefined ? '' : `-${stage}.${project_prerelease_number}`}+site.1`,
    project_stage_index,
  })))('project $project', ({ project, project_stage_index }) => {
    let validate: typeof release_stages.validate

    beforeAll(async () => {
      vi.resetModules()
      vi.doMock('@package.json', () => ({ default: { version: project, }, }))
      validate = (await import('@/core/release_stages.ts')).validate // The module captures the mocked project version during import.
    })
    afterAll(() => {
      vi.doUnmock('@package.json') // Prevent this project's mock from leaking into later groups.
      vi.resetModules()
    })

    for (const [ page_stage_index, [ stage, ], ] of stage_aliases.entries()) {
      const is_allowed = page_stage_index >= project_stage_index // A prerelease page cannot be at an earlier stage than the project.
      test.prop({ delta: increment, }, property_options)(`same-core page ${stage}: allowed = ${is_allowed}`, ({ delta, }) => {
        for (const number of [ undefined, 0, project_prerelease_number, project_prerelease_number + delta, ]) { // All four number forms must give the same validation result.
          const release = `${core_version}-${stage}${number === undefined ? '' : `.${number}`}+page.1`
          const run = () => validate({ 'zh-CN': release, en: 'blank', })
          if (is_allowed) { expect(run).not.toThrow() }
          else { expect(run).toThrow(/cannot be earlier than project version/) }
        }
      })
    }

    test.prop({ cores: core_variants, }, property_options)('allows stable pages with an older, equal, or newer core', ({ cores, }) => {
      for (const release of [ ...cores.older, core_version, ...cores.newer, ]) {
        expect(() => validate({ 'zh-CN': release, en: 'blank', }), release).not.toThrow()
      }
    })

    test.prop({ cores: core_variants, delta: increment, }, property_options)('compares prerelease cores before stages', ({ cores, delta, }) => {
      for (const core of cores.older) {
        const release = `${core}-rc.${project_prerelease_number + delta}`
        expect(() => validate({ 'zh-CN': release, en: 'blank', }), release).toThrow(/cannot be earlier than project version/)
      }
      for (const core of cores.newer) {
        const release = `${core}-dev`
        expect(() => validate({ 'zh-CN': release, en: 'blank', }), release).not.toThrow()
      }
    })

    test.prop({ cores: core_variants, }, property_options)('exempts unversioned pages from the project version constraint', ({ cores, }) => {
      for (const release of unversioned) {
        expect(() => validate({ 'zh-CN': release, en: release.toUpperCase(), fr: `${cores.newer[0]}-dev`, })).not.toThrow()
      }
    })
  })
})
