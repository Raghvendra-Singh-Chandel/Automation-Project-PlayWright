const {SignUp} = require('../Support/Page_Object/SignupPage')

exports.Object = class Object
{
    constructor(page)
    {
        this.page = page
        this.signup = new SignUp(this.page)
    }

   getSignUp()
   {
    return this.signup
   } 
}
