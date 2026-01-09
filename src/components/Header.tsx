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

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button
            onClick={() => {
              const element = document.getElementById("about-section");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="info-btn"
            title={t("common.aboutThisTool")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-kogane)",
              padding: "0.5rem",
              borderRadius: "50%",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(198, 170, 88, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
