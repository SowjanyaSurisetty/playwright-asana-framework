
import { test as base } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

type Fixtures = {
  dashboard: DashboardPage;
};

export const test = base.extend<Fixtures>({
  dashboard: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  }
});

export { expect } from '@playwright/test';
