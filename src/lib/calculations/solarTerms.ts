export interface SolarTermConfig {
  standardDate: number;
  exceptions: Record<number, number>; // year -> date
}

// ============================================================
// 節 (Setsu) terms data - one per month (1-12)
// Data extracted from Japanese Wikipedia (1966-2060)
// Each term page (e.g., https://ja.wikipedia.org/wiki/立春) contains a table of dates.
// The month is the Gregorian month in which the term starts.
// ============================================================
export const SETSU_TERMS_CONFIG: Record<number, SolarTermConfig> = {
  1: { // Shokan (小寒) - Jan
    standardDate: 5,
    exceptions: {
      1966: 6, 1967: 6, 1968: 6, 1970: 6, 1971: 6, 1972: 6, 1974: 6, 1975: 6, 1976: 6, 1978: 6, 1979: 6, 1980: 6, 1982: 6, 1983: 6, 1984: 6, 1986: 6, 1987: 6, 1988: 6, 1991: 6, 1992: 6, 1995: 6, 1996: 6, 1999: 6, 2000: 6, 2003: 6, 2004: 6, 2007: 6, 2008: 6, 2011: 6, 2012: 6, 2015: 6, 2016: 6, 2019: 6, 2020: 6, 2023: 6, 2024: 6, 2028: 6, 2032: 6, 2036: 6, 2040: 6, 2044: 6, 2048: 6, 2052: 6, 2056: 6
    }
  },
  2: { // Risshun (立春) - Feb
    standardDate: 4,
    exceptions: {
      1968: 5, 1972: 5, 1976: 5, 1980: 5, 1984: 5,
      2021: 3, 2025: 3, 2029: 3, 2033: 3, 2037: 3, 2041: 3, 2045: 3, 2049: 3, 2053: 3, 2057: 3, 2058: 3
    }
  },
  3: { // Keichitsu (啓蟄) - Mar
    standardDate: 6,
    exceptions: {
      1968: 5, 1972: 5, 1976: 5, 1980: 5, 1984: 5, 1988: 5, 1989: 5, 1992: 5, 1993: 5, 1996: 5, 1997: 5, 2000: 5, 2001: 5, 2004: 5, 2005: 5, 2008: 5, 2009: 5, 2012: 5, 2013: 5, 2016: 5, 2017: 5, 2020: 5, 2021: 5, 2022: 5, 2024: 5, 2025: 5, 2026: 5, 2028: 5, 2029: 5, 2030: 5, 2032: 5, 2033: 5, 2034: 5, 2036: 5, 2037: 5, 2038: 5, 2040: 5, 2041: 5, 2042: 5, 2044: 5, 2045: 5, 2046: 5, 2048: 5, 2049: 5, 2050: 5, 2052: 5, 2053: 5, 2054: 5, 2055: 5, 2056: 5, 2057: 5, 2058: 5, 2059: 5, 2060: 5
    }
  },
  4: { // Seimei (清明) - Apr
    standardDate: 5,
    exceptions: {
      1984: 4, 1988: 4, 1992: 4, 1996: 4, 2000: 4, 2004: 4, 2008: 4, 2012: 4, 2016: 4, 2017: 4, 2020: 4, 2021: 4, 2024: 4, 2025: 4, 2028: 4, 2029: 4, 2032: 4, 2033: 4, 2036: 4, 2037: 4, 2040: 4, 2041: 4, 2044: 4, 2045: 4, 2046: 4, 2048: 4, 2049: 4, 2050: 4, 2052: 4, 2053: 4, 2054: 4, 2056: 4, 2057: 4, 2058: 4, 2060: 4
    }
  },
  5: { // Rikka (立夏) - May
    standardDate: 5,
    exceptions: {
      1966: 6, 1967: 6, 1969: 6, 1970: 6, 1971: 6, 1973: 6, 1974: 6, 1975: 6, 1977: 6, 1978: 6, 1979: 6, 1982: 6, 1983: 6, 1986: 6, 1987: 6, 1990: 6, 1991: 6, 1994: 6, 1995: 6, 1998: 6, 1999: 6, 2002: 6, 2003: 6, 2006: 6, 2007: 6, 2011: 6, 2015: 6, 2019: 6, 2023: 6, 2027: 6, 2031: 6, 2035: 6, 2039: 6
    }
  },
  6: { // Boshu (芒種) - Jun
    standardDate: 6,
    exceptions: {
      1972: 5, 1976: 5, 1980: 5, 1984: 5, 1988: 5, 1992: 5, 1996: 5, 2000: 5, 2001: 5, 2004: 5, 2005: 5, 2008: 5, 2009: 5, 2012: 5, 2013: 5, 2016: 5, 2017: 5, 2020: 5, 2021: 5, 2024: 5, 2025: 5, 2028: 5, 2029: 5, 2032: 5, 2033: 5, 2034: 5, 2036: 5, 2037: 5, 2038: 5, 2040: 5, 2041: 5, 2042: 5, 2044: 5, 2045: 5, 2046: 5, 2048: 5, 2049: 5, 2050: 5, 2052: 5, 2053: 5, 2054: 5, 2056: 5, 2057: 5, 2058: 5, 2060: 5
    }
  },
  7: { // Shosho (小暑) - Jul
    standardDate: 7,
    exceptions: {
      1967: 8, 1971: 8, 1975: 8, 1979: 8, 1983: 8, 1987: 8,
      2024: 6, 2028: 6, 2032: 6, 2036: 6, 2040: 6, 2044: 6, 2048: 6, 2052: 6, 2053: 6, 2056: 6, 2057: 6, 2060: 6
    }
  },
  8: { // Risshu (立秋) - Aug
    standardDate: 7,
    exceptions: {
      1966: 8, 1967: 8, 1968: 7, 1969: 8, 1970: 8, 1971: 8, 1972: 7, 1973: 8, 1974: 8, 1975: 8, 1976: 7, 1977: 8, 1978: 8, 1979: 8, 1980: 7, 1981: 7, 1982: 8, 1983: 8, 1984: 7, 1985: 7, 1986: 8, 1987: 8, 1988: 7, 1989: 7, 1990: 8, 1991: 8, 1992: 7, 1993: 7, 1994: 8, 1995: 8, 1996: 7, 1997: 7, 1998: 8, 1999: 8, 2000: 7, 2001: 7, 2004: 7, 2005: 7, 2008: 7, 2009: 7, 2010: 7, 2012: 7, 2013: 7, 2014: 7, 2016: 7, 2017: 7, 2018: 7, 2020: 7, 2021: 7, 2022: 7, 2024: 7, 2025: 7, 2026: 7, 2028: 7, 2029: 7, 2030: 7, 2032: 7, 2033: 7, 2034: 7, 2036: 7, 2037: 7, 2038: 7, 2040: 7, 2041: 7, 2042: 7, 2043: 7, 2044: 7, 2045: 7, 2046: 7, 2047: 7, 2048: 7, 2049: 7, 2050: 7, 2051: 7, 2052: 7, 2053: 7, 2054: 7, 2055: 7, 2056: 7, 2057: 7, 2058: 7, 2059: 7, 2060: 7
    }
  },
  9: { // Hakuro (白露) - Sep
    standardDate: 8,
    exceptions: {
      1968: 7, 1972: 7, 1976: 7, 1980: 7, 1984: 7, 1988: 7, 1992: 7, 1996: 7, 1997: 7, 2000: 7, 2001: 7, 2004: 7, 2005: 7, 2008: 7, 2009: 7, 2012: 7, 2013: 7, 2016: 7, 2017: 7, 2020: 7, 2021: 7, 2024: 7, 2025: 7, 2026: 7, 2028: 7, 2029: 7, 2030: 7, 2032: 7, 2033: 7, 2034: 7, 2036: 7, 2037: 7, 2038: 7, 2040: 7, 2041: 7, 2042: 7, 2044: 7, 2045: 7, 2046: 7, 2048: 7, 2049: 7, 2050: 7, 2052: 7, 2053: 7, 2054: 7, 2056: 7, 2057: 7, 2058: 7, 2059: 7, 2060: 7
    }
  },
  10: { // Kanro (寒露) - Oct
    standardDate: 8,
    exceptions: {
      1966: 9, 1967: 9, 1970: 9, 1971: 9, 1974: 9, 1975: 9, 1978: 9, 1979: 9, 1982: 9, 1983: 9, 1987: 9, 1991: 9, 1995: 9, 1999: 9, 2003: 9, 2007: 9, 2011: 9,
      2048: 7, 2052: 7, 2056: 7, 2060: 7
    }
  },
  11: { // Ritto (立冬) - Nov
    standardDate: 7,
    exceptions: {
      1966: 8, 1967: 8, 1968: 7, 1969: 7, 1970: 8, 1971: 8, 1972: 7, 1973: 7, 1974: 8, 1975: 8, 1976: 7, 1977: 7, 1978: 8, 1979: 8, 1980: 7, 1981: 7, 1982: 8, 1983: 8, 1984: 7, 1985: 7, 1986: 8, 1987: 8, 1988: 7, 1989: 7, 1990: 8, 1991: 8, 1992: 7, 1993: 7, 1994: 8, 1995: 8, 1996: 7, 1997: 7, 1998: 8, 1999: 8, 2003: 8, 2007: 8, 2011: 8, 2015: 8, 2019: 8, 2023: 8, 2027: 8, 2031: 8
    }
  },
  12: { // Taisetsu (大雪) - Dec
    standardDate: 7,
    exceptions: {
      1967: 8, 1971: 8, 1975: 8, 1979: 8, 1983: 8, 1987: 8,
      2028: 6, 2032: 6, 2036: 6, 2040: 6, 2044: 6, 2048: 6, 2052: 6, 2056: 6, 2060: 6
    }
  }
};

