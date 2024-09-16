import { expect } from "@playwright/test";

exports.RecruitmentPage = class RecruitmentPage {
    constructor(page) {
        this.page = page;
        this.recruitmentButton = page.getByRole('link', { name: 'Recruitment' })
        this.vacancyDropdwon = page.getByText('-- Select --').nth(1)
        this.vacancyOption = page.getByRole('option', { name: 'Senior QA Lead' })
        this.statusDropdown = page.getByText('-- Select --').nth(3)
        this.statusOption = page.getByRole('option', { name: 'Shortlisted' })
        this.searchButton = page.getByRole('button', { name: 'Search' })
        this.recordsFoundText = page.getByText(/Records Found/)
        let name = 'Akash'
    }
    async clickRecruitmentButton() {
        await this.recruitmentButton.click()
    }
    async verifyUserIsAbleToSearchForCandidate(){
        await this.vacancyDropdwon.click()
        await this.vacancyOption.click()
        await this.statusDropdown.click()
        await this.statusOption.click()
        await this.searchButton.click()
        await expect(this.recordsFoundText).toHaveText('Records Found');
    }

}