import { type Page, expect } from '@playwright/test'
import * as util from '@tests/util.ts'

export async function goto(page: Page, errors: Error[], URL: string, options?: { referer?: string, timeout?: number, waituntil?: "load" | "domcontentloaded" | "networkidle" | "commit" }) {
  const response = await page.goto(URL, options)
  page.on('pageerror', (error: Error) => util.on_pageerror(errors, error))
  expect(response!.status()).toBe(200)
  expect(errors).toHaveLength(0)
}