import { getSolarMonthBranchIndex } from './solarTerms';
import { getDayZodiac, EARTHLY_BRANCHES } from './zodiac';

export interface JuniChoku {
  name: string;
  reading: string;
  romaji: string;
  meaning: string;
  goodFor: string;
  badFor: string;
}

const JUNICHOKU_DATA = [
  { name: '建', reading: 'たつ', romaji: 'Tatsu', meaning: 'Establish', goodFor: 'Starting new ventures, marriage, travel', badFor: 'Digging, cutting trees' },
  { name: '除', reading: 'のぞく', romaji: 'Nozoku', meaning: 'Remove', goodFor: 'Cleaning, medical treatment', badFor: 'Marriage, lending money' },
  { name: '満', reading: 'みつ', romaji: 'Mitsu', meaning: 'Full', goodFor: 'Construction, marriage, moving', badFor: 'Funerals, taking medicine' },
  { name: '平', reading: 'たいら', romaji: 'Taira', meaning: 'Level', goodFor: 'Marriage, travel, ground breaking', badFor: 'Digging ditches, planting' },
  { name: '定', reading: 'さだん', romaji: 'Sadan', meaning: 'Settle', goodFor: 'Construction, marriage, signing contracts', badFor: 'Travel, lawsuits' },
  { name: '執', reading: 'とる', romaji: 'Toru', meaning: 'Maintain', goodFor: 'Planting, building, marriage', badFor: 'Moving, large spending' },
  { name: '破', reading: 'やぶる', romaji: 'Yaburu', meaning: 'Broken', goodFor: 'Demolition, fishing', badFor: 'Marriage, moving, negotiations' },
  { name: '危', reading: 'あやぶ', romaji: 'Ayabu', meaning: 'Danger', goodFor: 'Religious ceremonies, sake brewing', badFor: 'Travel, climbing, marriage' },
  { name: '成', reading: 'なる', romaji: 'Naru', meaning: 'Achieve', goodFor: 'New business, marriage, admission', badFor: 'Lawsuits' },
  { name: '納', reading: 'おさん', romaji: 'Osan', meaning: 'Store', goodFor: 'Harvesting, purchasing', badFor: 'Marriage, funerals' },
  { name: '開', reading: 'ひらく', romaji: 'Hiraku', meaning: 'Open', goodFor: 'New business, moving, marriage', badFor: 'Funerals, impurities' },
  { name: '閉', reading: 'とづ', romaji: 'Tozu', meaning: 'Close', goodFor: 'Burial, patching holes', badFor: 'Opening business, marriage' },
];

export function getJuniChoku(date: Date): JuniChoku {
    const solarMonthIndex = getSolarMonthBranchIndex(date); // 0-11 (Rat...Boar)
    // Note: getSolarMonthBranchIndex returns BRANCH index (0=Rat, 1=Ox, 2=Tiger...)
    
    const dayZodiac = getDayZodiac(date);
    const dayBranchIndex = EARTHLY_BRANCHES.findIndex(b => b.kanji === dayZodiac.earthlyBranchKanji);
    
    // Formula: (DayBranch - MonthBranch + 12) % 12
    // Ken (Index 0) happens when DayBranch == MonthBranch.
    // So if diff is 0 -> Index 0. Correct.
    
    const chokuIndex = (dayBranchIndex - solarMonthIndex + 12) % 12;
    
    return JUNICHOKU_DATA[chokuIndex];
}