// ============================================================
// 中 (Chū) terms data - one per month (1-12)
// Data sourced from Japanese Wikipedia (1966-2060)
// ============================================================
const CHU_TERMS_CONFIG: Record<number, SolarTermConfig> = {
  1: { // Daikan (大寒) - Jan
    standardDate: 20,
    exceptions: {
      1966: 21, 1967: 21, 1970: 21, 1971: 21, 1974: 21, 1975: 21, 1978: 21, 1979: 21, 1982: 21, 1983: 21, 1987: 21, 1991: 21, 1995: 21, 1999: 21, 2003: 21, 2007: 21, 2011: 21, 2015: 21, 2019: 21, 2023: 21, 2027: 21, 2031: 21
    }
  },
  2: { // Usui (雨水) - Feb
    standardDate: 19,
    exceptions: {
      1966: 19, 1968: 19, 1972: 19, 1976: 19, 1977: 18, 1980: 19, 1981: 18, 1984: 19, 1985: 18, 1988: 19, 1989: 18, 1993: 18, 1997: 18,
      2025: 18, 2029: 18, 2033: 18, 2037: 18, 2041: 18, 2045: 18, 2049: 18, 2053: 18, 2057: 18
    }
  },
  3: { // Shunbun (春分) - Mar
    standardDate: 21,
    exceptions: {
      1968: 20, 1972: 20, 1976: 20, 1980: 20, 1984: 20, 1988: 20, 1992: 20, 1993: 20, 1996: 20, 1997: 20, 2000: 20, 2001: 20, 2004: 20, 2005: 20, 2008: 20, 2009: 20, 2012: 20, 2013: 20, 2016: 20, 2017: 20, 2020: 20, 2021: 20, 2024: 20, 2025: 20, 2026: 20, 2028: 20, 2029: 20, 2030: 20, 2032: 20, 2033: 20, 2034: 20, 2036: 20, 2037: 20, 2038: 20, 2040: 20, 2041: 20, 2042: 20, 2044: 20, 2045: 20, 2046: 20, 2048: 20, 2049: 20, 2050: 20, 2052: 20, 2053: 20, 2054: 20, 2056: 20, 2057: 20, 2058: 20, 2059: 20, 2060: 20
    }
  },
  4: { // Koku (穀雨) - Apr
    standardDate: 20,
    exceptions: {
      1968: 19, 1972: 19, 1976: 19, 1980: 19, 1984: 19, 1988: 19, 1992: 19, 1996: 19, 2000: 19, 2004: 19, 2008: 19, 2012: 19, 2016: 19, 2020: 19, 2024: 19, 2028: 19, 2032: 19, 2036: 19, 2040: 19, 2044: 19, 2048: 19, 2052: 19, 2053: 19, 2056: 19, 2057: 19, 2060: 19
    }
  },
  5: { // Shoman (小満) - May
    standardDate: 21,
    exceptions: {
      1966: 22, 1967: 22, 1970: 22, 1971: 22, 1974: 22, 1975: 22, 1978: 22, 1979: 22, 1982: 22, 1983: 22, 1986: 22, 1987: 22, 1990: 22, 1991: 22, 1994: 22, 1995: 22, 1999: 22, 2003: 22, 2007: 22, 2011: 22, 2015: 22, 2019: 22, 2023: 22, 2027: 22, 2031: 22, 2035: 22,
      2048: 20, 2052: 20, 2056: 20, 2060: 20
    }
  },
  6: { // Geshi (夏至) - Jun
    standardDate: 21,
    exceptions: {
      1966: 22, 1967: 22, 1970: 22, 1971: 22, 1974: 22, 1975: 22, 1978: 22, 1979: 22, 1982: 22, 1983: 22, 1987: 22, 1991: 22, 1995: 22, 1999: 22, 2003: 22, 2007: 22, 2011: 22, 2015: 22, 2019: 22, 2023: 22, 2027: 22, 2031: 22
    }
  },
  7: { // Taisho (大暑) - Jul
    standardDate: 23,
    exceptions: {
      1968: 22, 1972: 22, 1976: 22, 1980: 22, 1984: 22, 1988: 22, 1992: 22, 1996: 22, 2000: 22, 2004: 22, 2008: 22, 2012: 22, 2016: 22, 2020: 22, 2024: 22, 2028: 22, 2032: 22, 2036: 22, 2040: 22, 2044: 22, 2048: 22, 2052: 22, 2056: 22, 2060: 22
    }
  },
  8: { // Shosho (処暑) - Aug
    standardDate: 23,
    exceptions: {
      1968: 23, 1972: 23,
      2024: 22, 2028: 22, 2032: 22, 2036: 22, 2040: 22, 2044: 22, 2048: 22, 2052: 22, 2053: 22, 2056: 22, 2057: 22, 2060: 22
    }
  },
  9: { // Shubun (秋分) - Sep
    standardDate: 23,
    exceptions: {
      1968: 22, 1972: 22, 1976: 22, 1980: 22, 1984: 22, 1988: 22, 1992: 22, 1996: 22, 2000: 22, 2004: 22, 2008: 22, 2012: 22, 2016: 22, 2020: 22, 2024: 22, 2028: 22, 2032: 22, 2036: 22, 2040: 22, 2044: 22, 2045: 22, 2048: 22, 2049: 22, 2052: 22, 2053: 22, 2056: 22, 2057: 22, 2058: 22, 2060: 22
    }
  },
  10: { // Soko (霜降) - Oct
    standardDate: 23,
    exceptions: {
      1966: 24, 1967: 24, 1970: 24, 1971: 24, 1974: 24, 1975: 24, 1978: 24, 1979: 24, 1982: 24, 1983: 24, 1987: 24, 1991: 24, 1995: 24, 1999: 24, 2003: 24, 2007: 24, 2011: 24, 2015: 24, 2019: 24, 2023: 24, 2027: 24, 2031: 24, 2035: 24
    }
  },
  11: { // Shosetsu (小雪) - Nov
    standardDate: 22,
    exceptions: {
      1968: 22, 1972: 22, 1976: 22, 1980: 22,
      2024: 21, 2028: 21, 2032: 21, 2036: 21, 2040: 21, 2044: 21, 2048: 21, 2049: 21, 2052: 21, 2053: 21, 2056: 21, 2057: 21, 2060: 21
    }
  },
  12: { // Toji (冬至) - Dec
    standardDate: 22,
    exceptions: {
      1968: 21, 1972: 21, 1976: 21, 1980: 21, 1984: 21, 1988: 21, 1992: 21, 1996: 21, 2000: 21, 2004: 21, 2008: 21, 2012: 21, 2016: 21, 2020: 21, 2024: 21, 2028: 21, 2032: 21, 2036: 21, 2040: 21, 2044: 21, 2048: 21, 2052: 21, 2056: 21, 2060: 21
    }
  }
};

