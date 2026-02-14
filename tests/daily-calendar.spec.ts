import { test, expect } from './helpers/fixtures';
import { navigateToDailyCalendar } from './helpers/fixtures';

test.describe('Daily Calendar', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToDailyCalendar(page, 'en');
  });

  test('should load daily calendar page successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Daily Calendar/);
    
    // Check navigation controls are visible
    await expect(page.getByRole('button', { name: /Today/i })).toBeVisible();
    
    // Check date display is visible
    await expect(page.locator('text=/\\d{4}/')).toBeVisible(); // Year
  });

  test('should have back to home navigation', async ({ page }) => {
    const backLink = page.getByRole('link', { name: /Back to Home/i });
    await expect(backLink).toBeVisible();
    
    // Click back to home
    await backLink.click();
    await page.waitForURL('**/en');
    
    // Should be on home page
    await expect(page.getByRole('heading', { name: /Japanese Calendar Tool/i })).toBeVisible();
  });

  test('should display current date information', async ({ page }) => {
    // Check that various calendar elements are displayed
    await expect(page.locator('text=/Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday/')).toBeVisible();
    
    // Check for Rokuyo display
    await expect(page.locator('text=/Tomobiki|Senbu|Taian|Shakku|Butsumetsu|Sensho/')).toBeVisible();
    
    // Check for month display
    await expect(page.locator('text=/January|February|March|April|May|June|July|August|September|October|November|December/')).toBeVisible();
  });

  test('should navigate to previous day', async ({ page }) => {
    // Get current day number
    const currentDayText = await page.locator('text=/^\\d{1,2}$/').first().textContent();
    const currentDay = parseInt(currentDayText || '0');
    
    // Click Previous button
    await page.locator('[aria-label="Prev"], button:has-text("Prev")').first().click();
    await page.waitForLoadState('networkidle');
    
    // URL should have changed
    await expect(page).toHaveURL(/date=/);
  });

  test('should navigate to next day', async ({ page }) => {
    // Click Next button
    await page.locator('[aria-label="Next"], button:has-text("Next")').first().click();
    await page.waitForLoadState('networkidle');
    
    // URL should have changed
    await expect(page).toHaveURL(/date=/);
  });

  test('should have Today button', async ({ page }) => {
    // Navigate to a different date first
    await page.goto('/en/daily?date=2025-01-01');
    await page.waitForLoadState('networkidle');
    
    // Click Today button
    const todayButton = page.getByRole('button', { name: /Today/i });
    await todayButton.click();
    await page.waitForLoadState('networkidle');
    
    // Should navigate to today's date
    // Today button should be disabled when on today's date
    await expect(todayButton).toBeDisabled();
  });

  test('should toggle Sexagenary Cycle mode', async ({ page }) => {
    const calendarMonthButton = page.getByRole('button', { name: /Calendar Month/i });
    const solarMonthButton = page.getByRole('button', { name: /Solar Month/i });
    
    // Toggle to Solar Month
    await solarMonthButton.click();
    await expect(solarMonthButton).toBeVisible();
    
    // Toggle back to Calendar Month
    await calendarMonthButton.click();
    await expect(calendarMonthButton).toBeVisible();
  });

  test('should display comprehensive daily information', async ({ page }) => {
    // Navigate to a fixed date (Feb 8, 2026) to ensure known content
    await page.goto('/en/daily?date=2026-02-08');
    await page.waitForLoadState('networkidle');

    // Year information (2026 is always visible, Japanese Era might be Kanji)
    await expect(page.locator('text=2026')).toBeVisible();
    await expect(page.locator('text=/令和/')).toBeVisible();
    
    // Sexagenary cycle (Hinoe-Uma)
    await expect(page.locator('text=/Hinoe/')).toBeVisible();
    
    // Nine Star Ki (1 White Water)
    await expect(page.getByText('1 White Water')).toBeVisible();
    
    // Moon phase
    await expect(page.getByText('Moon Phase')).toBeVisible();
  });

  test('should have language switcher', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
    await expect(page.locator('button.lang-btn', { hasText: '日本語' })).toBeVisible();
  });

  test('should display Senjitsu (Selected Days) information', async ({ page }) => {
    // Check for Senjitsu section using simpler locator
    await expect(page.locator('text=Senjitsu')).toBeVisible();
  });

  test('should display 12 Choku information', async ({ page }) => {
    // Navigate to a fixed date
    await page.goto('/en/daily?date=2026-02-08');
    await page.waitForLoadState('networkidle');
    
    // Verify page loaded for the date
    await expect(page.locator('text=/2026/')).toBeVisible();
    
    // Check for specific Choku value for this date (Tozu)
    // Use getByText for cleaner matching
    await expect(page.getByText('Tozu')).toBeVisible();
  });

  test('should navigate via URL with date parameter', async ({ page }) => {
    // Navigate to a specific date
    await page.goto('/en/daily?date=2026-02-08');
    await page.waitForLoadState('networkidle');
    
    // Should display the specified date
    await expect(page.locator('text=/February/')).toBeVisible();
    await expect(page.locator('.day-number', { hasText: '8' })).toBeVisible();
    await expect(page.locator('text=/2026/').first()).toBeVisible();
  });
});
