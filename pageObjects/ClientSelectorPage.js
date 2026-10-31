const ClientSelectorLocator = require('../locators/ClientSelectorLocator');

class ClientSelectorPage {
    constructor(page) {
        this.page = page;
        this.clientSearch = ClientSelectorLocator.clientSearch(page);
        this.clientGrid = ClientSelectorLocator.clientGrid(page);
    }

    async selectClient(clientName) {
        await this.clientSearch.fill(clientName);
        await this.clientSearch.press('Enter');
        await this.page.waitForTimeout(3000);  
    }
}

module.exports = ClientSelectorPage;