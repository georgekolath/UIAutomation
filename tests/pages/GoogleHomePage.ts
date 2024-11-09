// pages/GoogleHomePage.ts
import { Page, Locator } from '@playwright/test';

export class GoogleHomePage {
  public readonly page: Page;
  public readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="q"]');
  }

  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async isSearchInputVisible() {
    return this.searchInput.isVisible();
  }
}