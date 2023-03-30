const base = require('@playwright/test');
const { request } = require('@playwright/test');
const { signUp } = require('../Page_Object/signupPage');
const { signIn } = require('../Page_Object/signInPage');
const { orderProduct } = require('../Page_Object/orderProduct');
const { apiCall } = require('../API_Utils/loginApiUtils');
const { orderVerified } = require('../Page_Object/orderVerify');
const { placeOrder } = require('../Page_Object/placeOrder');

// Create object of every test case

exports.test = base.test.extend
    ({
        registerPage: async ({ page }, use) => {
            const registerPage = new signUp(page)
            await use(registerPage)
        },
        loginPage: async ({ page }, use) => {
            const loginPage = new signIn(page)
            await use(loginPage)
        },
        orderSelectedProduct: async ({ page }, use) => {
            const orderSelectedProduct = new orderProduct(page)
            await use(orderSelectedProduct)
        },
        API: async ({ page }, use) => {
            const loginPayload = { userEmail: "test_1@gmail.com", userPassword: "Test@123" }
            const OrderPayload = { orders: [{ country: "India", productOrderedId: "6262e990e26b7e1a10e89bfa" }] }


            const apiContext = await request.newContext()
            const API = new apiCall(apiContext, loginPayload)
            await API.addTokenInLocalStorage(page)

            await use(API)

        },

        verifyOrder: async ({ page }, use) => {
            const verifyOrder = new orderVerified(page)
            await use(verifyOrder)
        },

        orderPlace: async ({ page }, use) => {
            const orderPlace = new placeOrder(page)
            await use(orderPlace)
        }





    });


