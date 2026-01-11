"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type ZodiacSign } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface ZodiacSignCardProps {
  sign: ZodiacSign;
}

export function ZodiacSignCard({ sign }: ZodiacSignCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="zodiac-sign"
      icon={<Icon src={sign.icon} alt={sign.name} />}
      title={t("result.zodiacSign")}
      value={useKanji ? sign.nameKanji : sign.name}
      subtitle={!useKanji ? sign.nameKanji : undefined}
    />
  );
}
