"use client";

import { useState, useEffect } from "react";
import { useI18n, useLanguage } from "@/lib/i18n/config";
import {
  getEraList,
  convertEraToWesternYear,
  getJapaneseEra,
} from "@/lib/calculations";

interface DateInputProps {
  onCalculate: (date: Date) => void;
}

type InputMode = "western" | "japanese";

export function DateInput({ onCalculate }: DateInputProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const [inputMode, setInputMode] = useState<InputMode>("western");
  const [year, setYear] = useState("");
  const [era, setEra] = useState("令和");
  const [eraYear, setEraYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");

  const eraList = getEraList();

  // Set default date to today
  useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear().toString());
    setMonth((today.getMonth() + 1).toString());
    setDay(today.getDate().toString());

    const japaneseEra = getJapaneseEra(today);
    if (japaneseEra) {
      setEra(japaneseEra.nameKanji);
      setEraYear(japaneseEra.year.toString());
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    let yearNum: number;

    if (inputMode === "western") {
      yearNum = parseInt(year, 10);
      if (isNaN(yearNum)) {
        setError(t("errors.invalidDate"));
        return;
      }
    } else {
      const eraYearNum = parseInt(eraYear, 10);
      if (isNaN(eraYearNum) || eraYearNum < 1) {
        setError(t("errors.invalidDate"));
        return;
      }
      const convertedYear = convertEraToWesternYear(era, eraYearNum);
      if (convertedYear === null) {
        setError(t("errors.invalidDate"));
        return;
      }
      yearNum = convertedYear;
    }

    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);

    // Validate inputs
    if (isNaN(monthNum) || isNaN(dayNum)) {
      setError(t("errors.invalidDate"));
      return;
    }

    if (yearNum < 1596) {
      setError(t("errors.dateOutOfRange"));
      return;
    }

    if (monthNum < 1 || monthNum > 12 || dayNum < 1 || dayNum > 31) {
      setError(t("errors.invalidDate"));
      return;
    }

    const date = new Date(yearNum, monthNum - 1, dayNum);

    // Check if the date is valid
    if (date.getMonth() !== monthNum - 1 || date.getDate() !== dayNum) {
      setError(t("errors.invalidDate"));
      return;
    }

    onCalculate(date);
  };

  return (
    <div className="date-input-container">
      <h2 className="section-title">{t("input.title")}</h2>

      {/* Input Mode Toggle */}
      <div className="input-mode-toggle">
        <span className="toggle-label">{t("input.inputMode")}:</span>
        <div className="toggle-buttons">
          <button
            type="button"
            className={`toggle-btn ${inputMode === "western" ? "active" : ""}`}
            onClick={() => setInputMode("western")}
          >
            {t("input.western")}
          </button>
          <button
            type="button"
            className={`toggle-btn ${inputMode === "japanese" ? "active" : ""}`}
            onClick={() => setInputMode("japanese")}
          >
            {t("input.japaneseEra")}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="date-form">
        <div className="input-group">
          {inputMode === "western" ? (
            <div className="input-field">
              <label htmlFor="year">{t("input.year")}</label>
              <input
                type="number"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder={t("input.placeholder.year")}
                min="1596"
                max="2100"
              />
            </div>
          ) : (
            <>
              <div className="input-field">
                <label htmlFor="era">{t("input.era")}</label>
                <input
                  type="text"
                  id="era"
                  value={era}
                  onChange={(e) => setEra(e.target.value)}
                  list="era-list"
                  className="era-input"
                  placeholder={
                    language === "ja" ? "例: 令和, 昭和" : "e.g., Reiwa, Showa"
                  }
                  autoComplete="off"
                />
                <datalist id="era-list">
                  {eraList.map((e) => (
                    <option key={e.nameKanji} value={e.nameKanji}>
                      {language === "ja"
                        ? `${e.nameKanji} (${e.startYear}年〜)`
                        : `${e.name} (${e.nameKanji}, ${e.startYear}~)`}
                    </option>
                  ))}
                </datalist>
              </div>
              <div className="input-field">
                <label htmlFor="eraYear">{t("input.eraYear")}</label>
                <input
                  type="number"
                  id="eraYear"
                  value={eraYear}
                  onChange={(e) => setEraYear(e.target.value)}
                  placeholder={t("input.placeholder.eraYear")}
                  min="1"
                />
              </div>
            </>
          )}
          <div className="input-field">
            <label htmlFor="month">{t("input.month")}</label>
            <input
              type="number"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder={t("input.placeholder.month")}
              min="1"
              max="12"
            />
          </div>
          <div className="input-field">
            <label htmlFor="day">{t("input.day")}</label>
            <input
              type="number"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder={t("input.placeholder.day")}
              min="1"
              max="31"
            />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="calculate-btn">
          {t("input.calculate")}
        </button>
      </form>
    </div>
  );
}
