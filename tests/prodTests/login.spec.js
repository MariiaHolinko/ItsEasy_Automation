import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

await page.goto(process.env.URL);

await page.locator('.Usermenu_userAvatar__wbWtD').click({ force: true });
await page.getByText('Login').click();
await page.getByRole('textbox', { name: 'Email' }).fill('marymary68.2@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('Maha26');
await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page.getByRole('banner')).toContainText('M');

await page.waitForTimeout(2000); // Ensure login completes

const cookies = await page.context().cookies();
const jwtCookie = cookies.find(cookie => cookie.name === 'jwt');

if (jwtCookie) {
    console.log("✅ JWT Token:", jwtCookie.value);
} else {
    console.error("❌ JWT Token not found in cookies!");
}

});
// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { users } from '../testData';

// test('Student 1 can log in', async ({ page }) => {
//     const loginPage = new LoginPage(page);
    
//     await page.goto(process.env.URL);
//     await loginPage.openLoginModal();
//     await loginPage.login(users.student1.email, users.student1.password);
//     await loginPage.verifyLogin();
// });

// test('Admin can log in', async ({ page }) => {
//     const loginPage = new LoginPage(page);
    
//     await page.goto(process.env.URL);
//     await loginPage.clickAvatar();
//     await loginPage.clickLoginlink();
//     await loginPage.login(users.admin.email, users.admin.password);
//     await loginPage.verifyLogin();
// });
