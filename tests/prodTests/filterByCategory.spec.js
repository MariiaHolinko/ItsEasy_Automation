import { expect } from '@playwright/test';
import { test } from '../../utils/fixtures.js';
import { HomePage } from '../../pages/Prod/homePage.js';

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.URL); 
});

test('User can filter courses by each category', async ({ page, AllCourses }) => {

    await HomePage.clickAllCoursesLink();
    const categoryInput = await AllCourses.clickCategoryField();
    

  // Открыть дропдаун
  await categoryInput.click();

  // Дождаться появления опций
  const options = page.locator('[role="listbox"] [role="option"]');
  const count = await options.count();
  expect(count).toBeGreaterThan(0);

  // Перебрать все категории
  for (let i = 0; i < count; i++) {
    await categoryInput.click(); // открыть дропдаун заново
    const option = options.nth(i);
    const categoryName = await option.innerText();
    await option.click();

    console.log(`🔍 Проверяем категорию: ${categoryName}`);

    // Ждать появления отфильтрованных курсов
    const courseItems = page.locator('[data-testid="course-item"]');
    await expect(courseItems).toHaveCountGreaterThan(0);

    // Проверка: названия курсов должны содержать название категории
    const titles = await courseItems.allInnerTexts();
    for (const title of titles) {
      expect(title.toLowerCase()).toContain(categoryName.toLowerCase());
    }
  }
});

