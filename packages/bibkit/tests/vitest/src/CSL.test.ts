import { expect, test } from 'vitest'
import * as CSL from '@/CSL.ts'

test('CSL.is_ISBN enforces canonical ISBN syntax', { tags: [ 'ISBN' ] }, () => {
  expect(CSL.is_ISBN('080442957x')).toBe(false)
  expect(CSL.is_ISBN('9770131103628')).toBe(false)
})