// ============================================================
// Setsu helper functions (used by other calculation modules)
// ============================================================

/**
 * Returns the start date of the Solar Term (Setsu / 節) for the given month.
 * Based on data from 1966 to 2060.
 * @param year The year (e.g. 2024)
 * @param month The month (1-12)
 * @returns Date object representing the start of the Setsu for that month (e.g. Feb -> Risshun)
 */
export function getStarDate(year: number, month: number): Date {
  const config = SETSU_TERMS_CONFIG[month];
  if (!config) {
    throw new Error(`Invalid month: ${month}`);
  }

  let day = config.standardDate;
  if (config.exceptions[year]) {
    day = config.exceptions[year];
  }

  // Create date object (Month is 0-indexed in JS Date)
  return new Date(year, month - 1, day);
}

/**
 * Returns the day of the month for the Solar Term (Setsu).
 */
export function getSolarTermStartDay(year: number, month: number): number {
  return getStarDate(year, month).getDate();
}

/**
 * Returns the Solar Year for a given date.
 * If the date is before Risshun (Feb Setsu), it counts as the previous year.
 */
export function getSolarYear(date: Date): number {
  let year = date.getFullYear();
  const risshun = getStarDate(year, 2); // Risshun is Feb ( Month 2)
  if (date < risshun) {
    year -= 1;
  }
  return year;
}

