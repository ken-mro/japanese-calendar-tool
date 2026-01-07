// Sexagenary cycle (十干十二支) calculation

// 十干 (Heavenly Stems)
const HEAVENLY_STEMS = [
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
const EARTHLY_BRANCHES = [
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
