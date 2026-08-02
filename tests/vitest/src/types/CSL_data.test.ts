import { test, expect } from 'vitest';

import * as CSL_data from '@/types/CSL_data.ts'

test('src/types/CSL_data.ts:is_ISBN', { tags: [ 'ISBN' ] }, () => { // // Created by Gemini 3.1 Pro in Web App. Revised by AndyBRoswell.
  expect(CSL_data.is_ISBN('0-13-110362-8')).toBe(true) // C Programming Language, 带连字符
  expect(CSL_data.is_ISBN('0131103628')).toBe(true)    // 纯数字
  expect(CSL_data.is_ISBN('0 13 110362 8')).toBe(true) // 带空格
  expect(CSL_data.is_ISBN('0-8044-2957-X')).toBe(true) // 校验和为 10，以 X 结尾
  expect(CSL_data.is_ISBN('080442957x')).toBe(true)    // 小写 x 结尾

  expect(CSL_data.is_ISBN('978-0-13-110362-7')).toBe(true)
  expect(CSL_data.is_ISBN('9780131103627')).toBe(true)
  expect(CSL_data.is_ISBN('979-10-90636-07-1')).toBe(true) // 979 前缀
  expect(CSL_data.is_ISBN('978 0 13 110362 7')).toBe(true) // 带空格

  expect(CSL_data.is_ISBN('0-13-110362-9')).toBe(false)     // ISBN-10 校验和错误
  expect(CSL_data.is_ISBN('0-8044-2957-8')).toBe(false)     // 尾数应为 X
  expect(CSL_data.is_ISBN('978-0-13-110362-8')).toBe(false) // ISBN-13 校验和错误

  expect(CSL_data.is_ISBN('')).toBe(false)                 // 空字符串
  expect(CSL_data.is_ISBN('123456789')).toBe(false)        // 长度过短 (9位)
  expect(CSL_data.is_ISBN('12345678901')).toBe(false)      // 长度错误 (11位)
  expect(CSL_data.is_ISBN('977-0-13-110362-7')).toBe(false)// ISBN-13 前缀无效 (非978/979)
  expect(CSL_data.is_ISBN('A-13-110362-8')).toBe(false)    // 包含非法字母
  expect(CSL_data.is_ISBN('978-0-13-110362-X')).toBe(false)// ISBN-13 不能以 X 结尾
})

test('src/types/CSL_data.ts:is_ISSN', { tags: [ 'ISSN' ] }, () => { // Created by Gemini 3.1 Pro in Web App. Revised by AndyBRoswell.
  expect(CSL_data.is_ISSN('2049-3630'))
  expect(CSL_data.is_ISSN('ISSN 2049-3630'))
  expect(CSL_data.is_ISSN('0378-5955'))
  expect(CSL_data.is_ISSN('2434-561X'))
  expect(CSL_data.is_ISSN('2434-561x'))

  expect(CSL_data.is_ISSN('2049-3631')).toBeFalsy()
  expect(CSL_data.is_ISSN('20493630')).toBeFalsy()
  expect(CSL_data.is_ISSN('ISN 2049-3630')).toBeFalsy()
})