import { expect } from "@playwright/test";
exports.DashboardPage = class DashboardPage {
    constructor(page) {
        this.page = page;
        this.assignLeaveButton = page.getByRole('button', { name: 'Assign Leave' });
        this.leaveListButton = page.getByRole('button', { name: 'Leave List' })
        this.timesheetsButton = page.getByRole('button', { name: 'Timesheets' })
        this.applyLeaveButton = page.getByRole('button', { name: 'Apply Leave' })
        this.myLeave = page.getByRole('button', { name: 'My Leave' })
        this.myTimesheet = page.getByRole('button', { name: 'My Timesheet' })
        this.leaveTypeDropdown = page.getByText('-- Select --').first();
        this.leaveTypeDropdownOption = page.getByRole('option', { name: 'CAN - FMLA' })
        this.fromDateIcon = page.locator('form i').nth(2)
        this.fromDate = page.getByText('8', { exact: true })
        this.commentsBox = page.locator('textarea')
        this.applyButton = page.getByRole('button', { name: 'Apply' })
    }

    async assignLeaveMethod() {
        await this.assignLeaveButton.click();
        await expect(this.page.locator("//h6[text()='Assign Leave']")).toHaveText('Assign Leave');
        await this.page.goBack();
    }
    async leaveListMethod() {
        await this.leaveListButton.click();
        await expect(this.page.getByRole('heading', { name: 'Leave List' })).toHaveText('Leave List');
        await this.page.goBack();
    }
    async applyLeave() {
        await this.applyLeaveButton.click();
        await this.leaveTypeDropdown.click();
        await this.leaveTypeDropdownOption.click();
        await this.fromDateIcon.click();
        await this.commentsBox.fill('Going to friend\'s wedding');
        await this.applyButton.click();
    }

}