"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { ResultCard } from "./ResultCard";

interface WesternYearCardProps {
  date: Date;
}

export function WesternYearCard({ date }: WesternYearCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <ResultCard
      className="western-year"
      icon={
        <img
          src="/images/calendar.svg"
          alt="Calendar"
          className="w-12 h-12 object-contain"
          style={{ width: "3rem", height: "3rem" }}
        />
      }
      title={t("result.westernYear")}
      value={
        useKanji ? (
          <>{year}年</>
        ) : (
          date.toLocaleDateString("en-US", { year: "numeric" })
        )
      }
      valueStyle={{ fontSize: "1.8rem", lineHeight: "1.2" }}
      subtitle={
        useKanji ? (
          <>
            {year}年{month}月{day}日 (
            {date.toLocaleDateString("ja-JP", {
              weekday: "short",
            })}
            )
          </>
        ) : (
          date.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        )
      }
    />
  );
}
