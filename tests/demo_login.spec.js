import { test, expect } from '@playwright/test';
test('test orange hrm login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Username').press('Enter');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByPlaceholder('Password').press('Enter');
    await page.getByText('test12 user').click();
    await page.getByRole('menuitem', { name: 'About' }).click();
    await page.getByRole('button', { name: '×' }).click();
    await page.getByText('test12 user').click();
    await page.pause()
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})