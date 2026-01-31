"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./OmikujiModal.module.css";
import { omikujiData, OmikujiEntry } from "@/data/omikuji";
import { useI18n } from "@/lib/i18n/config";
import { OmikujiIcon } from "./OmikujiIcon";

interface OmikujiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OmikujiModal: React.FC<OmikujiModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language } = useI18n(); // 'ja' or 'en'
  const [step, setStep] = useState<"start" | "animating" | "result">("start");
  const [result, setResult] = useState<OmikujiEntry | null>(null);

  // Mounted state for portal
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep("start");
      setResult(null);
    }
  }, [isOpen]);

  const handleDraw = () => {
    setStep("animating");

    // Pick random result id 1-50
    const randomId = Math.floor(Math.random() * 50) + 1;
    const selected =
      omikujiData.find((d) => d.id === randomId) || omikujiData[0];
    setResult(selected);

    // Animation duration
    setTimeout(() => {
      setStep("result");
    }, 2500);
  };

  if (!isOpen || !mounted) return null;

  const content = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.content}>
          {step === "start" && (
            <>
              <h2 className={styles.title}>
                {language === "ja" ? "おみくじ" : "Omikuji"}
              </h2>
              <div className={styles.boxImage}>
                {/* Static Box Icon Large */}
                <OmikujiIcon size={100} color="#b91c1c" />
              </div>
              <p style={{ marginBottom: "1rem", color: "#666" }}>
                {language === "ja"
                  ? "今日の運勢を占ってみましょう"
                  : "Draw a fortune to see your luck for today"}
              </p>
              <button className={styles.drawButton} onClick={handleDraw}>
                {language === "ja" ? "おみくじを引く" : "Draw Fortune"}
              </button>
            </>
          )}

          {step === "animating" && (
            <>
              <h2 className={styles.title}>
                {language === "ja" ? "...考え中..." : "...Shaking..."}
              </h2>
              <div className={`${styles.boxImage} ${styles.shaking}`}>
                <OmikujiIcon size={100} color="#b91c1c" />
              </div>
            </>
          )}

          {step === "result" && result && (
            <div className={styles.resultContainer}>
              <div style={{ fontSize: "1.2rem", color: "#666" }}>
                {/* No. X */}
                No. {result.id}
              </div>
              <div className={styles.resultTitle}>
                {result.result[language] || result.result.en}
              </div>

              <div className={styles.quote}>
                &quot;{result.quote[language] || result.quote.en}&quot;
              </div>
              <div className={styles.source}>
                — {result.source[language] || result.source.en}
              </div>

              <div className={styles.description}>
                {result.description[language] || result.description.en}
              </div>

              <div className={styles.detailsGrid}>
                <DetailRow
                  label={language === "ja" ? "願望" : "Wishes"}
                  value={result.details.wishes[language]}
                />
                <DetailRow
                  label={language === "ja" ? "恋愛" : "Love"}
                  value={result.details.love[language]}
                />
                <DetailRow
                  label={language === "ja" ? "待ち人" : "Visitor"}
                  value={result.details.visitor[language]}
                />
                <DetailRow
                  label={language === "ja" ? "商売" : "Business"}
                  value={result.details.business[language]}
                />
                <DetailRow
                  label={language === "ja" ? "学問" : "Studies"}
                  value={result.details.studies[language]}
                />
                <DetailRow
                  label={language === "ja" ? "健康" : "Health"}
                  value={result.details.health[language]}
                />
                <DetailRow
                  label={language === "ja" ? "住居" : "Residence"}
                  value={result.details.residence[language]}
                />
                <DetailRow
                  label={language === "ja" ? "旅立ち" : "Travel"}
                  value={result.details.travel[language]}
                />
              </div>

              <button
                className={styles.drawButton}
                onClick={onClose}
                style={{ marginTop: "2rem" }}
              >
                {language === "ja" ? "閉じる" : "Close"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.detailItem}>
    <span className={styles.detailLabel}>{label}</span>
    <span className={styles.detailValue}>{value}</span>
  </div>
);
