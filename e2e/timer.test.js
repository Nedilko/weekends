const { test, expect } = require('@playwright/test')
const path = require('path')
const sinon = require('sinon')

test.describe('Application Theme', () => {
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

  test('Verify that Timer can consists of 4 blocks', async ({ page }) => {
    await test.step('open settings modal', async () => {
      await page.locator('svg').first().click()
    })

    await test.step('select 1 day and 1 hour ahead from current', async () => {
      await page.locator('text=Friday').click()
      await page.locator('text=Thursday').click()
      await page.locator('text=18:00').click()
      await page.locator('text=14:00').click()
    })

    await test.step('apply new settings', async () => {
      await page.locator('button:has-text("Apply")').click()
    })

    await page.evaluate(() => window.__clock.tick(1000))

    await test.step('should have 4 digit blocks', async () => {
      await expect(page.locator('//*[@id="root"]/div/main/div/div')).toHaveText(
        'days3:hours0:minutes28:seconds37'
      )
    })
  })

  test('Verify that Timer can consists of 3 blocks', async ({ page }) => {
    await test.step('open settings modal', async () => {
      await page.locator('svg').first().click()
    })

    await test.step('select 1 day and 1 hour ahead from current', async () => {
      await page.locator('text=Friday').click()
      await page.locator('text=Monday').click()
      await page.locator('text=18:00').click()
      await page.locator('text=15:00').click()
    })

    await test.step('apply new settings', async () => {
      await page.locator('button:has-text("Apply")').click()
    })

    await page.evaluate(() => window.__clock.tick(1000))

    await test.step('should have 3 digit blocks', async () => {
      await expect(page.locator('//*[@id="root"]/div/main/div/div')).toHaveText(
        'hours1:minutes28:seconds37'
      )
    })
  })

  test('Verify that Timer can consists of 2 blocks', async ({ page }) => {
    await test.step('open settings modal', async () => {
      await page.locator('svg').first().click()
    })

    await test.step('select 1 day and 1 hour ahead from current', async () => {
      await page.locator('text=Friday').click()
      await page.locator('text=Monday').click()
      await page.locator('text=18:00').click()
      await page.locator('text=14:00').click()
    })

    await test.step('apply new settings', async () => {
      await page.locator('button:has-text("Apply")').click()
    })

    await page.evaluate(() => window.__clock.tick(1000))

    await test.step('should have 2 digit blocks', async () => {
      await expect(page.locator('//*[@id="root"]/div/main/div/div')).toHaveText(
        'minutes28:seconds37'
      )
    })
  })

  test('Verify that digits logically decreases', async ({ page }) => {
    await test.step('open settings modal', async () => {
      await page.locator('svg').first().click()
    })

    await test.step('select 1 day and 1 hour ahead from current', async () => {
      await page.locator('text=Friday').click()
      await page.locator('text=Monday').click()
      await page.locator('text=18:00').click()
      await page.locator('text=14:00').click()
    })

    await test.step('apply new settings', async () => {
      await page.locator('button:has-text("Apply")').click()
    })

    await page.evaluate(() => window.__clock.tick(1000))

    await test.step('should decrement digit blocks', async () => {
      await test.step('decrements seconds each second', async () => {
        await expect(
          page.locator('//*[@id="root"]/div/main/div/div')
        ).toHaveText('minutes28:seconds37')
        await page.evaluate(() => window.__clock.tick(1000))
        await expect(
          page.locator('//*[@id="root"]/div/main/div/div')
        ).toHaveText('minutes28:seconds36')
      })

      await test.step('decrements minute', async () => {
        for (let i = 36; i >= 0; i--) {
          await page.evaluate(() => window.__clock.tick(1000))
        }
        await expect(
          page.locator('//*[@id="root"]/div/main/div/div')
        ).toHaveText('minutes27:seconds59')
      })

      await test.step('hides minute when it reaches zero value', async () => {
        for (let i = 27 * 60; i >= 0; i--) {
          await page.evaluate(() => window.__clock.tick(1000))
        }
        await expect(
          page.locator('//*[@id="root"]/div/main/div/div')
        ).toHaveText('seconds58')
      })
    })
  })

  test('Verify that Greetings text is displayed if countdown is over', async ({
    page,
  }) => {
    await test.step('open settings modal', async () => {
      await page.locator('svg').first().click()
    })

    await test.step('select current day and nearest hour', async () => {
      await page.locator('text=Friday').click()
      await page.locator('text=Monday').click()
      await page.locator('text=18:00').click()
      await page.locator('text=14:00').click()
    })

    await test.step('apply new settings', async () => {
      await page.locator('button:has-text("Apply")').click()
    })

    await test.step('shows greetings text', async () => {
      for (let i = 28 * 60 + 37; i >= 0; i--) {
        await page.evaluate(() => window.__clock.tick(1000))
      }
      await expect(page.locator('text=/have a beer/i')).toBeVisible()
    })
  })
})
