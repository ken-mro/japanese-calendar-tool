import { useI18n, useLanguage } from "@/lib/i18n/config";
import { formatJapaneseEra, type JapaneseEra } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

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
      icon={<Icon src="/images/japanese-era-icon.svg" alt="Japanese Era" />}
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
