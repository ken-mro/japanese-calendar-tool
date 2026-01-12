// Sexagenary cycle (十干十二支) calculation

// 十干 (Heavenly Stems)
export const HEAVENLY_STEMS = [
  { kanji: '甲', reading: 'きのえ', romaji: 'kinoe', icon: '/images/heavenly_stems/kinoe.svg' },
  { kanji: '乙', reading: 'きのと', romaji: 'kinoto', icon: '/images/heavenly_stems/kinoto.svg' },
  { kanji: '丙', reading: 'ひのえ', romaji: 'hinoe', icon: '/images/heavenly_stems/hinoe.svg' },
  { kanji: '丁', reading: 'ひのと', romaji: 'hinoto', icon: '/images/heavenly_stems/hinoto.svg' },
  { kanji: '戊', reading: 'つちのえ', romaji: 'tsuchinoe', icon: '/images/heavenly_stems/tsuchinoe.svg' },
  { kanji: '己', reading: 'つちのと', romaji: 'tsuchinoto', icon: '/images/heavenly_stems/tsuchinoto.svg' },
  { kanji: '庚', reading: 'かのえ', romaji: 'kanoe', icon: '/images/heavenly_stems/kanoe.svg' },
  { kanji: '辛', reading: 'かのと', romaji: 'kanoto', icon: '/images/heavenly_stems/kanoto.svg' },
  { kanji: '壬', reading: 'みずのえ', romaji: 'mizunoe', icon: '/images/heavenly_stems/mizunoe.svg' },
  { kanji: '癸', reading: 'みずのと', romaji: 'mizunoto', icon: '/images/heavenly_stems/mizunoto.svg' },
];

// 十二支 (Earthly Branches)
export const EARTHLY_BRANCHES = [
  { kanji: '子', reading: 'ね', romaji: 'ne', animal: 'Rat', animalKanji: '鼠', icon: '/images/zodiac/rat.svg' },
  { kanji: '丑', reading: 'うし', romaji: 'ushi', animal: 'Ox', animalKanji: '牛', icon: '/images/zodiac/ox.svg' },
  { kanji: '寅', reading: 'とら', romaji: 'tora', animal: 'Tiger', animalKanji: '虎', icon: '/images/zodiac/tiger.svg' },
  { kanji: '卯', reading: 'う', romaji: 'u', animal: 'Rabbit', animalKanji: '兎', icon: '/images/zodiac/rabbit.svg' },
  { kanji: '辰', reading: 'たつ', romaji: 'tatsu', animal: 'Dragon', animalKanji: '龍', icon: '/images/zodiac/dragon.svg' },
  { kanji: '巳', reading: 'み', romaji: 'mi', animal: 'Snake', animalKanji: '蛇', icon: '/images/zodiac/snake.svg' },
  { kanji: '午', reading: 'うま', romaji: 'uma', animal: 'Horse', animalKanji: '馬', icon: '/images/zodiac/horse.svg' },
  { kanji: '未', reading: 'ひつじ', romaji: 'hitsuji', animal: 'Sheep', animalKanji: '羊', icon: '/images/zodiac/sheep.svg' },
  { kanji: '申', reading: 'さる', romaji: 'saru', animal: 'Monkey', animalKanji: '猿', icon: '/images/zodiac/monkey.svg' },
  { kanji: '酉', reading: 'とり', romaji: 'tori', animal: 'Rooster', animalKanji: '鶏', icon: '/images/zodiac/rooster.svg' },
  { kanji: '戌', reading: 'いぬ', romaji: 'inu', animal: 'Dog', animalKanji: '犬', icon: '/images/zodiac/dog.svg' },
  { kanji: '亥', reading: 'い', romaji: 'i', animal: 'Boar', animalKanji: '猪', icon: '/images/zodiac/boar.svg' },
];

export interface ChineseZodiac {
  heavenlyStemKanji: string;
  earthlyBranchKanji: string;
  animal: string;
  animalKanji: string;
  combined: string;
  combinedReading: string;
  combinedRomaji: string;
  icon: string;
  heavenlyStemIcon: string;
}



