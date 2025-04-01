import { chromium } from '@playwright/test';
import { LoginPage } from '../pages/Prod/loginPage.js';
import { HomePage } from '../pages/Prod/homePage.js';
import * as dotenv from 'dotenv';
dotenv.config();

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(process.env.URL);

  const homePage = new HomePage(page);
  await homePage.clickAvatar();
  await homePage.clickLoginlink();

  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

  await homePage.isLoggedIn();

  await context.storageState({ path: 'storageState.json' });

  await browser.close();
})();
