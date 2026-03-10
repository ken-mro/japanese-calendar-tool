import { test, expect } from './helpers/fixtures';
import {
  navigateToHome,
  navigateToDailyCalendar,
  fillDateForm,
  calculateAndWaitForResults,
} from './helpers/fixtures';

test.describe('Nijushi Sekki (24 Solar Terms)', () => {
  test.describe('About Page', () => {
    test('should load nijushi-sekki about page (English)', async ({ page }) => {
      await page.goto('/en/about/nijushi-sekki');
      await page.waitForLoadState('networkidle');

      // Check page title (h1 specifically)
      await expect(page.locator('h1', { hasText: /24 Solar Terms/i })).toBeVisible();

      // Check table headers (hidden on mobile responsive layout)
      const viewport = page.viewportSize();
      if (viewport && viewport.width >= 768) {
        await expect(page.getByRole('columnheader', { name: 'Name' })).toBeVisible();
        await expect(page.getByRole('columnheader', { name: 'Reading' })).toBeVisible();
        await expect(page.getByRole('columnheader', { name: 'Month' })).toBeVisible();
        await expect(page.getByRole('columnheader', { name: 'Meaning' })).toBeVisible();
      }

      // Verify table content is present regardless of viewport
      await expect(page.getByRole('cell', { name: '立春' })).toBeVisible();
    });

    test('should load nijushi-sekki about page (Japanese)', async ({ page }) => {
      await page.goto('/ja/about/nijushi-sekki');
      await page.waitForLoadState('networkidle');

      // Check page title (h1 specifically)
      await expect(page.locator('h1', { hasText: /二十四節気/ })).toBeVisible();

      // Check table headers (hidden on mobile responsive layout)
      const viewport = page.viewportSize();
      if (viewport && viewport.width >= 768) {
        await expect(page.getByRole('columnheader', { name: '名称' })).toBeVisible();
        await expect(page.getByRole('columnheader', { name: '読み' })).toBeVisible();
        await expect(page.getByRole('columnheader', { name: '時期' })).toBeVisible();
        await expect(page.getByRole('columnheader', { name: '意味' })).toBeVisible();
      }

      // Verify table content is present regardless of viewport
      await expect(page.getByRole('cell', { name: '立春' })).toBeVisible();
    });

    test('should display all 24 solar terms in the table', async ({ page }) => {
      await page.goto('/en/about/nijushi-sekki');
      await page.waitForLoadState('networkidle');

      // Check for key terms from different seasons
      await expect(page.getByText('小寒')).toBeVisible();     // Shokan - first term
      await expect(page.getByText('立春')).toBeVisible();     // Risshun
      await expect(page.getByText('春分')).toBeVisible();     // Shumbun
      await expect(page.getByText('夏至')).toBeVisible();     // Geshi
      await expect(page.getByText('秋分')).toBeVisible();     // Shubun
      await expect(page.getByText('冬至')).toBeVisible();     // Toji - last term

      // Check that table has 24 data rows (tbody tr)
      const rows = page.locator('tbody tr');
      await expect(rows).toHaveCount(24);
    });

    test('should show standard dates in Japanese format', async ({ page }) => {
      await page.goto('/ja/about/nijushi-sekki');
      await page.waitForLoadState('networkidle');

      // Check date format: "X月Y日頃"
      await expect(page.getByText('1月5日頃')).toBeVisible();   // Shokan
      await expect(page.getByText('2月4日頃')).toBeVisible();   // Risshun
      await expect(page.getByText('3月21日頃')).toBeVisible();  // Shumbun
    });

    test('should show standard dates in English format', async ({ page }) => {
      await page.goto('/en/about/nijushi-sekki');
      await page.waitForLoadState('networkidle');

      // Check date format: "Around Month Day"
      await expect(page.getByText(/Around January 5/)).toBeVisible();
      await expect(page.getByText(/Around February 4/)).toBeVisible();
      await expect(page.getByText(/Around March 21/)).toBeVisible();
    });

    test('should display descriptions for each term', async ({ page }) => {
      await page.goto('/en/about/nijushi-sekki');
      await page.waitForLoadState('networkidle');

      // Check English meanings in table cells
      await expect(page.getByRole('cell', { name: 'Minor Cold' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Start of Spring' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Summer Solstice' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Winter Solstice' })).toBeVisible();
    });
  });

  test.describe('Daily Calendar - Sekki Display', () => {
    test('should display current solar term on daily calendar (English)', async ({ page }) => {
      // Feb 8, 2026 is in the Risshun period
      await page.goto('/en/daily?date=2026-02-08');
      await page.waitForLoadState('networkidle');

      // Should show Risshun
      await expect(page.getByText('Risshun')).toBeVisible();
    });

    test('should display current solar term on daily calendar (Japanese)', async ({ page }) => {
      // Feb 8, 2026 is in the Risshun period
      await page.goto('/ja/daily?date=2026-02-08');
      await page.waitForLoadState('networkidle');

      // Should show 立春
      await expect(page.getByText('立春')).toBeVisible();
    });

    test('should show exact date indicator when on a solar term start date (Japanese)', async ({ page }) => {
      // Feb 4, 2026 is the exact date of Risshun
      await page.goto('/ja/daily?date=2026-02-04');
      await page.waitForLoadState('networkidle');

      await expect(page.getByText('立春')).toBeVisible();
      await expect(page.getByText('節入り')).toBeVisible();
    });

    test('should show exact date indicator when on a solar term start date (English)', async ({ page }) => {
      // Feb 4, 2026 is the exact date of Risshun
      await page.goto('/en/daily?date=2026-02-04');
      await page.waitForLoadState('networkidle');

      await expect(page.getByText('Risshun')).toBeVisible();
      await expect(page.getByText('(Exact date)')).toBeVisible();
    });

    test('should NOT show exact date indicator on non-exact dates', async ({ page }) => {
      // Feb 8, 2026 is NOT an exact date
      await page.goto('/en/daily?date=2026-02-08');
      await page.waitForLoadState('networkidle');

      await expect(page.getByText('Risshun')).toBeVisible();
      await expect(page.getByText('(Exact date)')).not.toBeVisible();
    });

    test('should show different solar terms for different dates', async ({ page }) => {
      // Jun 21, 2026 is the exact date of Geshi (Summer Solstice)
      await page.goto('/en/daily?date=2026-06-21');
      await page.waitForLoadState('networkidle');

      await expect(page.getByText('Geshi')).toBeVisible();
      await expect(page.getByText('(Exact date)')).toBeVisible();
    });
  });

  test.describe('Calculated Results - Sekki Display', () => {
    // Helper to click a tab and wait for it to become selected (fixes Edge timing)
    async function clickTab(page: import('@playwright/test').Page, namePattern: RegExp) {
      const tab = page.getByRole('tab', { name: namePattern });
      await tab.scrollIntoViewIfNeeded();
      await tab.click();
      await expect(tab).toHaveAttribute('aria-selected', 'true', { timeout: 5000 });
    }

    test('should display solar term in Day tab results (English)', async ({ page }) => {
      await navigateToHome(page, 'en');
      await fillDateForm(page, 2026, 2, 8);
      await calculateAndWaitForResults(page);

      // Switch to Day tab and wait for it to be selected
      await clickTab(page, /Day/i);
      await expect(page.getByText('Risshun')).toBeVisible({ timeout: 10000 });
      await expect(page.getByText('24 Solar Terms')).toBeVisible();
    });

    test('should display solar term in Day tab results (Japanese)', async ({ page }) => {
      await navigateToHome(page, 'ja');
      await fillDateForm(page, 2026, 2, 8);
      await calculateAndWaitForResults(page);

      // Switch to Day tab and wait for it to be selected
      await clickTab(page, /日/i);
      await expect(page.getByText('立春')).toBeVisible({ timeout: 10000 });
      await expect(page.getByText('二十四節気')).toBeVisible();
    });

    test('should show "Exact date of term" note on exact solar term dates (English)', async ({ page }) => {
      await navigateToHome(page, 'en');
      // Feb 4, 2026 is Risshun exact date
      await fillDateForm(page, 2026, 2, 4);
      await calculateAndWaitForResults(page);

      await clickTab(page, /Day/i);
      await expect(page.getByText('Risshun')).toBeVisible({ timeout: 10000 });
      await expect(page.getByText('Exact date of term')).toBeVisible();
    });

    test('should show "節入り" note on exact solar term dates (Japanese)', async ({ page }) => {
      await navigateToHome(page, 'ja');
      // Feb 4, 2026 is Risshun exact date
      await fillDateForm(page, 2026, 2, 4);
      await calculateAndWaitForResults(page);

      await clickTab(page, /日/i);
      await expect(page.getByText('立春')).toBeVisible({ timeout: 10000 });
      await expect(page.getByText('節入り')).toBeVisible();
    });

    test('should NOT show exact date note on non-exact dates', async ({ page }) => {
      await navigateToHome(page, 'en');
      await fillDateForm(page, 2026, 2, 8);
      await calculateAndWaitForResults(page);

      await clickTab(page, /Day/i);
      await expect(page.getByText('Risshun')).toBeVisible({ timeout: 10000 });
      await expect(page.getByText('Exact date of term')).not.toBeVisible();
    });
  });

  test.describe('Home Page - About Links', () => {
    test('should have nijushi-sekki link in About section (English)', async ({ page }) => {
      await navigateToHome(page, 'en');

      // Open About section
      const aboutButton = page.getByRole('heading', { name: /About This Tool/i });
      await aboutButton.click();

      // Check for the 24 Solar Terms link
      const sekkiLink = page.getByRole('link', { name: /24 Solar Terms/i });
      await expect(sekkiLink).toBeVisible();

      // Click and verify navigation
      await sekkiLink.click();
      await page.waitForURL('**/en/about/nijushi-sekki');
      await expect(page).toHaveURL(/\/en\/about\/nijushi-sekki/);
    });

    test('should have nijushi-sekki link in About section (Japanese)', async ({ page }) => {
      await navigateToHome(page, 'ja');

      // Open About section
      const aboutButton = page.getByRole('heading', { name: /ツールについて/i });
      await aboutButton.click();

      // Check for the 二十四節気 link
      const sekkiLink = page.getByRole('link', { name: /二十四節気/i });
      await expect(sekkiLink).toBeVisible();

      // Click and verify navigation
      await sekkiLink.click();
      await page.waitForURL('**/ja/about/nijushi-sekki');
      await expect(page).toHaveURL(/\/ja\/about\/nijushi-sekki/);
    });
  });
});
