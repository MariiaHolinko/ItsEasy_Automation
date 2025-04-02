import { test } from '../../utils/fixtures';
import { expect } from '@playwright/test';

test.beforeEach(async ({ page, HomePage }) => {
    await test.step(' Go to homepage', async () => {
      await page.goto(process.env.URL);
    });
    await test.step('Ensure user is logged in', async () => {
      await HomePage.isLoggedIn();
    });
  });
  
  test('User can access My Courses after login', async ({ page, HomePage }) => {
    await test.step('Open user menu', async () => {
      await HomePage.clickAvatar();
    });
  
    await test.step('Click My Courses link', async () => {
      await HomePage.clickMyCoursesLink();
    });

    await test.step('Verify My Courses page opened', async () => {
      await expect(page).toHaveURL(/.*my-courses/);
    });
  });
