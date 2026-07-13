import { test, expect, } from '@playwright/test'
import * as data from "@/types/data.ts"
import cssesc from 'cssesc'
import * as util from '@tests/util.ts'

test('cssesc', async () => {
  const scope_name: data.Scope_Name = [ 'textbook', 'primary', 'zh-CN' ]
  const escaped_scope_name: data.Serialized_Scope_Name = cssesc(JSON.stringify(scope_name), util.cssesc_options)
  expect(escaped_scope_name).toEqual(`[\\"textbook\\",\\"primary\\",\\"zh-CN\\"]`)
})