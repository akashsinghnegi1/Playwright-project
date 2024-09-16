import { test, expect } from '@playwright/test'

test.beforeAll('login', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByPlaceholder('Password').press('Enter');
})

test.afterAll(async ({page}) => {
    await page.close();
})

test('Home page', async ({page}) => {
    await page.getByRole('link', { name: 'Admin' }).click();
})