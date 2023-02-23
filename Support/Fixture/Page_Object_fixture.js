const {test}   = require ('@playwright/test')
const{SignUp} = require('../Page_Object/SignupPage')



const Mytest = test.extend
({
    registerPage: async({page}, use)=>
    {
        const registerPage = new SignUp(page)
        await use(registerPage) 
    }

})


