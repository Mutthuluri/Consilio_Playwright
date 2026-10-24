const ECIHome_Locator = require('../locators/ECIHome_Locator');

class ECIHomePage {
	constructor(page) {
		this.page = page;
	}

	async selectClient(clientName) {
		const clientSearch = ECIHome_Locator.clientSearch(this.page);
		await clientSearch.fill(clientName);
		await clientSearch.press('Enter');
        await this.page.waitForTimeout(3000);

		const clientGrid = ECIHome_Locator.clientGrid(this.page);
		await clientGrid.waitFor({ state: 'visible' });
		await clientGrid.click();
	}

	async selectProject(projectName) {
		const projectSearch = ECIHome_Locator.projectSearch(this.page);
		await projectSearch.fill(projectName);
		await projectSearch.press('Enter');
		await ECIHome_Locator.projectResult(this.page, projectName).click();
	}

	async launchCoreECI() {
		const launchButton = ECIHome_Locator.launchCoreECIButton(this.page);
		await launchButton.scrollIntoViewIfNeeded();
		await launchButton.click();
	}
}

module.exports = ECIHomePage;
