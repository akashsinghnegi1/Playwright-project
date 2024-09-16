import { test, chromium } from '@playwright/test';
import { FlightsPage } from '../pages/yatra';
import {YatraTrainPage} from '../pages/yatraTrainPage';
let browser;
let context;
let page;
let flightsPageRef;
let trainsPageRef;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    await context.tracing.start({ screenshots: true, snapshots: true })
    page = await context.newPage();
    flightsPageRef = new FlightsPage(page);  // Initialize the FlightsPage object once
    trainsPageRef = new YatraTrainPage(page);
})

test.afterAll(async () => {
    await context.tracing.stop({ path: 'trace.zip' })
    await context.close();  // Close the context
    await browser.close();  // Close the browser after all tests are done
})

test.beforeEach('user launches yatra.com website', async () => {
    await flightsPageRef.openTheUrlAndLoginToTheApp()
})

test('user searches for flights by selecting depart and dest', async () => {
    await flightsPageRef.selectDepart();
    await flightsPageRef.selectDest();
    await flightsPageRef.clickSearch();
})

test('open trains page and click on search', async() => {
    await trainsPageRef.openTrainPage()
    await context.clearCookies();

    // Verify that cookies are cleared (optional)
    const cookies = await context.cookies();
    console.log('Cookies after clearing:', cookies); // Should output: []

    // Proceed with searching for trains
    await trainsPageRef.searchTrain();
})