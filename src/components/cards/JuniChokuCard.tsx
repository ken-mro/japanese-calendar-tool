"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type JuniChoku } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface JuniChokuCardProps {
  choku: JuniChoku;
}

export function JuniChokuCard({ choku }: JuniChokuCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="junichoku"
      icon={<Icon src="/images/junichoku.svg" alt={choku.name} />}
      title={t("result.junichoku")}
      value={useKanji ? choku.name : choku.romaji}
      subtitle={useKanji ? choku.reading : choku.name}
    />
  );
}
