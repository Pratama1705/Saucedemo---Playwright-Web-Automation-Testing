import { Page, expect, TestInfo, testInfo } from '@playwright/test';
import { YamlReader } from './../utils/YAMLReader';
import { DataReader } from './../utils/DataReader';
import { allure } from 'allure-playwright';

export class Action {
  constructor(private page: Page, private testInfo: TestInfo) {}

  // Go to navigated website
  async visitWebsite(url: string) {
    await allure.step(`Go to ${url}`, async () => {
      // ==============================

      await this.page.goto(url);

      // ==============================
      const screenshot = await this.page.screenshot({ fullPage: false });
      await this.testInfo.attach(`Go to ${url}`, {
        body: screenshot,
        contentType: 'image/png',
      });
    });
  }

  // Click any element by selector
  async clickElement(selector: string) {
    selector = new YamlReader(selector).getValueElement();
    await allure.step(`Click on ${selector}`, async () => {
      // ==============================

      await this.page.click(selector);

      // ==============================
      const screenshot = await this.page.screenshot({ fullPage: false });
      await this.testInfo.attach(`Click on ${selector}`, {
        body: screenshot,
        contentType: 'image/png',
      });
    });
  }

  // Scroll to an element
  async scrollToElement(selector: string) {
    selector = new YamlReader(selector).getValueElement();

    await allure.step(`Scroll to ${selector}`, async () => {
      // ==============================

      await this.page.locator(selector).scrollIntoViewIfNeeded();

      // ==============================
      const screenshot = await this.page.screenshot({ fullPage: false });
      await this.testInfo.attach(`Scroll to ${selector}`, {
        body: screenshot,
        contentType: 'image/png',
      });
    });
  }

  // Type into an input field
  async fillInput(selector: string, value: string) {
    selector = new YamlReader(selector).getValueElement();
    value = new DataReader(value).getValueData();

    await allure.step(`Fill ${value} on ${selector}`, async () => {
      // ==============================

      await this.page.fill(selector, value);

      selector = this.page.locator(selector);
      await expect(selector).toHaveValue(value);

      // ==============================
      const screenshot = await this.page.screenshot({ fullPage: false });
      await this.testInfo.attach(`Fill ${value} on ${selector}`, {
        body: screenshot,
        contentType: 'image/png',
      });
    });
  }

  // Waiting element is shown
  async waitForElementShown(selector: string) {
    selector = new YamlReader(selector).getValueElement();

    await allure.step(`Wait for ${selector}`, async () => {
      // ==============================

      await this.page.waitForSelector(selector, { state: 'visible' });

      // ==============================
      const screenshot = await this.page.screenshot({ fullPage: false });
      await this.testInfo.attach(`Wait for ${selector}`, {
        body: screenshot,
        contentType: 'image/png',
      });
    });
  }

  // Waiting for some seconds
  async waitSomeSeconds(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  // Press ShortcutKeyboard on element
  async pressShortcutKeyboard(selector: string, shortcut: string) {
    selector = new YamlReader(selector).getValueElement();

    await this.page.press(selector, shortcut);
  }

  // Drag element to element
  async dragAndDrop(selectorFrom: string, selectorTo: string) {
    selectorFrom = new YamlReader(selectorFrom).getValueElement();
    selectorTo = new YamlReader(selectorTo).getValueElement();

    await allure.step(`Drag ${selectorFrom} to ${selectorTo}`, async () => {
      // ==============================

      await this.page.locator(selectorFrom).dragTo(page.locator(selectorTo));

      // ==============================
      const screenshot = await this.page.screenshot({ fullPage: false });
      await this.testInfo.attach(`Drag ${selectorFrom} to ${selectorTo}`, {
        body: screenshot,
        contentType: 'image/png',
      });
    });
  }

  // Element should be visible
  async elementIsVisible(selector: string) {
    selector = new YamlReader(selector).getValueElement();

    await allure.step(`Fill ${value} on ${selector}`, async () => {
      // ==============================

      selector = this.page.locator(selector);
      await expect(selector).toBeVisible();

      // ==============================
      const screenshot = await this.page.screenshot({ fullPage: false });
      await this.testInfo.attach(`Fill ${value} on ${selector}`, {
        body: screenshot,
        contentType: 'image/png',
      });
    });
  }
}
