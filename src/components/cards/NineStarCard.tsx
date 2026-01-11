"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type NineStar } from "@/lib/calculations";
import { NineStarIcon } from "../icons/NineStarIcon";
import { ResultCard } from "./ResultCard";

interface NineStarCardProps {
  nineStar: NineStar;
}

export function NineStarCard({ nineStar }: NineStarCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="nine-star"
      icon={<NineStarIcon colorName={nineStar.color} />}
      title={t("result.nineStar")}
      value={useKanji ? `${nineStar.nameKanji}` : `${nineStar.name}`}
      subtitle={!useKanji ? `${nineStar.nameKanji}` : undefined}
      note={
        nineStar.isApproximate ? t("result.nineStarApproximate") : undefined
      }
    />
  );
}
