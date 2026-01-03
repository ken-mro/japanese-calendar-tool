import {
  getJapaneseEra,
  getChineseZodiac,
  getZodiacSign,
  getNineStar,
} from "@/lib/calculations";

interface GenerateShareTextParams {
  targetDate: Date;
  sourceDate: Date;
  offsetDays: number;
  language: string;
}

export function generateShareText({
  targetDate,
  sourceDate,
  offsetDays,
  language,
}: GenerateShareTextParams): string {
  const useKanji = language === "ja";
  const appName = useKanji
    ? "暦計算ツール - 和暦・干支(十干十二支)・星座・九星"
    : "Japanese Calendar Tool";
  // Calculate attributes for the target date
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const japaneseEra = getJapaneseEra(targetDate);
  const chineseZodiac = getChineseZodiac(year);
  const zodiacSign = getZodiacSign(targetDate);
  const nineStar = getNineStar(targetDate);

  let text = "";

  if (useKanji) {
    // 1. Context Line
    // Format: "令和8年 (2026年) 1月4日の1日後は、" or "令和8年 (2026年) 1月4日は、"
    
    // Format source date
    const sourceEra = getJapaneseEra(sourceDate);
    const sourceEraStr = sourceEra
      ? `${sourceEra.nameKanji}${sourceEra.year === 1 ? "元" : sourceEra.year}年`
      : "";
    const sourceYearStr = `(${sourceDate.getFullYear()}年)`;
    const sourceDateStr = `${sourceDate.getMonth() + 1}月${sourceDate.getDate()}日`;
    
    const fullSourceDate = `${sourceEraStr} ${sourceYearStr} ${sourceDateStr}`.trim();

    if (offsetDays === 0) {
      text += `${fullSourceDate}は、\n`;
    } else {
      const direction = offsetDays > 0 ? "後" : "前";
      text += `${fullSourceDate}の${Math.abs(offsetDays)}日${direction}は、\n\n`;
    }

    // 2. Result Date Line (Only if offset != 0)
    if (offsetDays !== 0) {
       const targetEraStr = japaneseEra
        ? `${japaneseEra.nameKanji}${japaneseEra.year === 1 ? "元" : japaneseEra.year}年`
        : "";
      const targetYearStr = `(${year}年)`;
      const targetDateStr = `${month}月${day}日`;
      const weekday = targetDate.toLocaleDateString("ja-JP", { weekday: "short" });
      
      text += `${targetEraStr}${targetYearStr}${targetDateStr} (${weekday})\n`;
    }

    // 3. Attributes
    text += `十干十二支：${chineseZodiac.combined}(${chineseZodiac.combinedReading})\n`;
    text += `星座：${zodiacSign.nameKanji}\n`;
    text += `九星：${nineStar.nameKanji}\n`;

  } else {
    // English Logic (Mirroring structure)
    const sourceDateStr = sourceDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    if (offsetDays === 0) {
      text += `${sourceDateStr} is,\n`;
    } else {
      const direction = offsetDays > 0 ? "days after" : "days before";
      text += `${Math.abs(offsetDays)} ${direction} ${sourceDateStr} is,\n\n`;
    }

    if (offsetDays !== 0) {
        text += `${targetDate.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        })}\n`;
    }

    text += `Chinese Zodiac: ${chineseZodiac.combinedRomaji} (Year of the ${chineseZodiac.animal})\n`;
    text += `Zodiac Sign: ${zodiacSign.name}\n`;
    text += `Nine Star Ki: ${nineStar.name}\n`;
  }

  text += `\n${appName}\n`;
  
  return text;
}
