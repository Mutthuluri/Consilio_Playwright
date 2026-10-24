import { test } from '@playwright/test';
const LoginPage = require('../pageObjects/LoginPage');
const consilioData = require('../test_data/consilio_data.json');

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(consilioData.url, consilioData.username, consilioData.password);
  
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