const { test, expect } = require('@playwright/test')

test.describe('main text', () => {
  test('heading has text', async ({ page }) => {
    await page.goto('/')
    const title = page.locator('h1')
    await expect(title).toHaveText('weekends countdown')
  })
})
