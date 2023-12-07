import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const port = 3001;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'dot' : ['list', { printSteps: true }],
  /* Test case timeout (includes fixtures loading). */
  timeout: 10 * 1000,
  expect: {
    /* Assertion timeout. */
    timeout: 5 * 1000,
  },
  use: {
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    port,
    command: 'vite preview',
    reuseExistingServer: !process.env.CI,
  },
});
