// Sexagenary cycle (十干十二支) calculation

// 十干 (Heavenly Stems)
const HEAVENLY_STEMS = [
  { kanji: '甲', reading: 'きのえ', romaji: 'kinoe', emoji: '🌲' },
  { kanji: '乙', reading: 'きのと', romaji: 'kinoto', emoji: '🌿' },
  { kanji: '丙', reading: 'ひのえ', romaji: 'hinoe', emoji: '🔥' },
  { kanji: '丁', reading: 'ひのと', romaji: 'hinoto', emoji: '🕯️' },
  { kanji: '戊', reading: 'つちのえ', romaji: 'tsuchinoe', emoji: '⛰️' },
  { kanji: '己', reading: 'つちのと', romaji: 'tsuchinoto', emoji: '🏜️' },
  { kanji: '庚', reading: 'かのえ', romaji: 'kanoe', emoji: '⚔️' },
  { kanji: '辛', reading: 'かのと', romaji: 'kanoto', emoji: '💍' },
  { kanji: '壬', reading: 'みずのえ', romaji: 'mizunoe', emoji: '🌊' },
  { kanji: '癸', reading: 'みずのと', romaji: 'mizunoto', emoji: '💧' },
];

// 十二支 (Earthly Branches)
const EARTHLY_BRANCHES = [
  { kanji: '子', reading: 'ね', romaji: 'ne', animal: 'Rat', animalKanji: '鼠', emoji: '🐀', icon: '/images/zodiac/mouse.svg' },
  { kanji: '丑', reading: 'うし', romaji: 'ushi', animal: 'Ox', animalKanji: '牛', emoji: '🐂', icon: '/images/zodiac/cow.svg' },
  { kanji: '寅', reading: 'とら', romaji: 'tora', animal: 'Tiger', animalKanji: '虎', emoji: '🐅', icon: '/images/zodiac/tiger.svg' },
  { kanji: '卯', reading: 'う', romaji: 'u', animal: 'Rabbit', animalKanji: '兎', emoji: '🐇', icon: '/images/zodiac/rabbit.svg' },
  { kanji: '辰', reading: 'たつ', romaji: 'tatsu', animal: 'Dragon', animalKanji: '龍', emoji: '🐉', icon: '/images/zodiac/dragon.svg' },
  { kanji: '巳', reading: 'み', romaji: 'mi', animal: 'Snake', animalKanji: '蛇', emoji: '🐍', icon: '/images/zodiac/snake.svg' },
  { kanji: '午', reading: 'うま', romaji: 'uma', animal: 'Horse', animalKanji: '馬', emoji: '🐴', icon: '/images/zodiac/horse.svg' },
  { kanji: '未', reading: 'ひつじ', romaji: 'hitsuji', animal: 'Sheep', animalKanji: '羊', emoji: '🐏', icon: '/images/zodiac/sheep.svg' },
  { kanji: '申', reading: 'さる', romaji: 'saru', animal: 'Monkey', animalKanji: '猿', emoji: '🐒', icon: '/images/zodiac/monkey.svg' },
  { kanji: '酉', reading: 'とり', romaji: 'tori', animal: 'Rooster', animalKanji: '鶏', emoji: '🐓', icon: '/images/zodiac/bird.svg' },
  { kanji: '戌', reading: 'いぬ', romaji: 'inu', animal: 'Dog', animalKanji: '犬', emoji: '🐕', icon: '/images/zodiac/dog.svg' },
  { kanji: '亥', reading: 'い', romaji: 'i', animal: 'Boar', animalKanji: '猪', emoji: '🐗', icon: '/images/zodiac/boar.svg' },
];

export interface ChineseZodiac {
  heavenlyStemKanji: string;
  heavenlyStemEmoji: string;
  earthlyBranchKanji: string;
  animal: string;
  animalKanji: string;
  animalEmoji: string;
  combined: string;
  combinedReading: string;
  combinedRomaji: string;
  icon: string;
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
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const combinedRomaji = `${capitalize(stem.romaji)}-${capitalize(branch.romaji)}`;
  
  return {
    heavenlyStemKanji: stem.kanji,
    heavenlyStemEmoji: stem.emoji,
    earthlyBranchKanji: branch.kanji,
    animal: branch.animal,
    animalKanji: branch.animalKanji,
    animalEmoji: branch.emoji,
    combined,
    combinedReading,
    combinedRomaji,
    icon: branch.icon,
  };
}
