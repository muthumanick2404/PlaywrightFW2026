import {test} from '../fixtures/page-fixtures';

test('login with valid creds',{tag:['@smoke']},async ({loginPage})=>{
    await loginPage.gotoUrl();
    await loginPage.login(process.env.USERNAMEAPP!,process.env.PASSWORDAPP!);
    await loginPage.verifyHomepageDisplayed();

})