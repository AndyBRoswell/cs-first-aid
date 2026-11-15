import { expect } from '@playwright/test'
import { test } from '@tests/util/e2e.ts'
import { test_server } from '@tests/util.ts'

for (const { source, name, target } of [
  {
    source: '/courses-textbooks-and-references/programming/cpp-programming/i/',
    name: '学习 Rust',
    target: '/courses-textbooks-and-references/programming/rust-programming/', // Cover navigation between course pages without a fragment.
  },
  {
    source: '/courses-textbooks-and-references/programming/cpp-programming/ii/',
    name: '《C++ 程序设计 I》',
    target: '/courses-textbooks-and-references/programming/cpp-programming/i/#%E6%9C%AA%E9%80%89%E6%9D%90%E6%96%99', // Cover a percent-encoded fragment targeting 未选材料.
  },
]) {
  test(`internal links: ${name}`, async ({ page }) => {
    const expected_URL = new URL(`${test_server}${target}`) // Include any deployment prefix already present in test_server.
    await page.goto(`${test_server}${source}`)
    const link = page.getByRole('main').getByRole('link', { name, exact: true }) // Select the content link rather than a sidebar entry.
    await expect(link).toHaveAttribute('href', expected_URL.pathname + expected_URL.hash) // Verify the rendered href includes the deployment prefix and fragment.
    await link.click() // Exercise actual browser navigation through the rendered link.
    await expect(page).toHaveURL(`${test_server}${target}`)
    await expect(page.getByTestId('404')).toHaveCount(0) // Reaching the expected URL alone does not rule out a missing page.
    if (expected_URL.hash) {
      await expect(page.getByRole('main').locator(`[id="${decodeURIComponent(expected_URL.hash.slice(1))}"]`)).toBeVisible() // Decode the URL fragment to match the target element's ID.
    }
  })
}
