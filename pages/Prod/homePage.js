import { expect } from '@playwright/test';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.avatar = page.locator('[class*="Usermenu_userAvatarWrapper"] [class*="Usermenu_userAvatar"]');
        this.loginLink = page.locator('div').filter({ hasText: /^Login$/ });
        this.allCoursesLink = page.getByRole('link', { name: 'All Courses', exact: true });
        this.myCoursesLink = page.getByText('My Courses');
    }

    async isLoggedIn() {
        await expect (this.avatar).toBeVisible({ timeout: 5000 });
        await expect(this.avatar).not.toHaveText('?');
    }
    
    
    async clickLoginlink() {
        await this.loginLink.click();
    }

    async clickAvatar() {
        await this.avatar.click({ force: true });
    }

    async clickMyCoursesLink() {
        await this.myCoursesLink.click();
    }

    async clickAllCoursesLink() {
        await this.allCoursesLink.click();
    }
}