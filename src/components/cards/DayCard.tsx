"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface DayCardProps {
  date: Date;
}

export function DayCard({ date }: DayCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const day = date.getDate();

  return (
    <ResultCard
      className="day-card"
      icon={<Icon src="/images/calendar-day.svg" alt="Day" />}
      title={t("result.day")} // We might need to add this key
      value={
        useKanji ? (
          <>{day}日</>
        ) : (
          date.toLocaleDateString("en-US", { day: "numeric" })
        )
      }
      subtitle={
        useKanji
          ? date.toLocaleDateString("ja-JP", { weekday: "long" })
          : date.toLocaleDateString("en-US", { weekday: "long" })
      }
      valueStyle={{ fontSize: "1.8rem", lineHeight: "1.2" }}
    />
  );
}