/**
 * Returns the Solar Month Branch Index.
 * This corresponds to the Earthly Branch of the month.
 * Jan (Ox) = 1, Feb (Tiger) = 2, ..., Dec (Rat) = 0.
 * Logic matches traditional solar month boundaries (Setsu).
 */
export function getSolarMonthBranchIndex(date: Date): number {
    const year = date.getFullYear();
    // Month is 1-12
    let month = date.getMonth() + 1;

    // Get the Setsu date for this month
    const setsu = getStarDate(year, month);

    // If before the Setsu date, it belongs to the previous solar month
    if (date < setsu) {
        month -= 1;
    }

    // Adjust for 0 (Dec prev year) case
    if (month === 0) return 0; // Dec of prev year is Rat (0)

    return month % 12;
}

// ============================================================
// 二十四節気 (Nijushi Sekki) - All 24 Solar Terms
// ============================================================

export interface NijushiSekki {
  name: string;
  kanji: string;
  reading: string;
  romaji: string;
  meaning: string;
  meaningJa: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  /** Gregorian month (1-12) in which this term falls */
  month: number;
  /** Standard (typical) day of the month this term falls on */
  day: number;
  /** Index in the 24-term cycle (0-23), starting from Shokan */
  index: number;
}

export interface NijushiSekkiResult {
  /** The current solar term period (the most recent term that has passed) */
  current: NijushiSekki;
  /** Whether the given date is the exact date of a solar term */
  isExactDate: boolean;
  /** The exact-date term (only set when isExactDate is true) */
  exactTerm?: NijushiSekki;
}

