import { expect, type Locator } from '@playwright/test'
import * as data from "@/types/data.ts";
// @ts-ignore [css.escape doesn't have ts support]
import cssesc from "cssesc";
import * as util from "@/util.ts";

export function locate_references(main: Locator, scope_name: data.Scope_Name) {
  const CSS_escaped_scope_name = cssesc(JSON.stringify(scope_name), util.cssesc_options)
  return main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
}

export async function check_references(main: Locator) {
  const References_locators = await main.locator('.References').all()
  for (const locator of References_locators) {
    const csl_entries = await locator.locator('[data-csl-entry-id]').all()
    await expect(locator).toHaveAttribute('data-scope_name')
    const material_segment = JSON.parse((await locator.getAttribute('data-material_segment'))!) as Array<data.Material>
    expect(material_segment.length).toEqual(csl_entries.length)
  }
}