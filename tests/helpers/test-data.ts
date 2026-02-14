/**
 * Test data for Japanese Calendar Tool tests
 * Contains known date calculations for validation
 */

export interface DateTestData {
  date: {
    year: number;
    month: number;
    day: number;
  };
  expected: {
    westernYear: string;
    japaneseEra: string;
    japaneseEraKanji: string;
    sexagenaryCycleYear: string;
    sexagenaryCycleYearKanji: string;
    sexagenaryCycleMonth: string;
    sexagenaryCycleMonthKanji: string;
    sexagenaryCycleDay: string;
    sexagenaryCycleDayKanji: string;
    zodiacSign: string;
    zodiacSignKanji: string;
    nineStarYear: string;
    nineStarYearKanji: string;
    nineStarMonth: string;
    nineStarMonthKanji: string;
    nineStarDay: string;
    nineStarDayKanji: string;
    rokuyo: string;
    rokuyoKanji: string;
  };
}

/**
 * Test data for February 8, 2026
 */
export const testDate20260208: DateTestData = {
  date: {
    year: 2026,
    month: 2,
    day: 8,
  },
  expected: {
    westernYear: '2026',
    japaneseEra: 'Reiwa 8',
    japaneseEraKanji: '令和8年',
    sexagenaryCycleYear: 'Hinoe-Uma',
    sexagenaryCycleYearKanji: '丙午',
    sexagenaryCycleMonth: 'Kanoe-Tora',
    sexagenaryCycleMonthKanji: '庚寅',
    sexagenaryCycleDay: 'Mizunoto-Ushi',
    sexagenaryCycleDayKanji: '癸丑',
    zodiacSign: 'Aquarius',
    zodiacSignKanji: '水瓶座',
    nineStarYear: '1 White Water',
    nineStarYearKanji: '一白水星',
    nineStarMonth: '8 White Earth',
    nineStarMonthKanji: '八白土星',
    nineStarDay: '5 Yellow Earth',
    nineStarDayKanji: '五黄土星',
    rokuyo: 'Tomobiki',
    rokuyoKanji: '友引',
  },
};

/**
 * Test data for January 1, 2025 (Reiwa 7)
 */
export const testDate20250101: DateTestData = {
  date: {
    year: 2025,
    month: 1,
    day: 1,
  },
  expected: {
    westernYear: '2025',
    japaneseEra: 'Reiwa 7',
    japaneseEraKanji: '令和7年',
    sexagenaryCycleYear: 'Kinoe-Tatsu',
    sexagenaryCycleYearKanji: '甲辰',
    sexagenaryCycleMonth: 'Hinoe-Ne',
    sexagenaryCycleMonthKanji: '丙子',
    sexagenaryCycleDay: 'Tsuchinoe-Tatsu',
    sexagenaryCycleDayKanji: '戊辰',
    zodiacSign: 'Capricorn',
    zodiacSignKanji: '山羊座',
    nineStarYear: '2 Black Earth',
    nineStarYearKanji: '二黒土星',
    nineStarMonth: '7 Red Metal',
    nineStarMonthKanji: '七赤金星',
    nineStarDay: '4 Green Wood',
    nineStarDayKanji: '四緑木星',
    rokuyo: 'Taian',
    rokuyoKanji: '大安',
  },
};

/**
 * Test data for February 4, 2026
 * Used for Japanese language testing with both Calendar Month and Solar Month
 */
export const testDate20260204: DateTestData = {
  date: {
    year: 2026,
    month: 2,
    day: 4,
  },
  expected: {
    westernYear: '2026',
    japaneseEra: 'Reiwa 8',
    japaneseEraKanji: '令和8年',
    sexagenaryCycleYear: 'Hinoe-Uma',
    sexagenaryCycleYearKanji: '丙午',
    sexagenaryCycleMonth: 'Kanoto-U', // Calendar Month (暦月) - VERIFIED: 辛卯
    sexagenaryCycleMonthKanji: '辛卯',
    sexagenaryCycleDay: 'Tsuchinoto-Tori',
    sexagenaryCycleDayKanji: '己酉',
    zodiacSign: 'Aquarius',
    zodiacSignKanji: '水瓶座',
    nineStarYear: '1 White Water',
    nineStarYearKanji: '一白水星',
    nineStarMonth: '8 White Earth', // Calendar Month (暦月) - VERIFIED: 八白土星
    nineStarMonthKanji: '八白土星',
    nineStarDay: '1 White Water',
    nineStarDayKanji: '一白水星',
    rokuyo: 'Butsumetsu',
    rokuyoKanji: '仏滅',
  },
};

