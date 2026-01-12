import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type ChineseZodiac } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface ChineseZodiacCardProps {
  zodiac: ChineseZodiac;
  variant?: "year" | "month" | "day";
}

export function ChineseZodiacCard({
  zodiac,
  variant = "year",
}: ChineseZodiacCardProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const useKanji = language === "ja";

  const getSubtitle = () => {
    if (useKanji) {
      if (variant === "year")
        return `${zodiac.combinedReading}（${zodiac.earthlyBranchKanji}年）`;
      return zodiac.combinedReading;
    } else {
      let variantText = "Year";
      if (variant === "month") variantText = "Month";
      if (variant === "day") variantText = "Day";
      return `${zodiac.combined} (${variantText} of the ${zodiac.animal})`;
    }
  };

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
      subtitle={getSubtitle()}
    />
  );
}
