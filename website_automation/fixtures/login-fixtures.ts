import { testConfig } from '../test-config';

export const extendLoginFixture = (baseTest) =>
  baseTest.extend({
    login: async ({ actionWeb }, use) => {
      // Visit website
      await actionWeb.visitWebsite(testConfig.baseUrl);
      await actionWeb.waitForElementShown('saucedemo/loginElement/loginContainer');

      // Input email & password
      await actionWeb.fillInput('saucedemo/commonElement/usernameField', 'saucedemo/data-login/username');
      await actionWeb.fillInput('saucedemo/commonElement/passwordField', 'saucedemo/data-login/password');

      // Click login button
      await actionWeb.clickElement('saucedemo/commonElement/loginButton');
      await actionWeb.waitForElementShown('saucedemo/loginElement/loginSuccessIdentifier');
      await actionWeb.waitSomeSeconds(2);

      await use(async () => {});
    },
  });
