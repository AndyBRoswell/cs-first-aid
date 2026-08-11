// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { expect, test } from 'vitest'
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
