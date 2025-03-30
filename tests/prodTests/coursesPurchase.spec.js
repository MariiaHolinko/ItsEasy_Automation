import { test } from '../../utils/fixtures';
import { expect } from '@playwright/test';

test('User can access My Courses after login', async ({ page, LoginPage }) => {
    await page.goto(process.env.URL);
    await LoginPage.clickAvatar();
    await expect(page.locator('text=My Courses')).toBeVisible();
    await page.locator('text=My Courses').click();
    await expect(page).toHaveURL(/.*my-courses/);
});
