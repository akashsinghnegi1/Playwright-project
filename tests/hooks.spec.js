const { test, expect, chromium } = require('@playwright/test');

let browser;
let context;
let page;

test.describe('My all tests', ()=> {
test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test.beforeEach(async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByPlaceholder('Password').press('Enter');
});

test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
});

test('Home page', async () => {
    await page.getByRole('link', { name: 'Admin' }).click();
})
})