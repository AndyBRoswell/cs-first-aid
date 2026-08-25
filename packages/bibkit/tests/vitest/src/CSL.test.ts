import { expect, test } from 'vitest'
import * as CSL from '@/CSL.ts'

test('CSL.is_ISBN applies ISBN-specific rules missing from validator.js', { tags: [ 'ISBN' ] }, () => {
  expect(CSL.is_ISBN('080442957x')).toBe(true)
  expect(CSL.is_ISBN('9770131103628')).toBe(false)
})
