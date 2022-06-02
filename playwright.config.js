const { devices } = require('@playwright/test')

const DEV_SERVER_URL = 'http://localhost:3000'
const SITE_URL = 'http://localhost:3000'

const config = {
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html']],
  use: {
    actionTimeout: 0,
    baseURL: SITE_URL,
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: DEV_SERVER_URL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
}

module.exports = config
