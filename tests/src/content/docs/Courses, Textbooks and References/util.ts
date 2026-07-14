import { expect, type Locator } from '@playwright/test'
import * as data from "@/types/data.ts";

export async function check_references(main: Locator) {
  const References_locators = await main.locator('.References').all()
  for (const locator of References_locators) {
    const csl_entries = await locator.locator('[data-csl-entry-id]').all()
    await expect(locator).toHaveAttribute('data-scope_name')
    const material_segment = JSON.parse((await locator.getAttribute('data-material_segment'))!) as Array<data.Material>
    expect(material_segment.length).toEqual(csl_entries.length)
  }
}