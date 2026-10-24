import { test } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';

const consilioData = require('../test_data/consilio_data.json');

test('Authenticate User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(consilioData.url, consilioData.username, consilioData.password);

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
    
});