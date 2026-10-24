import { test } from '@playwright/test';
const LoginPage = require('../pageObjects/LoginPage');
const ECIHomePage = require('../pageObjects/ECIHomePage');
const consilioData = require('../test_data/consilio_data.json');

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(consilioData.url, consilioData.username, consilioData.password);

  const eciHomePage = new ECIHomePage(page);
  await eciHomePage.selectClient('consilio special project');
  await eciHomePage.selectProject('Aurora  ECI Phase 21 Testing');
  await eciHomePage.launchCoreECI();
});
