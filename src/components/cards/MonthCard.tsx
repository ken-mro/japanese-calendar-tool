"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface MonthCardProps {
  date: Date;
}

export function MonthCard({ date }: MonthCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const month = date.getMonth() + 1;

  return (
    <ResultCard
      className="month-card"
      icon={<Icon src="/images/calendar-month.svg" alt="Month" />}
      title={t("result.month")} // We might need to add this key or use a generic one
      value={
        useKanji ? (
          <>{month}月</>
        ) : (
          date.toLocaleDateString("en-US", { month: "long" })
        )
      }
      valueStyle={{ fontSize: "1.8rem", lineHeight: "1.2" }}
    />
  );
}
