import { test as base, Page } from '@playwright/test';
import { Action } from './../actions/actionsFile';

// Extend Playwright's base test with a custom "action" fixture
type ActionFixtures = {
  action: Action;
};

export const test = base.extend<ActionFixtures>({
  actionWeb: async ({ page }, use) => {
    const actionWeb = new Action(page);
    await use(actionWeb);
  },
});
