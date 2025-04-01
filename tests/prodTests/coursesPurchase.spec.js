import { test } from '../../utils/fixtures';
import { expect } from '@playwright/test';

test.beforeEach(async ({ page, HomePage }) => {
    await page.goto(process.env.URL);
    await HomePage.isLoggedIn();
});
test('User can access My Courses after login', async ({ page, HomePage }) => {
    await HomePage.clickAvatar();
    await HomePage.clickMyCoursesLink();
    await expect(page).toHaveURL(/.*my-courses/);
});
