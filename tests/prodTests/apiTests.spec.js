import { test, expect } from '@playwright/test';
import { apiLogin } from '../../helpers/apiLogin.js';

test('API Login should return a valid token', async ({ request, browser }) => {
    const context = await browser.newContext();
    const loggedInContext = await apiLogin(context, request);

    const cookies = await loggedInContext.cookies();
    const jwtCookie = cookies.find(cookie => cookie.name === 'jwt');

    console.log("✅ JWT Cookie:", jwtCookie);

    expect(jwtCookie).toBeDefined();
    expect(jwtCookie.value).not.toBe('');
});
