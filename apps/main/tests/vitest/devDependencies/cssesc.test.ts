import { test, expect, } from 'vitest'

import * as data from "../../../../../packages/bibkit/src/types/data.ts"
import cssesc from 'cssesc'
import * as util from '../../../../../packages/common/util.ts'

test('cssesc', { tags: [ 'cssesc', ] }, async () => {
  const scope_name: data.Scope_Name = [ 'references', 'textbook', 'primary', 'zh-CN' ]
  const escaped_scope_name: data.Serialized_Scope_Name = cssesc(JSON.stringify(scope_name), util.cssesc_options)
  expect(escaped_scope_name).toEqual(`[\\"references\\",\\"textbook\\",\\"primary\\",\\"zh-CN\\"]`)
})