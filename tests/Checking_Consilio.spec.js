import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aurora-uat1.consilio.com/login');
  await expect(page.getByRole('textbox', { name: 'Enter the email address' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter the email address' }).click();
  await page.getByRole('textbox', { name: 'Enter the email address' }).fill('VarunKumar.M@consilio.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('textbox', { name: 'Enter the password for' })).toBeVisible({ timeout: 120000 });
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('Eswaraiahsulochana3234#');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://consilioid.consilio.com/connect/authorize/callback?client_id=aebc9281-20ca-4c54-ba7f-762ceb0d2cfb&redirect_uri=https%3A%2F%2Faurora-uat1.consilio.com%2Fux-api%2Fv1%2Fauthentication%2Fsignin-oidc&response_type=code&scope=openid%20profile%20aurora&code_challenge=O0R9bNAdVs0lk1eCNcZFoQAT0FLvGA71gyelP3InW8M&code_challenge_method=S256&response_mode=form_post&nonce=639282541512437870.N2NjZjI4YzctOGVkZS00NzFmLTg1N2QtYTFjODljNGY0NTVhMzIxMDIzODYtODMxNS00YjdjLTg2YWQtZjFkMmUzOTFmZjhl&login_hint=VarunKumar.M@consilio.com&state=CfDJ8Cmcgb7iba9DlADURQ_QAP0ZzLjWTfbLNlmV7zSIftg01dRmvfhRRS6BdtDr_pqWfJxjMQdwVgOIAvPnoqHK0lGg8pKZjBxtST5pxR5MH71a13l1QEWTCZCGwbqZKpUSJb5hahOwtshZDnV6QOw612Z1H0s6yfxIkjWrDqt8sHAt1jP131jcM5E4PBn7PYNo8K3adT2KAdDTPkpMu198MpbXrdQ9qtNtdAcUE4Rvk1E6BiFVKtzYmbfIaZYxZnkqnXk3csZgkXHdUyA5kxiZdQvaOEZHnVg_Cpfm4JbccCzCbgYmNukmbTZCh_IUf7Y2oKwuflhqf1bWilu8ulZH0vEKqVv_WgTgruVOz1oEpkJZW7W6UsDIwFqsjMUxpIQMTQaWAeRO4OcHGAwUJzEu9XGXkQfkYAyq4sYKA1RgSRuG-Lrub2d1GP2Pzd-eQ6m4o-1Fj4vEOgLVx-EM2fAinzEVuU-dwvQriSRyrwcBHNSEnq4veLQN6GnmJEyrzbqXABEN8ig1OQZ6hswOg7V6ryG6_5vdT9QUutoy8HuOE7xgojXt2b4yPoLNrfn4dkNjTCfuKzAn2mUu73XgjuY4ZVQ-aXwSQduwDV0aly_bi3rMl3FoYQTz1uCBHlGAWaFEVuDCoNNhuAgczW41CnsnnddT3hdfhCb-KUJUjWoeAUOQ&x-client-SKU=ID_NET10_0&x-client-ver=8.16.0.0&acr_values=idp%3A88c2cc7c-d2ca-474c-a708-0881a267b394');
  await page.goto('https://aurora-uat1.consilio.com/callback');
  await page.goto('https://aurora-uat1.consilio.com/welcome-multi-client');
//   await page.getByRole('textbox', { name: 'Search by client name...' }).click();
//   await page.getByRole('textbox', { name: 'Search by client name...' }).fill('consilio');
//   await page.getByRole('textbox', { name: 'Search by client name...' }).press('Enter');
//   await page.locator('div:nth-child(3) > div').first().click();
//   await page.getByRole('button', { name: 'Aurora - CS v2.7 Special Project 002 United States CoreECI Enabled with AI' }).click();
//   await page.getByTestId('launch-eca-btn').click();
//   await page.getByTestId('link-index-search').click();
});