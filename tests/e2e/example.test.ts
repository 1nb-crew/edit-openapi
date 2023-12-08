import { expect, test } from '@playwright/test';

test.describe('Main page', () => {
  test('should import schema', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('import-schema-drawer')).not.toBeVisible();

    await page.getByRole('button', { name: 'Import from file' }).click();
    await expect(page.getByTestId('import-schema-drawer')).toBeVisible();
  });
});
