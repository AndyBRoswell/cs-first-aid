import { expect, type Locator } from '@playwright/test'
import * as data from "@/types/data.ts";
import * as catalog from '@/data/materials/catalog.ts'
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
    // basic
    const CSL_entries = await locator.locator('.CSL_Entry').all()
    await expect(locator).toHaveAttribute('data-scope_name')
    const material_segment = JSON.parse((await locator.getAttribute('data-material_segment'))!) as Array<data.Material>
    expect(material_segment.length).toEqual(CSL_entries.length)
    // custom data
    for (const [ index, material ] of material_segment.entries()) {
      if ('custom' in material) {
        if ('lecturer' in material.custom) {
          const custom_div: Locator = CSL_entries[index]!.locator('.custom')
          const lecturer_p: Locator = custom_div.locator('.lecturer')
          const rendered_lecturer: string = catalog.get_rendered_names(material.custom.lecturer)
          const expected = `Lecturer: ` + rendered_lecturer
          await expect(lecturer_p).toHaveText(expected)
        }
      }
    }
  }
}