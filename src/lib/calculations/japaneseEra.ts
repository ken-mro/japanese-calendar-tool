// Japanese Era (和暦) calculation - Modern eras from Meiji + significant historical eras

interface EraDefinition {
  name: string;
  nameKanji: string;
  nameHiragana: string;
  startYear: number;
  startMonth: number;
  startDay: number;
  endYear: number;
  endMonth: number;
  endDay: number;
}

export const JAPANESE_ERAS: EraDefinition[] = [
  // 現代
  { name: 'Reiwa', nameKanji: '令和', nameHiragana: 'れいわ', startYear: 2019, startMonth: 5, startDay: 1, endYear: 9999, endMonth: 12, endDay: 31 },
  { name: 'Heisei', nameKanji: '平成', nameHiragana: 'へいせい', startYear: 1989, startMonth: 1, startDay: 8, endYear: 2019, endMonth: 4, endDay: 30 },
  { name: 'Showa', nameKanji: '昭和', nameHiragana: 'しょうわ', startYear: 1926, startMonth: 12, startDay: 25, endYear: 1989, endMonth: 1, endDay: 7 },
  { name: 'Taisho', nameKanji: '大正', nameHiragana: 'たいしょう', startYear: 1912, startMonth: 7, startDay: 30, endYear: 1926, endMonth: 12, endDay: 24 },
  { name: 'Meiji', nameKanji: '明治', nameHiragana: 'めいじ', startYear: 1868, startMonth: 1, startDay: 25, endYear: 1912, endMonth: 7, endDay: 29 },
  // 江戸時代後期
  { name: 'Keio', nameKanji: '慶応', nameHiragana: 'けいおう', startYear: 1865, startMonth: 4, startDay: 7, endYear: 1868, endMonth: 1, endDay: 24 },
  { name: 'Genji', nameKanji: '元治', nameHiragana: 'げんじ', startYear: 1864, startMonth: 2, startDay: 20, endYear: 1865, endMonth: 4, endDay: 6 },
  { name: 'Bunkyu', nameKanji: '文久', nameHiragana: 'ぶんきゅう', startYear: 1861, startMonth: 2, startDay: 19, endYear: 1864, endMonth: 2, endDay: 19 },
  { name: 'Manen', nameKanji: '万延', nameHiragana: 'まんえん', startYear: 1860, startMonth: 3, startDay: 18, endYear: 1861, endMonth: 2, endDay: 18 },
  { name: 'Ansei', nameKanji: '安政', nameHiragana: 'あんせい', startYear: 1854, startMonth: 11, startDay: 27, endYear: 1860, endMonth: 3, endDay: 17 },
  { name: 'Kaei', nameKanji: '嘉永', nameHiragana: 'かえい', startYear: 1848, startMonth: 2, startDay: 28, endYear: 1854, endMonth: 11, endDay: 26 },
  { name: 'Koka', nameKanji: '弘化', nameHiragana: 'こうか', startYear: 1844, startMonth: 12, startDay: 2, endYear: 1848, endMonth: 2, endDay: 27 },
  { name: 'Tenpo', nameKanji: '天保', nameHiragana: 'てんぽう', startYear: 1830, startMonth: 12, startDay: 10, endYear: 1844, endMonth: 12, endDay: 1 },
  { name: 'Bunsei', nameKanji: '文政', nameHiragana: 'ぶんせい', startYear: 1818, startMonth: 4, startDay: 22, endYear: 1830, endMonth: 12, endDay: 9 },
  { name: 'Bunka', nameKanji: '文化', nameHiragana: 'ぶんか', startYear: 1804, startMonth: 2, startDay: 11, endYear: 1818, endMonth: 4, endDay: 21 },
  { name: 'Kyowa', nameKanji: '享和', nameHiragana: 'きょうわ', startYear: 1801, startMonth: 2, startDay: 5, endYear: 1804, endMonth: 2, endDay: 10 },
  { name: 'Kansei', nameKanji: '寛政', nameHiragana: 'かんせい', startYear: 1789, startMonth: 1, startDay: 25, endYear: 1801, endMonth: 2, endDay: 4 },
  { name: 'Tenmei', nameKanji: '天明', nameHiragana: 'てんめい', startYear: 1781, startMonth: 4, startDay: 2, endYear: 1789, endMonth: 1, endDay: 24 },
  { name: 'Anei', nameKanji: '安永', nameHiragana: 'あんえい', startYear: 1772, startMonth: 11, startDay: 16, endYear: 1781, endMonth: 4, endDay: 1 },
  { name: 'Meiwa', nameKanji: '明和', nameHiragana: 'めいわ', startYear: 1764, startMonth: 6, startDay: 2, endYear: 1772, endMonth: 11, endDay: 15 },
  { name: 'Horeki', nameKanji: '宝暦', nameHiragana: 'ほうれき', startYear: 1751, startMonth: 10, startDay: 27, endYear: 1764, endMonth: 6, endDay: 1 },
  { name: 'Kanen', nameKanji: '寛延', nameHiragana: 'かんえん', startYear: 1748, startMonth: 7, startDay: 12, endYear: 1751, endMonth: 10, endDay: 26 },
  { name: 'Enkyo', nameKanji: '延享', nameHiragana: 'えんきょう', startYear: 1744, startMonth: 2, startDay: 21, endYear: 1748, endMonth: 7, endDay: 11 },
  { name: 'Kanpo', nameKanji: '寛保', nameHiragana: 'かんぽう', startYear: 1741, startMonth: 2, startDay: 27, endYear: 1744, endMonth: 2, endDay: 20 },
  { name: 'Genbun', nameKanji: '元文', nameHiragana: 'げんぶん', startYear: 1736, startMonth: 4, startDay: 28, endYear: 1741, endMonth: 2, endDay: 26 },
  { name: 'Kyoho', nameKanji: '享保', nameHiragana: 'きょうほう', startYear: 1716, startMonth: 6, startDay: 22, endYear: 1736, endMonth: 4, endDay: 27 },
  { name: 'Shotoku', nameKanji: '正徳', nameHiragana: 'しょうとく', startYear: 1711, startMonth: 4, startDay: 25, endYear: 1716, endMonth: 6, endDay: 21 },
  { name: 'Hoei', nameKanji: '宝永', nameHiragana: 'ほうえい', startYear: 1704, startMonth: 3, startDay: 13, endYear: 1711, endMonth: 4, endDay: 24 },
  { name: 'Genroku', nameKanji: '元禄', nameHiragana: 'げんろく', startYear: 1688, startMonth: 9, startDay: 30, endYear: 1704, endMonth: 3, endDay: 12 },
  { name: 'Jokyo', nameKanji: '貞享', nameHiragana: 'じょうきょう', startYear: 1684, startMonth: 2, startDay: 21, endYear: 1688, endMonth: 9, endDay: 29 },
  { name: 'Tenna', nameKanji: '天和', nameHiragana: 'てんな', startYear: 1681, startMonth: 9, startDay: 29, endYear: 1684, endMonth: 2, endDay: 20 },
  { name: 'Enpo', nameKanji: '延宝', nameHiragana: 'えんぽう', startYear: 1673, startMonth: 9, startDay: 21, endYear: 1681, endMonth: 9, endDay: 28 },
  { name: 'Kanbun', nameKanji: '寛文', nameHiragana: 'かんぶん', startYear: 1661, startMonth: 4, startDay: 25, endYear: 1673, endMonth: 9, endDay: 20 },
  { name: 'Manji', nameKanji: '万治', nameHiragana: 'まんじ', startYear: 1658, startMonth: 7, startDay: 23, endYear: 1661, endMonth: 4, endDay: 24 },
  { name: 'Meireki', nameKanji: '明暦', nameHiragana: 'めいれき', startYear: 1655, startMonth: 4, startDay: 13, endYear: 1658, endMonth: 7, endDay: 22 },
  { name: 'Joo', nameKanji: '承応', nameHiragana: 'じょうおう', startYear: 1652, startMonth: 9, startDay: 18, endYear: 1655, endMonth: 4, endDay: 12 },
  { name: 'Keian', nameKanji: '慶安', nameHiragana: 'けいあん', startYear: 1648, startMonth: 2, startDay: 15, endYear: 1652, endMonth: 9, endDay: 17 },
  { name: 'Shoho', nameKanji: '正保', nameHiragana: 'しょうほう', startYear: 1644, startMonth: 12, startDay: 16, endYear: 1648, endMonth: 2, endDay: 14 },
  { name: 'Kanei', nameKanji: '寛永', nameHiragana: 'かんえい', startYear: 1624, startMonth: 2, startDay: 30, endYear: 1644, endMonth: 12, endDay: 15 },
  { name: 'Genna', nameKanji: '元和', nameHiragana: 'げんな', startYear: 1615, startMonth: 7, startDay: 13, endYear: 1624, endMonth: 2, endDay: 29 },
  { name: 'Keicho', nameKanji: '慶長', nameHiragana: 'けいちょう', startYear: 1596, startMonth: 10, startDay: 27, endYear: 1615, endMonth: 7, endDay: 12 },
];