// All 24 solar terms in chronological order within a year (Jan → Dec)
// Each pair: [節 (setsu), 中 (chū)] per month
// Romaji uses Hepburn romanization
export const NIJUSHI_SEKKI: NijushiSekki[] = [
  // January
  { name: "Minor Cold", kanji: "小寒", reading: "しょうかん", romaji: "Shokan", meaning: "Minor Cold", meaningJa: "寒さが本格的になり始める頃", season: "winter", month: 1, day: 5, index: 0 },
  { name: "Major Cold", kanji: "大寒", reading: "だいかん", romaji: "Daikan", meaning: "Major Cold", meaningJa: "一年で最も寒い頃", season: "winter", month: 1, day: 20, index: 1 },
  // February
  { name: "Start of Spring", kanji: "立春", reading: "りっしゅん", romaji: "Risshun", meaning: "Start of Spring", meaningJa: "春の始まり。暦の上での新年", season: "spring", month: 2, day: 4, index: 2 },
  { name: "Rain Water", kanji: "雨水", reading: "うすい", romaji: "Usui", meaning: "Rain Water", meaningJa: "雪が雨に変わり、氷が溶け始める頃", season: "spring", month: 2, day: 19, index: 3 },
  // March
  { name: "Awakening of Insects", kanji: "啓蟄", reading: "けいちつ", romaji: "Keichitsu", meaning: "Awakening of Insects", meaningJa: "冬ごもりの虫が地上に出始める頃", season: "spring", month: 3, day: 6, index: 4 },
  { name: "Vernal Equinox", kanji: "春分", reading: "しゅんぶん", romaji: "Shumbun", meaning: "Vernal Equinox", meaningJa: "昼と夜の長さがほぼ等しくなる日", season: "spring", month: 3, day: 21, index: 5 },
  // April
  { name: "Pure and Clear", kanji: "清明", reading: "せいめい", romaji: "Seimei", meaning: "Pure and Clear", meaningJa: "万物が清らかで生き生きとする頃", season: "spring", month: 4, day: 5, index: 6 },
  { name: "Grain Rain", kanji: "穀雨", reading: "こくう", romaji: "Koku", meaning: "Grain Rain", meaningJa: "穀物を育てる春雨が降る頃", season: "spring", month: 4, day: 20, index: 7 },
  // May
  { name: "Start of Summer", kanji: "立夏", reading: "りっか", romaji: "Rikka", meaning: "Start of Summer", meaningJa: "夏の始まり。新緑の季節", season: "summer", month: 5, day: 5, index: 8 },
  { name: "Grain Full", kanji: "小満", reading: "しょうまん", romaji: "Shoman", meaning: "Grain Full", meaningJa: "万物が成長し、草木が茂る頃", season: "summer", month: 5, day: 21, index: 9 },
  // June
  { name: "Grain in Ear", kanji: "芒種", reading: "ぼうしゅ", romaji: "Boshu", meaning: "Grain in Ear", meaningJa: "稲や麦などの種まきの頃。梅雨入り", season: "summer", month: 6, day: 6, index: 10 },
  { name: "Summer Solstice", kanji: "夏至", reading: "げし", romaji: "Geshi", meaning: "Summer Solstice", meaningJa: "一年で最も昼が長い日", season: "summer", month: 6, day: 21, index: 11 },
  // July
  { name: "Minor Heat", kanji: "小暑", reading: "しょうしょ", romaji: "Shosho", meaning: "Minor Heat", meaningJa: "本格的な暑さが始まる頃。梅雨明け", season: "summer", month: 7, day: 7, index: 12 },
  { name: "Major Heat", kanji: "大暑", reading: "たいしょ", romaji: "Taisho", meaning: "Major Heat", meaningJa: "一年で最も暑い頃", season: "summer", month: 7, day: 23, index: 13 },
  // August
  { name: "Start of Autumn", kanji: "立秋", reading: "りっしゅう", romaji: "Risshu", meaning: "Start of Autumn", meaningJa: "秋の始まり。残暑が続く", season: "autumn", month: 8, day: 7, index: 14 },
  { name: "End of Heat", kanji: "処暑", reading: "しょしょ", romaji: "Shosho", meaning: "End of Heat", meaningJa: "暑さが収まり始める頃", season: "autumn", month: 8, day: 23, index: 15 },
  // September
  { name: "White Dew", kanji: "白露", reading: "はくろ", romaji: "Hakuro", meaning: "White Dew", meaningJa: "草花に朝露が付き始める頃", season: "autumn", month: 9, day: 8, index: 16 },
  { name: "Autumnal Equinox", kanji: "秋分", reading: "しゅうぶん", romaji: "Shubun", meaning: "Autumnal Equinox", meaningJa: "昼と夜の長さがほぼ等しくなる日", season: "autumn", month: 9, day: 23, index: 17 },
  // October
  { name: "Cold Dew", kanji: "寒露", reading: "かんろ", romaji: "Kanro", meaning: "Cold Dew", meaningJa: "露が冷たく感じられる頃", season: "autumn", month: 10, day: 8, index: 18 },
  { name: "Frost Descent", kanji: "霜降", reading: "そうこう", romaji: "Soko", meaning: "Frost Descent", meaningJa: "霜が降り始める頃", season: "autumn", month: 10, day: 23, index: 19 },
  // November
  { name: "Start of Winter", kanji: "立冬", reading: "りっとう", romaji: "Ritto", meaning: "Start of Winter", meaningJa: "冬の始まり。木枯らしが吹き始める", season: "winter", month: 11, day: 7, index: 20 },
  { name: "Minor Snow", kanji: "小雪", reading: "しょうせつ", romaji: "Shosetsu", meaning: "Minor Snow", meaningJa: "わずかに雪が降り始める頃", season: "winter", month: 11, day: 22, index: 21 },
  // December
  { name: "Major Snow", kanji: "大雪", reading: "たいせつ", romaji: "Taisetsu", meaning: "Major Snow", meaningJa: "本格的に雪が降り始める頃", season: "winter", month: 12, day: 7, index: 22 },
  { name: "Winter Solstice", kanji: "冬至", reading: "とうじ", romaji: "Toji", meaning: "Winter Solstice", meaningJa: "一年で最も夜が長い日", season: "winter", month: 12, day: 22, index: 23 },
];

