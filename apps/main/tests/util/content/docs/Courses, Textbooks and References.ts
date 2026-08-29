import { expect, type Locator } from '@playwright/test'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as bib from '@cs-first-aid/bibkit/bib'
// @ts-ignore [cssesc doesn't have ts support]
import cssesc from "cssesc";
import * as util from '@cs-first-aid/util'

function get_rendered_link_text(link: types_data.Link): string {
  const metadata = typeof link === 'string' ? { link } : link
  return `${metadata.display_text ?? metadata.link}${metadata.note === undefined ? '' : ` (${metadata.note})`}${metadata.license === undefined ? '' : ` (${metadata.license})`}`
}

export function locate_references(main: Locator, scope_name: types_data.Scope_Name) {
  const CSS_escaped_scope_name = cssesc(JSON.stringify(scope_name), util.cssesc_options)
  return main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
}

export async function check_references(main: Locator) {
  const language = await main.evaluate(element => element.ownerDocument.documentElement.lang)
  const labels = bib.get_extra_bib_label(language)
  const References_locators = await main.locator('.References').all()
  for (const locator of References_locators) {
    // basic
    const CSL_entries = await locator.locator('.Bibliography > .entry.CSL').all()
    await expect(locator).toHaveAttribute('data-scope_name')
    const material_segment = JSON.parse((await locator.getAttribute('data-material_segment'))!) as Array<types_data.Material>
    expect(material_segment.length).toEqual(CSL_entries.length)
    // custom data
    for (const [ index, material ] of material_segment.entries()) {
      if (material.custom !== undefined) {
        const custom_div: Locator = CSL_entries[index]!.locator(':scope > .custom')
        await expect(custom_div).toHaveCount(1)
        if (material.custom.lecturer !== undefined) {
          const lecturer_element: Locator = custom_div.locator(':scope > .lecturer')
          const rendered_lecturer: string = catalog.get_rendered_names(material.custom.lecturer, { full_name: true })
          const expected = `${labels.lecturer}${rendered_lecturer}`
          await expect(lecturer_element).toHaveText(expected)
        }
        if (material.custom.URL !== undefined) {
          const links = material.custom.URL
          await expect(custom_div.locator('.URL')).toHaveText(labels.additional_links + links.map(get_rendered_link_text).join(''))
        }
        if (material.custom.free_material !== undefined) {
          const free_material = material.custom.free_material
          const groups = Array.isArray(free_material) ? [ [ '', free_material ] ] as const : Object.entries(free_material)
          const expected_text = labels.free_materials + groups.map(([ name, group_links ]) => `${labels.free_material_groups[name] ?? name}${group_links.map(get_rendered_link_text).join('')}`).join('')
          await expect(custom_div.locator('.free_material')).toHaveText(expected_text)
        }
      }
    }
  }
}

export async function check_cites(main: Locator) { // Created by GPT-5.6 Terra Max [codex]. Revised by AndyBRoswell.
  const Cite_locators = await main.locator('.Cite').all()
  for (const locator of Cite_locators) {
    const cite_links = await locator.locator('.Citation > .reference > .number').all()
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