export function getChineseZodiac(year: number): ChineseZodiac {
  // Sexagenary cycle starts from 4 AD
  const baseYear = 4;
  const cyclePosition = ((year - baseYear) % 60 + 60) % 60;
  
  const stemIndex = cyclePosition % 10;
  const branchIndex = cyclePosition % 12;
  
  return createZodiac(stemIndex, branchIndex);
}

import { getSolarMonthBranchIndex, getSolarYear } from './solarTerms';

export function getMonthZodiac(date: Date): ChineseZodiac {
  // User Requirement: Civil Month Logic
  // Jan = Tiger (2), Feb = Rabbit (3), ..., Dec = Ox (1)
  // This aligns with "Hinoe-Tora" for Jan 2024.
  
  const month = date.getMonth(); // 0(Jan) - 11(Dec)
  
  // Map Gregorian Month to Branch Index
  // Jan(0) -> Tiger(2)
  // Feb(1) -> Rabbit(3)
  // ...
  // Nov(10) -> Ox(1)
  // Dec(11) -> Rat(0) -- Wait.
  // Standard: Month 1 (Tiger). Month 11 (Rat). Month 12 (Ox).
  // Jan(0) -> Tiger(2).
  // Feb(1) -> Rabbit(3).
  // ...
  // Oct(9) -> Boar(11).
  // Nov(10) -> Rat(0).
  // Dec(11) -> Ox(1).
  
  const monthBranchIndex = (month + 2) % 12;
  
  // Calculate Stem
  // Use Gregorian Year for Stem calculation base?
  // 2024 (Kinoe). Jan 2024.
  // Formula: (YearStem % 5 * 2 + MonthBranch) % 10
  // Year 2024 is Kinoe (0).
  // Jan 2024 is Tiger (2).
  // (0 * 2 + 2) % 10 = 2 (Hinoe). Correct.
  
  // We need the Stem of the CIVIL year.
  // 2024 Jan 1 -> Still 2024 for this purpose?
  // User said Jan 1 2024 is Hinoe-Tora.
  // If we calculate 2024 Stem (Kinoe), we get Hinoe.
  // If we calculated 2023 Stem (Mizunoto), we would get: (9%5 * 2 + 2) = (4*2+2)=10=0(Kinoe).
  // So we MUST use the 2024 Year Stem.
  // This means getChineseZodiac(date.getFullYear()).
  
  const civilYear = date.getFullYear();
  const yearZodiac = getChineseZodiac(civilYear);
  const yearStemIndex = HEAVENLY_STEMS.findIndex(s => s.kanji === yearZodiac.heavenlyStemKanji);
  
  const monthStemIndex = ((yearStemIndex % 5) * 2 + monthBranchIndex) % 10;
  
  return createZodiac(monthStemIndex, monthBranchIndex);
}

export function getDayZodiac(date: Date): ChineseZodiac {
  // Reference: Jan 1, 2024 was Kinoe-Ne (0, 0)
  const refDate = new Date(2024, 0, 1);
  // Reset times to noon to avoid DST issues/midnight boundaries
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  const ref = new Date(refDate);
  ref.setHours(12, 0, 0, 0);
  
  const diffTime = d.getTime() - ref.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  
  const cyclePosition = ((diffDays % 60) + 60) % 60;
  
  const stemIndex = cyclePosition % 10;
  const branchIndex = cyclePosition % 12;
  
  return createZodiac(stemIndex, branchIndex);
}

function createZodiac(stemIndex: number, branchIndex: number): ChineseZodiac {
  const stem = HEAVENLY_STEMS[stemIndex];
  const branch = EARTHLY_BRANCHES[branchIndex];
  const combined = stem.kanji + branch.kanji;

  // Combine readings dynamically
  const combinedReading = stem.reading + branch.reading;
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const combinedRomaji = `${capitalize(stem.romaji)}-${capitalize(branch.romaji)}`;
  
  return {
    heavenlyStemKanji: stem.kanji,
    earthlyBranchKanji: branch.kanji,
    animal: branch.animal,
    animalKanji: branch.animalKanji,
    combined,
    combinedReading,
    combinedRomaji,
    icon: branch.icon,
    heavenlyStemIcon: stem.icon,
  };
}

