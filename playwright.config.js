const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, './.env', '.env'),
})
const { devices } = require('@playwright/test')

const config = {
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? 'github' : [['list'], ['html']],
  // globalSetup: require.resolve('./global-setup'),
  use: {
    actionTimeout: 0,
    baseURL: process.env.SITE_URL,
    trace: process.env.CI ? 'on-first-retry' : 'on',
    storageState: 'state.json',
    colorScheme: 'light',
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
  ],

  webServer: {
    command: 'npm run dev',
    url: process.env.DEV_SERVER_URL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    waitOnScheme: {
      delay: 1000,
    },
  },
}

module.exports = config
