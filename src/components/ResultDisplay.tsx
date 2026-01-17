"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import {
  getJapaneseEra,
  getChineseZodiac,
  getZodiacSign,
  getNineStar,
  getRokuyo,
  getMoonPhase,
  getMonthZodiac,
  getMonthNineStar,
  getDayZodiac,
  getDayNineStar,
  getJuniChoku,
} from "@/lib/calculations";
import { WesternYearCard } from "./cards/WesternYearCard";
import { JapaneseEraCard } from "./cards/JapaneseEraCard";
import { ChineseZodiacCard } from "./cards/ChineseZodiacCard";
import { ZodiacSignCard } from "./cards/ZodiacSignCard";
import { NineStarCard } from "./cards/NineStarCard";
import { RokuyoCard } from "./cards/RokuyoCard";
import { MoonPhaseCard } from "./cards/MoonPhaseCard";
import { ElapsedTimeCard } from "./cards/ElapsedTimeCard";
import { MonthCard } from "./cards/MonthCard";
import { DayCard } from "./cards/DayCard";
import { JuniChokuCard } from "./cards/JuniChokuCard";
import { CollapsibleSection } from "./CollapsibleSection";

interface ResultDisplayProps {
  targetDate: Date;
  sourceDate: Date;
  offsetDays: number;
}

function calculateDuration(start: Date, end: Date) {
  const isFuture = end < start;
  const s = isFuture ? end : start;
  const e = isFuture ? start : end;

  let years = e.getFullYear() - s.getFullYear();
  let months = e.getMonth() - s.getMonth();
  let days = e.getDate() - s.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(e.getFullYear(), e.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days, isFuture };
}

export function ResultDisplay({
  targetDate,
  sourceDate,
  offsetDays,
}: ResultDisplayProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const japaneseEra = getJapaneseEra(targetDate);
  const chineseZodiac = getChineseZodiac(targetDate.getFullYear());
  const zodiacSign = getZodiacSign(targetDate);
  const nineStar = getNineStar(targetDate);
  const rokuyo = getRokuyo(targetDate);
  const moonPhase = getMoonPhase(targetDate);

  // Additional Month/Day calculations
  const monthZodiac = getMonthZodiac(targetDate);
  const monthNineStar = getMonthNineStar(targetDate);
  const dayZodiac = getDayZodiac(targetDate);
  const dayNineStar = getDayNineStar(targetDate);
  const juniChoku = getJuniChoku(targetDate);

  // Elapsed Time Calculation
  const today = new Date();
  // Reset time part for accurate date diff
  const todayReset = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const targetReset = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate(),
  );

  const diffTime = todayReset.getTime() - targetReset.getTime();
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const absTotalDays = Math.abs(totalDays);

  const duration = calculateDuration(targetReset, todayReset);

  // Format calculation context message
  let contextMessage = "";
  const direction =
    offsetDays >= 0 ? t("input.daysAfter") : t("input.daysBefore");
  const absOffset = Math.abs(offsetDays);

  if (useKanji) {
    // Japanese format: "YYYY年M月D日 の X日後/前 は"
    const sourceEra = getJapaneseEra(sourceDate);
    const dateStr = sourceEra
      ? `${sourceEra.nameKanji}${
          sourceEra.year === 1 ? "元" : sourceEra.year
        }年 (${sourceDate.getFullYear()}年) ${
          sourceDate.getMonth() + 1
        }月${sourceDate.getDate()}日`
      : `${sourceDate.getFullYear()}年${
          sourceDate.getMonth() + 1
        }月${sourceDate.getDate()}日`;

    if (offsetDays === 0) {
      contextMessage = `${dateStr} は、`;
    } else {
      contextMessage = `${dateStr} の ${absOffset}${direction}は、`;
    }
  } else {
    // English format: "X days After/Before Month DD, YYYY is"
    const dateStr = sourceDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    if (offsetDays === 0) {
      contextMessage = `${dateStr} is`;
    } else {
      contextMessage = `${absOffset} ${direction} ${dateStr} is`;
    }
  }

  return (
    <div className="result-container">
      <h2 className="section-title">{t("result.title")}</h2>
      <p
        className="result-context"
        style={{
          textAlign: "center",
          marginTop: "-0.5rem",
          marginBottom: "1.5rem",
          color: "var(--text-secondary)",
          fontSize: "1.1rem",
        }}
      >
        {contextMessage}
      </p>

      <div className="result-grid">
        {/* Year Section */}
        <CollapsibleSection
          title={t("result.year")}
          contentClassName="result-grid"
        >
          <WesternYearCard date={targetDate} />
          <JapaneseEraCard era={japaneseEra} />
          <ChineseZodiacCard zodiac={chineseZodiac} variant="year" />
          <NineStarCard nineStar={nineStar} />
        </CollapsibleSection>

        {/* Month Section */}
        <CollapsibleSection
          title={t("result.month")}
          contentClassName="result-grid"
        >
          <MonthCard date={targetDate} />
          <ZodiacSignCard sign={zodiacSign} />
          <ChineseZodiacCard zodiac={monthZodiac} variant="month" />
          <NineStarCard nineStar={monthNineStar} hideNote={true} />
        </CollapsibleSection>

        {/* Day Section */}
        <CollapsibleSection
          title={t("result.day")}
          contentClassName="result-grid"
        >
          <DayCard date={targetDate} />
          <RokuyoCard rokuyo={rokuyo} />
          <ChineseZodiacCard zodiac={dayZodiac} variant="day" />
          <NineStarCard nineStar={dayNineStar} hideNote={true} />
          <MoonPhaseCard phase={moonPhase} />
          <JuniChokuCard choku={juniChoku} />
          <ElapsedTimeCard
            totalDays={totalDays}
            absTotalDays={absTotalDays}
            duration={duration}
          />
        </CollapsibleSection>
      </div>
    </div>
  );
}
