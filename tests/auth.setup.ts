import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('admin', 'password123');

  // ✅ Wait for dashboard board button to appear (unique)
  await expect(
    page.getByRole('button', { name: /Web Application/ })
  ).toBeVisible();

  await page.context().storageState({ path: 'storage/auth.json' });
});


