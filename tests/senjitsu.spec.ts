import { test, expect } from './helpers/fixtures';

test.describe('Senjitsu (Selected Days) - Sanrinbo', () => {
  const sanrinboDates = [
    { day: 2, label: '2026-03-02' },
    { day: 5, label: '2026-03-05' },
    { day: 17, label: '2026-03-17' },
    { day: 29, label: '2026-03-29' },
  ];

  test.describe('Daily Calendar page (Japanese)', () => {
    for (const { day, label } of sanrinboDates) {
      test(`should display 三隣亡 on ${label}`, async ({ page }) => {
        await page.goto(`/ja/daily?date=2026-03-${String(day).padStart(2, '0')}`);
        await page.waitForLoadState('networkidle');

        await expect(page.getByText('三隣亡')).toBeVisible();
      });
    }

    test('should NOT display 三隣亡 on 2026-03-01', async ({ page }) => {
      await page.goto('/ja/daily?date=2026-03-01');
      await page.waitForLoadState('networkidle');

      await expect(page.getByText('三隣亡')).not.toBeVisible();
    });
  });

  test.describe('Daily Calendar page (English)', () => {
    for (const { day, label } of sanrinboDates) {
      test(`should display Sanrinbō on ${label}`, async ({ page }) => {
        await page.goto(`/en/daily?date=2026-03-${String(day).padStart(2, '0')}`);
        await page.waitForLoadState('networkidle');

        await expect(page.getByText('Sanrinbō')).toBeVisible();
      });
    }
  });
});
