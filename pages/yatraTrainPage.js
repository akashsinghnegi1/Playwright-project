const { expect } = require("@playwright/test")
exports.YatraTrainPage = class YatraTrainPage {
    constructor(page) {
        this.page = page
        this.moreDropDown = page.getByText('+ More')
        this.trainOption = page.getByRole('link', { name: ' Trains' })
        this.trainsIcon = page.getByRole('link', { name: ' Trains' })
        this.searchButton = "//input[@id='BE_train_search_btn']"
        //getByRole('link', { name: ' Hotels' })
    }
    async openTrainPage() {
        await this.moreDropDown.hover()
        await this.trainOption.click()
        await expect(this.trainsIcon).toBeVisible()
        await expect(this.trainsIcon).toHaveText('Trains')
    }
    async searchTrain(){
        await this.page.locator(this.searchButton).click()
    }
}