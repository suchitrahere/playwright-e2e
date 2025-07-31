import { test, expect } from '@playwright/test';

test('click Elements card', async ({ page }) => {
  // This line blocks console logs from the website
  page.on('console', msg => {
    if (msg.type() === 'warning' || msg.type() === 'log') return;
    console.log(`>> ${msg.text()}`); // Show only real errors
  });

  await page.goto('https://demoqa.com');
  await page.click('text=Elements');
  await expect(page).toHaveURL(/.*elements/);
});
