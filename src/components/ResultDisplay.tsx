"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import {
  getJapaneseEra,
  formatJapaneseEra,
  getChineseZodiac,
  getZodiacSign,
  getNineStar,
} from "@/lib/calculations";

interface ResultDisplayProps {
  targetDate: Date;
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

export function ResultDisplay({ targetDate }: ResultDisplayProps) {
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

  return (
    <div className="result-container">
      <h2 className="section-title">{t("result.title")}</h2>

      <div className="result-grid">
        {/* Western Year */}
        <div className="result-card western-year">
          <div className="card-icon">📅</div>
          <h3 className="card-title">{t("result.westernYear")}</h3>
          <p
            className="card-value"
            style={{ fontSize: "1.8rem", lineHeight: "1.2" }}
          >
            {useKanji ? (
              <>
                {year}年
                <br />
                <span style={{ fontSize: "1.5rem" }}>
                  {month}月{day}日
                </span>
              </>
            ) : (
              targetDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            )}
          </p>
        </div>

        {/* Japanese Era */}
        <div className="result-card japanese-era">
          <div className="card-icon">🎌</div>
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

        {/* Chinese Zodiac */}
        <div className="result-card chinese-zodiac">
          <div className="card-icon zodiac-icons">
            <span title={chineseZodiac.heavenlyStemKanji}>
              {chineseZodiac.heavenlyStemEmoji}
            </span>
            <span title={chineseZodiac.animalKanji}>
              {chineseZodiac.animalEmoji}
            </span>
          </div>
          <h3 className="card-title">{t("result.chineseZodiac")}</h3>
          <p className="card-value">{chineseZodiac.combined}</p>
          <p className="card-subtitle">
            {useKanji
              ? `${chineseZodiac.combinedReading}（${chineseZodiac.animalKanji}年）`
              : `${chineseZodiac.animal} (${chineseZodiac.combinedReading})`}
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
          <div className="card-icon">⭐</div>
          <h3 className="card-title">{t("result.nineStar")}</h3>
          <p className="card-value">{nineStar.nameKanji}</p>
          <p className="card-subtitle">
            {useKanji ? `五行: ${nineStar.elementKanji}` : `${nineStar.name}`}
          </p>
          {nineStar.isApproximate && (
            <p className="card-note">{t("result.nineStarApproximate")}</p>
          )}
        </div>

        {/* Elapsed Time */}
        <div
          className="result-card elapsed-time"
          style={{ borderTop: "4px solid #8e44ad" }}
        >
          <div className="card-icon">⏳</div>
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
