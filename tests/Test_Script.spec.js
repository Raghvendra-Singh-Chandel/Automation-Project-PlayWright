// const {Mytest} = require('../Support/Fixture/Page_Object_fixture')
const { test, request, expect } = require('@playwright/test')
const { Object } = require('../Support/Page_handler')
const { API_call } = require('../Support/API_Utils/LoginAPI')

// Mytest("Signup Using fiture object", async({registerPage})=>
// {
//     await registerPage
// })

const loginPayload = { userEmail: "test_1@gmail.com", userPassword: "Test@123" }
const OrderPayload = { orders: [{ country: "India", productOrderedId: "6262e990e26b7e1a10e89bfa" }] }

test.only('Login and create order', async({ page }) => 
{
    const apiContext = await request.newContext()

    const login = new API_call(apiContext, loginPayload)
    await login.AddTokenInLocalStorage(page)
    const OrderID = await login.createOrder(OrderPayload)
    const object = new Object(page)
    let verify = object.getVerifyOrder()

    await test.step('Place the order', async() => 
    {

        await page.goto("https://rahulshettyacademy.com/client/");
        await verify.orderVerify(OrderID)
        

    });


})












test('Verify End to end testing', async ({ page }) => {
    const object = new Object(page)
    const register = object.getSignUp()
    const login = object.getSignIn()
    const order = object.getOrder()
    await test.step('Signup functionality', async () => {

        // calling locator function
        await register.GoTo()
        await register.getLabel()
        await register.getInputValue()

    })

    await test.step('login functionality', async () => {
        await login.GoTo()
        await login.Login()
    })

    await test.step('Create Order', async () => {
        await order.ProductAddToCart()
        await order.CheckoutProduct()
    })



})