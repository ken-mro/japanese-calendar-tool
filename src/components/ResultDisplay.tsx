"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import {
  getJapaneseEra,
  formatJapaneseEra,
  getChineseZodiac,
  getZodiacSign,
  getNineStar,
  getRokuyo,
  getMoonPhase,
} from "@/lib/calculations";
import { NineStarIcon } from "./NineStarIcon";
import { MoonPhaseIcon } from "./MoonPhaseIcon";

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

  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const japaneseEra = getJapaneseEra(targetDate);
  const chineseZodiac = getChineseZodiac(year);
  const zodiacSign = getZodiacSign(targetDate);
  const nineStar = getNineStar(targetDate);
  const rokuyo = getRokuyo(targetDate);
  const moonPhase = getMoonPhase(targetDate);

  // Elapsed Time Calculation
  const today = new Date();
  // Reset time part for accurate date diff
  const todayReset = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const targetReset = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate()
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
    contextMessage = `${absOffset} ${direction} ${dateStr} is`;
  }

  return (
    <div className="result-container">
      <h2 className="section-title">{t("result.title")}</h2>
      <p
        className="result-context"
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "var(--text-secondary)",
          fontSize: "1.1rem",
        }}
      >
        {contextMessage}
      </p>

      <div className="result-grid">
        {/* Western Year */}
        <div className="result-card western-year">
          <div className="card-icon">
            <img
              src="/images/calendar.svg"
              alt="Calendar"
              className="w-12 h-12 object-contain"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <h3 className="card-title">{t("result.westernYear")}</h3>
          <p
            className="card-value"
            style={{ fontSize: "1.8rem", lineHeight: "1.2" }}
          >
            {useKanji ? (
              <>{year}年</>
            ) : (
              targetDate.toLocaleDateString("en-US", { year: "numeric" })
            )}
          </p>
          <p className="card-subtitle">
            {useKanji ? (
              <>
                {year}年{month}月{day}日 (
                {targetDate.toLocaleDateString("ja-JP", {
                  weekday: "short",
                })}
                )
              </>
            ) : (
              targetDate.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            )}
          </p>
        </div>

        {/* Japanese Era */}
        <div className="result-card japanese-era">
          <div className="card-icon">
            <img
              src="/images/japanese-era-icon.svg"
              alt="Japanese Era"
              className="w-12 h-12 object-contain"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <h3 className="card-title">{t("result.japaneseEra")}</h3>
          <p className="card-value">
            {japaneseEra ? formatJapaneseEra(japaneseEra, useKanji) : "-"}
          </p>
          {japaneseEra && !useKanji && (
            <p className="card-subtitle">
              {japaneseEra.nameKanji}
              {japaneseEra.year === 1 ? "元年" : japaneseEra.year + "年"}
            </p>
          )}
        </div>

        {/* Sexagenary cycle */}
        <div className="result-card chinese-zodiac">
          <div className="card-icon zodiac-icons">
            <span title={chineseZodiac.heavenlyStemKanji}>
              {chineseZodiac.heavenlyStemEmoji}
            </span>
            <img
              src={chineseZodiac.icon}
              alt={chineseZodiac.animal}
              title={chineseZodiac.animalKanji}
              className="w-12 h-12 object-contain"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <h3 className="card-title">{t("result.chineseZodiac")}</h3>
          <p className="card-value">
            {useKanji ? chineseZodiac.combined : chineseZodiac.combinedRomaji}
          </p>
          <p className="card-subtitle">
            {useKanji
              ? `${chineseZodiac.combinedReading}（${chineseZodiac.earthlyBranchKanji}年）`
              : `${chineseZodiac.combined} (Year of the ${chineseZodiac.animal})`}
          </p>
        </div>

        {/* Zodiac Sign */}
        <div className="result-card zodiac-sign">
          <div className="card-icon">{zodiacSign.symbol}</div>
          <h3 className="card-title">{t("result.zodiacSign")}</h3>
          <p className="card-value">
            {useKanji ? zodiacSign.nameKanji : zodiacSign.name}
          </p>
          {!useKanji && <p className="card-subtitle">{zodiacSign.nameKanji}</p>}
        </div>

        {/* Nine Star Ki */}
        <div className="result-card nine-star">
          <div className="card-icon">
            <NineStarIcon colorName={nineStar.color} />
          </div>
          <h3 className="card-title">{t("result.nineStar")}</h3>
          <p className="card-value">
            {useKanji ? `${nineStar.nameKanji}` : `${nineStar.name}`}
          </p>
          <p className="card-subtitle">
            {!useKanji && `${nineStar.nameKanji}`}
          </p>
          {nineStar.isApproximate && (
            <p className="card-note">{t("result.nineStarApproximate")}</p>
          )}
        </div>

        {/* Rokuyo */}
        <div className="result-card rokuyo">
          <div className="card-icon">📅</div>
          <h3 className="card-title">{t("result.rokuyo")}</h3>
          <p className="card-value">
            {useKanji ? rokuyo.nameKanji : rokuyo.name}
          </p>
          <p className="card-subtitle">
            {useKanji ? rokuyo.reading : rokuyo.nameKanji}
          </p>
        </div>

        {/* Moon Phase */}
        <div className="result-card moon-phase">
          <div className="card-icon">
            <MoonPhaseIcon phase={moonPhase} />
          </div>
          <h3 className="card-title">{t("result.moonPhase")}</h3>
          <p className="card-value">
            {useKanji ? moonPhase.phaseKanji : moonPhase.phase}
          </p>
          <p className="card-subtitle">
            {t("result.moonAge")}: {moonPhase.age}
          </p>
        </div>

        {/* Elapsed Time */}
        <div
          className="result-card elapsed-time"
          style={{ borderTop: "4px solid #8e44ad" }}
        >
          <div className="card-icon">
            <img
              src="/images/hourglass.svg"
              alt="Hourglass"
              className="w-12 h-12 object-contain"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <h3 className="card-title">{t("result.elapsedTitle")}</h3>
          <p className="card-value">
            {absTotalDays}
            <span style={{ fontSize: "1rem" }}>{t("result.daysSuffix")}</span>
            <span
              style={{
                fontSize: "0.8rem",
                marginLeft: "0.5rem",
                color: "var(--text-secondary)",
              }}
            >
              {totalDays >= 0
                ? useKanji
                  ? "(経過)"
                  : "(Passed)"
                : useKanji
                ? "(前)"
                : "(Before)"}
            </span>
          </p>
          <p className="card-subtitle">
            {duration.years}
            {t("result.years")} {duration.months}
            {t("result.months")} {duration.days}
            {t("result.days")}
          </p>
        </div>
      </div>
    </div>
  );
}
