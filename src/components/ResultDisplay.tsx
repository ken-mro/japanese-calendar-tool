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
  birthDate: Date;
}

export function ResultDisplay({ birthDate }: ResultDisplayProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const year = birthDate.getFullYear();
  const japaneseEra = getJapaneseEra(birthDate);
  const chineseZodiac = getChineseZodiac(year);
  const zodiacSign = getZodiacSign(birthDate);
  const nineStar = getNineStar(birthDate);

  return (
    <div className="result-container">
      <h2 className="section-title">{t("result.title")}</h2>

      <div className="result-grid">
        {/* Western Year */}
        <div className="result-card western-year">
          <div className="card-icon">📅</div>
          <h3 className="card-title">{t("result.westernYear")}</h3>
          <p className="card-value">
            {year}
            {useKanji ? "年" : ""}
          </p>
        </div>

        {/* Japanese Era */}
        <div className="result-card japanese-era">
          <div className="card-icon">🏯</div>
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
      </div>
    </div>
  );
}
