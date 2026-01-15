
export interface WafuGetsumei {
  name: string;
  reading: string;
  romaji: string;
  meaning: string;
  meaningJa: string;
}

export const WAFU_GETSUMEI_DATA = [
  { name: '睦月', reading: 'むつき', romaji: 'Mutsuki', meaning: 'Month of Harmony', meaningJa: '親族が仲睦まじく集まる月' },
  { name: '如月', reading: 'きさらぎ', romaji: 'Kisaragi', meaning: 'Month of Changing Clothes', meaningJa: '寒さで着物を更に重ねる月' },
  { name: '弥生', reading: 'やよい', romaji: 'Yayoi', meaning: 'Month of Growth', meaningJa: '草木がいよいよ生い茂る月' },
  { name: '卯月', reading: 'うづき', romaji: 'Uzuki', meaning: 'Month of the Utsugi Flower', meaningJa: '卯の花が咲く月' },
  { name: '皐月', reading: 'さつき', romaji: 'Satsuki', meaning: 'Month of Planting Rice', meaningJa: '早苗（さなえ）を植える月' },
  { name: '水無月', reading: 'みなづき', romaji: 'Minazuki', meaning: 'Month of Water', meaningJa: '田に水を引く月（「無」は「の」の意）' },
  { name: '文月', reading: 'ふみづき', romaji: 'Fumizuki', meaning: 'Month of Letters', meaningJa: '穂が見える月、または七夕で詩歌を献じる月' },
  { name: '葉月', reading: 'はづき', romaji: 'Hazuki', meaning: 'Month of Leaves', meaningJa: '木々の葉が落ちる月' },
  { name: '長月', reading: 'ながつき', romaji: 'Nagatsuki', meaning: 'Month of Long Nights', meaningJa: '夜が長くなる月' },
  { name: '神無月', reading: 'かんなづき', romaji: 'Kannazuki', meaning: 'Month of Gods', meaningJa: '神々が出雲に集まり留守になる月' },
  { name: '霜月', reading: 'しもつき', romaji: 'Shimotsuki', meaning: 'Month of Frost', meaningJa: '霜が降りる月' },
  { name: '師走', reading: 'しわす', romaji: 'Shiwasu', meaning: 'Month of Priests Running', meaningJa: '師（僧）が走り回るほど忙しい月' },
];

export function getWafuGetsumei(date: Date): WafuGetsumei {
  const month = date.getMonth(); // 0-11
  return WAFU_GETSUMEI_DATA[month];
}
