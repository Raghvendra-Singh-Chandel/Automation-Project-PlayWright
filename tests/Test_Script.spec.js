// const {Mytest} = require('../Support/Fixture/Page_Object_fixture')
const {test} = require('@playwright/test')
const {Object} = require('../Support/Page_handler')

// Mytest("Signup Using fiture object", async({registerPage})=>
// {
//     await registerPage
// })
test('Verify Signup Page functionality', async({page})=>
{
        const object = new Object(page)
        const register = object.getSignUp()
        const login    = object.getSignIn()
    await test.step('Signup functionality',async()=>
    {
        
        // calling locator function
        await register.GoTo()
        await register.getLabel()
        await register.getInputValue()

    })

    await test.step('login functionality', async()=>
    {
        await login.GoTo()
        await login.Login()
    })


        
})