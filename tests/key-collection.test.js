const { test, expect } = require('@playwright/test');

test('wizard prince collects a key', async ({ page }) => {
  await page.goto('/');
  await page.click('#collect-key');
  const keysCollected = await page.textContent('#keys-collected');
  expect(keysCollected).toBe('1');
});
