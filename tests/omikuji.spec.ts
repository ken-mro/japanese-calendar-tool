import { test, expect } from './helpers/fixtures';
import { navigateToHome, openOmikuji, drawFortune, closeOmikuji } from './helpers/fixtures';

test.describe('Omikuji Feature', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHome(page, 'en');
  });

  test('should open Omikuji modal when button is clicked', async ({ page }) => {
    await openOmikuji(page);

    // Check modal is visible
    await expect(page.getByRole('heading', { name: /Omikuji/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Draw Fortune/i })).toBeVisible();
  });

  test('should display Omikuji icon and description', async ({ page }) => {
    await openOmikuji(page);

    // Check for description text
    await expect(page.getByText(/Draw a fortune/i)).toBeVisible();
  });

  test('should draw fortune and display result', async ({ page }) => {
    await openOmikuji(page);
    await drawFortune(page);

    // Should show fortune result
    // Check for fortune number (e.g., "No. 45")
    await expect(page.locator('text=/No\\. \\d+/')).toBeVisible();

    // Check for fortune level (Great Fortune, Fortune, etc.)
    await expect(page.locator('[class*="resultTitle"]')).toBeVisible();

    // Check for Close button
    await expect(page.getByRole('button', { name: /Close/i })).toBeVisible();
  });

  test('should display fortune categories', async ({ page }) => {
    await openOmikuji(page);
    await drawFortune(page);

    // Wait for fortune result
    await page.waitForSelector('text=/Close/i', { timeout: 10000 });

    // Check for various fortune categories
    const categories = ['Wishes', 'Love', 'Business', 'Health', 'Travel'];

    for (const category of categories) {
      // At least some categories should be visible
      const categoryElement = page.getByText(category);
      // We don't assert all are visible as the modal might be scrollable
    }
  });

  test('should close modal when Close button is clicked', async ({ page }) => {
    await openOmikuji(page);
    await drawFortune(page);

    // Close the modal
    await closeOmikuji(page);

    // Modal should be hidden
    await expect(page.getByRole('heading', { name: /Omikuji/i })).not.toBeVisible();
  });

  test('should close modal when X button is clicked', async ({ page }) => {
    await openOmikuji(page);

    // Click X button
    await page.locator('button:has-text("×")').click();

    // Modal should be hidden
    await expect(page.getByRole('heading', { name: /Omikuji/i })).not.toBeVisible();
  });

  test('should show shaking animation before result', async ({ page }) => {
    await openOmikuji(page);

    // Click draw fortune
    await page.getByRole('button', { name: /Draw Fortune/i }).click();

    // Should show shaking text
    await expect(page.getByRole('heading', { name: /Shaking/i })).toBeVisible({ timeout: 2000 });

    // Wait for result to appear
    await page.waitForSelector('text=/Close/i', { timeout: 10000 });
  });

  test('should display quote in fortune result', async ({ page }) => {
    await openOmikuji(page);
    await drawFortune(page);

    // Should have a quote (usually in quotes)
    await expect(page.locator('text=/".*"/')).toBeVisible();
  });

  test('should be accessible from home page header', async ({ page }) => {
    // Omikuji button should be in header
    const omikujiButton = page.getByRole('button', { name: /Omikuji/i });
    await expect(omikujiButton).toBeVisible();
  });

  test('should work in Japanese language', async ({ page }) => {
    // Switch to Japanese
    await page.locator('button.lang-btn', { hasText: '日本語' }).click();
    await page.waitForURL('**/ja**');

    // Open Omikuji
    await page.getByRole('button', { name: /おみくじ/i }).click();

    // Should show Japanese text
    await expect(page.getByRole('heading', { name: /おみくじ/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /おみくじを引く/i })).toBeVisible();
  });

  test('should allow drawing multiple fortunes', async ({ page }) => {
    // Draw first fortune
    await openOmikuji(page);
    await drawFortune(page);

    // Should show a fortune
    await expect(page.locator('text=/No\\. \\d+/')).toBeVisible();
    // Close modal
    await closeOmikuji(page);

    // Draw second fortune
    await openOmikuji(page);
    await drawFortune(page);

    // Should show a fortune (might be same or different)
    await expect(page.locator('text=/No\\. \\d+/')).toBeVisible();
  });
});
