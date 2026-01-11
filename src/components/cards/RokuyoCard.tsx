"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type Rokuyo } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";

interface RokuyoCardProps {
  rokuyo: Rokuyo;
}

export function RokuyoCard({ rokuyo }: RokuyoCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="rokuyo"
      icon={
        <img
          src={`/images/rokuyo/${rokuyo.reading}.svg`}
          alt={rokuyo.name}
          className="w-12 h-12 object-contain"
          style={{ width: "3rem", height: "3rem" }}
        />
      }
      title={t("result.rokuyo")}
      value={useKanji ? rokuyo.nameKanji : rokuyo.name}
      subtitle={!useKanji ? rokuyo.nameKanji : undefined}
    />
  );
}
