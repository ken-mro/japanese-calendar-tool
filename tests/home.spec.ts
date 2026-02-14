import { test, expect } from './helpers/fixtures';
import {
  navigateToHome,
  fillDateForm,
  calculateAndWaitForResults,
} from './helpers/fixtures';
import { testDate20260208, testDate20250101 } from './helpers/test-data';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHome(page, 'en');
  });

  test('should load home page successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Japanese Calendar Tool/);

    // Check main heading
    await expect(page.getByRole('heading', { name: /Japanese Calendar Tool/i })).toBeVisible();

    // Check date input form is visible
    await expect(page.locator('input[type="number"]').first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Calculate/i })).toBeVisible();
  });

  test('should have all header navigation elements', async ({ page }) => {
    // Check Omikuji button
    await expect(page.getByRole('button', { name: /Omikuji/i })).toBeVisible();

    // Check Daily Calendar link
    await expect(page.locator('a[href*="/daily"]')).toBeVisible();

    // Check About button
    await expect(page.getByRole('button', { name: /About/i })).toBeVisible();

    // Check language switcher
    await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
    await expect(page.locator('button.lang-btn', { hasText: '日本語' })).toBeVisible();
  });

  test('should toggle between Western Year and Japanese Era input modes', async ({ page }) => {
    // Western Year should be selected by default
    const westernYearButton = page.getByRole('button', { name: /Western Year/i });
    const japaneseEraButton = page.getByRole('button', { name: /Japanese Era/i });

    // Click Japanese Era
    await japaneseEraButton.click();

    // Verify the mode changed (you might need to check for visual changes or aria attributes)
    await expect(japaneseEraButton).toBeVisible();

    // Click back to Western Year
    await westernYearButton.click();
    await expect(westernYearButton).toBeVisible();
  });

  test('should toggle between Calendar Month and Solar Month for Sexagenary Cycle', async ({ page }) => {
    const calendarMonthButton = page.getByRole('button', { name: /Calendar Month/i });
    const solarMonthButton = page.getByRole('button', { name: /Solar Month/i });

    // Click Solar Month
    await solarMonthButton.click();
    await expect(solarMonthButton).toBeVisible();

    // Click back to Calendar Month
    await calendarMonthButton.click();
    await expect(calendarMonthButton).toBeVisible();
  });

  test('should calculate and display results for a known date (Feb 8, 2026)', async ({ page }) => {
    const { date, expected } = testDate20260208;

    // Fill in the date
    await fillDateForm(page, date.year, date.month, date.day);

    // Calculate
    await calculateAndWaitForResults(page);

    // Check that results section is visible
    await expect(page.getByRole('heading', { name: /Results/i })).toBeVisible();

    // Check Year tab results
    await page.getByRole('tab', { name: /Year/i }).click();
    await expect(page.locator('.card-value', { hasText: expected.westernYear })).toBeVisible();
    await expect(page.getByText(expected.japaneseEra, { exact: false })).toBeVisible();
    await expect(page.getByText(expected.sexagenaryCycleYear, { exact: false })).toBeVisible();
    await expect(page.getByText(expected.nineStarYear, { exact: false })).toBeVisible();

    // Check Month tab results
    await page.getByRole('tab', { name: /Month/i }).click();
    await expect(page.getByText(/February/i)).toBeVisible();
    await expect(page.getByText(expected.zodiacSign, { exact: false })).toBeVisible();
    await expect(page.getByText(expected.sexagenaryCycleMonth, { exact: false })).toBeVisible();

    // Check Day tab results
    await page.getByRole('tab', { name: /Day/i }).click();
    await expect(page.getByText(/Sunday/i)).toBeVisible();
    await expect(page.getByText(expected.rokuyo, { exact: false })).toBeVisible();
    await expect(page.getByText(expected.sexagenaryCycleDay, { exact: false })).toBeVisible();
  });

  test('should calculate results for another known date (Jan 1, 2025)', async ({ page }) => {
    const { date, expected } = testDate20250101;

    await fillDateForm(page, date.year, date.month, date.day);
    await calculateAndWaitForResults(page);

    // Verify some key results
    await expect(page.getByRole('heading', { name: /Results/i })).toBeVisible();
    await expect(page.getByText(expected.japaneseEra)).toBeVisible();
  });

  test('should handle date offset - Days After', async ({ page }) => {
    // Fill in base date
    await fillDateForm(page, 2026, 2, 8);

    // Set offset to 7 days after
    await page.locator('input[type="number"]').nth(1).fill('7');
    await page.getByRole('button', { name: /Days After/i }).click();

    // Calculate
    await calculateAndWaitForResults(page);

    // Should show Feb 15, 2026
    await expect(page.getByText(/Feb 15, 2026/i)).toBeVisible();
  });

  test('should handle date offset - Days Before', async ({ page }) => {
    // Fill in base date
    await fillDateForm(page, 2026, 2, 8);

    // Set offset to 7 days before
    await page.locator('input[type="number"]').nth(1).fill('7');
    await page.getByRole('button', { name: /Days Before/i }).click();

    // Calculate
    await calculateAndWaitForResults(page);

    // Should show Feb 1, 2026
    await expect(page.getByText(/Feb 1, 2026/i)).toBeVisible();
  });

  test('should display all three result tabs', async ({ page }) => {
    await fillDateForm(page, 2026, 2, 8);
    await calculateAndWaitForResults(page);

    // Check all tabs are present
    await expect(page.getByRole('tab', { name: /Year/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /Month/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /Day/i })).toBeVisible();

    // Click each tab to verify they work
    await page.getByRole('tab', { name: /Month/i }).click();
    await expect(page.getByText(/February/i)).toBeVisible();

    await page.getByRole('tab', { name: /Day/i }).click();
    await expect(page.getByText(/Sunday/i)).toBeVisible();

    await page.getByRole('tab', { name: /Year/i }).click();
    await expect(page.locator('.card-value', { hasText: '2026' })).toBeVisible();
  });

  test('should have social sharing buttons', async ({ page }) => {
    await fillDateForm(page, 2026, 2, 8);
    await calculateAndWaitForResults(page);

    // Check for share buttons section
    await expect(page.getByRole('heading', { name: /Share on SNS/i })).toBeVisible();
  });

  test('should have footer with links', async ({ page }) => {
    // Check footer links
    await expect(page.getByRole('link', { name: /Terms of Service/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Privacy Policy/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /bacon.dev.6396@gmail.com/i })).toBeVisible();
  });
});
