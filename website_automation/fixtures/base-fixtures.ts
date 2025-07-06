import { test as base } from '@playwright/test';
import { extendActionFixture } from './action-fixtures';
import { extendLoginFixture } from './login-fixtures';

/*
  Apply each fixture, should be chaining for get all the fixtures
  Should be started with test base from "@playwright/test"
  And exported latest variable fixtures of chaining
*/
const withAction = extendActionFixture(base);
const withLogin = extendLoginFixture(withAction);

// Export latest fixtures of chaining
export const test = withLogin;
export { expect } from '@playwright/test';
