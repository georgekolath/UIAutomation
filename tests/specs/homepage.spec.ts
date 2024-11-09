// tests/google.spec.ts
import { test, expect } from '@playwright/test';
import { GoogleHomePage } from '../pages/GoogleHomePage';

test.describe('Google Homepage Tests', () => {
  let googleHomePage: GoogleHomePage;

  test.beforeEach(async ({ page }) => {
    googleHomePage = new GoogleHomePage(page);
    await googleHomePage.navigate();
  });

  test('should have the correct page title', async () => {
    const title = await googleHomePage.getTitle();
    expect(title).toBe('Google');
  });
});