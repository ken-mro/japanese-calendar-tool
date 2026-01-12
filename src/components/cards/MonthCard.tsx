"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface MonthCardProps {
  date: Date;
}

import { getWafuGetsumei } from "@/lib/calculations";

export function MonthCard({ date }: MonthCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const month = date.getMonth() + 1;
  const wafuGetsumei = getWafuGetsumei(date);

  return (
    <ResultCard
      className="month-card"
      icon={<Icon src="/images/calendar-month.svg" alt="Month" />}
      title={t("result.month")}
      value={
        useKanji ? (
          <div className="flex flex-col items-center">
            <span>
              {month}月{" "}
              <span className="text-lg text-[var(--text-secondary)]">
                ({wafuGetsumei.name})
              </span>
            </span>
          </div>
        ) : (
          date.toLocaleDateString("en-US", { month: "long" })
        )
      }
      valueStyle={{ fontSize: "1.8rem", lineHeight: "1.2" }}
      subtitle={
        !useKanji ? (
          <span className="text-[var(--text-secondary)]">
            {wafuGetsumei.romaji} ({wafuGetsumei.name})
          </span>
        ) : undefined
      }
    />
  );
}
