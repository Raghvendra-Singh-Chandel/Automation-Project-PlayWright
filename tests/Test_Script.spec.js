
const { test } = require('../Support/Fixture/Page_Object_fixture')





const OrderPayload = { orders: [{ country: "India", productOrderedId: "6262e990e26b7e1a10e89bfa" }] }

test('Login and create order', async ({ API, verifyOrder, loginPage }) => {

    await test.step('Place the order', async () => {
        const OrderID = await API.createOrder(OrderPayload)

        await loginPage.goToLoginPage()
        await verifyOrder.orderVerify(OrderID)


    });


})



test('Verify End to end testing', async ({ registerPage, loginPage, orderSelectedProduct, orderPlace }) => {

    await test.step('Signup functionality', async () => {

        // calling locator function
        await registerPage.goTo()
        await registerPage.getLabel()
        await registerPage.getInputValue()

    })

    await test.step('login functionality', async () => {
        await loginPage.goToLoginPage()
        await loginPage.loginToApplication()
    })

    await test.step('Create Order', async () => {
        await orderSelectedProduct.productAddToCart()
        await orderSelectedProduct.checkoutProduct()
    })

    await test.step('PlaceOrder', async () => {
        await orderPlace.getOrderPlace()

    })



})

