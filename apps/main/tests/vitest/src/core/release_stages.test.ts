// Created by GPT-5.6 Sol Max [codex]. Refactored by GPT-6.1 Sol Max [codex]. Revised by AndyBRoswell.

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

  test('normalizes stage names and aliases regardless of case', () => {
    for (const [ stage, aliases, ] of stage_aliases) {
      for (const alias of aliases) {
        for (const variant of case_variants(alias)) {
          expect(release_stages.get_stage(`${core_version}-${variant}`), variant).toBe(stage)
          expect(release_stages.get_stage(`${core_version}-${variant}.0+build.1`), variant).toBe(stage)
        }
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

  test('rejects invalid and unsupported releases at every public entry point', () => {
    for (const release of [
      '', '1.2', `${core_version}+`, `${core_version}-alpha..1`, `${core_version}-alpha!1`, // Invalid SemVer.
      'dev', `${core_version}-preview`, `${core_version}-stable`, `${core_version}-1`, `${core_version}-planned`, `${core_version}-backlog`, `${core_version}-a1`, // Unsupported stages.
      `${core_version}-alpha.preview`, `${core_version}-alpha.-1`, // Nonnumeric or negative numbers.
      `${core_version}-alpha.1.2`, `${core_version}-alpha.1.preview`, // Extra identifiers.
    ]) {
      const message = `release "${release}"`
      expect(() => release_stages.get_stage(release), message).toThrow(TypeError)
      expect(() => release_stages.compare(release, 'blank'), message).toThrow(TypeError) // An unversioned operand must not hide an invalid version.
      expect(() => release_stages.compare('blank', release), message).toThrow(TypeError)
      expect(() => release_stages.validate({ 'zh-CN': 'blank', en: release, }), message).toThrow(TypeError)
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

  test.prop({ cores: core_variants, }, property_options)('compares major, minor, patch, then stage', ({ cores, }) => {
    const later = `${core_version}-dev` // Opposing stages ensure the core difference decides the result.
    for (const earlier of cores.older) {
      expect(release_stages.compare(earlier, later), `${earlier} < ${later}`).toBeLessThan(0)
      expect(release_stages.compare(later, earlier), `${later} > ${earlier}`).toBeGreaterThan(0)
    }
  })

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

  test('orders absent and numeric prerelease numbers exactly', () => {
    for (const [ earlier, later, ] of [
      [ `${core_version}-rc`, `${core_version}-rc.0`, ], // An absent number precedes zero.
      [ `${core_version}-rc.2`, `${core_version}-rc.10`, ], // Numeric rather than lexicographic order.
    ] as const) {
      expect(release_stages.compare(earlier, later), `${earlier} < ${later}`).toBeLessThan(0)
      expect(release_stages.compare(later, earlier), `${later} > ${earlier}`).toBeGreaterThan(0)
    }
  })

  test('equates aliases with the same number regardless of case', () => {
    for (const [ stage, aliases, ] of stage_aliases) {
      for (const alias of aliases) {
        for (const variant of case_variants(alias)) {
          expect(release_stages.compare(`${core_version}-${stage}.2`, `${core_version}-${variant}.2`), `${stage} = ${variant}`).toBe(0)
        }
      }
    }
  })

  test('ignores build metadata', () => {
    for (const release of [ core_version, `${core_version}-rc.2`, ]) {
      expect(release_stages.compare(release, `${release}+build.1`), release).toBe(0)
      expect(release_stages.compare(`${release}+build.2`, `${release}+build.1`), release).toBe(0)
    }
  })
})

describe('validate / page and project versions', () => {
  const projects: { version: string; validate: typeof release_stages.validate }[] = []

  beforeAll(async () => {
    // Load one validator for each project stage: dev, alpha, beta, rc, stable.
    for (const stage of [ 'NIGHTLY', 'A', 'b', 'RC', undefined, ]) {
      const version = `${core_version}${stage === undefined ? '' : `-${stage}.${project_prerelease_number}`}+site.1`
      vi.resetModules()
      vi.doMock('@package.json', () => ({ default: { version, }, }))
      const { validate, } = await import('@/core/release_stages.ts') // Each module retains its own project version.
      projects.push({ version, validate, })
    }
  })
  afterAll(() => {
    vi.doUnmock('@package.json')
    vi.resetModules()
  })

  test.prop({ cores: core_variants, }, property_options)('validates every language and identifies it in the error', ({ cores, }) => {
    for (const language of [ 'zh-CN', 'en', 'fr', ]) {
      const releases: release_stages.Localized_Release = { 'zh-CN': core_version, en: 'blank', fr: 'planned', }
      releases[language] = `${cores.older[2]}-rc`
      expect(() => release_stages.validate(releases)).toThrow(`Invalid release for language "${language}"`)
    }
  })

  test.prop({ delta: increment, }, property_options)('compares same-core stages and ignores prerelease numbers', ({ delta, }) => {
    for (const [ project_stage_index, project, ] of projects.entries()) {
      for (const [ page_stage_index, [ stage, ], ] of stage_aliases.entries()) {
        const is_allowed = page_stage_index >= project_stage_index // A prerelease page cannot be at an earlier stage than the project.
        for (const number of [ undefined, 0, project_prerelease_number, project_prerelease_number + delta, ]) { // All numbers here must give the same validation result.
          const release = `${core_version}-${stage}${number === undefined ? '' : `.${number}`}+page.1`
          const run = () => project.validate({ 'zh-CN': release, en: 'blank', })
          const message = `${release} against project ${project.version}`
          if (is_allowed) { expect(run, message).not.toThrow() }
          else { expect(run, message).toThrow(/cannot be earlier than project version/) }
        }
      }
    }
  })

  test.prop({ cores: core_variants, }, property_options)('allows stable pages with an older, equal, or newer core', ({ cores, }) => {
    for (const project of projects) {
      for (const release of [ ...cores.older, core_version, ...cores.newer, ]) {
        expect(() => project.validate({ 'zh-CN': release, en: 'blank', }), `${release} against project ${project.version}`).not.toThrow()
      }
    }
  })

  test.prop({ cores: core_variants, delta: increment, }, property_options)('compares prerelease cores before stages', ({ cores, delta, }) => {
    for (const project of projects) {
      for (const core of cores.older) {
        const release = `${core}-rc.${project_prerelease_number + delta}`
        expect(() => project.validate({ 'zh-CN': release, en: 'blank', }), `${release} against project ${project.version}`).toThrow(/cannot be earlier than project version/)
      }
      for (const core of cores.newer) {
        const release = `${core}-dev`
        expect(() => project.validate({ 'zh-CN': release, en: 'blank', }), `${release} against project ${project.version}`).not.toThrow()
      }
    }
  })

  test.prop({ cores: core_variants, }, property_options)('exempts unversioned pages from the project version constraint', ({ cores, }) => {
    for (const project of projects) {
      for (const release of unversioned) {
        for (const variant of case_variants(release)) {
          expect(() => project.validate({ 'zh-CN': release, en: variant, fr: `${cores.newer[0]}-dev`, }), `${variant} against project ${project.version}`).not.toThrow()
        }
      }
    }
  })
})