/** Per-term color mapping using traditional Japanese colors (日本の伝統色) */
export const SEKKI_COLORS: Record<number, string> = {
  0:  '#5b7e91', // 小寒 - 藍鼠 (Ainezumi) - Blue-grey
  1:  '#2b4a6f', // 大寒 - 紺青 (Konjo) - Deep blue
  2:  '#c85a7c', // 立春 - 梅紫 (Umemurasaki) - Plum
  3:  '#b5495b', // 雨水 - 蘇芳 (Suo) - Dark rose
  4:  '#d4869c', // 啓蟄 - 桜色 (Sakura-iro) - Cherry blossom
  5:  '#e8a0b8', // 春分 - 薄桜 (Usuzakura) - Pale cherry
  6:  '#7ba23f', // 清明 - 萌黄 (Moegi) - Fresh green
  7:  '#5a8f3c', // 穀雨 - 若葉色 (Wakaba-iro) - Young leaf
  8:  '#3a8f5b', // 立夏 - 常磐緑 (Tokiwa midori) - Evergreen
  9:  '#2d8b57', // 小満 - 緑 (Midori) - Green
  10: '#69913b', // 芒種 - 苔色 (Koke-iro) - Moss
  11: '#007b43', // 夏至 - 常磐色 (Tokiwa-iro) - Deep green
  12: '#e2943b', // 小暑 - 山吹色 (Yamabuki-iro) - Golden yellow
  13: '#d45b2c', // 大暑 - 柿色 (Kaki-iro) - Persimmon
  14: '#c66b27', // 立秋 - 黄丹 (Otan) - Orange
  15: '#b5651d', // 処暑 - 琥珀色 (Kohaku-iro) - Amber
  16: '#a0522d', // 白露 - 土色 (Tsuchi-iro) - Earth
  17: '#9b4e4e', // 秋分 - 小豆色 (Azuki-iro) - Russet
  18: '#8c4843', // 寒露 - 蘇芳茶 (Suo-cha) - Dark brown-red
  19: '#7a4171', // 霜降 - 紫紺 (Shikon) - Dark purple
  20: '#5d5099', // 立冬 - 藤紫 (Fuji-murasaki) - Wisteria
  21: '#4a6fa5', // 小雪 - 縹 (Hanada) - Blue
  22: '#6b7b8d', // 大雪 - 鉛色 (Namari-iro) - Lead grey
  23: '#3d5a80', // 冬至 - 紺鉄 (Kontetsu) - Dark navy
};

