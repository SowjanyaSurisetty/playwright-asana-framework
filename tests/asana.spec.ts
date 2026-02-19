import { test } from '../fixtures/test-fixture';
import testData from '../test-data/asanaTestData.json';

test.describe('Asana Demo - Data Driven Suite', () => {

  // ✅ Add it HERE
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  for (const data of testData) {

    test(`Verify "${data.task}" is in the "${data.column}" column.`, async ({ dashboard }) => {

      await dashboard.navigateToApp(data.app);
      await dashboard.verifyTaskInColumn(data.task, data.column);
      await dashboard.verifyTags(data.task, data.tags);

    });

  }

});

