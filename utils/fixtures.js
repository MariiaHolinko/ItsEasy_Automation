import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/Prod/loginPage.js'; 
import { HomePage } from '../pages/Prod/homePage.js';
import { AllCourses } from '../pages/Prod/allCourses.js';

export const test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: 'storageState.json' });
    await use(context);
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
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

