const ClientSelectorLocator = {
    clientSearch: (page) => page.getByRole('textbox', { name: 'Search by client name...' }),
	clientGrid: (page) => page.locator('div.grid-1.MuiBox-root.css-0'),
};

module.exports = ClientSelectorLocator;