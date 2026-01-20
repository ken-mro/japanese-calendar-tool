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

  // Let's verify existing site.
  // 2024 Jan 1.
  // Calendar Month: 甲辰 (Year), 丙寅 (Month).
  // Solar Month (Setsugetsu):
  // Date is 2024/01/01.
  // Year: 癸卯 (2023). (Because before Risshun).
  // Month: 甲子 (Kinoe-Ne).
  // My calc: Mizunoe-Ne (8, 0).
  // Why difference? 8 vs 0.
  // Formula check.
  // Month 11 (Rat) of Year 2023.
  // Year Stem 9.
  // (9%5 * 2 + ??)
  // Maybe the "monthBranchIndex" in formula should be "month number"?
  // Or maybe "Tiger is 1"?
  // Standard: Tiger month of 甲 year is 丙 (Hinoe/2).
  // Formula: (YearStem%5 + 1) * 2 + ...?
  //
  // Let's trust the existing formula: `((yearStemIndex % 5) * 2 + monthBranchIndex) % 10`
  // It worked for Calendar Month Jan (Tiger=2).
  // (0 * 2 + 2) = 2. Correct.
  // So "monthBranchIndex" corresponds to Tiger=2.
  //
  // Back to Solar. Jan 1 is Rat (0).
  // Year 2023 (9).
  // (4 * 2 + 0) = 8 (Mizunoe).
  // Reference says 甲子 (Kinoe/0).
  // 0 vs 8. (+2 difference).
  //
  // Rat (0) is Month 11 (Nov) of lunar/solar?
  // Tiger (2) is Month 1 (Jan) of spring.
  // Rat is Month 11.
  //
  // Maybe the formula needs "Month Order from Tiger"?
  // Tiger=1, Rabbit=2... Rat=11, Ox=12.
  //
  // Let's try "Month Order".
  // Tiger (2) -> Order 1.
  // Rat (0) -> Order 11.
  //
  // Calendar Jan (Tiger/2). yearStem=0. Stem=2.
  // If we used Order 1: (0%5 * 2 + X) = 2. -> X=2?
  // If Month Order is used: 2024 (Kinoe). Tiger Month (1). Hinoe (2).
  //
  // Let's look at Month Stem table.
  // Year Stem 甲(0)/己(5):
  //   Tiger(2) -> 丙(2)
  //   Rat(0) -> 丙? No.
  //
  // Ref:
  // 甲/己 Year:
  // Feb(Tiger) -> 丙寅 (2, 2)
  // Mar(Rabbit) -> 丁卯 (3, 3)
  // ...
  // Dec(Rat) -> 丙子 (2, 0)
  // Jan(Ox) -> 丁丑 (3, 1)
  //
  // Wait.
  // If Jan 1, 2024 (Solar) is Dec of 2023.
  // 2023 is 癸 (9).
  // 癸/戊 Year:
  // Feb(Tiger) -> 甲寅 (0, 2)
  // ...
  // Nov(Rat) -> 甲子 (0, 0)
  // Dec(Ox) -> 乙丑 (1, 1)
  //
  // Jan 1 2024 is before Shokan (Jan 6). So it is Taisetsu (Dec).
  // Taisetsu starts Dec 7.
  // So Jan 1 is in "Rat" month (Nov - wait, Taisetsu is which month?).
  //
  // Solar Terms:
  // Risshun (Feb) -> Tiger. (Month 1 of Spring)
  // ...
  // Taisetsu (Dec) -> Rat. (Month 11)
  // Shokan (Jan) -> Ox. (Month 12)
  //
  // So Jan 1 (before Shokan) is Rat (Month 11).
  // Year 2023 (9).
  // Month is Rat.
  // Result should be 甲子 (Kinoe-Ne / 0,0).
  //
  // My formula gave 8 (Mizunoe).
  // Formula: `((yearStemIndex % 5) * 2 + monthBranchIndex) % 10`
  // (9%5 * 2 + 0) = 8.
  //
  // If I add 2?
  // (9%5 * 2 + 0 + 2) = 10 -> 0.
  //
  // Check against Calendar Month first.
  // Jan(Tiger/2). Year(0). Result(2).
  // (0%5 * 2 + 2) = 2.
  // This already has +2 because BranchIndex of Tiger is 2.
  //
  // So the formula works IF the BranchIndex is correct.
  // Rat is 0.
  // If I use 0, I get 8. Target 0. Off by 2.
  //
  // Why?
  // Year Stem 9 (癸).
  // Tiger (2) -> (9%5 * 2 + 2) = 8+2=10=0 (Kinoe).
  // Is Tiger month of 癸 year Kinoe?
  // Ref: 癸/戊 Year -> Tiger Month is 甲寅 (Kinoe/0). YES.
  //
  // So `((yearStemIndex % 5) * 2 + monthBranchIndex) % 10` WORKS for Tiger(2).
  // Does it work for Rat(0)?
  // 癸 Year (9). Rat (0).
  // Calc: 8.
  // Target: 0 (Kinoe).
  //
  // Why difference?
  // Because Rat is Month 11?
  // In the cycle:
  // Tiger (2) -> Stem 0
  // Rabbit (3) -> Stem 1
  // ...
  // Rat (0) -> Stem ?
  //
  // Sequence from Tiger(2) to Rat(0):
  // 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1.
  // Count: 11 steps?
  // Stem sequence: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1.
  // So Rat should have Stem correspond to Tiger_Stem + 10? No.
  //
  // Let's tracing Stems.
  // Tiger(2): 0
  // Rabbit(3): 1
  // Dragon(4): 2
  // ...
  // Boar(11): 9
  // Rat(0): 0 ??
  //
  // Wait. 12 branches, 10 stems.
  // Tiger(2) -> 0
  // Rabbit(3) -> 1
  // ...
  // Dog(10) -> 8
  // Boar(11) -> 9
  // Rat(0) -> 0 (Next stem in cycle)
  // Ox(1) -> 1
  //
  // So Rat(0) should be Stem 0.
  // My formula gave 8 for Rat(0)?
  // Year(9). (4*2 + 0) = 8.
  // Why?
  // Because `monthBranchIndex` is 0.
  // We expect 0. Result 8.
  //
  // Ah.
  // Tiger is 2. Result 0.
  // Rat is 0. Result SHOULD be 0 (if following Boar).
  // But 0 < 2.
  // The formula relies on linearity?
  //
  // If I treat Rat as 12?
  // (9%5 * 2 + 12) = 8 + 12 = 20 = 0.
  // YES.
  // If I treat Rat as 12, Ox as 13.
  //
  // So for proper calculation, Branch Index should be monotonic from Tiger?
  //
  // Improved Formula:
  // `monthBranchIndex` should be adjusted if it wraps around?
  // No, the formula is:
  // `(YearStem%5 + 1) * 2` = Stem of Tiger Month.
  // Stem of Month M (where Tiger=1) = `StemOfTiger + (M - 1)`.
  //
  // Index check:
  // Tiger(2). M=1?
  // Rat(0). M=11?
  //
  // Let's deduce.
  // StemOfTiger = (YearStem%5 * 2 + 2) is WRONG logic interpretation although it coincidentally matches?
  //
  // Let's use the standard "Year Stem -> Tiger Month Stem" formula.
  // Tiger Month Stem = `(YearStem % 5) * 2 + 2` % 10. ??
  //
  // Year 0(甲). Tiger Stem = 2(丙). Formula: (0*2 + 2) = 2. MATCH.
  // Year 1(乙). Tiger Stem = 4(戊). Formula: (1*2 + 2) = 4. MATCH.
  // Year 2(丙). Tiger Stem = 6(庚). Formula: (2*2 + 2) = 6. MATCH.
  // Year 3(丁). Tiger Stem = 8(壬). Formula: (3*2 + 2) = 8. MATCH.
  // Year 4(戊). Tiger Stem = 0(甲). Formula: (4*2 + 2) = 10=0. MATCH.
  //
  // So `BaseStem = (YearStem % 5) * 2 + 2`. (Stem of Tiger).
  //
  // Now, for any branch `b`:
  // Distance from Tiger(2).
  // If `b >= 2` (Tiger..Boar), dist = `b - 2`.
  // If `b < 2` (Rat, Ox), dist = `b + 12 - 2` = `b + 10`.
  //
  // Target Stem = `(BaseStem + dist) % 10`.
  //
  // Test Rat (0).
  // Year 9(癸). BaseStem = (4*2+2) = 10=0 (Kinoe).
  // Dist for Rat(0) = 0 + 10 = 10.
  // Target = (0 + 10) % 10 = 0 (Kinoe).
  // MATCHES Reference (甲子).
  //
  // My previous failing calculation:
  // (9%5 * 2 + 0) = 8.
  // This was effectively `BaseStem - 2`.
  // But Rat is `BaseStem + 10` = `BaseStem`.
  // 8 is not 0.
  //
  // So the simple formula `((yearStemIndex % 5) * 2 + monthBranchIndex) % 10` ONLY works if `monthBranchIndex` >= 2.
  // If `monthBranchIndex` < 2 (Rat, Ox), we need to add 12 to it?
  // Let's try.
  // Rat(0) -> 12.
  // (9%5 * 2 + 12) = 8 + 12 = 20 = 0.
  // Ox(1) -> 13.
  // (9%5 * 2 + 13) = 8 + 13 = 21 = 1.
  //
  // So, logic:
  // const effectiveBranch = monthBranchIndex < 2 ? monthBranchIndex + 12 : monthBranchIndex;
  // const monthStemIndex = ((yearStemIndex % 5) * 2 + effectiveBranch) % 10;
  //
  // Wait. Does this break existing Calendar Month logic for Jan?
  // Calendar Month Jan is Tiger (2).
  // So it was >= 2.
  // Feb is Rabbit (3).
  // Calendar Month Dec is Ox (1).
  // Wait.
  // Calendar Month Logic:
  // Jan=2, Feb=3...
  // Nov=12? No.
  // `monthBranchIndex = (month + 2) % 12`
  // Nov(10) -> (12)%12 = 0 (Rat).
  // Dec(11) -> (13)%12 = 1 (Ox).
  //
  // So Calendar Month Nov/Dec use 0/1.
  // Did existing code work for Nov/Dec?
  // Dec 2024. Year 0(甲).
  // Dec is Ox(1).
  // BaseStem(Tiger) for Year 0 is 2(丙).
  // Ox is after Tiger... wait.
  // Dec 2024.
  // Tiger(Jan 2024)... Ox(Dec 2024).
  // Ox is 11 steps after Tiger.
  // Dist = 10.
  // Stem = (2 + 10) = 2(丙). -> 丙子? No, Ox is 丑. 丙丑?
  // Ref: 甲 Year. Dec(Ox) -> 丁丑 (3).
  // My formula:
  // `(0%5 * 2 + 1)` = 1 (乙).
  // 1 != 3.
  //
  // So the existing code `((yearStemIndex % 5) * 2 + monthBranchIndex) % 10`
  // was correct for Jan(Tiger) but potentially WRONG for Rat/Ox?
  //
  // Let's check if the existing code handles Nov/Dec 2024 correctly.
  // Nov 2024 (Rat). Year 0.
  // Formula: (0 + 0) = 0 (甲).
  // Ref: 甲 Year. Nov(Rat) -> 丙子 (2).
  // My formula gives 0. Ref gives 2.
  //
  // SO THE EXISTING CODE IS LIKELY BUGGY for Rat/Ox(Nov/Dec in Calendar, Jan/Feb in Solar).
  // Or at least for Rat/Ox.
  //
  // I should fix this logic generally.
  //
  // Correct Logic:
  // Stem of Tiger (2) = (YearStem % 5) * 2 + 2.
  // Difference in steps from Tiger.
  // Branch sequence: 2, 3, 4 ... 11, 0, 1.
  // If `branch < 2` (0, 1), `step = branch + 12`.
  // `effectiveBranch = branch < 2 ? branch + 12 : branch`.
  // `stem = ((YearStem % 5) * 2 + effectiveBranch) % 10`.
  //
  // Let's re-test Nov 2024 (Rat=0). Year 0.
  // effective = 12.
  // (0 + 12) = 2 (丙). MATCHES Ref (丙子).
  //
  // Let's re-test Dec 2024 (Ox=1). Year 0.
  // effective = 13.
  // (0 + 13) = 3 (丁). MATCHES Ref (丁丑).
  //
  // So the fix is indeed to treat Rat/Ox as 12/13.
  //
  // I will implement this fixed logic in `getMonthZodiac`.

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

