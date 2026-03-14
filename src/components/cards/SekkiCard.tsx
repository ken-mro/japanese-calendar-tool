"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type NijushiSekkiResult } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import { SekkiIcon } from "../icons/SekkiIcon";

interface SekkiCardProps {
  sekki: NijushiSekkiResult;
}

export function SekkiCard({ sekki }: SekkiCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const term = sekki.isExactDate ? sekki.exactTerm! : sekki.current;

  const value = useKanji ? term.kanji : term.romaji;
  const subtitle = useKanji ? term.reading : term.kanji;
  const note = undefined;

  return (
    <ResultCard
      icon={<SekkiIcon termIndex={term.index} isExactDate={sekki.isExactDate} />}
      title={t("result.nijushiSekki")}
      value={value}
      subtitle={subtitle}
      note={note}
    />
  );
}
