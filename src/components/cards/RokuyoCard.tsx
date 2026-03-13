"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type Rokuyo } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import { RokuyoIcon } from "../icons/RokuyoIcon";

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
      icon={<RokuyoIcon rokuyo={rokuyo} />}
      title={t("result.rokuyo")}
      value={useKanji ? rokuyo.nameKanji : rokuyo.name}
      subtitle={!useKanji ? rokuyo.nameKanji : undefined}
    />
  );
}
