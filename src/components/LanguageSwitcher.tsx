"use client";

import { useI18n, Language } from "@/lib/i18n/config";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  const handleChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => handleChange("ja")}
        className={`lang-btn ${language === "ja" ? "active" : ""}`}
        aria-label={t("common.japanese")}
      >
        日本語
      </button>
      <span className="separator">|</span>
      <button
        onClick={() => handleChange("en")}
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        aria-label={t("common.english")}
      >
        EN
      </button>
    </div>
  );
}
