const { test, expect } = require('@playwright/test')

test.describe('Application first load', () => {
  test.use({ storageState: {} })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Verify application first load', async ({ page }) => {
    await test.step('should open app first load settings modal', async () => {
      expect(page.locator('[data-testid="startup-modal"]')).toBeVisible()
    })

    await test.step('should be friday and 18:00 set by default', async () => {
      expect(page.locator('text=Friday')).toBeVisible()
      expect(page.locator('text=18:00')).toBeVisible()
    })

    await test.step('should open day dropdown', async () => {
      await page.locator('text=Friday').click()
      expect(page.locator('text=Friday').nth(0)).toBeVisible()

      expect(page.locator('text=Monday')).toBeVisible()
      expect(page.locator('text=Tuesday')).toBeVisible()
      expect(page.locator('text=Wednesday')).toBeVisible()
      expect(page.locator('text=Thursday')).toBeVisible()
      expect(page.locator('text=Friday').nth(1)).toBeVisible()
      expect(page.locator('text=Saturday')).toBeVisible()
      expect(page.locator('text=Sunday')).toBeVisible()
    })

    await test.step('should open hour dropdown', async () => {
      await page.locator('text=18:00').click()
      expect(page.locator('text=18:00').nth(0)).toBeVisible()

      expect(page.locator('text=00:00')).toBeVisible()
      expect(page.locator('text=01:00')).toBeVisible()
      expect(page.locator('text=02:00')).toBeVisible()
      expect(page.locator('text=03:00')).toBeVisible()
      expect(page.locator('text=04:00')).toBeVisible()
      expect(page.locator('text=05:00')).toBeVisible()
      expect(page.locator('text=06:00')).toBeVisible()
      expect(page.locator('text=07:00')).toBeVisible()
      expect(page.locator('text=08:00')).toBeVisible()
      expect(page.locator('text=09:00')).toBeVisible()
      expect(page.locator('text=10:00')).toBeVisible()
      expect(page.locator('text=11:00')).toBeVisible()
      expect(page.locator('text=12:00')).toBeVisible()
      expect(page.locator('text=13:00')).toBeVisible()
      expect(page.locator('text=14:00')).toBeVisible()
      expect(page.locator('text=15:00')).toBeVisible()
      expect(page.locator('text=16:00')).toBeVisible()
      expect(page.locator('text=17:00')).toBeVisible()
      expect(page.locator('text=18:00').nth(1)).toBeVisible()
      expect(page.locator('text=19:00')).toBeVisible()
      expect(page.locator('text=20:00')).toBeVisible()
      expect(page.locator('text=21:00')).toBeVisible()
      expect(page.locator('text=22:00')).toBeVisible()
      expect(page.locator('text=23:00')).toBeVisible()
    })

    await test.step('should select new day and hour', async () => {
      await test.step('should select new day', async () => {
        await page.locator('text=Friday').click()
        await page.locator('text=Saturday').click()
        expect(page.locator('text=Saturday')).toBeVisible()
      })

      await test.step('should select new hour', async () => {
        await page.locator('text=18:00').click()
        await page.locator('text=19:00').click()
        expect(page.locator('text=19:00')).toBeVisible()
      })
    })

    await test.step('should Apply settings', async () => {
      await page.locator('button:has-text("Apply")').click()
      expect(page.locator('html')).not.toHaveClass('dark')
      expect(page.locator('h1')).toHaveText(/weekends countdown/i)
      expect(page.locator('h2')).toHaveText(/time left to weekends/i)
    })
  })

  test('Verify UI settings modal page on first load', async ({ page }) => {
    await test.step('should match UI', async () => {
      expect(page.locator('text="Please choose"')).toBeVisible()
      expect(
        page.locator('text="Day and Hour you finish your work"')
      ).toBeVisible()
      expect(page.locator('[data-testid="startup-modal"]')).toBeVisible()
      expect(page.locator('text=day').nth(1)).toBeVisible()
      expect(page.locator('text=Friday')).toBeVisible()
      expect(page.locator('text=hour').nth(1)).toBeVisible()
      expect(page.locator('text=18:00')).toBeVisible()
      expect(page.locator('button:has-text("Apply")')).toBeVisible()
    })
  })
})
