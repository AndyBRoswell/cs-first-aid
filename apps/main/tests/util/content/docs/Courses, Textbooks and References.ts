import { expect, type Locator } from '@playwright/test'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as bib from '@cs-first-aid/bibkit/bib'
// @ts-ignore [cssesc doesn't have ts support]
import cssesc from "cssesc";
import * as util from '@cs-first-aid/util'

async function check_links(container: Locator, links: types_data.Link[]) {
  const metadata = links.map(link => typeof link === 'string' ? { link } : link)
  const rendered_links = container.locator('.Link')
  const anchors = rendered_links.getByRole('link')
  await expect(anchors).toHaveText(metadata.map(link => link.display_text ?? link.link))
  expect(await anchors.evaluateAll(elements => elements.map(element => [ element.getAttribute('href'), element.getAttribute('type') ]))).toEqual(metadata.map(link => [ link.link, link['Content-Type'] ?? null ]))
  await expect(rendered_links.locator('.note')).toHaveText(metadata.map(link => link.note).filter(note => note !== undefined)) // An empty expected array still asserts that the locator matches no elements.
  await expect(rendered_links.locator('.license')).toHaveText(metadata.map(link => link.license).filter(license => license !== undefined))
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
          const URL = custom_div.locator('.URL')
          await expect(URL.locator('.label')).toHaveText(labels.additional_links)
          await check_links(URL, material.custom.URL)
        }
        if (material.custom.free_material !== undefined) {
          const free_material = material.custom.free_material
          const rendered_free_material = custom_div.locator('.free_material')
          await expect(rendered_free_material.locator('.label')).toHaveText(labels.free_materials)
          if (Array.isArray(free_material)) { await check_links(rendered_free_material, free_material) }
          else {
            const groups = Object.entries(free_material)
            await expect(rendered_free_material.getByRole('term')).toHaveText(groups.map(([ name ]) => labels.free_material_groups[name] ?? name))
            await expect(rendered_free_material.getByRole('definition')).toHaveCount(groups.length)
            await check_links(rendered_free_material, groups.flatMap(([ , links ]) => links))
          }
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
