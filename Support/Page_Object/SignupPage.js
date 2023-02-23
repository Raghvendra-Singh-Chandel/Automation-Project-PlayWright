const {expect} = require('@playwright/test')


expoerts.SignUp = class SignUp
{
    constructor(page)
    {
        this.page = page
        this.first_name = page.locator('[formcontrolname="lastName"]')
        this.last_name = page.locator('[formcontrolname="lastName"]')
        this.email = page.locator('[formcontrolname="userEmail"]')
        this.phone_number = page.locator('#userMobile')
        this.occupation = page.getByText('Engineer')
        this.gender = page.locator('[formcontrolname="gender"]')
        this.password = page.locator('#userPassword')
        this.confirm_password = page.locator('[formcontrolname="confirmPassword"]')
        this.require_checkbox = page.locator('input[@type="checkbox"]')
        this.register = page.locator('#login')
        this.label = page.locator('label')


    }



    async GoTo()
    {
        await this.page.goto('https://rahulshettyacademy.com/client/auth/register')
    }

    async getLabel()
    {
        let label_name = ['First Name','Last Name','Email','Phone Number','Occupation','Gender','Male','Female','Password','Confirm Password']
        for (let i=0;i<10;i++)
        {
            await expect(this.label.nth(i)).toHaveText(label_name[i]) 
        }
        
    }

    async getInputValue()
    {
        await this.first_name.fill('Test')
        await this.last_name.fill('Atomation')
        await this.email.fill('test_1@gmail.com')
        await this.phone_number.fill('2345432344')
        await this.occupation.click()
        for (let i=1;i<=0;i--)
        {
            await this.gender.filter({has: this.page.locator('[type="radio"]')}).nth(i).click()

        }
        await this.password.fill('Test@123')
        await this.confirm_password.fill('Test@123')
        await this.require_checkbox().click()
        await this.register.click()
    }
}