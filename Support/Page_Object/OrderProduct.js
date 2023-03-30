const { expect } = require('@playwright/test')


// fetch locator of the element 
exports.orderProduct = class orderProduct {
  constructor(page) {
    this.page = page;
    this.product = page.locator('.card-body');
    this.product_name = 'adidas original';
    this.cart = page.locator('[routerlink="/dashboard/cart"]');
    this.checkout = page.getByRole('button', { name: 'Checkout' });


  }
// create locator function to fetch use the locator in the test script
  async productAddToCart() {
    let productCount = await this.product.count()
    console.log(productCount)


    for (let i = 0; i < 3; i++) {
      var productsearch = await this.product.locator('b').nth(i).textContent()
      console.log(productsearch)
      if (await productsearch == this.product_name) {
        await this.product.locator('text= Add To Cart').nth(i).click()

        break
      }

    }

  };


  async checkoutProduct() {
    await this.cart.click()
    await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/dashboard/cart')
    await this.page.waitForSelector('text=Checkout',
      {
        state: 'visible',
      })
    await this.checkout.click()

  };
};