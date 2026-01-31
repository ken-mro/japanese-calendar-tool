"use client";

import { useI18n } from "@/lib/i18n/config";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function DetailHeader() {
  const { t, language } = useI18n();

  return (
    <header className="header">
      <div className="header-content">
        <Link href={`/${language}`} className="back-link">
          ← {t("common.backToHome")}
        </Link>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
