import { test } from '@playwright/test';
const LoginPage = require('../../pageObjects/LoginPage');
const ClientSelectorPage = require('../../pageObjects/ClientSelectorPage');
const ProjectSelectionPage = require('../../pageObjects/ProjectSelectionPage');
const ECIHomePage = require('../../pageObjects/ECIHomePage');
const consilioData = require('../../test_data/consilio_data.json');

test('Launch CoreECI for a selected client project', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(consilioData.url, consilioData.username, consilioData.password);

  const clientSelectorPage = new ClientSelectorPage(page);
  await clientSelectorPage.selectClient('consilio special project');

  const projectSelectionPage = new ProjectSelectionPage(page);
  await projectSelectionPage.selectProject('Aurora  ECI Phase 21 Testing');

  const eciHomePage = new ECIHomePage(page);
  await eciHomePage.launchCoreECI();
  
});
