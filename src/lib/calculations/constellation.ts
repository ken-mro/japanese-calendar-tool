// Zodiac Sign (星座) calculation

const ZODIAC_SIGNS = [
  { name: 'Capricorn', kanji: '山羊座', symbol: '♑', element: 'Earth', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
  { name: 'Aquarius', kanji: '水瓶座', symbol: '♒', element: 'Air', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
  { name: 'Pisces', kanji: '魚座', symbol: '♓', element: 'Water', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
  { name: 'Aries', kanji: '牡羊座', symbol: '♈', element: 'Fire', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
  { name: 'Taurus', kanji: '牡牛座', symbol: '♉', element: 'Earth', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
  { name: 'Gemini', kanji: '双子座', symbol: '♊', element: 'Air', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21 },
  { name: 'Cancer', kanji: '蟹座', symbol: '♋', element: 'Water', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22 },
  { name: 'Leo', kanji: '獅子座', symbol: '♌', element: 'Fire', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
  { name: 'Virgo', kanji: '乙女座', symbol: '♍', element: 'Earth', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
  { name: 'Libra', kanji: '天秤座', symbol: '♎', element: 'Air', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23 },
  { name: 'Scorpio', kanji: '蠍座', symbol: '♏', element: 'Water', startMonth: 10, startDay: 24, endMonth: 11, endDay: 22 },
  { name: 'Sagittarius', kanji: '射手座', symbol: '♐', element: 'Fire', startMonth: 11, startDay: 23, endMonth: 12, endDay: 21 },
];

export interface ZodiacSign {
  name: string;
  nameKanji: string;
  symbol: string;
  element: string;
}

export function getZodiacSign(date: Date): ZodiacSign {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  for (const sign of ZODIAC_SIGNS) {
    if (sign.startMonth === sign.endMonth) {
      if (month === sign.startMonth && day >= sign.startDay && day <= sign.endDay) {
        return { name: sign.name, nameKanji: sign.kanji, symbol: sign.symbol, element: sign.element };
      }
    } else if (sign.startMonth > sign.endMonth) {
      // Capricorn spans year boundary
      if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) {
        return { name: sign.name, nameKanji: sign.kanji, symbol: sign.symbol, element: sign.element };
      }
    } else {
      if ((month === sign.startMonth && day >= sign.startDay) || 
          (month === sign.endMonth && day <= sign.endDay) ||
          (month > sign.startMonth && month < sign.endMonth)) {
        return { name: sign.name, nameKanji: sign.kanji, symbol: sign.symbol, element: sign.element };
      }
    }
  }
  
  // Fallback - should not reach here
  return { name: 'Capricorn', nameKanji: '山羊座', symbol: '♑', element: 'Earth' };
}
