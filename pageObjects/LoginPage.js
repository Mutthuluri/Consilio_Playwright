const LoginLocator = require('../locators/LoginLocator');

class LoginPage {
	constructor(page) {
		this.page = page;
	}

	async login(url, username, password) {
		await this.page.goto(url);
		await LoginLocator.emailAddress(this.page).fill(username);
		await LoginLocator.continueButton(this.page).click();
		try {
			await LoginLocator.password(this.page).waitFor({ state: 'visible', timeout: 120000 });
			await LoginLocator.password(this.page).fill(password);
			await LoginLocator.signInButton(this.page).click();
			await this.page.waitForURL('**/welcome-multi-client', { timeout: 120000 });
			console.log('Login is successful.');
			console.log('Multi-client dashboard opened successfully.');
		} catch (error) {
			console.error('Test failed due to Browser Issue', error);
			throw error;
		}
	}
}

module.exports = LoginPage;
