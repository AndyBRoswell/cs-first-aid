import { expect, test } from 'vitest'
import isISBN from 'validator/lib/isISBN'
import isISSN from 'validator/lib/isISSN'

test('validator:isISBN', { tags: [ 'ISBN' ] }, () => {
  expect(isISBN('0-13-110362-8')).toBe(true) // C Programming Language, 带连字符
  expect(isISBN('0131103628')).toBe(true) // 纯数字
  expect(isISBN('0 13 110362 8')).toBe(true) // 带空格
  expect(isISBN('0-8044-2957-X')).toBe(true) // 校验和为 10，以 X 结尾
  expect(isISBN('080442957x')).toBe(false) // ISBN-10 的 x 区分大小写
  expect(isISBN('978-0-13-110362-7')).toBe(true)
  expect(isISBN('9780131103627')).toBe(true)
  expect(isISBN('979-10-90636-07-1')).toBe(true) // 979 前缀
  expect(isISBN('978 0 13 110362 7')).toBe(true) // 带空格
  expect(isISBN('0-13-110362-9')).toBe(false) // ISBN-10 校验和错误
  expect(isISBN('0-8044-2957-8')).toBe(false) // 尾数应为 X
  expect(isISBN('978-0-13-110362-8')).toBe(false) // ISBN-13 校验和错误
  expect(isISBN('')).toBe(false)
  expect(isISBN('123456789')).toBe(false)
  expect(isISBN('12345678901')).toBe(false)
  expect(isISBN('977-0-13-110362-7')).toBe(false) // 校验和错误
  expect(isISBN('9770131103628')).toBe(true) // 只验证长度与校验和，不验证 978/979 号段
  expect(isISBN('A-13-110362-8')).toBe(false)
  expect(isISBN('978-0-13-110362-X')).toBe(false)
})

test('validator:isISSN', { tags: [ 'ISSN' ] }, () => {
  expect(isISSN('2049-3630')).toBe(true)
  expect(isISSN('ISSN 2049-3630')).toBe(false) // 不接受 ISSN 前缀
  expect(isISSN('0378-5955')).toBe(true)
  expect(isISSN('2434-561X')).toBe(true)
  expect(isISSN('2434-561x')).toBe(true)
  expect(isISSN('2049-3631')).toBe(false)
  expect(isISSN('20493630')).toBe(true) // 默认不要求连字符
  expect(isISSN('ISN 2049-3630')).toBe(false)
})
