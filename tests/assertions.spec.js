import { test, expect } from '@playwright/test';
test('assertions', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.getByRole('link', { name: 'Notification' }).click()
    await expect(page.getByRole('heading', { name: 'Notification' })).toHaveCount(1)
    if(await page.$('heading', { name: 'Notification' })){
        expect(page.getByRole('heading', { name: 'Notification' })).click()
    }
    await expect(page.getByRole('heading', { name: 'Notification' })).toBeVisible()
    //await expect.soft(page.getByRole('heading', { name: 'Notification' })).toBeHidden()
    
    await expect(page.getByRole('heading', { name: 'Notification' })).toBeEnabled()
    // await expect.soft(page.getByRole('heading', { name: 'Notification' })).toBeDisabled()

    await expect(page.getByRole('heading', { name: 'Notification' })).toHaveText('Notification')
    await expect(page.getByRole('heading', { name: 'Notification' })).not.toHaveText('xyz')
    await page.pause()

    await expect(page).toHaveURL('https://kitchen.applitools.com/ingredients/notification')
    await expect(page).toHaveTitle('Notification | The Kitchen')
    await page.pause()
    await expect(page).toHaveScreenshot()
})