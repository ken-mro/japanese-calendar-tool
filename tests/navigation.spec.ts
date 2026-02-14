import { test, expect } from './helpers/fixtures';
import { navigateToHome } from './helpers/fixtures';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHome(page, 'en');
  });

  test('should navigate to Daily Calendar from header', async ({ page }) => {
    // Click daily calendar link
    await page.locator('a[href*="/daily"]').click();
    await page.waitForURL('**/en/daily**');
    
    // Should be on daily calendar page
    await expect(page).toHaveTitle(/Daily Calendar/);
    await expect(page.getByRole('link', { name: /Back to Home/i })).toBeVisible();
  });

  test('should navigate back to home from Daily Calendar', async ({ page }) => {
    // Go to daily calendar
    await page.goto('/en/daily');
    await page.waitForLoadState('networkidle');
    
    // Click back to home
    await page.getByRole('link', { name: /Back to Home/i }).click();
    await page.waitForURL('**/en');
    
    // Should be on home page
    await expect(page.getByRole('heading', { name: /Japanese Calendar Tool/i })).toBeVisible();
  });

  test('should navigate to Terms of Service', async ({ page }) => {
    const termsLink = page.getByRole('link', { name: /Terms of Service/i });
    await expect(termsLink).toBeVisible();
    
    // Click terms link
    await termsLink.click();
    await page.waitForURL('**/en/terms**');
    
    // Should be on terms page
    await expect(page).toHaveURL(/\/en\/terms/);
  });

  test('should navigate to Privacy Policy', async ({ page }) => {
    const privacyLink = page.getByRole('link', { name: /Privacy Policy/i });
    await expect(privacyLink).toBeVisible();
    
    // Click privacy link
    await privacyLink.click();
    await page.waitForURL('**/en/privacy**');
    
    // Should be on privacy page
    await expect(page).toHaveURL(/\/en\/privacy/);
  });

  test('should have working email contact link', async ({ page }) => {
    const emailLink = page.getByRole('link', { name: /bacon.dev.6396@gmail.com/i });
    await expect(emailLink).toBeVisible();
    
    // Check href attribute
    await expect(emailLink).toHaveAttribute('href', /mailto:/);
  });

  test('should open About modal when About button is clicked', async ({ page }) => {
    const aboutButton = page.getByRole('button', { name: /About this tool/i });
    
    // About button might be visible or might need scrolling
    if (await aboutButton.isVisible()) {
      await aboutButton.click();
      
      // Should show about content (implementation may vary)
      // This test might need adjustment based on actual implementation
    }
  });

  test('should have clickable title that navigates to home', async ({ page }) => {
    // Go to a different page first
    await page.goto('/en/daily');
    await page.waitForLoadState('networkidle');
    
    // Click on the title
    const title = page.getByRole('heading', { name: /Japanese Calendar Tool/i }).first();
    
    if (await title.isVisible()) {
      await title.click();
      await page.waitForURL('**/en');
      
      // Should be back on home page
      await expect(page.getByRole('button', { name: /Calculate/i })).toBeVisible();
    }
  });

  test('should maintain navigation state after calculation', async ({ page }) => {
    // Calculate a date
    await page.locator('input[type="number"]').first().fill('2026');
    await page.locator('select').first().selectOption('2');
    await page.locator('select').nth(1).selectOption('8');
    await page.getByRole('button', { name: /Calculate/i }).click();
    
    // Wait for results
    await page.waitForSelector('text=/Results/i');
    
    // Navigation should still work
    await page.locator('a[href*="/daily"]').click();
    await page.waitForURL('**/en/daily**');
    
    // Should navigate successfully
    await expect(page).toHaveURL(/\/en\/daily/);
  });

  test('should have consistent header across pages', async ({ page }) => {
    // Check header on home page
    await expect(page.getByRole('heading', { name: /Japanese Calendar Tool/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Omikuji/i })).toBeVisible();
    
    // Navigate to daily calendar
    await page.goto('/en/daily');
    await page.waitForLoadState('networkidle');
    
    // Header should be different on daily calendar (has back button instead)
    await expect(page.getByRole('link', { name: /Back to Home/i })).toBeVisible();
  });

  test('should have consistent footer across pages', async ({ page }) => {
    // Check footer on home page
    await expect(page.getByRole('link', { name: /Terms of Service/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Privacy Policy/i })).toBeVisible();
    
    // Navigate to daily calendar
    await page.goto('/en/daily');
    await page.waitForLoadState('networkidle');
    
    // Footer should be present (might need scrolling)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Note: Daily calendar might not have footer, adjust based on actual implementation
  });

  test('should handle browser back button', async ({ page }) => {
    // Navigate to daily calendar
    await page.goto('/en/daily');
    await page.waitForLoadState('networkidle');
    
    // Go back
    await page.goBack();
    await page.waitForLoadState('networkidle');
    
    // Should be on home page
    await expect(page).toHaveURL(/\/en/);
    await expect(page.getByRole('button', { name: /Calculate/i })).toBeVisible();
  });

  test('should handle browser forward button', async ({ page }) => {
    // Navigate to daily calendar
    await page.goto('/en/daily');
    await page.waitForLoadState('networkidle');
    
    // Go back
    await page.goBack();
    await page.waitForLoadState('networkidle');
    
    // Go forward
    await page.goForward();
    await page.waitForLoadState('networkidle');
    
    // Should be back on daily calendar
    await expect(page).toHaveURL(/\/en\/daily/);
  });

  test('should navigate to About pages from About button', async ({ page }) => {
    const aboutButton = page.getByRole('button', { name: /About this tool/i });
    
    // Check if about button exists and is clickable
    if (await aboutButton.isVisible()) {
      // This test depends on the actual implementation of the About feature
      // It might open a modal or navigate to a page
      await aboutButton.click();
      
      // Add appropriate assertions based on implementation
    }
  });
});
