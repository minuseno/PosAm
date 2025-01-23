import {expect, test} from "@playwright/test";

test.describe('API Tests for ReqRes', () => {
    test('GET /users', async ({request}) => {
        const response = await request.get('https://reqres.in/api/users');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('data');
        expect(responseBody.data).toBeInstanceOf(Array);
    });
})