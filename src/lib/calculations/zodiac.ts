// Chinese Zodiac (十干十二支) calculation

// 十干 (Heavenly Stems)
const HEAVENLY_STEMS = [
  { name: 'Jia', kanji: '甲', reading: 'きのえ', element: 'Wood', elementKanji: '木' },
  { name: 'Yi', kanji: '乙', reading: 'きのと', element: 'Wood', elementKanji: '木' },
  { name: 'Bing', kanji: '丙', reading: 'ひのえ', element: 'Fire', elementKanji: '火' },
  { name: 'Ding', kanji: '丁', reading: 'ひのと', element: 'Fire', elementKanji: '火' },
  { name: 'Wu', kanji: '戊', reading: 'つちのえ', element: 'Earth', elementKanji: '土' },
  { name: 'Ji', kanji: '己', reading: 'つちのと', element: 'Earth', elementKanji: '土' },
  { name: 'Geng', kanji: '庚', reading: 'かのえ', element: 'Metal', elementKanji: '金' },
  { name: 'Xin', kanji: '辛', reading: 'かのと', element: 'Metal', elementKanji: '金' },
  { name: 'Ren', kanji: '壬', reading: 'みずのえ', element: 'Water', elementKanji: '水' },
  { name: 'Gui', kanji: '癸', reading: 'みずのと', element: 'Water', elementKanji: '水' },
];

// 十二支 (Earthly Branches)
const EARTHLY_BRANCHES = [
  { name: 'Zi', kanji: '子', reading: 'ね', animal: 'Rat', animalKanji: '鼠', emoji: '🐀' },
  { name: 'Chou', kanji: '丑', reading: 'うし', animal: 'Ox', animalKanji: '牛', emoji: '🐂' },
  { name: 'Yin', kanji: '寅', reading: 'とら', animal: 'Tiger', animalKanji: '虎', emoji: '🐅' },
  { name: 'Mao', kanji: '卯', reading: 'う', animal: 'Rabbit', animalKanji: '兎', emoji: '🐇' },
  { name: 'Chen', kanji: '辰', reading: 'たつ', animal: 'Dragon', animalKanji: '龍', emoji: '🐉' },
  { name: 'Si', kanji: '巳', reading: 'み', animal: 'Snake', animalKanji: '蛇', emoji: '🐍' },
  { name: 'Wu', kanji: '午', reading: 'うま', animal: 'Horse', animalKanji: '馬', emoji: '🐴' },
  { name: 'Wei', kanji: '未', reading: 'ひつじ', animal: 'Sheep', animalKanji: '羊', emoji: '🐏' },
  { name: 'Shen', kanji: '申', reading: 'さる', animal: 'Monkey', animalKanji: '猿', emoji: '🐒' },
  { name: 'You', kanji: '酉', reading: 'とり', animal: 'Rooster', animalKanji: '鶏', emoji: '🐓' },
  { name: 'Xu', kanji: '戌', reading: 'いぬ', animal: 'Dog', animalKanji: '犬', emoji: '🐕' },
  { name: 'Hai', kanji: '亥', reading: 'い', animal: 'Boar', animalKanji: '猪', emoji: '🐗' },
];

// Sexagenary cycle readings (60 combinations)
const SEXAGENARY_READINGS: Record<string, string> = {
  '甲子': 'きのえね', '乙丑': 'きのとうし', '丙寅': 'ひのえとら', '丁卯': 'ひのとう',
  '戊辰': 'つちのえたつ', '己巳': 'つちのとみ', '庚午': 'かのえうま', '辛未': 'かのとひつじ',
  '壬申': 'みずのえさる', '癸酉': 'みずのととり', '甲戌': 'きのえいぬ', '乙亥': 'きのとい',
  '丙子': 'ひのえね', '丁丑': 'ひのとうし', '戊寅': 'つちのえとら', '己卯': 'つちのとう',
  '庚辰': 'かのえたつ', '辛巳': 'かのとみ', '壬午': 'みずのえうま', '癸未': 'みずのとひつじ',
  '甲申': 'きのえさる', '乙酉': 'きのととり', '丙戌': 'ひのえいぬ', '丁亥': 'ひのとい',
  '戊子': 'つちのえね', '己丑': 'つちのとうし', '庚寅': 'かのえとら', '辛卯': 'かのとう',
  '壬辰': 'みずのえたつ', '癸巳': 'みずのとみ', '甲午': 'きのえうま', '乙未': 'きのとひつじ',
  '丙申': 'ひのえさる', '丁酉': 'ひのととり', '戊戌': 'つちのえいぬ', '己亥': 'つちのとい',
  '庚子': 'かのえね', '辛丑': 'かのとうし', '壬寅': 'みずのえとら', '癸卯': 'みずのとう',
  '甲辰': 'きのえたつ', '乙巳': 'きのとみ', '丙午': 'ひのえうま', '丁未': 'ひのとひつじ',
  '戊申': 'つちのえさる', '己酉': 'つちのととり', '庚戌': 'かのえいぬ', '辛亥': 'かのとい',
  '壬子': 'みずのえね', '癸丑': 'みずのとうし', '甲寅': 'きのえとら', '乙卯': 'きのとう',
  '丙辰': 'ひのえたつ', '丁巳': 'ひのとみ', '戊午': 'つちのえうま', '己未': 'つちのとひつじ',
  '庚申': 'かのえさる', '辛酉': 'かのととり', '壬戌': 'みずのえいぬ', '癸亥': 'みずのとい',
};

export interface ChineseZodiac {
  heavenlyStem: string;
  heavenlyStemKanji: string;
  earthlyBranch: string;
  earthlyBranchKanji: string;
  animal: string;
  animalKanji: string;
  animalEmoji: string;
  combined: string;
  combinedReading: string;
}

export function getChineseZodiac(year: number): ChineseZodiac {
  // Sexagenary cycle starts from 4 AD
  const baseYear = 4;
  const cyclePosition = ((year - baseYear) % 60 + 60) % 60;
  
  const stemIndex = cyclePosition % 10;
  const branchIndex = cyclePosition % 12;
  
  const stem = HEAVENLY_STEMS[stemIndex];
  const branch = EARTHLY_BRANCHES[branchIndex];
  const combined = stem.kanji + branch.kanji;
  
  return {
    heavenlyStem: stem.name,
    heavenlyStemKanji: stem.kanji,
    earthlyBranch: branch.name,
    earthlyBranchKanji: branch.kanji,
    animal: branch.animal,
    animalKanji: branch.animalKanji,
    animalEmoji: branch.emoji,
    combined,
    combinedReading: SEXAGENARY_READINGS[combined] || stem.reading + branch.reading,
  };
}
