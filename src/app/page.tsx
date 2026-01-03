"use client";

import { useState, useRef, useEffect } from "react";
import { Header, DateInput, ResultDisplay, ShareButtons } from "@/components";
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
        <ShareButtons />
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Japanese Calendar Tool |{" "}
          <a href="/terms" className="footer-link">
            {t("common.terms")}
          </a>{" "}
          |{" "}
          <a href="/privacy" className="footer-link">
            {t("common.privacy")}
          </a>{" "}
          | Contact:{" "}
          <a
            href="#"
            className="contact-link"
            onClick={(e) => {
              e.preventDefault();
              const email = `mailto:${"bacon.dev.6396"}@${"gmail.com"}`;
              const subject = "?subject=Japanese Calendar Tool - Inquiry";
              window.location.href = email + subject;
            }}
          >
            bacon.dev.6396@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
