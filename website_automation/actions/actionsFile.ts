import { Page } from '@playwright/test';
import { YamlReader } from './../utils/YAMLReader';

export class Action {
  constructor(private page: Page) {}

  // Go to navigated website
  async visitWebsite(url: string) {
    await this.page.goto(url);
  }

  // Click any element by selector
  async clickElement(selector: string) {
    selector = new YamlReader(selector).getValueElement();

    await this.page.click(selector);
  }

  // Scroll to an element
  async scrollToElement(selector: string) {
    selector = new YamlReader(selector).getValueElement();

    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  // Type into an input field
  async fillInput(selector: string, value: string) {
    selector = new YamlReader(selector).getValueElement();

    await this.page.fill(selector, value);
  }

  // Waiting element is shown
  async waitForElementShown(selector: string) {
    selector = new YamlReader(selector).getValueElement();

    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  // Waiting for some seconds
  async waitSomeSeconds(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
  }
}
