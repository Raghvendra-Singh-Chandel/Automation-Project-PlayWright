
const {test} = require('../Support/Fixture/Page_Object_fixture')





const OrderPayload = { orders: [{ country: "India", productOrderedId: "6262e990e26b7e1a10e89bfa" }] }

test('Login and create order', async({API,VerifyOrder,loginPage }) => 
{
    
    await test.step('Place the order', async() => 
    {
        const OrderID = await API.createOrder(OrderPayload)

        await loginPage.GoTo_LoginPage()
        await VerifyOrder.orderVerify(OrderID)
        

    });


})



test('Verify End to end testing', async ({ registerPage,loginPage,orderSelectedProduct,OrderPlace}) => 
{
  
    await test.step('Signup functionality', async () => 
    {

        // calling locator function
        await registerPage.GoTo()
        await registerPage.getLabel()
        await registerPage.getInputValue()

    })

    await test.step('login functionality', async () => 
    {
        await loginPage.GoTo_LoginPage()
        await loginPage.Login()
    })

    await test.step('Create Order', async () => 
    {
        await orderSelectedProduct.ProductAddToCart()
        await orderSelectedProduct.CheckoutProduct()
    })

    await test.step('PlaceOrder', async()=>
    {
        await OrderPlace.getOrderPlace()

    })



})

