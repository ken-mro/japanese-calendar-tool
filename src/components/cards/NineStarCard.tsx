"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type NineStar } from "@/lib/calculations";
import { NineStarIcon } from "../icons/NineStarIcon";
import { ResultCard } from "./ResultCard";

interface NineStarCardProps {
  nineStar: NineStar;
  hideNote?: boolean;
}

export function NineStarCard({
  nineStar,
  hideNote = false,
}: NineStarCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="nine-star"
      icon={<NineStarIcon colorName={nineStar.color} style={{ width: '3rem', height: '3rem' }} />}
      title={t("result.nineStar")}
      value={useKanji ? `${nineStar.nameKanji}` : `${nineStar.name}`}
      subtitle={!useKanji ? `${nineStar.nameKanji}` : undefined}
      note={
        !hideNote && nineStar.isApproximate
          ? t("result.nineStarApproximate")
          : undefined
      }
    />
  );
}
