"use client";

import { useI18n } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useI18n();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <span className="logo-icon">🗾</span>
          <h1 className="site-title">{t("common.title")}</h1>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