/**
 * Solar Month values for February 4, 2026
 * Used when testing with 節月 (Solar Month) mode
 */
export const testDate20260204Solar = {
  sexagenaryCycleMonth: 'Kanoe-Tora', // Solar Month (節月) - VERIFIED: 庚寅
  sexagenaryCycleMonthKanji: '庚寅',
  nineStarMonth: '8 White Earth', // Solar Month (節月) - VERIFIED: 八白土星
  nineStarMonthKanji: '八白土星',
};

/**
 * Test data for July 24, 2025
 * Used for Japanese language testing with both Calendar Month and Solar Month
 */
export const testDate20250724: DateTestData = {
  date: {
    year: 2025,
    month: 7,
    day: 24,
  },
  expected: {
    westernYear: '2025',
    japaneseEra: 'Reiwa 7',
    japaneseEraKanji: '令和7年',
    sexagenaryCycleYear: 'Kinoto-Mi',
    sexagenaryCycleYearKanji: '乙巳',
    sexagenaryCycleMonth: 'Kinoe-Saru', // Calendar Month (暦月) - VERIFIED: 甲申
    sexagenaryCycleMonthKanji: '甲申',
    sexagenaryCycleDay: 'Kinoe-Uma',
    sexagenaryCycleDayKanji: '甲午',
    zodiacSign: 'Leo',
    zodiacSignKanji: '獅子座',
    nineStarYear: '2 Black Earth',
    nineStarYearKanji: '二黒土星',
    nineStarMonth: '6 White Metal', // Calendar Month (暦月) - VERIFIED: 六白金星
    nineStarMonthKanji: '六白金星',
    nineStarDay: '6 White Metal',
    nineStarDayKanji: '六白金星',
    rokuyo: 'Taian',
    rokuyoKanji: '大安',
  },
};

/**
 * Solar Month values for July 24, 2025
 * Used when testing with 節月 (Solar Month) mode
 */
export const testDate20250724Solar = {
  sexagenaryCycleMonth: 'Mizunoto-Hitsuji', // Solar Month (節月) - VERIFIED: 癸未
  sexagenaryCycleMonthKanji: '癸未',
  nineStarMonth: '6 White Metal', // Solar Month (節月) - VERIFIED: 六白金星
  nineStarMonthKanji: '六白金星',
};

/**
 * Language paths for testing
 */
export const languages = {
  english: '/en',
  japanese: '/ja',
} as const;

/**
 * Common selectors for the application
 */
export const selectors = {
  // Header
  header: {
    title: 'Japanese Calendar Tool',
    omikujiButton: 'button:has-text("Omikuji")',
    dailyCalendarLink: 'a[href*="/daily"]',
    aboutButton: 'button:has-text("About")',
    languageEnglish: 'button:has-text("EN")',
    languageJapanese: 'button:has-text("日本語")',
  },
  
  // Date input form
  form: {
    yearInput: 'input[type="number"]',
    monthSelect: 'select',
    daySelect: 'select:nth-of-type(2)',
    calculateButton: 'button:has-text("Calculate")',
    westernYearButton: 'button:has-text("Western Year")',
    japaneseEraButton: 'button:has-text("Japanese Era")',
    calendarMonthButton: 'button:has-text("Calendar Month")',
    solarMonthButton: 'button:has-text("Solar Month")',
  },
  
  // Results
  results: {
    yearTab: 'button[role="tab"]:has-text("Year")',
    monthTab: 'button[role="tab"]:has-text("Month")',
    dayTab: 'button[role="tab"]:has-text("Day")',
  },
  
  // Omikuji modal
  omikuji: {
    modal: '[role="dialog"]',
    drawButton: 'button:has-text("Draw Fortune")',
    closeButton: 'button:has-text("Close")',
  },
} as const;
