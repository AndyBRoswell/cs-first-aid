import { expect, type Locator } from '@playwright/test'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
// @ts-ignore [cssesc doesn't have ts support]
import cssesc from "cssesc";
import * as util from '@cs-first-aid/util'

export function locate_references(main: Locator, scope_name: types_data.Scope_Name) {
  const CSS_escaped_scope_name = cssesc(JSON.stringify(scope_name), util.cssesc_options)
  return main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
}

export async function check_references(main: Locator) {
  const language = await main.evaluate(element => element.ownerDocument.documentElement.lang)
  const References_locators = await main.locator('.References').all()
  for (const locator of References_locators) {
    // basic
    const CSL_entries = await locator.locator('.Bibliography > .entry.CSL').all()
    await expect(locator).toHaveAttribute('data-scope_name')
    const material_segment = JSON.parse((await locator.getAttribute('data-material_segment'))!) as Array<types_data.Material>
    expect(material_segment.length).toEqual(CSL_entries.length)
    // custom data
    for (const [ index, material ] of material_segment.entries()) {
      if ('custom' in material) {
        if ('lecturer' in material.custom) {
          const custom_div: Locator = CSL_entries[index]!.locator('.custom')
          const lecturer_p: Locator = custom_div.locator('.lecturer')
          const rendered_lecturer: string = catalog.get_rendered_names(material.custom.lecturer, { full_name: true })
          const expected = `${language === 'zh-CN' ? '主讲：' : 'Lecturer: '}${rendered_lecturer}`
          await expect(lecturer_p).toHaveText(expected)
        }
      }
    }
  }
}

export async function check_cites(main: Locator) { // Created by GPT-5.6 Terra Max [codex]. Revised by AndyBRoswell.
  const Cite_locators = await main.locator('.Cite').all()
  for (const locator of Cite_locators) {
    const cite_links = await locator.locator('.Citation > .reference > a.number').all()
    expect(cite_links.length).toBeGreaterThan(0)
    for (const link of cite_links) {
      const index = await link.innerText()
      expect(index).toMatch(/^\d+$/)
      const target_ID = `reference-${index}`
      await expect(link).toHaveAttribute('href', `#${target_ID}`)
      await expect(main.locator(`.Bibliography > .entry.CSL[id="${target_ID}"]`)).toHaveCount(1)
    }
  }
}
