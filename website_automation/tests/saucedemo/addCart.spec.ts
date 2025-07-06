import { expect, test } from './../../fixtures/base-fixtures';
import { testConfig } from './../../test-config';

test.beforeEach('Login Sauce Demo', async ({ login }) => {
  await login();
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
