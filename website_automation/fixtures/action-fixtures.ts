import { Action } from '../actions/actionsFile';
import { testInfo } from '@playwright/test';

export const extendActionFixture = (baseTest) =>
  baseTest.extend({
    actionWeb: async ({ page }, use, testInfo) => {
      const action = new Action(page, testInfo);
      await use(action);
    },
  });
