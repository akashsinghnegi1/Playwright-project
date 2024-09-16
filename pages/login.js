exports.loginPage = class loginPage {
    constructor(page) {
        this.page = page;
        this.URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
    async goToUrl() {
        await this.page.goto(this.URL);
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}