exports.FlightsPage = class FlightsPage {
    constructor(page) {
        if (!page) {
            throw new Error("Page object is required");
        }
        this.page = page;
        this.url = 'https://www.yatra.com/';
        this.departButton2 = this.page.locator("#BE_flight_origin_city");
        this.departTextbox = this.page.getByRole('textbox', { name: 'Depart From' });
        this.listOption = this.page.getByText('New Delhi (DEL) Indira Gandhi International India');
        this.goingToTextbox = this.page.getByRole('textbox', { name: 'Going To' });
        this.list2Option = this.page.getByText('Bangkok (BKK) Suvarnabhumi Thailand');
        this.searchButton = this.page.getByRole('button', { name: 'Search Flights' });
        this.MyAccountDD = this.page.locator('#userLoginBlock').getByText('My Account')
        this.loginButton1 = page.getByText('Login', { exact: true })
        this.usernameField = page.getByPlaceholder('Email ID / Mobile Number')
        this.continueButton = page.locator(' //*[@id="login-continue-btn"]')
        this.passwordField = page.getByPlaceholder('Enter your password', { exact: true })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.password = 'P3LE:a3:S2.g@Kr'
    }

    async openTheUrlAndLoginToTheApp() {
        await this.page.goto(this.url);
        await this.MyAccountDD.hover()
        await this.loginButton1.click()
        await this.usernameField.fill('akashtemp0098@gmail.com')
        await this.continueButton.click()
        await this.passwordField.fill(this.password)
        await this.loginButton.click()
    }

    async selectDepart() {
        await this.departButton2.click();
        await this.departTextbox.fill('New');
        await this.page.locator('.viewport')
        .getByRole('listitem')
        .filter({hasText: 'New Delhi (DEL)'}).click();
        //await this.listOption.click();
    }

    async selectDest() {
        await this.goingToTextbox.fill('Bangk');
        await this.list2Option.click();
    }

    async clickSearch() {
        await this.searchButton.click();
    }
}
