"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type Senjitsu } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import { SenjitsuIcon } from "../icons/SenjitsuIcon";

interface SenjitsuCardProps {
  senjitsu: Senjitsu;
}

export function SenjitsuCard({ senjitsu }: SenjitsuCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      icon={<SenjitsuIcon senjitsu={senjitsu} />}
      title={t("result.senjitsu")}
      value={useKanji ? senjitsu.name : senjitsu.romaji}
      subtitle={!useKanji ? senjitsu.name : undefined}
      note={useKanji ? senjitsu.meaningJa : senjitsu.meaning}
    />
  );
}
