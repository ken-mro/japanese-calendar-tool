"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Header,
  DateInput,
  ResultDisplay,
  ShareButtons,
  ProtectedEmail,
  HomeDescription,
} from "@/components";
import { useI18n } from "@/lib/i18n/config";

export default function Home() {
  const { t } = useI18n();
  const [resultData, setResultData] = useState<{
    targetDate: Date;
    sourceDate: Date;
    offsetDays: number;
  } | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
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

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <div className="app-container">
      <Header onToggleAbout={toggleAbout} />
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
        <HomeDescription isOpen={isAboutOpen} onToggle={toggleAbout} />
      </main>
      <footer className="footer">
        <p className="footer-links">
          <Link href="/terms" className="footer-link">
            {t("common.terms")}
          </Link>
          <span className="footer-separator">|</span>
          <Link href="/privacy" className="footer-link">
            {t("common.privacy")}
          </Link>
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
