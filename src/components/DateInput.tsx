"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/config";

interface DateInputProps {
  onCalculate: (date: Date) => void;
}

export function DateInput({ onCalculate }: DateInputProps) {
  const { t } = useI18n();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const yearNum = parseInt(year, 10);
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);

    // Validate inputs
    if (isNaN(yearNum) || isNaN(monthNum) || isNaN(dayNum)) {
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
      <form onSubmit={handleSubmit} className="date-form">
        <div className="input-group">
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
