// Created by GPT-5.6 Sol Max [Codex]. Revised by AndyBRoswell.

import * as util from '@cs-first-aid/util'

type Name = { canonical: string, all: string[] }
type Names = { full: Name, short: Name }
type Localized_Names = {
  [locale: Intl.UnicodeBCP47LocaleIdentifier]: Names
} & {
  'zh-CN': Names
  en: Names
}
export type Subject = {
  id: number
  names: Localized_Names
  emoji?: Partial<Name>
}
type Input = Omit<Subject, 'id'>

// IDs are zero-based. Keep additions append-only so existing IDs remain stable.
const items: Subject[] = []

function create(input: Input, id: number): Subject {
  const names: Names[] = Object.values(input.names)
  const has_invalid_name: boolean = names.length === 0 || names.some(({ full, short }) =>
    [ full, short, ].some(({ canonical, all }) => canonical.trim().length === 0 || !all.includes(canonical))
  )
  if (has_invalid_name) { throw new Error('Canonical subject names must be non-empty and included in all names.') }

  return { id, ...input }
}

export function add(input: Input): Subject {
  const item: Subject = create(input, items.length)
  items.push(item)
  return item
}

export function add_many(inputs: readonly Input[]): Subject[] {
  const additions: Subject[] = inputs.map((input, index) => create(input, items.length + index))
  items.push(...additions)
  return additions
}

export function get(id: number): Subject {
  const item: Subject | undefined = items[id]
  if (item === undefined) { throw new Error('Failed to find a subject with ID ' + id + '.') }
  return item
}

export function get_classes(subject: Subject): string[] { return [ subject.names.en.short.canonical, ] }

/** Finds one exact match among canonical and other full and short names in every or the designated locale. */
export function find(name: string, language?: Intl.UnicodeBCP47LocaleIdentifier): Subject {
  const matches: Subject[] = items.filter(item => Object.entries(item.names).some(([ current_language, { full, short } ]) => {
    if (language !== undefined && current_language !== language) { return false }
    return full.all.some(value => util.ieq(value, name, current_language))
      || short.all.some(value => util.ieq(value, name, current_language))
  }))
  if (matches.length !== 1) {
    throw new Error('Expected exactly one subject matching ' + JSON.stringify(name) + ', found ' + matches.length + '.')
  }
  return matches[0]!
}

add_many([
  {
    names: {
      'zh-CN': { full: { canonical: '数学', all: [ '数学', ] }, short: { canonical: '数学', all: [ '数学', '数', ] } },
      en: { full: { canonical: 'Mathematics', all: [ 'Mathematics', ] }, short: { canonical: 'Math', all: [ 'Math', 'Maths', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '计算机科学', all: [ '计算机科学', ] }, short: { canonical: '计算机', all: [ '计算机', '计科', '计', ] } },
      en: { full: { canonical: 'Computer Science', all: [ 'Computer Science', ] }, short: { canonical: 'CS', all: [ 'CS', 'CompSci', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '软件工程', all: [ '软件工程', ] }, short: { canonical: '软工', all: [ '软工', '软', ] } },
      en: { full: { canonical: 'Software Engineering', all: [ 'Software Engineering', ] }, short: { canonical: 'SE', all: [ 'SE', 'SWE', 'SoftEng', 'S/W Eng', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '安全', all: [ '安全', ] }, short: { canonical: '安全', all: [ '安全', ] } },
      en: { full: { canonical: 'Security', all: [ 'Security', ] }, short: { canonical: 'Sec', all: [ 'Sec', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '理论计算机科学', all: [ '理论计算机科学', ] }, short: { canonical: '理计', all: [ '理计', ] } },
      en: { full: { canonical: 'Theoretical Computer Science', all: [ 'Theoretical Computer Science', ] }, short: { canonical: 'TCS', all: [ 'TCS', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '系统', all: [ '系统', ] }, short: { canonical: '系统', all: [ '系统', ] } },
      en: { full: { canonical: 'System', all: [ 'System', ] }, short: { canonical: 'Sys', all: [ 'Sys', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '网络', all: [ '网络', ] }, short: { canonical: '网络', all: [ '网络', ] } },
      en: { full: { canonical: 'Network', all: [ 'Network', 'Networks' ] }, short: { canonical: 'Net', all: [ 'Net', 'Network', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '微架构/体系结构', all: [ '微架构/体系结构', '微架构/系统结构' ] }, short: { canonical: '微架构/体系结构', all: [ '微架构/体系结构', '微架构/系统结构', ] } },
      en: { full: { canonical: 'Microarchitecture/Architecture', all: [ 'Microarchitecture/Architecture', ] }, short: { canonical: 'μArch/Arch', all: [ 'μArch/Arch', 'uArch/Arch', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '电气工程', all: [ '电气工程', ] }, short: { canonical: '电气', all: [ '电气', ] } },
      en: { full: { canonical: 'Electrical Engineering', all: [ 'Electrical Engineering', ] }, short: { canonical: 'Electrical', all: [ 'Electrical', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '电子工程', all: [ '电子工程', ] }, short: { canonical: '电子', all: [ '电子', ] } },
      en: { full: { canonical: 'Electronics Engineering', all: [ 'Electronics Engineering', ] }, short: { canonical: 'Electronic', all: [ 'Electronic', 'Electronics', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '控制工程', all: [ '控制工程', ] }, short: { canonical: '控制', all: [ '控制', ] } },
      en: { full: { canonical: 'Control Engineering', all: [ 'Control Engineering', ] }, short: { canonical: 'Control', all: [ 'Control', 'Ctrl', 'Ctl', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '通信工程', all: [ '通信工程', ] }, short: { canonical: '通信', all: [ '通信', ] } },
      en: { full: { canonical: 'Telecommunications Engineering', all: [ 'Telecommunications Engineering', ] }, short: { canonical: 'Telecom', all: [ 'Telecom', 'Telecommunications', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '光电工程', all: [ '光电工程', '光电子学', ] }, short: { canonical: '光电', all: [ '光电', ] } },
      en: { full: { canonical: 'Optoelectronics', all: [ 'Optoelectronics', 'Optronics', ] }, short: { canonical: 'Optronics', all: [ 'Optronics', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '微电子', all: [ '微电子', '微电子学', ] }, short: { canonical: '微电子', all: [ '微电子', ] } },
      en: { full: { canonical: 'Microelectronics', all: [ 'Microelectronics', ] }, short: { canonical: 'Microelectronics', all: [ 'Microelectronics', ] } },
    },
  },
])
