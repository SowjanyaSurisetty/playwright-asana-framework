
import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async navigateToApp(app: string) {
    await this.page.click(`text=${app}`);
  }

  async verifyTaskInColumn(task: string, column: string) {
    const columnSection = this.page.locator(`text=${column}`).locator('..');
    await expect(columnSection.locator(`text=${task}`)).toBeVisible();
  }

  async verifyTags(task: string, tags: string[]) {

    // Locate the task card by heading
    const taskCard = this.page
      .getByRole('heading', { name: task })
      .locator('..'); // move to card container
  
    for (const tag of tags) {
  
      // Only search inside span elements (badges)
      await expect(
        taskCard.locator('span', { hasText: tag })
      ).toBeVisible();
  
    }
  }  
}