export interface JapaneseEra {
  name: string;
  nameKanji: string;
  year: number;
  startDate: Date;
}

export function getJapaneseEra(date: Date): JapaneseEra | null {
  const year = date.getFullYear();
  for (const era of JAPANESE_ERAS) {
    const startDate = new Date(era.startYear, era.startMonth - 1, era.startDay);
    const endDate = new Date(era.endYear, era.endMonth - 1, era.endDay);
    if (date >= startDate && date <= endDate) {
      const eraYear = year - era.startYear + 1;
      return { name: era.name, nameKanji: era.nameKanji, year: eraYear, startDate };
    }
  }
  return null;
}

export function formatJapaneseEra(era: JapaneseEra, useKanji: boolean = true): string {
  const eraName = useKanji ? era.nameKanji : era.name;
  const yearStr = era.year === 1 ? (useKanji ? '元年' : '1') : era.year.toString() + (useKanji ? '年' : '');
  return useKanji ? `${eraName}${yearStr}` : `${eraName} ${yearStr}`;
}

// Get list of all eras for input selection (uses full JAPANESE_ERAS)
export function getEraList(): { name: string; nameKanji: string; startYear: number }[] {
  return JAPANESE_ERAS.map(era => ({
    name: era.name,
    nameKanji: era.nameKanji,
    startYear: era.startYear,
  }));
}

/**
 * Convert Japanese era year to Western year
 * Supports overflow years (e.g., 昭和100年 → 2025)
 * @param eraKanji - Era name in kanji (e.g., "昭和")
 * @param eraYear - Year within the era (e.g., 100)
 * @returns Western year (e.g., 2025)
 */
export function convertEraToWesternYear(eraKanji: string, eraYear: number): number | null {
  const era = JAPANESE_ERAS.find(e => e.nameKanji === eraKanji);
  if (!era) return null;
  return era.startYear + eraYear - 1;
}

