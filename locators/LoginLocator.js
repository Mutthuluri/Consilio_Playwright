const LoginLocator = {
	emailAddress: (page) => page.getByRole('textbox', { name: 'Enter the email address' }),
	continueButton: (page) => page.getByRole('button', { name: 'Continue' }),
	password: (page) => page.getByRole('textbox', { name: 'Enter the password for' }),
	signInButton: (page) => page.getByRole('button', { name: 'Sign in' }),
};

module.exports = LoginLocator;