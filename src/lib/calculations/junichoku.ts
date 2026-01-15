import { getSolarMonthBranchIndex } from './solarTerms';
import { getDayZodiac, EARTHLY_BRANCHES } from './zodiac';

export interface JuniChoku {
  name: string;
  reading: string;
  romaji: string;
  meaning: string;
  meaningJa: string;
  goodFor: string;
  badFor: string;
}

export const JUNICHOKU_DATA = [
  { name: '建', reading: 'たつ', romaji: 'Tatsu', meaning: 'A lucky day for establishing all things. Best for starting new ventures, marriage, and travel.', meaningJa: '万物を建て生じる吉日。結婚、旅行、開店など新しいことを始めるのに最良。', goodFor: 'Starting new ventures, marriage, travel', badFor: 'Digging, cutting trees' },
  { name: '除', reading: 'のぞく', romaji: 'Nozoku', meaning: 'A day to remove bad fortune. Good for cleaning and medical treatment, but bad for marriage and lending money.', meaningJa: '凶を除く吉日。掃除や医療始めは良いが、結婚やお金の貸し借りは凶。', goodFor: 'Cleaning, medical treatment', badFor: 'Marriage, lending money' },
  { name: '満', reading: 'みつ', romaji: 'Mitsu', meaning: 'A day when everything is full. Good for marriage, moving, and opening a business, but bad for taking medicine.', meaningJa: '全てが満たされる日。結婚、移転、開業などは良いが、服薬や土木工事は凶。', goodFor: 'Construction, marriage, moving', badFor: 'Funerals, taking medicine' },
  { name: '平', reading: 'たいら', romaji: 'Taira', meaning: 'A day when things become level. Good for marriage, travel, and consultations, but bad for digging and planting.', meaningJa: '物事が平らかになる日。結婚、旅行、相談事は良いが、穴掘りや種まきは凶。', goodFor: 'Marriage, travel, ground breaking', badFor: 'Digging ditches, planting' },
  { name: '定', reading: 'さだん', romaji: 'Sadan', meaning: 'A day when good and bad are determined. Good for marriage, contracts, and opening a business, but bad for travel and lawsuits.', meaningJa: '善悪が定まる日。結婚、開店、契約などは良いが、旅行や訴訟は凶。', goodFor: 'Construction, marriage, signing contracts', badFor: 'Travel, lawsuits' },
  { name: '執', reading: 'とる', romaji: 'Toru', meaning: 'A day to take charge. Good for ceremonies, building, and marriage, but bad for moving and large spending.', meaningJa: '執り行う日。祭礼、建築、結婚などは良いが、金銭の出入りや移転は凶。', goodFor: 'Planting, building, marriage', badFor: 'Moving, large spending' },
  { name: '破', reading: 'やぶる', romaji: 'Yaburu', meaning: 'A day to break through. Good for lawsuits and fishing, but bad for marriage and moving.', meaningJa: '物事を突破する日。訴訟、出陣、漁猟は良いが、結婚や移転は凶。', goodFor: 'Demolition, fishing', badFor: 'Marriage, moving, negotiations' },
  { name: '危', reading: 'あやぶ', romaji: 'Ayabu', meaning: 'A day containing danger. Good for religious ceremonies, but bad for travel, climbing, and marriage.', meaningJa: '危険を含む日。祭礼や酒造りは良いが、旅行や登山、結婚は凶。', goodFor: 'Religious ceremonies, sake brewing', badFor: 'Travel, climbing, marriage' },
  { name: '成', reading: 'なる', romaji: 'Naru', meaning: 'A day when things are achieved. Good for new business, marriage, and admission, but bad for lawsuits.', meaningJa: '物事が成就する日。新規事業、結婚、入学などは良いが、訴訟や談判は凶。', goodFor: 'New business, marriage, admission', badFor: 'Lawsuits' },
  { name: '納', reading: 'おさん', romaji: 'Osan', meaning: 'A day to store things. Good for harvesting and purchasing, but bad for marriage and funerals.', meaningJa: '物事を納める日。収穫、五穀の収納、商品の購入は良いが、結婚や見合いは凶。', goodFor: 'Harvesting, purchasing', badFor: 'Marriage, funerals' },
  { name: '開', reading: 'ひらく', romaji: 'Hiraku', meaning: 'A day when things open up. Good for opening a business, marriage, and moving, but bad for funerals.', meaningJa: '開き通じる日。開店、結婚、移転などは良いが、葬儀や不浄なことは凶。', goodFor: 'New business, moving, marriage', badFor: 'Funerals, impurities' },
  { name: '閉', reading: 'とづ', romaji: 'Tozu', meaning: 'A day to close things. Good for storing money and burial, but bad for opening a business and marriage.', meaningJa: '閉じ込める日。金銭の収納、建墓、トイレ造りは良いが、開店や結婚は凶。', goodFor: 'Burial, patching holes', badFor: 'Opening business, marriage' },
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
