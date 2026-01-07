import {test as basetest,expect} from '@playwright/test'
import { LoginPage } from "../pages/LoginPage"
type MyFixtures ={
    loginPage:LoginPage;
}


export const test =basetest.extend<MyFixtures>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    }
})

export{expect}