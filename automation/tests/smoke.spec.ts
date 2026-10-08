import { expect, test } from '@playwright/test';

test('carrega a página inicial com sucesso', async ({ page }) => {
  const response = await page.goto('/');

  expect(response).not.toBeNull();
  expect(response?.ok()).toBe(true);
  await expect(page.locator('body')).toBeVisible();
});
