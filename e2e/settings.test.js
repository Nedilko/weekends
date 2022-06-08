const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('https://weekends.nac.in.ua')
})

test.describe('settings modal', () => {
  test('should be used by user', async ({ page }) => {
    await page.locator('text=Apply').click()
    await page.locator('svg').first().click()
    await page.locator('[placeholder="Have a beer"]').click()
    await page.locator('[placeholder="Have a beer"]').fill('some beer!')
    await page.locator('text=Friday').click()
    await page.locator('text=Wednesday').click()
    await page.locator('text=18:00').click()
    await page.locator('text=00:00').click()
    await page.locator('text=Apply').click()
    expect(page.locator('#settings-modal')).not.toBeVisible()

    // await page.waitForSelector('#settings-modal')
    // await expect(page.locator('h1')).toHaveText('weekends countdown')
  })
})
