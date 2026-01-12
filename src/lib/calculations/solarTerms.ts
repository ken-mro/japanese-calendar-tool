export interface SolarTermConfig {
  standardDate: number;
  exceptions: Record<number, number>; // year -> date
}

// Data extracted from Japanese Wikipedia (1966-2060)
// Each term page (e.g., https://ja.wikipedia.org/wiki/立春) contains a table of dates.
// The month is the Gregorian month in which the term starts.
export const SOLAR_TERMS_CONFIG: Record<number, SolarTermConfig> = {
  1: { // Shokan (Small Cold) - Jan
    standardDate: 5,
    exceptions: {
      1966: 6, 1967: 6, 1968: 6, 1970: 6, 1971: 6, 1972: 6, 1974: 6, 1975: 6, 1976: 6, 1978: 6, 1979: 6, 1980: 6, 1982: 6, 1983: 6, 1984: 6, 1986: 6, 1987: 6, 1988: 6, 1991: 6, 1992: 6, 1995: 6, 1996: 6, 1999: 6, 2000: 6, 2003: 6, 2004: 6, 2007: 6, 2008: 6, 2011: 6, 2012: 6, 2015: 6, 2016: 6, 2019: 6, 2020: 6, 2023: 6, 2024: 6, 2028: 6, 2032: 6, 2036: 6, 2040: 6, 2044: 6, 2048: 6, 2052: 6, 2056: 6
    }
  },
  2: { // Risshun (Start of Spring) - Feb
    standardDate: 4,
    exceptions: {
      1968: 5, 1972: 5, 1976: 5, 1980: 5, 1984: 5,
      2021: 3, 2025: 3, 2029: 3, 2033: 3, 2037: 3, 2041: 3, 2045: 3, 2049: 3, 2053: 3, 2057: 3, 2058: 3
    }
  },
  3: { // Keichitsu (Awakening of Insects) - Mar
    standardDate: 6,
    exceptions: {
      1968: 5, 1972: 5, 1976: 5, 1980: 5, 1984: 5, 1988: 5, 1989: 5, 1992: 5, 1993: 5, 1996: 5, 1997: 5, 2000: 5, 2001: 5, 2004: 5, 2005: 5, 2008: 5, 2009: 5, 2012: 5, 2013: 5, 2016: 5, 2017: 5, 2020: 5, 2021: 5, 2022: 5, 2024: 5, 2025: 5, 2026: 5, 2028: 5, 2029: 5, 2030: 5, 2032: 5, 2033: 5, 2034: 5, 2036: 5, 2037: 5, 2038: 5, 2040: 5, 2041: 5, 2042: 5, 2044: 5, 2045: 5, 2046: 5, 2048: 5, 2049: 5, 2050: 5, 2052: 5, 2053: 5, 2054: 5, 2055: 5, 2056: 5, 2057: 5, 2058: 5, 2059: 5, 2060: 5
    }
  },
  4: { // Seimei (Pure and Clear) - Apr
    standardDate: 5,
    exceptions: {
      1984: 4, 1988: 4, 1992: 4, 1996: 4, 2000: 4, 2004: 4, 2008: 4, 2012: 4, 2016: 4, 2017: 4, 2020: 4, 2021: 4, 2024: 4, 2025: 4, 2028: 4, 2029: 4, 2032: 4, 2033: 4, 2036: 4, 2037: 4, 2040: 4, 2041: 4, 2044: 4, 2045: 4, 2046: 4, 2048: 4, 2049: 4, 2050: 4, 2052: 4, 2053: 4, 2054: 4, 2056: 4, 2057: 4, 2058: 4, 2060: 4
    }
  },
  5: { // Rikka (Start of Summer) - May
    standardDate: 5,
    exceptions: {
      1966: 6, 1967: 6, 1969: 6, 1970: 6, 1971: 6, 1973: 6, 1974: 6, 1975: 6, 1977: 6, 1978: 6, 1979: 6, 1982: 6, 1983: 6, 1986: 6, 1987: 6, 1990: 6, 1991: 6, 1994: 6, 1995: 6, 1998: 6, 1999: 6, 2002: 6, 2003: 6, 2006: 6, 2007: 6, 2011: 6, 2015: 6, 2019: 6, 2023: 6, 2027: 6, 2031: 6, 2035: 6, 2039: 6
    }
  },
  6: { // Boushu (Grain in Ear) - Jun
    standardDate: 6,
    exceptions: {
      1972: 5, 1976: 5, 1980: 5, 1984: 5, 1988: 5, 1992: 5, 1996: 5, 2000: 5, 2001: 5, 2004: 5, 2005: 5, 2008: 5, 2009: 5, 2012: 5, 2013: 5, 2016: 5, 2017: 5, 2020: 5, 2021: 5, 2024: 5, 2025: 5, 2028: 5, 2029: 5, 2032: 5, 2033: 5, 2034: 5, 2036: 5, 2037: 5, 2038: 5, 2040: 5, 2041: 5, 2042: 5, 2044: 5, 2045: 5, 2046: 5, 2048: 5, 2049: 5, 2050: 5, 2052: 5, 2053: 5, 2054: 5, 2056: 5, 2057: 5, 2058: 5, 2060: 5
    }
  },
  7: { // Shousho (Small Heat) - Jul
    standardDate: 7,
    exceptions: {
      1967: 8, 1971: 8, 1975: 8, 1979: 8, 1983: 8, 1987: 8,
      2024: 6, 2028: 6, 2032: 6, 2036: 6, 2040: 6, 2044: 6, 2048: 6, 2052: 6, 2053: 6, 2056: 6, 2057: 6, 2060: 6
    }
  },
  8: { // Risshu (Start of Autumn) - Aug
    standardDate: 7,
    exceptions: {
      1966: 8, 1967: 8, 1968: 7, 1969: 8, 1970: 8, 1971: 8, 1972: 7, 1973: 8, 1974: 8, 1975: 8, 1976: 7, 1977: 8, 1978: 8, 1979: 8, 1980: 7, 1981: 7, 1982: 8, 1983: 8, 1984: 7, 1985: 7, 1986: 8, 1987: 8, 1988: 7, 1989: 7, 1990: 8, 1991: 8, 1992: 7, 1993: 7, 1994: 8, 1995: 8, 1996: 7, 1997: 7, 1998: 8, 1999: 8, 2000: 7, 2001: 7, 2004: 7, 2005: 7, 2008: 7, 2009: 7, 2010: 7, 2012: 7, 2013: 7, 2014: 7, 2016: 7, 2017: 7, 2018: 7, 2020: 7, 2021: 7, 2022: 7, 2024: 7, 2025: 7, 2026: 7, 2028: 7, 2029: 7, 2030: 7, 2032: 7, 2033: 7, 2034: 7, 2036: 7, 2037: 7, 2038: 7, 2040: 7, 2041: 7, 2042: 7, 2043: 7, 2044: 7, 2045: 7, 2046: 7, 2047: 7, 2048: 7, 2049: 7, 2050: 7, 2051: 7, 2052: 7, 2053: 7, 2054: 7, 2055: 7, 2056: 7, 2057: 7, 2058: 7, 2059: 7, 2060: 7
    }
  },
  9: { // Hakuro (White Dew) - Sep
    standardDate: 8,
    exceptions: {
      1968: 7, 1972: 7, 1976: 7, 1980: 7, 1984: 7, 1988: 7, 1992: 7, 1996: 7, 1997: 7, 2000: 7, 2001: 7, 2004: 7, 2005: 7, 2008: 7, 2009: 7, 2012: 7, 2013: 7, 2016: 7, 2017: 7, 2020: 7, 2021: 7, 2024: 7, 2025: 7, 2026: 7, 2028: 7, 2029: 7, 2030: 7, 2032: 7, 2033: 7, 2034: 7, 2036: 7, 2037: 7, 2038: 7, 2040: 7, 2041: 7, 2042: 7, 2044: 7, 2045: 7, 2046: 7, 2048: 7, 2049: 7, 2050: 7, 2052: 7, 2053: 7, 2054: 7, 2056: 7, 2057: 7, 2058: 7, 2059: 7, 2060: 7
    }
  },
  10: { // Kanro (Cold Dew) - Oct
    standardDate: 8,
    exceptions: {
      1966: 9, 1967: 9, 1970: 9, 1971: 9, 1974: 9, 1975: 9, 1978: 9, 1979: 9, 1982: 9, 1983: 9, 1987: 9, 1991: 9, 1995: 9, 1999: 9, 2003: 9, 2007: 9, 2011: 9,
      2048: 7, 2052: 7, 2056: 7, 2060: 7
    }
  },
  11: { // Ritto (Start of Winter) - Nov
    standardDate: 7,
    exceptions: {
      1966: 8, 1967: 8, 1968: 7, 1969: 7, 1970: 8, 1971: 8, 1972: 7, 1973: 7, 1974: 8, 1975: 8, 1976: 7, 1977: 7, 1978: 8, 1979: 8, 1980: 7, 1981: 7, 1982: 8, 1983: 8, 1984: 7, 1985: 7, 1986: 8, 1987: 8, 1988: 7, 1989: 7, 1990: 8, 1991: 8, 1992: 7, 1993: 7, 1994: 8, 1995: 8, 1996: 7, 1997: 7, 1998: 8, 1999: 8, 2003: 8, 2007: 8, 2011: 8, 2015: 8, 2019: 8, 2023: 8, 2027: 8, 2031: 8
    }
  },
  12: { // Taisetsu (Major Snow) - Dec
    standardDate: 7,
    exceptions: {
      1967: 8, 1971: 8, 1975: 8, 1979: 8, 1983: 8, 1987: 8,
      2028: 6, 2032: 6, 2036: 6, 2040: 6, 2044: 6, 2048: 6, 2052: 6, 2056: 6, 2060: 6
    }
  }
};

/**
 * Returns the start date of the Solar Term (Setsu / 節) for the given month.
 * Based on data from 1966 to 2060.
 * @param year The year (e.g. 2024)
 * @param month The month (1-12)
 * @returns Date object representing the start of the Setsu for that month (e.g. Feb -> Risshun)
 */
export function getStarDate(year: number, month: number): Date {
  const config = SOLAR_TERMS_CONFIG[month];
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
    
    // Normalize logic:
    // If month becomes 0 (Dec previous year), we want to map it to 0 (Rat) or 12?
    // The requirement implies 1..12 mapping or 0..11?
    // Based on "Dec->0 (Rat)", it seems `month % 12` is the correct mapping.
    // 1(Jan) -> 1
    // 12(Dec) -> 0
    // 13(Jan next year if logic exceeded) -> 1
    
    // Adjust for 0 (Dec prev year) case
    if (month === 0) return 0; // Dec of prev year is Rat (0)
    
    return month % 12;
}
