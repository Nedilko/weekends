const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Settings', () => {
  test('Verify that user can use settings modal', async ({ page }) => {
    await test.step('should open settings modal', async () => {
      await page.locator('svg').first().click()
      const modal = page.locator('[data-testid="settings-modal"]')
      expect(modal).toBeVisible()
    })

    await test.step('should set new text is input field', async () => {
      const greetingsText = 'some beer!'
      const input = page.locator('[placeholder="Have a beer"]')
      await input.fill(greetingsText)
      expect(input).toHaveValue(greetingsText)
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

    await test.step('should select day from dropdown', async () => {
      await test.step('should select Monday', async () => {
        await page.locator('text=Monday').click()
        expect(page.locator('text=Monday')).toBeVisible()
      })

      await test.step('should select current day', async () => {
        await page.locator('text=Monday').click()
        await page.locator('text=Monday').nth(1).click()
        expect(page.locator('text=Monday')).toBeVisible()
      })

      await test.step('should select Sunday', async () => {
        await page.locator('text=Monday').click()
        await page.locator('text=Sunday').click()
        expect(page.locator('text=Sunday')).toBeVisible()
      })
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

    await test.step('should select hour from dropdown', async () => {
      await test.step('should select 00:00', async () => {
        await page.locator('text=00:00').click()
        expect(page.locator('text=00:00')).toBeVisible()
      })

      await test.step('should select current hour', async () => {
        await page.locator('text=00:00').click()
        await page.locator('text=00:00').nth(1).click()
        expect(page.locator('text=00:00')).toBeVisible()
      })

      await test.step('should select 23:00', async () => {
        await page.locator('text=00:00').click()
        await page.locator('text=23:00').click()
        expect(page.locator('text=23:00')).toBeVisible()
      })
    })

    await test.step('should change switcher position', async () => {
      const switcher = page
        .locator('[data-testid="settings-modal"]')
        .locator('role=checkbox')
      await switcher.click()
      expect(switcher).toBeChecked()
      await switcher.click()
      expect(switcher).not.toBeChecked()
    })

    await test.step('should close modal on Apply click', async () => {
      await page.locator('text=Apply').click()
      expect(page.locator('[data-testid="settings-modal"]')).not.toBeVisible()
    })
  })
})
