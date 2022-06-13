const { test, expect } = require('@playwright/test')

test.describe('Application Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Verify that theme can be changed', async ({ page }) => {
    const themeSwitcher = page.locator('role=checkbox')

    await test.step('should be visible theme toggle switcher', async () => {
      await expect(themeSwitcher).toBeVisible()
      await expect(themeSwitcher).not.toBeChecked()
    })

    await test.step('should change to dark theme', async () => {
      await themeSwitcher.click()
      await expect(themeSwitcher).toBeChecked()
      await expect(page.locator('html')).toHaveClass('dark')
    })

    await test.step('should change to light theme', async () => {
      await themeSwitcher.click()
      await expect(themeSwitcher).not.toBeChecked()
      await expect(page.locator('html')).not.toHaveClass('dark')
    })
  })

  test('Verify that theme remains unchanged after page reload', async ({
    page,
  }) => {
    const themeSwitcher = page.locator('role=checkbox')

    await test.step('should change to dark theme', async () => {
      await themeSwitcher.click()
      await expect(themeSwitcher).toBeChecked()
      await expect(page.locator('html')).toHaveClass('dark')
    })

    await test.step('should remain dark theme after page reload', async () => {
      await page.reload()
      expect(themeSwitcher).toBeChecked()
      expect(page.locator('html')).toHaveClass('dark')
    })

    await test.step('should change to light theme', async () => {
      await themeSwitcher.click()
      await expect(themeSwitcher).not.toBeChecked()
      await expect(page.locator('html')).not.toHaveClass('dark')
    })

    await test.step('should remain light theme after page reload', async () => {
      await page.reload()
      expect(themeSwitcher).not.toBeChecked()
      expect(page.locator('html')).not.toHaveClass('dark')
    })

    await test.step(
      'should open settings modal with turned off toggle switch',
      async () => {
        await page.locator('svg').first().click()
        expect(themeSwitcher.nth(0)).not.toBeChecked()
      }
    )

    await test.step(
      'should toggle use system theme to position on',
      async () => {
        await themeSwitcher.nth(1).click()
        expect(themeSwitcher.nth(1)).toBeChecked()
      }
    )

    await test.step(
      'should apply system theme and hide theme toggle',
      async () => {
        await page.locator('button:has-text("Apply")').click()
        expect(themeSwitcher).not.toBeVisible()
        expect(page.locator('html')).not.toHaveClass('dark')
      }
    )

    await test.step('should remain light theme after page reload', async () => {
      await page.reload()
      expect(page.locator('html')).not.toHaveClass('dark')
    })

    await test.step('should change system theme to dark', async () => {
      await page.emulateMedia({ colorScheme: 'dark' })
    })

    await test.step(
      'should change to dark theme after page reload',
      async () => {
        await page.reload()
        await expect(page.locator('html')).toHaveClass('dark')
      }
    )
  })

  test('Verify that after disabling "use system theme" the theme remains as it was before it', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' })

    await test.step(
      'should open settings modal with turned off toggle switch',
      async () => {
        await page.locator('svg').first().click()
        await expect(page.locator('role=checkbox').nth(0)).not.toBeChecked()
      }
    )

    await test.step('should turn on use system theme toggle', async () => {
      const checkbox = page.locator(
        '[data-testid="settings-modal"] >> role=checkbox'
      )
      await checkbox.click()
      await expect(checkbox).toBeChecked()
    })

    await test.step('should adjust app theme to system theme', async () => {
      await page.locator('button:has-text("Apply")').click()
      await expect(page.locator('role=checkbox')).not.toBeVisible()
      await expect(page.locator('html')).toHaveClass('dark')
    })

    await test.step(
      'should open settings modal with turned on toggle switch',
      async () => {
        await page.locator('svg').first().click()
        await expect(page.locator('role=checkbox').nth(0)).toBeChecked()
      }
    )

    await test.step('should turn off use system theme toggle', async () => {
      const checkbox = page.locator(
        '[data-testid="settings-modal"] >> role=checkbox'
      )
      await checkbox.click()
      await expect(checkbox).not.toBeChecked()
    })

    await test.step(
      'should adjust app theme to last used app theme',
      async () => {
        await page.locator('button:has-text("Apply")').click()
        await expect(page.locator('role=checkbox')).toBeVisible()
        await expect(page.locator('role=checkbox')).not.toBeChecked()
        await expect(page.locator('html')).not.toHaveClass('dark')
      }
    )

    await page.locator('role=checkbox').click()

    await test.step(
      'should open settings modal with turned off toggle switch',
      async () => {
        await page.locator('svg').first().click()
        await expect(page.locator('role=checkbox').nth(0)).toBeChecked()
      }
    )

    await test.step('should turn on use system theme toggle', async () => {
      const checkbox = page.locator(
        '[data-testid="settings-modal"] >> role=checkbox'
      )
      await checkbox.click()
      expect(checkbox).toBeChecked()
    })

    await test.step('should adjust app theme to system theme', async () => {
      await page.locator('button:has-text("Apply")').click()
      await expect(page.locator('role=checkbox')).not.toBeVisible()
      await expect(page.locator('html')).toHaveClass('dark')
    })

    await test.step(
      'should open settings modal with turned on toggle switch',
      async () => {
        await page.locator('svg').first().click()
        await expect(page.locator('role=checkbox').nth(0)).toBeChecked()
      }
    )

    await test.step('should turn off use system theme toggle', async () => {
      const checkbox = page.locator(
        '[data-testid="settings-modal"] >> role=checkbox'
      )
      await checkbox.click()
      await expect(checkbox).not.toBeChecked()
    })

    await test.step(
      'should adjust app theme to last used app theme',
      async () => {
        await page.locator('button:has-text("Apply")').click()
        await expect(page.locator('role=checkbox')).toBeVisible()
        await expect(page.locator('role=checkbox')).toBeChecked()
        await expect(page.locator('html')).toHaveClass('dark')
      }
    )
  })
})
