import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type ChineseZodiac } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";

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
          <img
            src={zodiac.heavenlyStemIcon}
            alt={zodiac.heavenlyStemKanji}
            title={zodiac.heavenlyStemKanji}
            className="w-12 h-12 object-contain"
            style={{ width: "3rem", height: "3rem" }}
          />
          <img
            src={zodiac.icon}
            alt={zodiac.animal}
            title={zodiac.animalKanji}
            className="w-12 h-12 object-contain"
            style={{ width: "3rem", height: "3rem" }}
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
