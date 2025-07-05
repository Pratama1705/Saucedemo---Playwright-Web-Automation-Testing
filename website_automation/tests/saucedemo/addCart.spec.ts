import { expect, test } from './../../fixtures/action-fixtures';
import { testConfig } from './../../test-config';

test.beforeEach('Login Sauce Demo', async ({ actionWeb }) => {
  // Visit website
  await actionWeb.visitWebsite(testConfig.baseUrl);
  await actionWeb.waitForElementShown('saucedemo/loginElement/loginContainer');

  // Input email & password
  await actionWeb.fillInput('saucedemo/commonElement/usernameField', 'standard_user');
  await actionWeb.fillInput('saucedemo/commonElement/passwordField', 'secret_sauce');

  // Click login button
  await actionWeb.clickElement('saucedemo/commonElement/loginButton');
  await actionWeb.waitForElementShown('saucedemo/loginElement/loginSuccessIdentifier');
  await actionWeb.waitSomeSeconds(2);
});

test('Scenario : Add Item to Cart & Checking Cart Item', async ({ actionWeb }) => {
  // Click add cart backpack
  await actionWeb.clickElement('saucedemo/listShopItemElement/addBackpackCartButton');
  await actionWeb.waitForElementShown('saucedemo/listShopItemElement/removeBackpackCartButton');
  await actionWeb.waitSomeSeconds(2);

  // Check cart
  await actionWeb.clickElement('saucedemo/listShopItemElement/shoppingCartButton');
  await actionWeb.waitForElementShown('saucedemo/listShopItemElement/shoppingCartPage');
  await actionWeb.waitSomeSeconds(2);
});
