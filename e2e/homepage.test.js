const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('https://weekends.nac.in.ua')
})

test.describe('main text', () => {
  test('heading has text', async ({ page }) => {
    const title = page.locator('h1')
    await expect(title).toHaveText('weekends countdown')
  })
})
