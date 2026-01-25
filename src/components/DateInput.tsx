"use client";

import { useState } from "react";
import { useI18n, useLanguage } from "@/lib/i18n/config";
import {
  getEraList,
  convertEraToWesternYear,
  getJapaneseEra,
} from "@/lib/calculations";

export interface InputState {
  inputMode: "western" | "japanese";
  year: string;
  era: string;
  eraYear: string;
  month: string;
  day: string;
  offsetDays: string;
  offsetDirection: "after" | "before";
  monthType: "calendar" | "solar";
}

interface DateInputProps {
  onCalculate: (
    date: Date,
    offsetDays: number,
    monthType: "calendar" | "solar",
    inputState: InputState,
  ) => void;
  initialState?: InputState;
}

type InputMode = "western" | "japanese";

export function DateInput({ onCalculate, initialState }: DateInputProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const [inputMode, setInputMode] = useState<InputMode>(
    initialState?.inputMode || "western",
  );
  const [year, setYear] = useState(
    () => initialState?.year || new Date().getFullYear().toString(),
  );
  const [era, setEra] = useState(() => {
    if (initialState?.era) return initialState.era;
    const e = getJapaneseEra(new Date());
    return e ? e.nameKanji : "令和";
  });
  const [eraYear, setEraYear] = useState(() => {
    if (initialState?.eraYear) return initialState.eraYear;
    const e = getJapaneseEra(new Date());
    return e ? e.year.toString() : "";
  });
  const [month, setMonth] = useState(
    () => initialState?.month || (new Date().getMonth() + 1).toString(),
  );
  const [day, setDay] = useState(
    () => initialState?.day || new Date().getDate().toString(),
  );
  const [offsetDays, setOffsetDays] = useState(initialState?.offsetDays || "0");
  const [offsetDirection, setOffsetDirection] = useState<"after" | "before">(
    initialState?.offsetDirection || "after",
  );
  const [error, setError] = useState("");

  const [monthType, setMonthType] = useState<"calendar" | "solar">(
    initialState?.monthType || "solar",
  );

  const eraList = getEraList();

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

    const offset = parseInt(offsetDays, 10);
    if (isNaN(offset)) {
      setError(t("errors.invalidDate"));
      return;
    }

    const finalOffset = offsetDirection === "after" ? offset : -offset;

    const currentState: InputState = {
      inputMode,
      year,
      era,
      eraYear,
      month,
      day,
      offsetDays,
      offsetDirection,
      monthType,
    };

    onCalculate(date, finalOffset, monthType, currentState);
  };

  return (
    <div className="date-input-container">
      <h2 className="section-title">{t("input.title")}</h2>

      <div className="input-settings-row">
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

        <div className="input-mode-toggle">
          <span className="toggle-label">{t("input.monthType")}:</span>
          <div className="toggle-buttons">
            <button
              type="button"
              className={`toggle-btn ${monthType === "calendar" ? "active" : ""}`}
              onClick={() => setMonthType("calendar")}
            >
              {t("input.calendarMonth")}
            </button>
            <button
              type="button"
              className={`toggle-btn ${monthType === "solar" ? "active" : ""}`}
              onClick={() => setMonthType("solar")}
            >
              {t("input.solarMonth")}
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="date-form">
        <div className={`input-group mode-${inputMode}`}>
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
              <div className="input-field era-field">
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
              <div className="input-field era-year-field">
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
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="date-select"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="day">{t("input.day")}</label>
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="date-select"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="input-field offset-field">
            <label>{t("input.offsetLabel")}</label>
            <div className="offset-input-group">
              <input
                type="number"
                id="offset"
                value={offsetDays}
                onChange={(e) => setOffsetDays(e.target.value)}
                placeholder={t("input.placeholder.offset")}
                min="0"
              />
              <div className="offset-toggle">
                <button
                  type="button"
                  className={`toggle-btn small ${
                    offsetDirection === "after" ? "active" : ""
                  }`}
                  onClick={() => setOffsetDirection("after")}
                >
                  {t("input.daysAfter")}
                </button>
                <button
                  type="button"
                  className={`toggle-btn small ${
                    offsetDirection === "before" ? "active" : ""
                  }`}
                  onClick={() => setOffsetDirection("before")}
                >
                  {t("input.daysBefore")}
                </button>
              </div>
            </div>
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
