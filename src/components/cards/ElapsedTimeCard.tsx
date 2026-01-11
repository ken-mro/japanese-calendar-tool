"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface Duration {
  years: number;
  months: number;
  days: number;
  isFuture: boolean;
}

interface ElapsedTimeCardProps {
  totalDays: number;
  absTotalDays: number;
  duration: Duration;
}

export function ElapsedTimeCard({
  totalDays,
  absTotalDays,
  duration,
}: ElapsedTimeCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="elapsed-time"
      style={{ borderTop: "4px solid #8e44ad" }}
      icon={<Icon src="/images/hourglass.svg" alt="Hourglass" />}
      title={t("result.elapsedTitle")}
      value={
        <>
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
        </>
      }
      subtitle={
        <>
          {duration.years}
          {t("result.years")} {duration.months}
          {t("result.months")} {duration.days}
          {t("result.days")}
        </>
      }
    />
  );
}
