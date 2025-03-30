export async function apiLogin(context, request) {
    const response = await request.post(
        `https://its-easy-platform-backend.vercel.app/api/auth/login?email=${process.env.USER_EMAIL}&password=${process.env.USER_PASSWORD}`
    );

    const responseBody = await response.json();
    console.log("Full API Response:", JSON.stringify(responseBody, null, 2));

    if (!responseBody.token) {
        throw new Error("❌ Token not found in API response!");
    }

    const token = responseBody.token;

    // Store JWT token in cookies
    await context.addCookies([
        {
            name: 'jwt',
            value: token,
            domain: 'its-easy-platform-backend.vercel.app',
            path: '/',
            httpOnly: true,
            secure: true
        }
    ]);

    return context;
}
