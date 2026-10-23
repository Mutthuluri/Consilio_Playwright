import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aurora-uat1.consilio.com/login');
  await expect(page.getByRole('textbox', { name: 'Enter the email address' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter the email address' }).click();
  await page.getByRole('textbox', { name: 'Enter the email address' }).fill('VarunKumar.M@consilio.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('textbox', { name: 'Enter the password for' })).toBeVisible({ timeout: 120000 });
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('Eswaraiahsulochana3234#');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('**/welcome-multi-client', { timeout: 120000 });
  
  await page.getByRole('textbox', { name: 'Search by client name...' }).click();
  await page.getByRole('textbox', { name: 'Search by client name...' }).fill('consilio special project');
  await page.getByRole('textbox', { name: 'Search by client name...' }).press('Enter');
  await page.waitForTimeout(3000);
  await page.locator('div.grid-1.MuiBox-root.css-0').click();
  // await page.pause();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill("Aurora  ECI Phase 21 Testing");
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
  await page.locator(':text-is("Aurora ECI Phase 21 Testing")').click();
  const CoreECIbutton = page.getByRole('button', { name: 'Launch CoreECI' });
  await CoreECIbutton.scrollIntoViewIfNeeded();
  await CoreECIbutton.click();
  




});