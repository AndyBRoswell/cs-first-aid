import { test, expect } from 'vitest';

import * as CSL_data from '@/types/CSL_data.ts'

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