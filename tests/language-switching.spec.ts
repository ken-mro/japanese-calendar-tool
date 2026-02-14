import { test, expect } from './helpers/fixtures';
import { navigateToHome, switchLanguage } from './helpers/fixtures';

test.describe('Language Switching', () => {
  test('should switch from English to Japanese on home page', async ({ page }) => {
    await navigateToHome(page, 'en');

    // Verify we're on English page
    await expect(page).toHaveURL(/\/en/);
    await expect(page.getByRole('heading', { name: /Japanese Calendar Tool/i })).toBeVisible();

    // Switch to Japanese
    await switchLanguage(page, 'ja');

    // Verify URL changed
    await expect(page).toHaveURL(/\/ja/);

    // Verify Japanese text is displayed
    await expect(page.getByRole('heading', { name: /暦計算ツール/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /計算する/i })).toBeVisible();
  });

  test('should switch from Japanese to English on home page', async ({ page }) => {
    await navigateToHome(page, 'ja');

    // Verify we're on Japanese page
    await expect(page).toHaveURL(/\/ja/);

    // Switch to English
    await switchLanguage(page, 'en');

    // Verify URL changed
    await expect(page).toHaveURL(/\/en/);

    // Verify English text is displayed
    await expect(page.getByRole('heading', { name: /Japanese Calendar Tool/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Calculate/i })).toBeVisible();
  });

  test('should maintain language when navigating to daily calendar', async ({ page }) => {
    await navigateToHome(page, 'en');

    // Navigate to daily calendar
    await page.locator('a[href*="/daily"]').click();
    await page.waitForURL('**/en/daily**');

    // Should still be in English
    await expect(page).toHaveURL(/\/en\/daily/);
    await expect(page.getByRole('link', { name: /Back to Home/i })).toBeVisible();
  });

  test('should maintain language when navigating back from daily calendar', async ({ page }) => {
    await page.goto('/ja/daily');
    await page.waitForLoadState('networkidle');

    // Click back to home
    await page.getByRole('link', { name: /ホームに戻る/i }).click();
    await page.waitForURL('**/ja');

    // Should still be in Japanese
    await expect(page).toHaveURL(/\/ja/);
    await expect(page.getByRole('heading', { name: /暦計算ツール/i })).toBeVisible();
  });

  test('should translate all UI elements when switching language', async ({ page }) => {
    await navigateToHome(page, 'en');

    // Check English elements
    await expect(page.getByRole('heading', { name: /Enter Date/i })).toBeVisible();
    await expect(page.getByText(/Input Mode/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Western Year/i })).toBeVisible();

    // Switch to Japanese
    await switchLanguage(page, 'ja');

    // Check Japanese elements
    await expect(page.getByRole('heading', { name: /年月日を入力/i })).toBeVisible();
    await expect(page.getByText(/入力形式/i)).toBeVisible();

    await expect(page.getByRole('main')).toContainText('西暦'); await expect(page.getByRole('main')).toContainText('西暦');
  });

  test('should translate results when switching language after calculation', async ({ page }) => {
    await navigateToHome(page, 'en');

    // Fill and calculate
    await page.locator('input[type="number"]').first().fill('2026');
    await page.locator('select').first().selectOption('2');
    await page.locator('select').nth(1).selectOption('8');
    await page.getByRole('button', { name: /Calculate/i }).click();

    // Wait for results
    await page.waitForSelector('text=/Results/i');

    // Check English results
    await expect(page.getByRole('heading', { name: /Results/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Western Year/i })).toBeVisible();

    // Switch to Japanese
    await switchLanguage(page, 'ja');

    // Results should be translated
    await expect(page.getByRole('heading', { name: /結果/i })).toBeVisible();
    await expect(page.locator('#tabpanel-0')).toContainText('西暦');
    // await expect(page.getByText(/西暦/i)).toBeVisible();
  });

  test('should have correct language buttons visible', async ({ page }) => {
    await navigateToHome(page, 'en');

    // Both language buttons should be visible
    await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
    await expect(page.locator('button.lang-btn', { hasText: '日本語' })).toBeVisible();

    // Switch to Japanese
    await switchLanguage(page, 'ja');

    // Both buttons should still be visible
    await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
    await expect(page.locator('button.lang-btn', { hasText: '日本語' })).toBeVisible();
  });

  test('should translate footer links', async ({ page }) => {
    await navigateToHome(page, 'en');

    // Check English footer
    await expect(page.getByRole('link', { name: /Terms of Service/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Privacy Policy/i })).toBeVisible();

    // Switch to Japanese
    await switchLanguage(page, 'ja');

    // Check Japanese footer
    await expect(page.getByRole('link', { name: /利用規約/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /プライバシーポリシー/i })).toBeVisible();
  });

  test('should work with direct URL navigation', async ({ page }) => {
    // Navigate directly to Japanese version
    await page.goto('/ja');
    await page.waitForLoadState('networkidle');

    // Should show Japanese content
    await expect(page.getByRole('heading', { name: /暦計算ツール/i })).toBeVisible();

    // Navigate directly to English version
    await page.goto('/en');
    await page.waitForLoadState('networkidle');

    // Should show English content
    await expect(page.getByRole('heading', { name: /Japanese Calendar Tool/i })).toBeVisible();
  });

  test('should translate Omikuji modal', async ({ page }) => {
    await navigateToHome(page, 'en');

    // Open Omikuji in English
    await page.getByRole('button', { name: /Omikuji/i }).click();
    await expect(page.getByRole('heading', { name: /Omikuji/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Draw Fortune/i })).toBeVisible();

    // Close modal
    await page.locator('button:has-text("×")').click();

    // Switch to Japanese
    await switchLanguage(page, 'ja');

    // Open Omikuji in Japanese
    await page.getByRole('button', { name: /おみくじ/i }).click();
    await expect(page.getByRole('heading', { name: /おみくじ/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /おみくじを引く/i })).toBeVisible();
  });

  test('should maintain language on daily calendar page', async ({ page }) => {
    await page.goto('/en/daily');
    await page.waitForLoadState('networkidle');

    // Should be in English
    await expect(page.getByRole('link', { name: /Back to Home/i })).toBeVisible();

    // Switch to Japanese
    await switchLanguage(page, 'ja');

    // Should be in Japanese
    await expect(page).toHaveURL(/\/ja\/daily/);
    await expect(page.getByRole('link', { name: /ホームに戻る/i })).toBeVisible();
  });
});
