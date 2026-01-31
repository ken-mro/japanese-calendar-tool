// Sexagenary cycle (十干十二支) calculation

// 十干 (Heavenly Stems)
export const HEAVENLY_STEMS = [
  { kanji: '甲', reading: 'きのえ', romaji: 'kinoe', icon: '/images/heavenly_stems/kinoe.svg', meaningJa: '大樹・直立', meaningEn: 'Big Tree (Nature: Wood/Yang)' },
  { kanji: '乙', reading: 'きのと', romaji: 'kinoto', icon: '/images/heavenly_stems/kinoto.svg', meaningJa: '草花・柔軟', meaningEn: 'Grass/Flower (Nature: Wood/Yin)' },
  { kanji: '丙', reading: 'ひのえ', romaji: 'hinoe', icon: '/images/heavenly_stems/hinoe.svg', meaningJa: '太陽・情熱', meaningEn: 'Sun (Nature: Fire/Yang)' },
  { kanji: '丁', reading: 'ひのと', romaji: 'hinoto', icon: '/images/heavenly_stems/hinoto.svg', meaningJa: '灯火・温厚', meaningEn: 'Candle/Fire (Nature: Fire/Yin)' },
  { kanji: '戊', reading: 'つちのえ', romaji: 'tsuchinoe', icon: '/images/heavenly_stems/tsuchinoe.svg', meaningJa: '山岳・不動', meaningEn: 'Mountain (Nature: Earth/Yang)' },
  { kanji: '己', reading: 'つちのと', romaji: 'tsuchinoto', icon: '/images/heavenly_stems/tsuchinoto.svg', meaningJa: '田畑・育成', meaningEn: 'Soil/Field (Nature: Earth/Yin)' },
  { kanji: '庚', reading: 'かのえ', romaji: 'kanoe', icon: '/images/heavenly_stems/kanoe.svg', meaningJa: '鉱石・剛毅', meaningEn: 'Sword/Metal (Nature: Metal/Yang)' },
  { kanji: '辛', reading: 'かのと', romaji: 'kanoto', icon: '/images/heavenly_stems/kanoto.svg', meaningJa: '宝石・繊細', meaningEn: 'Gem/Jewelry (Nature: Metal/Yin)' },
  { kanji: '壬', reading: 'みずのえ', romaji: 'mizunoe', icon: '/images/heavenly_stems/mizunoe.svg', meaningJa: '大海・包容', meaningEn: 'Ocean (Nature: Water/Yang)' },
  { kanji: '癸', reading: 'みずのと', romaji: 'mizunoto', icon: '/images/heavenly_stems/mizunoto.svg', meaningJa: '雨露・知性', meaningEn: 'Rain/Dew (Nature: Water/Yin)' },
];

