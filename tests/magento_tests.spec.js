const testData = require('../test-data/loginData.json')
import { test, expect, chromium } from '@playwright/test'

//verify user is able open the url and login to the app
test.describe('smoke test', () => {
    test('Attempt to login to the app using invalid creds', async ({ page, browserName }) => {
        if (browserName === 'firefox') test.skip()
        for (const input of testData) {
            await page.goto('https://magento.softwaretestingboard.com/')
            await page.getByRole('menuitem', { name: 'Sale' }).hover()
            await page.getByRole('link', { name: 'Sign In' }).click()
            await page.getByLabel('Email', { exact: true }).pressSequentially(input.username)
            await page.getByLabel('Password').fill(input.password)
            await page.getByRole('button', { name: 'Sign In' }).click()
            const errorMessage = page.getByText('Please wait and try again later')
            expect(errorMessage).toBeVisible()
        }
    })

    test.only('handeling  multiple tabs', async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://magento.softwaretestingboard.com/')
        await page.getByRole('link', { name: 'Subscribe' }).click()
        console.log(context.pages())
        // const page2 = pages[1]
        // await page2.bringToFront()
    })

    test('additional testing', async ({ page }) => {
        const page2 = await page.context().newPage()
        await page2.goto('https://magento.softwaretestingboard.com/')
        const { search1 } = testData.searchData
        await page2.locator('#search').fill(search1)
        await page2.locator('#search').press('Enter')
        await page.bringToFront()
        const elementText = await page.getByRole('link', { name: 'Take it from Erin Luma' }).textContent()
        console.log(elementText)
        await page.getByRole('link', { name: 'Take it from Erin Luma' }).click()
        page.getByRole('link', { name: 'Take it from Erin' })
        console.log(await page.title())
        await page.screenshot({ path: 'screenhot123.png' })
    })
})