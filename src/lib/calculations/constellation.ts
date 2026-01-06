// Zodiac Sign (星座) calculation

const ZODIAC_SIGNS = [
  { name: 'Capricorn', kanji: '山羊座', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, icon: '/images/constellation/capricorn.svg' },
  { name: 'Aquarius', kanji: '水瓶座', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, icon: '/images/constellation/aquarius.svg' },
  { name: 'Pisces', kanji: '魚座', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, icon: '/images/constellation/pisces.svg' },
  { name: 'Aries', kanji: '牡羊座', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, icon: '/images/constellation/aries.svg' },
  { name: 'Taurus', kanji: '牡牛座', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, icon: '/images/constellation/taurus.svg' },
  { name: 'Gemini', kanji: '双子座', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21, icon: '/images/constellation/gemini.svg' },
  { name: 'Cancer', kanji: '蟹座', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22, icon: '/images/constellation/cancer.svg' },
  { name: 'Leo', kanji: '獅子座', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, icon: '/images/constellation/leo.svg' },
  { name: 'Virgo', kanji: '乙女座', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, icon: '/images/constellation/virgo.svg' },
  { name: 'Libra', kanji: '天秤座', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23, icon: '/images/constellation/libra.svg' },
  { name: 'Scorpio', kanji: '蠍座', startMonth: 10, startDay: 24, endMonth: 11, endDay: 22, icon: '/images/constellation/scorpio.svg' },
  { name: 'Sagittarius', kanji: '射手座', startMonth: 11, startDay: 23, endMonth: 12, endDay: 21, icon: '/images/constellation/sagittarius.svg' },
];

export interface ZodiacSign {
  name: string;
  nameKanji: string;
  icon: string;
}

export function getZodiacSign(date: Date): ZodiacSign {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  for (const sign of ZODIAC_SIGNS) {
    if (sign.startMonth === sign.endMonth) {
      if (month === sign.startMonth && day >= sign.startDay && day <= sign.endDay) {
        return { name: sign.name, nameKanji: sign.kanji, icon: sign.icon };
      }
    } else if (sign.startMonth > sign.endMonth) {
      // Capricorn spans year boundary
      if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) {
        return { name: sign.name, nameKanji: sign.kanji, icon: sign.icon };
      }
    } else {
      if ((month === sign.startMonth && day >= sign.startDay) || 
          (month === sign.endMonth && day <= sign.endDay) ||
          (month > sign.startMonth && month < sign.endMonth)) {
        return { name: sign.name, nameKanji: sign.kanji, icon: sign.icon };
      }
    }
  }
  
  // Fallback - should not reach here
  return { name: 'Capricorn', nameKanji: '山羊座', icon: '/images/constellation/capricorn.svg' };
}
