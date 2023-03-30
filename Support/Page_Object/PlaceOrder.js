const { expect } = require('@playwright/test')

// fetch locator of the element 

exports.placeOrder = class placeOrder {
    constructor(page) {
        this.page = page;
        this.input_field = page.locator('input[type = "text"]');
        this.select_ExpiryDate = page.locator('.input.ddl');
        this.selectCountry = page.locator('[placeholder="Select Country"]');
        this.shippingInfo = page.getByText(' Shipping Information ');
        this.placeorder = page.getByText('Place Order ');
    }


// create locator function to fetch use the locator in the test script
    async getOrderPlace() {
        let input_value = ['2345 6789 7654', '345', 'Test']
        for (let i = 0; i < 3; i++) {
            await this.input_field.nth(i).fill(input_value[i])

        }
        for (let j = 0; j < 2; j++) {
            let expiry_date = ['11', '29']
            await this.select_ExpiryDate.nth(j).selectOption(expiry_date[j])
        }
        await this.selectCountry.fill('Ind')
        await this.selectCountry.press('Backspace')
        await this.page.pause()
        await this.page.getByRole('button', { name: ' India' }).nth(1).click();
        await this.page.pause()

        await this.placeorder.click()
        await this.page.pause()

    };
};