// Main calculation index - exports all calculation functions

export { getJapaneseEra, formatJapaneseEra, getEraList, convertEraToWesternYear, type JapaneseEra } from './japaneseEra';
export { 
  getChineseZodiac, 
  getMonthZodiac, 
  getDayZodiac, 
  type ChineseZodiac, 
  HEAVENLY_STEMS, // Export constants if needed by UI
  EARTHLY_BRANCHES 
} from './zodiac';
export { getZodiacSign, type ZodiacSign } from './constellation';
export { getNineStar, getMonthNineStar, getDayNineStar, type NineStar } from './nineStar';
export { getRokuyo, type Rokuyo } from './rokuyo';
export { getMoonPhase, type MoonPhase } from './moon';
export { getWafuGetsumei, type WafuGetsumei } from './wafuGetsumei';
export { getJuniChoku, type JuniChoku } from './junichoku';

