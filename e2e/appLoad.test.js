const { test, expect } = require('@playwright/test')
const path = require('path')
const sinon = require('sinon')

test.describe('Application first load', () => {
  test.use({ storageState: {} })

  test.beforeEach(async ({ page, context }) => {
    // Install Sinon in all the pages in the context
    await context.addInitScript({
      path: path.join(__dirname, '..', './node_modules/sinon/pkg/sinon.js'),
    })
    // Auto-enable sinon right away
    await context.addInitScript(() => {
      window.__clock = sinon.useFakeTimers({
        now: new Date('2022-06-06 13:31:22'),
      })
    })
    await page.goto('/')
  })

  test.afterEach(() => {
    sinon.restore()
  })

  test('Verify application first load', async ({ page }) => {
    await test.step('should open app first load settings modal', async () => {
      await expect(page.locator('[data-testid="startup-modal"]')).toBeVisible()
    })

    await test.step('should be friday and 18:00 set by default', async () => {
      await expect(page.locator('text=Friday')).toBeVisible()
      await expect(page.locator('text=18:00')).toBeVisible()
    })

    await test.step('should open day dropdown', async () => {
      await page.locator('text=Friday').click()
      await expect(page.locator('text=Friday').nth(0)).toBeVisible()

      await expect(page.locator('text=Monday')).toBeVisible()
      await expect(page.locator('text=Tuesday')).toBeVisible()
      await expect(page.locator('text=Wednesday')).toBeVisible()
      await expect(page.locator('text=Thursday')).toBeVisible()
      await expect(page.locator('text=Friday').nth(1)).toBeVisible()
      await expect(page.locator('text=Saturday')).toBeVisible()
      await expect(page.locator('text=Sunday')).toBeVisible()
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
        await expect(page.locator('text=Saturday')).toBeVisible()
      })

      await test.step('should select new hour', async () => {
        await page.locator('text=18:00').click()
        await page.locator('text=19:00').click()
        await expect(page.locator('text=19:00')).toBeVisible()
      })
    })

    await test.step('should Apply settings', async () => {
      await page.locator('button:has-text("Apply")').click()
      await expect(page.locator('html')).not.toHaveClass('dark')
      await expect(page.locator('h1')).toHaveText('weekends countdown')
      await page.evaluate(() => window.__clock.tick(1000))
      await expect(page.locator('h2')).toHaveText(/time left to weekends/i)
      await expect(page.locator('//*[@id="root"]/div/main/div/div')).toHaveText(
        'days5:hours5:minutes28:seconds37'
      )
    })
  })

  test('Verify UI settings modal page on first load', async ({ page }) => {
    await test.step('should match UI', async () => {
      await expect(page.locator('text="Please choose"')).toBeVisible()
      await expect(
        page.locator('text="Day and Hour you finish your work"')
      ).toBeVisible()
      await expect(page.locator('[data-testid="startup-modal"]')).toBeVisible()
      await expect(page.locator('text=day').nth(1)).toBeVisible()
      await expect(page.locator('text=Friday')).toBeVisible()
      await expect(page.locator('text=hour').nth(1)).toBeVisible()
      await expect(page.locator('text=18:00')).toBeVisible()
      await expect(page.locator('button:has-text("Apply")')).toBeVisible()
    })
  })
})
