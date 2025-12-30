"use client";

import { useI18n } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useI18n();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="site-title">
            <span className="mobile-title">{t("common.titleMobile")}</span>
            <span className="desktop-title">{t("common.title")}</span>
          </h1>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
