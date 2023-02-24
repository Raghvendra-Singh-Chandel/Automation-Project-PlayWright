const {SignUp} = require('./Page_Object/SignupPage')
const {SignIn} = require('../Support/Page_Object/SignInPage')
exports.Object = class Object
{
    constructor(page)
    {
        this.page = page
        this.signup = new SignUp(this.page)
        this.signIn = new SignIn(this.page)
    }

   getSignUp()
   {
    return this.signup
   }
   getSignIn()
   {
    return this.signIn
   } 
}
