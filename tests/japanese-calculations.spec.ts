import { test, expect } from './helpers/fixtures';
import { navigateToHome, fillDateForm, calculateAndWaitForResults } from './helpers/fixtures';
import { testDate20260204, testDate20260204Solar, testDate20250724, testDate20250724Solar } from './helpers/test-data';

test.describe('Japanese Language Calculations', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHome(page, 'ja');
  });

  test('should calculate correct results for 2026-02-04 with Calendar Month (暦月)', async ({ page }) => {
    const { date, expected } = testDate20260204;

    // Fill in the date
    await fillDateForm(page, date.year, date.month, date.day);

    // Ensure Calendar Month (暦月) is selected
    const calendarMonthButton = page.getByRole('button', { name: /暦月/ });
    await calendarMonthButton.click();

    // Calculate
    await calculateAndWaitForResults(page);
    await page.getByRole('heading', { name: /結果/i }).waitFor();

    // Verify Year tab results
    // Western Year
    await expect(page.locator('.card-value', { hasText: expected.westernYear })).toBeVisible();

    // Japanese Era in Kanji
    await expect(page.getByText(expected.japaneseEraKanji, { exact: true })).toBeVisible();

    // Sexagenary Cycle Year in Kanji
    await expect(page.getByText(expected.sexagenaryCycleYearKanji)).toBeVisible();

    // Nine Star Year in Kanji
    await expect(page.getByText(expected.nineStarYearKanji).first()).toBeVisible();

    // Verify Month tab results
    await page.getByRole('tab', { name: /月/i }).click();

    // Zodiac Sign in Kanji
    await expect(page.getByText(expected.zodiacSignKanji)).toBeVisible();

    // Sexagenary Cycle Month in Kanji (Calendar Month)
    await expect(page.getByText(expected.sexagenaryCycleMonthKanji)).toBeVisible();

    // Nine Star Month in Kanji (Calendar Month)
    await expect(page.getByText(expected.nineStarMonthKanji)).toBeVisible();

    // Verify Day tab results
    await page.getByRole('tab', { name: /日/i }).click();

    // Rokuyo in Kanji
    await expect(page.getByText(expected.rokuyoKanji)).toBeVisible();

    // Sexagenary Cycle Day in Kanji
    await expect(page.getByText(expected.sexagenaryCycleDayKanji)).toBeVisible();

    // Nine Star Day in Kanji
    await expect(page.getByText(expected.nineStarDayKanji)).toBeVisible();
  });

  test('should calculate correct results for 2026-02-04 with Solar Month (節月)', async ({ page }) => {
    const { date, expected } = testDate20260204;

    // Fill in the date
    await fillDateForm(page, date.year, date.month, date.day);

    // Select Solar Month (節月)
    const solarMonthButton = page.getByRole('button', { name: /節月/ });
    await solarMonthButton.click();

    // Calculate
    await calculateAndWaitForResults(page);

    // Verify Year tab results (should be same as Calendar Month)

    await expect(page.getByText(expected.japaneseEraKanji, { exact: true })).toBeVisible();
    await expect(page.getByText(expected.sexagenaryCycleYearKanji)).toBeVisible();
    await expect(page.getByText(expected.nineStarYearKanji).first()).toBeVisible();

    // Verify Month tab results with Solar Month values
    await page.getByRole('tab', { name: /月/i }).click();

    // Sexagenary Cycle Month in Kanji (Solar Month)
    await expect(page.getByText(testDate20260204Solar.sexagenaryCycleMonthKanji)).toBeVisible();

    // Nine Star Month in Kanji (Solar Month)
    await expect(page.getByText(testDate20260204Solar.nineStarMonthKanji)).toBeVisible();

    // Verify Day tab results (should be same as Calendar Month)
    await page.getByRole('tab', { name: /日/i }).click();
    await expect(page.getByText(expected.rokuyoKanji)).toBeVisible();
    await expect(page.getByText(expected.sexagenaryCycleDayKanji)).toBeVisible();
  });

  test('should calculate correct results for 2025-07-24 with Calendar Month (暦月)', async ({ page }) => {
    const { date, expected } = testDate20250724;

    // Fill in the date
    await fillDateForm(page, date.year, date.month, date.day);

    // Ensure Calendar Month (暦月) is selected
    const calendarMonthButton = page.getByRole('button', { name: /暦月/ });
    await calendarMonthButton.click();

    // Calculate
    await calculateAndWaitForResults(page);

    // Verify Year tab results
    // Western Year
    await expect(page.locator('.card-value', { hasText: expected.westernYear })).toBeVisible();

    // Japanese Era in Kanji
    await expect(page.getByText(expected.japaneseEraKanji, { exact: true })).toBeVisible();

    // Sexagenary Cycle Year in Kanji
    await expect(page.getByText(expected.sexagenaryCycleYearKanji)).toBeVisible();

    // Nine Star Year in Kanji
    await expect(page.getByText(expected.nineStarYearKanji).first()).toBeVisible();

    // Verify Month tab results
    await page.getByRole('tab', { name: /月/i }).click();

    // Zodiac Sign in Kanji
    await expect(page.getByText(expected.zodiacSignKanji)).toBeVisible();

    // Sexagenary Cycle Month in Kanji (Calendar Month)
    await expect(page.getByText(expected.sexagenaryCycleMonthKanji)).toBeVisible();

    // Nine Star Month in Kanji (Calendar Month)
    await expect(page.getByText(expected.nineStarMonthKanji)).toBeVisible();

    // Verify Day tab results
    await page.getByRole('tab', { name: /日/i }).click();

    // Rokuyo in Kanji
    await expect(page.getByText(expected.rokuyoKanji)).toBeVisible();

    // Sexagenary Cycle Day in Kanji
    await expect(page.getByText(expected.sexagenaryCycleDayKanji)).toBeVisible();

    // Nine Star Day in Kanji
    await expect(page.getByText(expected.nineStarDayKanji)).toBeVisible();
  });

  test('should calculate correct results for 2025-07-24 with Solar Month (節月)', async ({ page }) => {
    const { date, expected } = testDate20250724;

    // Fill in the date
    await fillDateForm(page, date.year, date.month, date.day);

    // Select Solar Month (節月)
    const solarMonthButton = page.getByRole('button', { name: /節月/ });
    await solarMonthButton.click();

    // Calculate
    await calculateAndWaitForResults(page);

    // Verify Year tab results (should be same as Calendar Month)
    await expect(page.getByText(expected.japaneseEraKanji, { exact: true })).toBeVisible();
    await expect(page.getByText(expected.sexagenaryCycleYearKanji)).toBeVisible();
    await expect(page.getByText(expected.nineStarYearKanji).first()).toBeVisible();

    // Verify Month tab results with Solar Month values
    await page.getByRole('tab', { name: /月/i }).click();

    // Sexagenary Cycle Month in Kanji (Solar Month)
    await expect(page.getByText(testDate20250724Solar.sexagenaryCycleMonthKanji)).toBeVisible();

    // Nine Star Month in Kanji (Solar Month)
    await expect(page.getByText(testDate20250724Solar.nineStarMonthKanji)).toBeVisible();

    // Verify Day tab results (should be same as Calendar Month)
    await page.getByRole('tab', { name: /日/i }).click();
    await expect(page.getByText(expected.rokuyoKanji)).toBeVisible();
    await expect(page.getByText(expected.sexagenaryCycleDayKanji)).toBeVisible();
  });

  test('should display correct daily calendar information for 2026-02-04 in Japanese', async ({ page }) => {
    const { date, expected } = testDate20260204;

    // Navigate to daily calendar page for this date
    await page.goto(`/ja/daily?date=${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`);
    await page.waitForLoadState('networkidle');

    // Verify Japanese Era
    await expect(page.getByText(expected.japaneseEraKanji)).toBeVisible();

    // Verify Sexagenary Cycle Year
    await expect(page.getByText(expected.sexagenaryCycleYearKanji)).toBeVisible();

    // Verify Nine Star Year
    await expect(page.getByText(expected.nineStarYearKanji).first()).toBeVisible();

    // Verify Rokuyo
    await expect(page.getByText(expected.rokuyoKanji)).toBeVisible();

    // Verify Sexagenary Cycle Day
    await expect(page.getByText(expected.sexagenaryCycleDayKanji)).toBeVisible();

    // Verify Nine Star Day
    await expect(page.getByText(expected.nineStarDayKanji).first()).toBeVisible();
  });

  test('should display correct daily calendar information for 2025-07-24 in Japanese', async ({ page }) => {
    const { date, expected } = testDate20250724;

    // Navigate to daily calendar page for this date
    await page.goto(`/ja/daily?date=${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`);
    await page.waitForLoadState('networkidle');

    // Verify Japanese Era
    await expect(page.getByText(expected.japaneseEraKanji)).toBeVisible();

    // Verify Sexagenary Cycle Year
    await expect(page.getByText(expected.sexagenaryCycleYearKanji)).toBeVisible();

    // Verify Nine Star Year
    await expect(page.getByText(expected.nineStarYearKanji).first()).toBeVisible();

    // Verify Rokuyo
    await expect(page.getByText(expected.rokuyoKanji)).toBeVisible();

    // Verify Sexagenary Cycle Day
    await expect(page.getByText(expected.sexagenaryCycleDayKanji)).toBeVisible();

    // Verify Nine Star Day
    await expect(page.getByText(expected.nineStarDayKanji).first()).toBeVisible();
  });

  test('should toggle between Calendar Month and Solar Month on daily page for 2026-02-04', async ({ page }) => {
    const { date } = testDate20260204;

    // Navigate to daily calendar page
    await page.goto(`/ja/daily?date=${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`);
    await page.waitForLoadState('networkidle');

    // Click on Calendar Month (暦月) button
    const calendarMonthButton = page.getByRole('button', { name: /暦月/ });
    await calendarMonthButton.click();

    // Verify Calendar Month Sexagenary Cycle is displayed
    await expect(page.getByText(testDate20260204.expected.sexagenaryCycleMonthKanji)).toBeVisible();

    // Click on Solar Month (節月) button
    const solarMonthButton = page.getByRole('button', { name: /節月/ });
    await solarMonthButton.click();

    // Verify Solar Month Sexagenary Cycle is displayed
    await expect(page.getByText(testDate20260204Solar.sexagenaryCycleMonthKanji)).toBeVisible();
  });
});
