import { test, chromium } from '@playwright/test';
import { loginPage } from '../pages/login';
import { DashboardPage } from '../pages/dashboard';
import { RecruitmentPage } from '../pages/recruitment';

let browser;
let context;
let page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test.beforeEach(async () => {
    const loginRef = new loginPage(page);
    await loginRef.goToUrl();
    await loginRef.login('Admin', 'admin123');
});

test.afterEach(async () => {
    if (context) {
        await context.clearCookies();  // Clear cookies after each test
    }
});

test.afterAll(async () => {
    await browser.close();  // Close the browser only after all tests have finished
});

test('dashboard', async () => {
    const dashboardRef = new DashboardPage(page);
    await dashboardRef.assignLeaveMethod();
    await dashboardRef.leaveListMethod();
});

test('verify user is able to apply for leave', async () => {
    const dashboardRef2 = new DashboardPage(page);
    await dashboardRef2.applyLeave();
});

test('verify user is able to search for candidate', async () => {
    const recruitmentRef = new RecruitmentPage(page);
    await recruitmentRef.clickRecruitmentButton();
});
