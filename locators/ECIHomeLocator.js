const ECIHomeLocator = {
	launchCoreECIButton: (page) => page.getByRole('button', { name: 'Launch CoreECI' }),
};

module.exports = ECIHomeLocator;