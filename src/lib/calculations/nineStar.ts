import { getStarDate } from './solarTerms';

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
