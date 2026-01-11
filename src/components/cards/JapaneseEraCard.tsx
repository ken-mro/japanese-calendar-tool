import { useI18n, useLanguage } from "@/lib/i18n/config";
import { formatJapaneseEra, type JapaneseEra } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";

interface JapaneseEraCardProps {
  era: JapaneseEra | null;
}

export function JapaneseEraCard({ era }: JapaneseEraCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="japanese-era"
      icon={
        <img
          src="/images/japanese-era-icon.svg"
          alt="Japanese Era"
          className="w-12 h-12 object-contain"
          style={{ width: "3rem", height: "3rem" }}
        />
      }
      title={t("result.japaneseEra")}
      value={era ? formatJapaneseEra(era, useKanji) : "-"}
      subtitle={
        era && !useKanji ? (
          <>
            {era.nameKanji}
            {era.year === 1 ? "元年" : era.year + "年"}
          </>
        ) : undefined
      }
    />
  );
}
