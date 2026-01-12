import { getStarDate, getSolarMonthBranchIndex, getSolarYear, getSolarTermStartDay } from './solarTerms';

const NINE_STARS = [
  { number: 1, name: '1 White Water', kanji: '一白水星', element: 'Water', elementKanji: '水', color: 'White', colorKanji: '白' },
  { number: 2, name: '2 Black Earth', kanji: '二黒土星', element: 'Earth', elementKanji: '土', color: 'Black', colorKanji: '黒' },
  { number: 3, name: '3 Blue Wood', kanji: '三碧木星', element: 'Wood', elementKanji: '木', color: 'Blue', colorKanji: '青' },
  { number: 4, name: '4 Green Wood', kanji: '四緑木星', element: 'Wood', elementKanji: '木', color: 'Green', colorKanji: '緑' },
  { number: 5, name: '5 Yellow Earth', kanji: '五黄土星', element: 'Earth', elementKanji: '土', color: 'Yellow', colorKanji: '黄' },
  { number: 6, name: '6 White Metal', kanji: '六白金星', element: 'Metal', elementKanji: '金', color: 'White', colorKanji: '白' },
  { number: 7, name: '7 Red Metal', kanji: '七赤金星', element: 'Metal', elementKanji: '金', color: 'Red', colorKanji: '赤' },
  { number: 8, name: '8 White Earth', kanji: '八白土星', element: 'Earth', elementKanji: '土', color: 'White', colorKanji: '白' },
  { number: 9, name: '9 Purple Fire', kanji: '九紫火星', element: 'Fire', elementKanji: '火', color: 'Purple', colorKanji: '紫' },
];

export interface NineStar {
  number: number;
  name: string;
  nameKanji: string;
  element: string;
  elementKanji: string;
  color: string;
  colorKanji: string;
  isApproximate?: boolean; // True if Risshun date is approximated (year < 1966 or > 2060)
}

// Sum digits until the result is 10 or less
function sumDigitsUntilSmall(num: number): number {
  let sum = num;
  while (sum > 10) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return sum;
}

export function getNineStar(birthDate: Date): NineStar {
  let year = birthDate.getFullYear();
  const originalYear = year;
  
  // Check if before Risshun (立春) - use previous year
  // Risshun is the 2nd solar term (Month 2 in our config)
  const risshun = getStarDate(year, 2);
  if (birthDate < risshun) {
    year -= 1;
  }
  
  // Check if Risshun date is approximated (outside known range)
  // We have accurate data for 1966-2060
  const isApproximate = originalYear < 1966 || originalYear > 2060;
  
  // Nine Star Ki calculation
  // Step 1: Sum all 4 digits of the year
  // Step 2: If sum > 10, sum digits again until ≤ 10
  // Step 3: Subtract from 11 to get the star number
  // Example: 1980 -> 1+9+8+0=18 -> 1+8=9 -> 11-9=2 (二黒土星)
  // Example: 2020 -> 2+0+2+0=4 -> 11-4=7 (七赤金星)
  
  const digitSum = year.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  const reducedSum = sumDigitsUntilSmall(digitSum);
  const starNumber = 11 - reducedSum;
  
  const star = NINE_STARS[starNumber - 1];
  return {
    number: star.number,
    name: star.name,
    nameKanji: star.kanji,
    element: star.element,
    elementKanji: star.elementKanji,
    color: star.color,
    colorKanji: star.colorKanji,
    isApproximate,
  };
}

// Imports consolidated at top

export function getMonthNineStar(date: Date): NineStar {
    const solarMonthIndex = getSolarMonthBranchIndex(date); // Tiger=2, etc.
    
    // Determine Base Star for Tiger Month (Month 2 / Feb) based on Year Star
    // Rule:
    // Year Star 1, 4, 7 -> Feb is 8 White
    // Year Star 3, 6, 9 -> Feb is 5 Yellow
    // Year Star 2, 5, 8 -> Feb is 2 Black
    
    // Get Year Star Number
    const yearStar = getNineStar(date).number; // Use the provided date (which handles pre-Risshun year adjustment)
    
    let baseStar = 0;
    const group = yearStar % 3;
    
    if (group === 1) { // 1, 4, 7
      baseStar = 8;
    } else if (group === 0) { // 3, 6, 9
      baseStar = 5;
    } else { // 2, 5, 8
      baseStar = 2;
    }
    
    // Calculate offset from Tiger Month (2)
    // Month stars descend: 8 -> 7 -> 6...
    // If solarMonth is 2 (Feb), star is baseStar.
    // If solarMonth is 3 (Mar), star is baseStar - 1.
    const monthDiff = solarMonthIndex - 2;
    // Handle wrap around: Month 0 (Dec of prev year? No, Dec is Month 0 or 12?)
    // solarMonthIndex logic: Jan->1, Feb->2 ... Dec->0 (Rat).
    // Let's adjust Dec (0) and Jan (1) to follow the sequence 11, 12, 13 relative to Feb?
    // Feb=2, Mar=3, ..., Nov=11, Dec=12 (Rat), Jan=13 (Ox) ?
    // Let's re-normalize diff.
    // Actually, just subtract diff.
    // If Feb (2): base - 0.
    // If Jan (1): This is month BEFORE Feb. So base - (-1) = base + 1. (Ascending backwards -> Descending forwards).
    let currentStar = baseStar - (solarMonthIndex - 2);
    
    // Adjust for the index wrapping behavior if necessary.
    // getSolarMonthBranchIndex returns: Jan=1, Feb=2, ..., Nov=11, Dec=0.
    // Sequence should be: ..., Nov(11), Dec(12), Jan(13) relative to start of year.
    // But Dec is 0. So if index is 0 or 1, we treat them as 12 and 13?
    // Wait, Solar Year starts Feb.
    // Jan (1) is 11th month of PREVIOUS year? 
    // And Dec (0) is 10th month (Rat) of CURRENT year?
    // Order: Tiger(2), Rabbit(3), ..., Boar(11), Rat(0), Ox(1).
    // Let's linearize the month index for calc:
    // Tiger(2) -> 0
    // ...
    // Boar(11) -> 9
    // Rat(0) -> 10
    // Ox(1) -> 11
    
    let linearMonth = 0;
    if (solarMonthIndex >= 2) linearMonth = solarMonthIndex - 2;
    else if (solarMonthIndex === 0) linearMonth = 10; // Rat
    else if (solarMonthIndex === 1) linearMonth = 11; // Ox
    
    currentStar = baseStar - linearMonth;
    
    // Normalize to 1-9
    while (currentStar <= 0) currentStar += 9;
    while (currentStar > 9) currentStar -= 9;
    
    return getStarByNumber(currentStar);
}

