const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Verify that user can use settings modal', () => {
  test('should be used by user', async ({ page }) => {
    await page.locator('svg').first().click()
    await page.locator('[placeholder="Have a beer"]').click()
    await page.locator('[placeholder="Have a beer"]').fill('some beer!')
    await page.locator('text=Friday').click()
    await page.locator('text=Wednesday').click()
    await page.locator('text=18:00').click()
    await page.locator('text=00:00').click()
    expect(page.locator('text=Wednesday')).toBeTruthy()
    expect(page.locator('text=00:00')).toBeTruthy()
  })

  test('should be able to click each day', async ({ page }) => {
    await page.locator('svg').first().click()

    await page.locator('text=Friday').click()
    await page.locator('text=Monday').click()

    await page.locator('text=Monday').click()
    await page.locator('text=Tuesday').click()

    await page.locator('text=Tuesday').click()
    await page.locator('text=Wednesday').click()

    await page.locator('text=Wednesday').click()
    await page.locator('text=Thursday').click()

    await page.locator('text=Thursday').click()
    await page.locator('text=Friday').click()

    await page.locator('text=Friday').click()
    await page.locator('text=Saturday').click()

    await page.locator('text=Saturday').click()
    await page.locator('text=Sunday').click()

    await page.locator('text=Sunday').click()
    await page.locator('text=Friday').click()
  })

  test('should be able to click each hour', async ({ page }) => {
    await page.locator('svg').first().click()

    await page.locator('text=18:00').click()
    await page.locator('text=00:00').click()

    await page.locator('text=00:00').click()
    await page.locator('text=01:00').click()

    await page.locator('text=01:00').click()
    await page.locator('text=02:00').click()

    await page.locator('text=02:00').click()
    await page.locator('text=03:00').click()

    await page.locator('text=03:00').click()
    await page.locator('text=04:00').click()

    await page.locator('text=04:00').click()
    await page.locator('text=05:00').click()

    await page.locator('text=05:00').click()
    await page.locator('text=06:00').click()

    await page.locator('text=06:00').click()
    await page.locator('text=07:00').click()

    await page.locator('text=07:00').click()
    await page.locator('text=08:00').click()

    await page.locator('text=08:00').click()
    await page.locator('text=09:00').click()

    await page.locator('text=09:00').click()
    await page.locator('text=10:00').click()

    await page.locator('text=10:00').click()
    await page.locator('text=11:00').click()

    await page.locator('text=11:00').click()
    await page.locator('text=12:00').click()

    await page.locator('text=12:00').click()
    await page.locator('text=13:00').click()

    await page.locator('text=13:00').click()
    await page.locator('text=14:00').click()

    await page.locator('text=14:00').click()
    await page.locator('text=15:00').click()

    await page.locator('text=15:00').click()
    await page.locator('text=16:00').click()

    await page.locator('text=16:00').click()
    await page.locator('text=17:00').click()

    await page.locator('text=17:00').click()
    await page.locator('text=18:00').click()

    await page.locator('text=18:00').click()
    await page.locator('text=19:00').click()

    await page.locator('text=19:00').click()
    await page.locator('text=20:00').click()

    await page.locator('text=20:00').click()
    await page.locator('text=21:00').click()

    await page.locator('text=21:00').click()
    await page.locator('text=22:00').click()

    await page.locator('text=22:00').click()
    await page.locator('text=23:00').click()

    await page.locator('text=23:00').click()
    await page.locator('text=00:00').click()
  })

  test('should be able to change greetings text', async ({ page }) => {
    const greetingsText = 'some beer!'

    await page.locator('svg').first().click()
    const input = page.locator('[placeholder="Have a beer"]')
    await input.fill(greetingsText)
    expect(input).toHaveValue(greetingsText)
  })

  test('should be able to click switcher', async ({ page }) => {
    await page.locator('svg').first().click()
    const modal = page.locator('[data-testid="settings-modal"]')
    const switcher = modal.locator('role=checkbox')
    await switcher.click()
    expect(switcher).toBeChecked()
    await switcher.click()
    expect(switcher).not.toBeChecked()
  })
})
