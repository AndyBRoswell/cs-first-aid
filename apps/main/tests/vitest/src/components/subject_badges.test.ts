// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { expect, test } from 'vitest'
import * as badges from '@/components/badges.ts'
import * as subject_badges from '@/components/subject_badges.ts'
import * as subject_catalog from '@/data/subjects.ts'

type Input = Parameters<typeof subject_catalog.add>[0]
type Expanded_Name = Input['names']['en']['full']
type Name_List = readonly [canonical: string, ...aliases: string[]]
type Locale_Names = readonly [full: Name_List, short: Name_List]
type Fixture = Record<string, Locale_Names> & {
  'zh-CN': Locale_Names
  en: Locale_Names
}

function expand([ canonical, ...aliases ]: Name_List): Expanded_Name {
  return { canonical, all: [ canonical, ...aliases, ] }
}

function add(names: Fixture): void {
  const localized_names: Input['names'] = Object.fromEntries(
    Object.entries(names).map(([ language, [ full, short ] ]) => [ language,{ full: expand(full), short: expand(short), },]),) as Input['names']
  subject_catalog.add({ names: localized_names, })
}

const names = {
  'zh-CN': [ [ '测试学科', ], [ '测试科', '测科', ], ],
  en: [ [ 'Fixture Studies', ], [ 'FxSub', 'FXS', ], ],
  fr: [ [ 'Études de test', ], [ 'Test.', ], ],
} as const satisfies Fixture

test('src/components/subject_badges.ts:find', () => {
  add(names)

  expect(subject_badges.find('fxs', 'en')).toEqual({
    text: {
      'zh-CN': '测试科',
      en: 'FxSub',
      fr: 'Test.',
    },
    class: [ 'subject', 'FxSub', ],
  })
})

test('find reuses metadata across aliases, case variants, and locales', () => {
  const math = subject_badges.find('Math', 'en')

  expect(subject_badges.find('Math', 'en')).toBe(math)
  expect(subject_badges.find('Mathematics', 'en')).toBe(math)
  expect(subject_badges.find('mAtHs', 'en')).toBe(math)
  expect(subject_badges.find('数学', 'zh-CN')).toBe(math)
  expect(subject_badges.find('Math')).toBe(math)
  expect(subject_badges.find('CS', 'en')).not.toBe(math)
})

test('shared metadata cannot be changed by a consumer', () => {
  const math = subject_badges.find('Math', 'en')

  expect(() => Object.assign(math, { text: 'Changed', })).toThrow(TypeError)
  expect(() => Object.assign(math.text, { en: 'Changed', })).toThrow(TypeError)
  expect(() => Object.assign(math.class!, { 1: 'Changed', })).toThrow(TypeError)
  expect(subject_badges.find('Math', 'en')).toEqual({
    text: { 'zh-CN': '数学', en: 'Math', },
    class: [ 'subject', 'Math', ],
  })
})

test('find_many preserves order and duplicates while returning independent lists', () => {
  const subject_names = [ 'CS', '数学', 'CompSci', ] as const
  const meta = subject_badges.find_many(subject_names)

  expect(meta.map(item => item.class)).toEqual([
    [ 'subject', 'CS', ],
    [ 'subject', 'Math', ],
    [ 'subject', 'CS', ],
  ])
  expect(meta[0]).toBe(subject_badges.find('CS', 'en'))
  expect(meta[0]).toBe(meta[2])
  meta.pop()
  expect(subject_badges.find_many(subject_names)).toHaveLength(3)
  expect(subject_badges.find_many([])).toEqual([])
})

test('cached lookups and batches still reject missing names and wrong locales', () => {
  subject_badges.find('Math', 'en')

  expect(() => subject_badges.find('Math', 'fr')).toThrow('found 0')
  expect(() => subject_badges.find_many([ '数学', ], 'en')).toThrow('found 0')
  expect(() => subject_badges.find_many([ 'CS', 'Missing Subject', ], 'en')).toThrow('found 0')
})

test('cached aliases become ambiguous when a matching subject is registered later', () => {
  add({
    'zh-CN': [ [ '缓存学科甲', ], [ '缓存甲', ], ],
    en: [ [ 'Cache Fixture Alpha', ], [ 'CacheAlias', ], ],
  })
  const alpha = subject_badges.find('CacheAlias', 'en')
  add({
    'zh-CN': [ [ '缓存学科乙', ], [ '缓存乙', ], ],
    en: [ [ 'Cache Fixture Beta', ], [ 'CacheAlias', ], ],
  })

  expect(() => subject_badges.find('CacheAlias', 'en')).toThrow('found 2')
  expect(subject_badges.find('Cache Fixture Alpha', 'en')).toBe(alpha)
})

test('subject metadata composes with plain and localized non-subject badges', () => {
  const serialized = badges.to_HTML_attr([
    ...subject_badges.find_many([ 'Math', 'CS', ], 'en'),
    'Reference',
    {
      text: { 'zh-CN': '含实验', en: 'Lab', },
      class: [ 'course-format', 'lab', ],
    },
  ] as const)

  for (const [ language, expected_texts ] of [
    [ 'zh-CN', [ '数学', '计算机', 'Reference', '含实验', ], ],
    [ 'en', [ 'Math', 'CS', 'Reference', 'Lab', ], ],
  ] as const) {
    const rendered = badges.render(language, null, serialized, { label: 'Fixture', href: '/fixture', })

    expect(rendered.map(item => item.text)).toEqual(expected_texts)
    expect(rendered.map(item => item.class)).toEqual([
      [ 'badge', 'subject', 'Math', ],
      [ 'badge', 'subject', 'CS', ],
      [ 'badge', ],
      [ 'badge', 'course-format', 'lab', ],
    ])
  }
})