// 十二支 (Earthly Branches)
export const EARTHLY_BRANCHES = [
  { kanji: '子', reading: 'ね', romaji: 'ne', animal: 'Rat', animalKanji: '鼠', icon: '/images/zodiac/rat.svg', meaningJa: '子孫繁栄・行動力', meaningEn: 'Prosperity/Action' },
  { kanji: '丑', reading: 'うし', romaji: 'ushi', animal: 'Ox', animalKanji: '牛', icon: '/images/zodiac/ox.svg', meaningJa: '粘り強さ・堅実', meaningEn: 'Tenacity/Patience' },
  { kanji: '寅', reading: 'とら', romaji: 'tora', animal: 'Tiger', animalKanji: '虎', icon: '/images/zodiac/tiger.svg', meaningJa: '決断力・才知', meaningEn: 'Decisiveness/Bravery' },
  { kanji: '卯', reading: 'う', romaji: 'u', animal: 'Rabbit', animalKanji: '兎', icon: '/images/zodiac/rabbit.svg', meaningJa: '温厚・家内安全', meaningEn: 'Safety/Gentleness' },
  { kanji: '辰', reading: 'たつ', romaji: 'tatsu', animal: 'Dragon', animalKanji: '龍', icon: '/images/zodiac/dragon.svg', meaningJa: '正義感・権力', meaningEn: 'Authority/Justice' },
  { kanji: '巳', reading: 'み', romaji: 'mi', animal: 'Snake', animalKanji: '蛇', icon: '/images/zodiac/snake.svg', meaningJa: '探究心・情熱', meaningEn: 'Wisdom/Passion' },
  { kanji: '午', reading: 'うま', romaji: 'uma', animal: 'Horse', animalKanji: '馬', icon: '/images/zodiac/horse.svg', meaningJa: '陽気・健康', meaningEn: 'Cheerfulness/Health' },
  { kanji: '未', reading: 'ひつじ', romaji: 'hitsuji', animal: 'Sheep', animalKanji: '羊', icon: '/images/zodiac/sheep.svg', meaningJa: '穏やか・人脈', meaningEn: 'Peace/Family Security' },
  { kanji: '申', reading: 'さる', romaji: 'saru', animal: 'Monkey', animalKanji: '猿', icon: '/images/zodiac/monkey.svg', meaningJa: '器用・臨機応変', meaningEn: 'Adaptability/Dexterity' },
  { kanji: '酉', reading: 'とり', romaji: 'tori', animal: 'Rooster', animalKanji: '鶏', icon: '/images/zodiac/rooster.svg', meaningJa: '親切・商売繁盛', meaningEn: 'Kindness/Prosperity' },
  { kanji: '戌', reading: 'いぬ', romaji: 'inu', animal: 'Dog', animalKanji: '犬', icon: '/images/zodiac/dog.svg', meaningJa: '誠実・忠義', meaningEn: 'Loyalty/Honesty' },
  { kanji: '亥', reading: 'い', romaji: 'i', animal: 'Boar', animalKanji: '猪', icon: '/images/zodiac/boar.svg', meaningJa: '勇気・無病息災', meaningEn: 'Determination/Courage' },
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

export function getMonthZodiac(date: Date, isSolarMonth: boolean = false): ChineseZodiac {
  let year: number;
  let monthBranchIndex: number;

  if (isSolarMonth) {
    // Solar Month (Setsugetsu)
    // Year changes at Risshun (Feb 4 approx)
    year = getSolarYear(date);
    // Month branch follows Setsu dates
    monthBranchIndex = getSolarMonthBranchIndex(date);
    // getSolarMonthBranchIndex returns: 0(Rat, Dec), 1(Ox, Jan), 2(Tiger, Feb)...
    // EARTHLY_BRANCHES: 0(Rat), 1(Ox), 2(Tiger)...
    // So distinct mapping is not needed if they align.
    // solarTerms.ts says: Jan(Ox)=1.
    // EARTHLY_BRANCHES[1] is Ox. Correct.
  } else {
    // Calendar Month (Civil Month)
    year = date.getFullYear();
    // Jan(0) -> Tiger(2)
    monthBranchIndex = (date.getMonth() + 2) % 12;
  }

  // Calculate Stem
  // Formula: (YearStem % 5 * 2 + MonthBranch) % 10
  const yearZodiac = getChineseZodiac(year);
  const yearStemIndex = HEAVENLY_STEMS.findIndex(s => s.kanji === yearZodiac.heavenlyStemKanji);

  // Month Branch Index for Stem calculation must be relative to Tiger=1?
  // Standard formula:
  // Year Stem:
  // 甲(0) or 己(5) -> Month 1 (Feb/Tiger) is 丙(2) (Tiger is 3rd branch?)
  // Let's re-verify the formula in existing code.
  // Existing: const monthStemIndex = ((yearStemIndex % 5) * 2 + monthBranchIndex) % 10;
  // Year 2024 (Kinoe/0). Jan (Tiger/2).
  // (0%5 * 2 + 2) = 2 (Hinoe).
  // Jan 2024 is Hinoe-Tora. Matches.
  // So the formula works directly with Branch Index where Tiger=2.

  // Solar Month: Feb (Tiger/2). Year Stem same.
  // Result should be same for Feb (after Risshun).
  // What about Jan (Ox/1)?
  // (0%5 * 2 + 1) = 1 (Kinoto). Jan is Kinoto-Ushi.
  // Is this correct?
  // 2024 Jan is before Risshun. So it belongs to 2023 (Mizunoto/9).
  // Year Stem 9.
  // (9%5 * 2 + 1) = (4*2 + 1) = 9 (Mizunoto).
  // Check reference: 2024 Jan (Calendar) -> Hinoe-Tora.
  // 2024 Jan (Solar, before Feb 4) -> 2023 Dec (Solar) -> Kibisu-Ushi (Mizunoto-Ushi wrong? let me check reference).

  // Wait. Solar Month Jan (before Feb 4) corresponds to "Late Winter" or "Dec" of previous year?
  // getSolarMonthBranchIndex(Jan 1) -> before Risshun -> returns month-1.
  // If Jan 1 -> month 1. setsu is Jan 6. Jan 1 < Jan 6 -> month 0.
  // month 0 -> returns 0 (Rat).
  // So Jan 1 (Solar) is Rat.
  // Wait, I thought Jan is Ox.
  // Risshun (Feb) is Tiger.
  // Shokan (Jan) is Ox.
  // Taisetsu (Dec) is Rat.
  // Jan 1 is before Shokan (Jan 6). So it is Taisetsu (Rat).
  // So Jan 1 Solar is Rat.
  // Stem: Year 2023 (9). Branch 0 (Rat).
  // (9%5 * 2 + 0) = 8 (Mizunoe).
  // Result: Mizunoe-Ne.


  // Fix for Rat/Ox months (Month 11/12)


  // Fix for Rat/Ox months (Month 11/12)
  // These months have branch indices 0 and 1, but they appear at the END of the cycle relative to Tiger (2).
  // The standard formula works for branches monotonic from Tiger (2, 3... 11).
  // For 0 and 1, we must treat them as 12 and 13 respectively to get the correct stem.
  const effectiveBranch = monthBranchIndex < 2 ? monthBranchIndex + 12 : monthBranchIndex;
  const monthStemIndex = ((yearStemIndex % 5) * 2 + effectiveBranch) % 10;

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

