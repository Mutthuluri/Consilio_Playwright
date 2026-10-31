const ECIHome_Locator = require('../locators/ECIHomeLocator');

class ECIHomePage {
	constructor(page) {
		this.page = page;
	}

	async launchCoreECI() {
		const launchButton = ECIHome_Locator.launchCoreECIButton(this.page);
		await launchButton.scrollIntoViewIfNeeded();
		await launchButton.click();
		console.log('CoreECI launch action completed.');
	}
}

module.exports = ECIHomePage;
