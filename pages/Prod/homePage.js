export class HomePage {
    constructor(page) {
        this.page = page;
        this.avatar = page.locator('.Usermenu_userAvatar__wbWtD');
        this.loginLink = page.getByText('Login');
        this.allCoursesLink = page.getByRole('link', { name: 'All Courses', exact: true })
    }

    async clickAllCoursesLink() {
        await this.allCoursesLink.click();
    }
}