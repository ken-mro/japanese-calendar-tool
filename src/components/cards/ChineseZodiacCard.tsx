import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type ChineseZodiac } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface ChineseZodiacCardProps {
  zodiac: ChineseZodiac;
}

export function ChineseZodiacCard({ zodiac }: ChineseZodiacCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  return (
    <ResultCard
      className="chinese-zodiac"
      iconClassName="zodiac-icons"
      icon={
        <>
          <Icon
            src={zodiac.heavenlyStemIcon}
            alt={zodiac.heavenlyStemKanji}
            title={zodiac.heavenlyStemKanji}
          />
          <Icon
            src={zodiac.icon}
            alt={zodiac.animal}
            title={zodiac.animalKanji}
          />
        </>
      }
      title={t("result.chineseZodiac")}
      value={useKanji ? zodiac.combined : zodiac.combinedRomaji}
      subtitle={
        useKanji
          ? `${zodiac.combinedReading}（${zodiac.earthlyBranchKanji}年）`
          : `${zodiac.combined} (Year of the ${zodiac.animal})`
      }
    />
  );
}
