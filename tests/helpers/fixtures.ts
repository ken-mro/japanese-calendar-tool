import { test as base, Page } from '@playwright/test';

/**
 * Custom fixtures for Japanese Calendar Tool tests
 */

/**
 * Navigate to a specific language version of the home page
 */
export async function navigateToHome(page: Page, lang: 'en' | 'ja' = 'en') {
  await page.goto(`/${lang}`);
  await page.waitForLoadState('networkidle');
}

/**
 * Navigate to the daily calendar page
 */
export async function navigateToDailyCalendar(page: Page, lang: 'en' | 'ja' = 'en') {
  await page.goto(`/${lang}/daily`);
  await page.waitForLoadState('networkidle');
}

/**
 * Fill in the date form
 */
export async function fillDateForm(
  page: Page,
  year: number,
  month: number,
  day: number
) {
  // Fill year
  await page.locator('input[type="number"]').first().fill(year.toString());

  // Select month
  const monthSelects = page.locator('select');
  await monthSelects.first().selectOption(month.toString());

  // Select day
  await monthSelects.nth(1).selectOption(day.toString());
}

/**
 * Click the Calculate button and wait for results
 */
export async function calculateAndWaitForResults(page: Page) {
  await page.getByRole('button', { name: /Calculate|計算する/ }).click();

  // Wait for results to appear
  await page.waitForSelector('text=/Results|結果/', { timeout: 30000 });
}

/**
 * Switch language
 */
export async function switchLanguage(page: Page, targetLang: 'en' | 'ja') {
  // Use class selector to specifically target language buttons
  if (targetLang === 'en') {
    await page.getByRole('button', { name: 'English' }).click();
  } else {
    await page.locator('button.lang-btn', { hasText: '日本語' }).click();
  }

  // Wait for navigation with timeout
  // Use waitForURL without explicit load state since it might be client-side routing
  await page.waitForURL(`**/${targetLang}**`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 });
}

/**
 * Open Omikuji modal
 */
export async function openOmikuji(page: Page) {
  await page.getByRole('button', { name: /Omikuji|おみくじ/ }).click();

  // Wait for modal to appear
  await page.waitForSelector('text=/Draw Fortune|おみくじを引く/', { timeout: 30000 });
}

/**
 * Draw fortune in Omikuji
 */
export async function drawFortune(page: Page) {
  await page.getByRole('button', { name: /Draw Fortune|おみくじを引く/ }).click();

  // Wait for fortune result (may take a few seconds for animation)
  await page.waitForSelector('text=/Close|閉じる/', { timeout: 30000 });
}

/**
 * Close Omikuji modal
 */
export async function closeOmikuji(page: Page) {
  // Try clicking the close button
  const closeButton = page.getByRole('button', { name: /Close|閉じる/ });
  if (await closeButton.isVisible()) {
    await closeButton.click();
  } else {
    // Try clicking the X button
    await page.locator('button:has-text("×")').click();
  }

  // Wait for modal to disappear
  await page.waitForSelector('text=/Draw Fortune|おみくじを引く/', { state: 'hidden', timeout: 30000 });
}

/**
 * Extended test with custom fixtures
 */
export const test = base.extend({
  // Add any custom fixtures here if needed
});

export { expect } from '@playwright/test';
