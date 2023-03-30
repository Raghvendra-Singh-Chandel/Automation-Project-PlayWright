const { expect } = require('@playwright/test')


// fetch locator of the element 
exports.signIn = class signIn {
    constructor(page) {
        this.page = page;
        this.email = page.locator('[formcontrolname="userEmail"]');
        this.password = page.locator('[formcontrolname="userPassword"]');
        this.login = page.getByRole('Button', { name: 'Login' });
    }

// create locator function to fetch use the locator in the test script
    async goToLoginPage() {
        await this.page.goto('https://rahulshettyacademy.com/client')
    };
    async loginToApplication() {
        await this.email.fill('test_1@gmail.com')
        await this.password.fill('Test@123')
        await this.login.click()
    };

};