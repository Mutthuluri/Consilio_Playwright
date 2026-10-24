const ECIHome_Locator = {
	clientSearch: (page) => page.getByRole('textbox', { name: 'Search by client name...' }),
	clientGrid: (page) => page.locator('div.grid-1.MuiBox-root.css-0'),
	projectSearch: (page) => page.getByRole('textbox', { name: 'Search' }),
	projectResult: (page, projectName) => page.getByText(projectName, { exact: true }),
	launchCoreECIButton: (page) => page.getByRole('button', { name: 'Launch CoreECI' }),
};

module.exports = ECIHome_Locator;