/** Get the color for a specific sekki term by index */
export function getSekkiColor(termIndex: number): string {
  return SEKKI_COLORS[termIndex] ?? '#7f8c8d';
}

/**
 * Get the date of a specific solar term for a given year.
 * @param year The year
 * @param termIndex Index 0-23 in NIJUSHI_SEKKI
 * @returns Date object for that term
 */
function getTermDate(year: number, termIndex: number): Date {
  const term = NIJUSHI_SEKKI[termIndex];
  const month = term.month;
  const isSetsu = termIndex % 2 === 0; // Even indices are 節 (setsu), odd are 中 (chū)

  const config = isSetsu ? SETSU_TERMS_CONFIG[month] : CHU_TERMS_CONFIG[month];
  const day = config.exceptions[year] ?? config.standardDate;
  return new Date(year, month - 1, day);
}

/**
 * Returns the 二十四節気 (Nijushi Sekki) information for a given date.
 * - current: The solar term period the date falls within
 * - isExactDate: Whether the date is the exact start of a solar term
 * - exactTerm: The term (only when isExactDate is true)
 */
export function getNijushiSekki(date: Date): NijushiSekkiResult {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Build list of all term dates for this year and adjacent months
  const termDates: { term: NijushiSekki; date: Date }[] = [];

  // Previous year's last terms (Nov-Dec)
  for (let i = 20; i < 24; i++) {
    termDates.push({ term: NIJUSHI_SEKKI[i], date: getTermDate(year - 1, i) });
  }
  // All terms of current year
  for (let i = 0; i < 24; i++) {
    termDates.push({ term: NIJUSHI_SEKKI[i], date: getTermDate(year, i) });
  }
  // Next year's first terms (Jan-Feb)
  for (let i = 0; i < 4; i++) {
    termDates.push({ term: NIJUSHI_SEKKI[i], date: getTermDate(year + 1, i) });
  }

  // Sort by date
  termDates.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Create a date without time for comparison
  const targetTime = new Date(year, month - 1, day).getTime();

  // Check if this date is the exact date of any term
  let exactTerm: NijushiSekki | undefined;
  for (const td of termDates) {
    if (td.date.getTime() === targetTime) {
      exactTerm = td.term;
      break;
    }
  }

  // Find the current period (the most recent term that has started)
  let currentTerm = termDates[0].term;
  for (let i = termDates.length - 1; i >= 0; i--) {
    if (termDates[i].date.getTime() <= targetTime) {
      currentTerm = termDates[i].term;
      break;
    }
  }

  return {
    current: currentTerm,
    isExactDate: !!exactTerm,
    exactTerm,
  };
}
