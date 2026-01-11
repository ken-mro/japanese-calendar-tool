"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type MoonPhase } from "@/lib/calculations";
import { MoonPhaseIcon } from "../MoonPhaseIcon";
import { ResultCard } from "./ResultCard";

interface MoonPhaseCardProps {
  phase: MoonPhase;
}

export function MoonPhaseCard({ phase }: MoonPhaseCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="moon-phase"
      icon={<MoonPhaseIcon phase={phase} />}
      title={t("result.moonPhase")}
      value={useKanji ? phase.phaseKanji : phase.phase}
      subtitle={`${t("result.moonAge")}: ${phase.age}`}
    />
  );
}
