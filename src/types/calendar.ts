// Type definitions for calendar calculations

export interface JapaneseEra {
  name: string;
  nameKanji: string;
  year: number;
  startDate: Date;
}

export interface ChineseZodiac {
  heavenlyStem: string; // 十干
  heavenlyStemKanji: string;
  earthlyBranch: string; // 十二支
  earthlyBranchKanji: string;
  animal: string;
  animalKanji: string;
  combined: string; // 干支 (e.g., "甲子")
  combinedReading: string; // Reading (e.g., "きのえね")
}

export interface ZodiacSign {
  name: string;
  nameKanji: string;
  symbol: string;
  element: string;
}

export interface NineStar {
  number: number;
  name: string;
  nameKanji: string;
  element: string;
  elementKanji: string;
  color: string;
  colorKanji: string;
}

export interface CalendarResult {
  westernYear: number;
  japaneseEra: JapaneseEra;
  chineseZodiac: ChineseZodiac;
  zodiacSign: ZodiacSign;
  nineStar: NineStar;
  birthDate: Date;
}

export type Language = "ja" | "en";
