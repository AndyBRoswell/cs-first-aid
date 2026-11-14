import { expect } from '@playwright/test'
import { test } from '@tests/util/e2e.ts'
import { test_server } from '@tests/util.ts'

for (const { source, name, target } of [
  {
    source: '/courses-textbooks-and-references/programming/cpp-programming/i/',
    name: '学习 Rust',
    target: '/courses-textbooks-and-references/programming/rust-programming/',
  },
  {
    source: '/courses-textbooks-and-references/programming/cpp-programming/ii/',
    name: '《C++ 程序设计 I》',
    target: '/courses-textbooks-and-references/programming/cpp-programming/i/#%E6%9C%AA%E9%80%89%E6%9D%90%E6%96%99',
  },
]) {
  test(`internal links: ${name}`, async ({ page }) => {
    const expected_URL = new URL(`${test_server}${target}`)
    await page.goto(`${test_server}${source}`)
    const link = page.getByRole('main').getByRole('link', { name, exact: true })
    await expect(link).toHaveAttribute('href', expected_URL.pathname + expected_URL.hash)
    await link.click()
    await expect(page).toHaveURL(`${test_server}${target}`)
    await expect(page.getByTestId('404')).toHaveCount(0)
    if (expected_URL.hash) {
      await expect(page.getByRole('main').locator(`[id="${decodeURIComponent(expected_URL.hash.slice(1))}"]`)).toBeVisible()
    }
  })
}
