const { expect } = require('@playwright/test')



// fetch locator of the element 
exports.orderVerified = class orderVerified {
    constructor(page) {
        this.page = page;
        this.order_btn = page.locator("button[routerlink*='myorders']");
        this.t_body = page.locator("tbody");
        this.t_row = page.locator("tbody tr");

    }


// create locator function to fetch use the locator in the test script
    async orderVerify(orderID) {
        await this.order_btn.click()
        for (let i = 0; i < 8; ++i) {
            const rowOrderId = await this.t_row.nth(i).locator("th").textContent()
            if (orderID.includes(rowOrderId)) {
                await this.t_row.nth(i).locator("button").first().click()

                break;
            }
        }
        const orderIdDetails = await this.page.locator(".col-text").textContent()
        expect(orderID.includes(orderIdDetails)).toBeTruthy()

    };
};