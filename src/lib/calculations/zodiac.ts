// Chinese Zodiac (十干十二支) calculation

// 十干 (Heavenly Stems)
const HEAVENLY_STEMS = [
  { name: 'Jia', kanji: '甲', reading: 'きのえ', element: 'Wood', elementKanji: '木', emoji: '🌲' },
  { name: 'Yi', kanji: '乙', reading: 'きのと', element: 'Wood', elementKanji: '木', emoji: '🌿' },
  { name: 'Bing', kanji: '丙', reading: 'ひのえ', element: 'Fire', elementKanji: '火', emoji: '🔥' },
  { name: 'Ding', kanji: '丁', reading: 'ひのと', element: 'Fire', elementKanji: '火', emoji: '🕯️' },
  { name: 'Wu', kanji: '戊', reading: 'つちのえ', element: 'Earth', elementKanji: '土', emoji: '⛰️' },
  { name: 'Ji', kanji: '己', reading: 'つちのと', element: 'Earth', elementKanji: '土', emoji: '🏜️' },
  { name: 'Geng', kanji: '庚', reading: 'かのえ', element: 'Metal', elementKanji: '金', emoji: '⚔️' },
  { name: 'Xin', kanji: '辛', reading: 'かのと', element: 'Metal', elementKanji: '金', emoji: '💍' },
  { name: 'Ren', kanji: '壬', reading: 'みずのえ', element: 'Water', elementKanji: '水', emoji: '🌊' },
  { name: 'Gui', kanji: '癸', reading: 'みずのと', element: 'Water', elementKanji: '水', emoji: '💧' },
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

export interface ChineseZodiac {
  heavenlyStem: string;
  heavenlyStemKanji: string;
  heavenlyStemEmoji: string;
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

  // Combine readings dynamically
  const combinedReading = stem.reading + branch.reading;
  
  return {
    heavenlyStem: stem.name,
    heavenlyStemKanji: stem.kanji,
    heavenlyStemEmoji: stem.emoji,
    earthlyBranch: branch.name,
    earthlyBranchKanji: branch.kanji,
    animal: branch.animal,
    animalKanji: branch.animalKanji,
    animalEmoji: branch.emoji,
    combined,
    combinedReading,
  };
}
