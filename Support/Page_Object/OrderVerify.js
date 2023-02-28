const {expect}   = require('@playwright/test')
const {API_call} = require ('../API_Utils/LoginAPI')
import orderID from "../API_Utils/LoginAPI"


exports.OrderVerify = class OrderVerify
{
    constructor (page)
    {
        this.page = page
        this.order_btn =  page.locator("button[routerlink*='myorders']")
        this.t_body =  page.locator("tbody")
        this.t_row = page.locator("tbody tr")
        
    }



    async orderVerify(orderID)
    {
        await this.order_btn.click()
        for (let i = 0; i < 100; ++i) 
        {
            const rowOrderId = await this.t_row.nth(i).locator("th").textContent();
            if (orderID.includes(rowOrderId)) 
            {
                await this.t_row.nth(i).locator("button").first().click();
          
                break;
            }
        }
        const orderIdDetails = await this.page.locator(".col-text").textContent();
        await this.page.pause();
        expect(orderID.includes(orderIdDetails)).toBeTruthy();

    }
}