import { expect, type Locator } from '@playwright/test'

export async function check_title(main: Locator, text: string | RegExp) {
  await expect(main.locator('#_top')).toHaveText(text)
}