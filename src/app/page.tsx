"use client";

import { useState, useRef, useEffect } from "react";
import {
  Header,
  DateInput,
  ResultDisplay,
  ShareButtons,
  ProtectedEmail,
} from "@/components";
import { useI18n } from "@/lib/i18n/config";

export default function Home() {
  const { t } = useI18n();
  const [resultData, setResultData] = useState<{
    targetDate: Date;
    sourceDate: Date;
    offsetDays: number;
  } | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultData && resultsRef.current) {
      // Small timeout to ensure DOM is ready and layout is stable
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [resultData]);

  const handleCalculate = (date: Date, offsetDays: number) => {
    const target = new Date(date);
    target.setDate(date.getDate() + offsetDays);
    setResultData({ targetDate: target, sourceDate: date, offsetDays });
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <DateInput onCalculate={handleCalculate} />
        <div ref={resultsRef} className="results-wrapper">
          {resultData && (
            <ResultDisplay
              targetDate={resultData.targetDate}
              sourceDate={resultData.sourceDate}
              offsetDays={resultData.offsetDays}
            />
          )}
        </div>
        <ShareButtons resultData={resultData} />
      </main>
      <footer className="footer">
        <p className="footer-links">
          <a href="/terms" className="footer-link">
            {t("common.terms")}
          </a>
          <span className="footer-separator">|</span>
          <a href="/privacy" className="footer-link">
            {t("common.privacy")}
          </a>
        </p>
        <p className="footer-contact">
          {t("common.contact")}: <ProtectedEmail />
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Japanese Calendar Tool
        </p>
      </footer>
    </div>
  );
}
