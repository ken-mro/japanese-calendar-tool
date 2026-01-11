"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type ZodiacSign } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";

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
      icon={
        <img
          src={sign.icon}
          alt={sign.name}
          className="w-12 h-12 object-contain"
          style={{ width: "3rem", height: "3rem" }}
        />
      }
      title={t("result.zodiacSign")}
      value={useKanji ? sign.nameKanji : sign.name}
      subtitle={!useKanji ? sign.nameKanji : undefined}
    />
  );
}
