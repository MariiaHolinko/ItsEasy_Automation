import { test as base } from '@playwright/test';
import { apiLogin } from '../helpers/apiLogin.js';
import LoginPage from '../pages/Prod/loginPage.js'; 
import HomePage from '../pages/Prod/homePage.js';
import { AllCourses } from '../pages/Prod/allCourses.js';

export const test = base.extend({
    context: async ({ browser, request }, use) => {
        const context = await browser.newContext();
        await apiLogin(context, request);
        await use(context);
    },

    /** @type { LoginPage } */
    LoginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

      /** @type { HomePage } */
      HomePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    /** @type { AllCourses } */
    AllCourses: async ({ page }, use) => {
        await use(new AllCourses(page));
    },
});
