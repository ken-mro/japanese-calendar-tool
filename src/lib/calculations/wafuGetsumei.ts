
export interface WafuGetsumei {
  name: string;
  reading: string;
  romaji: string;
  meaning: string;
}

const WAFU_GETSUMEI_DATA = [
  { name: '睦月', reading: 'むつき', romaji: 'Mutsuki', meaning: 'Month of Harmony' },
  { name: '如月', reading: 'きさらぎ', romaji: 'Kisaragi', meaning: 'Month of Changing Clothes' },
  { name: '弥生', reading: 'やよい', romaji: 'Yayoi', meaning: 'Month of Growth' },
  { name: '卯月', reading: 'うづき', romaji: 'Uzuki', meaning: 'Month of the Utsugi Flower' },
  { name: '皐月', reading: 'さつき', romaji: 'Satsuki', meaning: 'Month of Planting Rice' },
  { name: '水無月', reading: 'みなづき', romaji: 'Minazuki', meaning: 'Month of Water' },
  { name: '文月', reading: 'ふみづき', romaji: 'Fumizuki', meaning: 'Month of Letters' },
  { name: '葉月', reading: 'はづき', romaji: 'Hazuki', meaning: 'Month of Leaves' },
  { name: '長月', reading: 'ながつき', romaji: 'Nagatsuki', meaning: 'Month of Long Nights' },
  { name: '神無月', reading: 'かんなづき', romaji: 'Kannazuki', meaning: 'Month of Gods' },
  { name: '霜月', reading: 'しもつき', romaji: 'Shimotsuki', meaning: 'Month of Frost' },
  { name: '師走', reading: 'しわす', romaji: 'Shiwasu', meaning: 'Month of Priests Running' },
];

export function getWafuGetsumei(date: Date): WafuGetsumei {
    const month = date.getMonth(); // 0-11
    return WAFU_GETSUMEI_DATA[month];
}