// Helper to find the closest Kinoe-Ne (甲子) day to a target date
function getClosestKinoeNe(targetDate: Date): Date {
  // Reference: 2024-01-01 is Kinoe-Ne
  const ref = new Date(2024, 0, 1);
  ref.setHours(12, 0, 0, 0);
  
  const target = new Date(targetDate);
  target.setHours(12, 0, 0, 0);
  
  const diffTime = target.getTime() - ref.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  
  // diffDays = 60 * N + remainder
  const remainder = ((diffDays % 60) + 60) % 60;
  
  // If remainder is 0, target is Kinoe-Ne.
  // If remainder is small positive (e.g. 5), closest is target - 5.
  // If remainder is large (e.g. 55), closest is target + 5.
  
  let offset = 0;
  if (remainder < 30) {
    offset = -remainder;
  } else {
    offset = 60 - remainder;
  }
  
  const closest = new Date(target);
  closest.setDate(target.getDate() + offset);
  return closest;
}

export function getDayNineStar(date: Date): NineStar {
    const d = new Date(date);
    d.setHours(12, 0, 0, 0);
    const year = d.getFullYear();
    
    // Determine the relevant Switching Days for this period
    // Yang Dun Period: From [Winter Solstice Switch] to [Summer Solstice Switch]
    // Yin Dun Period: From [Summer Solstice Switch] to [Next Winter Solstice Switch]
    
    // Solstices (Approx)
    // We search wider to ensure we catch the switch roughly around these dates
    const prevWinterSolstice = new Date(year - 1, 11, 21);
    const summerSolstice = new Date(year, 5, 21);
    const nextWinterSolstice = new Date(year, 11, 21);
    
    // Calculate Switch Days (Kinoe-Ne closest to Solstice)
    const yangStart = getClosestKinoeNe(prevWinterSolstice);
    const yinStart = getClosestKinoeNe(summerSolstice);
    const nextYangStart = getClosestKinoeNe(nextWinterSolstice);
    
    // Check which interval we are in
    let isAscending = false;
    let anchorDate: Date;
    let anchorStar = 1; 
    
    // Note on Anchor Star:
    // Yang Dun Start (Winter) -> Star is 1 (Ascending starts at 1)
    // Yin Dun Start (Summer) -> Star is 9 (Descending starts at 9)
    
    if (d >= yangStart && d < yinStart) {
        // In Yang Dun (Ascending)
        isAscending = true;
        anchorDate = yangStart;
        anchorStar = 1;
    } else if (d >= yinStart && d < nextYangStart) {
        // In Yin Dun (Descending)
        isAscending = false;
        anchorDate = yinStart;
        anchorStar = 9;
    } else {
        // End of year / Start of next context
        // If d >= nextYangStart, it's next cycle Yang Dun
        // If d < yangStart (early Jan before switch), it's previous cycle Yin Dun
        if (d >= nextYangStart) {
            isAscending = true;
            anchorDate = nextYangStart;
            anchorStar = 1;
        } else {
             // Before this year's Yang Start -> Previous Yin Dun
             // We need previous Summer Switch
             const prevSummerSolstice = new Date(year - 1, 5, 21);
             const prevYinStart = getClosestKinoeNe(prevSummerSolstice);
             isAscending = false;
             anchorDate = prevYinStart;
             anchorStar = 9;
        }
    }
    
    // Calculate days from Anchor
    const diffTime = d.getTime() - anchorDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
    let currentStar = anchorStar;
    
    if (isAscending) {
        // Ascending: 1, 2, 3...
        // Formula: (Anchor + diff - 1) % 9 + 1
        // Normalize 1-based index
        let val = (anchorStar - 1 + diffDays) % 9;
        if (val < 0) val += 9;
        currentStar = val + 1;
    } else {
        // Descending: 9, 8, 7...
        // Formula: (Anchor - diff - 1) % 9 + 1 (with reversal)
        // Values: 9, 8, 7
        // (9 - 8) ...
        // Let's use 0-based: 8, 7, 6...
        // (Anchor-1 - diff) % 9
        let val = (anchorStar - 1 - diffDays) % 9;
        if (val < 0) val += 9;
        currentStar = val + 1;
    }
    
    return getStarByNumber(currentStar);
}

function getStarByNumber(num: number): NineStar {
    const star = NINE_STARS.find(s => s.number === num);
    if (!star) throw new Error("Invalid star number");
    return {
        number: star.number,
        name: star.name,
        nameKanji: star.kanji,
        element: star.element,
        elementKanji: star.elementKanji,
        color: star.color,
        colorKanji: star.colorKanji,
    };
}
