const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Settings modal', () => {
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
      await page.locator('button:has-text("Apply")').click()
      expect(page.locator('[data-testid="settings-modal"]')).not.toBeVisible()
    })
  })

  test('Input fields validation', async ({ page }) => {
    await test.step('should open settings modal', async () => {
      await page.locator('svg').first().click()
      const modal = page.locator('[data-testid="settings-modal"]')
      expect(modal).toBeVisible()
    })

    await test.step(
      'should highlight greetings input with red color',
      async () => {
        const input = page.locator('[placeholder="Have a beer"]')
        await input.fill('')
        expect(input).toHaveClass(/border-red-500/)
        await input.fill('    ')
        expect(input).toHaveClass(/border-red-500/)
      }
    )

    await test.step('should not alloq to click Apply button', async () => {
      const applyButton = page.locator('button:has-text("Apply")')
      await applyButton.click()
      expect(page.locator('[data-testid="settings-modal"]')).toBeVisible()
    })

    await test.step(
      'should not allow to type more than 20 characters',
      async () => {
        const input = page.locator('[placeholder="Have a beer"]')
        await input.fill('123456789012345678901')
        expect(input).toHaveValue('12345678901234567890')
      }
    )
  })

  test('Verify settings modal behaviour', async ({ page }) => {
    await test.step('should open settings modal', async () => {
      await page.locator('svg').first().click()
      const modal = page.locator('[data-testid="settings-modal"]')
      expect(modal).toBeVisible()
    })

    await test.step('should change inputs', async () => {
      await page.locator('[placeholder="Have a beer"]').fill('some beer!')

      await page.locator('text=Friday').click()
      await page.locator('text=Monday').click()

      await page.locator('text=18:00').click()
      await page.locator('text=19:00').click()

      await page
        .locator('[data-testid="settings-modal"] >> role=checkbox')
        .click()
    })

    await test.step('should change inputs', async () => {
      await page.locator('button:has-text("Cancel")').click()
    })

    await test.step(
      'should open settings modal with previous values',
      async () => {
        await page.locator('svg').first().click()
        const modal = page.locator('[data-testid="settings-modal"]')
        expect(modal).toBeVisible()
        expect(page.locator('[placeholder="Have a beer"]')).toHaveValue(
          'Have a beer!'
        )
        expect(page.locator('text=Friday')).toHaveText('Friday')
        expect(page.locator('text=18:00')).toHaveText('18:00')
        expect(
          page.locator('[data-testid="settings-modal"] >> role=checkbox')
        ).not.toBeChecked()
      }
    )

    await test.step('should change inputs', async () => {
      await page.locator('[placeholder="Have a beer"]').fill('some beer!')

      await page.locator('text=Friday').click()
      await page.locator('text=Monday').click()

      await page.locator('text=18:00').click()
      await page.locator('text=19:00').click()

      await page
        .locator('[data-testid="settings-modal"] >> role=checkbox')
        .click()
    })

    await test.step('should close modal on click outside modal', async () => {
      await page.mouse.click(0, 0)
      expect(page.locator('[data-testid="settings-modal"]')).not.toBeVisible()
    })
  })

  test('Verify that application can use system theme', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' })

    await test.step(
      'should open settings modal with turned off toggle switch',
      async () => {
        await page.locator('svg').first().click()
        const modal = page.locator('[data-testid="settings-modal"]')
        expect(modal).toBeVisible()
        expect(
          page.locator('[data-testid="settings-modal"] >> role=checkbox')
        ).not.toBeChecked()
      }
    )

    await test.step('should torn on use system theme toggle', async () => {
      const checkbox = page.locator(
        '[data-testid="settings-modal"] >> role=checkbox'
      )
      await checkbox.click()
      expect(checkbox).toBeChecked()
    })

    await test.step('should adjust app theme to system theme', async () => {
      await page.locator('button:has-text("Apply")').click()
      expect(page.locator('role=checkbox')).not.toBeVisible()
      expect(page.locator('html')).not.toHaveClass('dark')
    })

    await test.step('should turn off use system theme toggle', async () => {
      await page.locator('svg').first().click()
      const checkbox = page.locator(
        '[data-testid="settings-modal"] >> role=checkbox'
      )
      await checkbox.click()
      expect(checkbox).not.toBeChecked()
    })

    await test.step(
      'should adjust app theme not to use system theme',
      async () => {
        await page.locator('button:has-text("Apply")').click()
        const themeToggleSwitch = page.locator('role=checkbox')
        expect(themeToggleSwitch).toBeVisible()
        expect(themeToggleSwitch).not.toBeChecked()
        expect(page.locator('html')).not.toHaveClass('dark')
      }
    )

    await test.step('should change system theme to dark', async () => {
      await page.emulateMedia({ colorScheme: 'dark' })
    })

    await test.step('should reload page', async () => {
      await page.reload()
    })

    await test.step('should turn on to use system theme', async () => {
      await page.locator('svg').first().click()
      const checkbox = page.locator(
        '[data-testid="settings-modal"] >> role=checkbox'
      )
      await checkbox.click()
      expect(checkbox).toBeChecked()
    })

    await test.step('should apply system theme', async () => {
      await page.locator('button:has-text("Apply")').click()
      expect(page.locator('html')).toHaveClass('dark')
      expect(page.locator('role=checkbox')).not.toBeVisible()
    })
  })
})
