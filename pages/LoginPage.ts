import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page : Page;
    readonly usernametxt : Locator;
    readonly passwordtxt: Locator;
    readonly loginBtn: Locator;


    constructor(page : Page){
        this.page=page;
        this.usernametxt = page.getByRole('textbox',{name:'Username'});
         this.passwordtxt = page.getByRole('textbox',{name:'Password'}); 
         this.loginBtn = page.getByRole('button',{name:'Login'});

    }

    async gotoUrl(){
        await this.page.goto(process.env.URL!);
    }

   async  login(username:string,password: string):Promise<void>{
      await  this.usernametxt.fill(username);
       await this.passwordtxt.fill(password);
       await this.loginBtn.click();
    }

    async verifyHomepageDisplayed():Promise<void>{
       await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }
}