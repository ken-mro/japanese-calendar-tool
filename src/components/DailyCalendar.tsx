"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useI18n, useLanguage } from "@/lib/i18n/config";
import {
  getJapaneseEra,
  getChineseZodiac,
  getNineStar,
  getRokuyo,
  getMoonPhase,
  getMonthZodiac,
  getMonthNineStar,
  getDayZodiac,
  getDayNineStar,
  getJuniChoku,
  getSenjitsu,
} from "@/lib/calculations";
import { getSolarYear } from "@/lib/calculations/solarTerms";
import Icon from "./icons/Icon";
import { SenjitsuIcon } from "./icons/SenjitsuIcon";
import { NineStarIcon } from "./icons/NineStarIcon";

interface DailyCalendarProps {
  initialDate?: Date;
}

export function DailyCalendar({ initialDate }: DailyCalendarProps) {
  const { t } = useI18n();
  const language = useLanguage();
  const isJa = language === "ja";
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize from query param OR props OR today
  const [currentDate, setCurrentDate] = useState(() => {
    const queryDate = searchParams.get("date");
    if (queryDate) {
      const parsed = new Date(queryDate);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }
    return initialDate || new Date();
  });

  const [monthType, setMonthType] = useState<"calendar" | "solar">("solar");

  // Sync state to URL when date changes
  useEffect(() => {
    const y = currentDate.getFullYear();
    const m = String(currentDate.getMonth() + 1).padStart(2, "0");
    const d = String(currentDate.getDate()).padStart(2, "0");
    const dateStr = `${y}-${m}-${d}`;

    // Check if URL already has this date to avoid loops/redundant pushes
    const currentParam = searchParams.get("date");
    if (currentParam !== dateStr) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("date", dateStr);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [currentDate, pathname, router, searchParams]);

  const handlePrevDay = () => {
    const prev = new Date(currentDate);
    prev.setDate(prev.getDate() - 1);
    setCurrentDate(prev);
  };

  const handleNextDay = () => {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + 1);
    setCurrentDate(next);
  };

  // Calculations
  const targetDate = currentDate;

  // Year
  const japaneseEra = getJapaneseEra(targetDate);
  const chineseZodiacYear = getSolarYear(targetDate);
  const chineseZodiac = getChineseZodiac(chineseZodiacYear);
  const nineStar = getNineStar(targetDate);
  const nineStarName = isJa ? nineStar.nameKanji : nineStar.name;

  // Month
  const isSolarMonth = monthType === "solar";
  const monthZodiac = getMonthZodiac(targetDate, isSolarMonth);
  const monthNineStar = getMonthNineStar(targetDate);
  const monthNineStarName = isJa ? monthNineStar.nameKanji : monthNineStar.name;

  // Day
  const dayZodiac = getDayZodiac(targetDate);
  const dayNineStar = getDayNineStar(targetDate);
  const dayNineStarName = isJa ? dayNineStar.nameKanji : dayNineStar.name;

  const rokuyo = getRokuyo(targetDate);
  const rokuyoName = isJa ? rokuyo.nameKanji : rokuyo.name;

  const moonPhase = getMoonPhase(targetDate);
  const moonPhaseName = isJa ? moonPhase.phaseKanji : moonPhase.phase;

  const juniChoku = getJuniChoku(targetDate);
  const juniChokuName = isJa
    ? juniChoku.name
    : `${juniChoku.romaji} (${juniChoku.name})`;

  const senjitsuList = getSenjitsu(targetDate);

  // Icons
  const rokuyoIconSrc = `/images/rokuyo/${rokuyo.name.toLowerCase()}.svg`;
  const moonIconSrc = `/images/moon/${moonPhase.iconType}.svg`;

  // Main Display
  const dayNumber = targetDate.getDate();
  const dayOfWeek = targetDate.toLocaleDateString(isJa ? "ja-JP" : "en-US", {
    weekday: "long",
  });
  const monthName = targetDate.toLocaleDateString(isJa ? "ja-JP" : "en-US", {
    month: "long",
  });
  const yearStr = targetDate.getFullYear();

  return (
    <div
      className="daily-calendar-container"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      {/* Controls & Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          className="input-mode-toggle"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <span
            className="toggle-label"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("input.monthType")}:
          </span>
          <div
            className="toggle-buttons"
            style={{
              display: "flex",
              background: "rgba(0, 0, 0, 0.3)",
              borderRadius: "4px",
              padding: "0.25rem",
              border: "1px solid rgba(198, 170, 88, 0.2)",
            }}
          >
            <button
              onClick={() => setMonthType("calendar")}
              className={`toggle-btn ${monthType === "calendar" ? "active" : ""}`}
            >
              {t("input.calendarMonth")}
            </button>
            <button
              onClick={() => setMonthType("solar")}
              className={`toggle-btn ${monthType === "solar" ? "active" : ""}`}
            >
              {t("input.solarMonth")}
            </button>
          </div>
        </div>

        {/* Enhanced Navigation Buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={handlePrevDay}
            className="btn-nav-styled"
            title={t("common.prev") || "Previous"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #c0392b",
              backgroundColor: "#fff",
              color: "#c0392b",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c0392b";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#c0392b";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNextDay}
            className="btn-nav-styled"
            title={t("common.next") || "Next"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #c0392b",
              backgroundColor: "#fff",
              color: "#c0392b",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c0392b";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#c0392b";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Himekuri Paper Sheet */}
      <div
        className="himekuri-sheet"
        style={{
          backgroundColor: "#fdfdf6",
          backgroundImage:
            "url('/images/washi-texture.png'), linear-gradient(to bottom, #fdfdf6, #f4f4e8)",
          backgroundBlendMode: "multiply",
          border: "1px solid #d4d4d4",
          borderTop: "8px solid #c0392b",
          borderRadius: "4px",
          padding: "2rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15), 0 2px 5px rgba(0,0,0,0.1)",
          color: "#2c3e50",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Noto Serif JP', serif",
        }}
      >
        {/* Top Header: Date Context */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderBottom: "2px dashed #e0e0e0",
            paddingBottom: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Left: Year Info */}
          <div
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div style={{ fontSize: "1.1rem" }}>{yearStr} </div>
            {japaneseEra && (
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "#c0392b",
                  marginBottom: "0.5rem",
                }}
              >
                {japaneseEra.nameKanji}
                {japaneseEra.year}年
              </div>
            )}

            {/* Year Grid Alignment */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              {/* Zodiac Row */}
              <div
                style={{
                  display: "flex",
                  width: "48px",
                  justifyContent: "space-between",
                }}
              >
                <Icon
                  src={chineseZodiac.heavenlyStemIcon}
                  alt={chineseZodiac.heavenlyStemKanji}
                  size={24}
                />
                <Icon
                  src={chineseZodiac.icon}
                  alt={chineseZodiac.animal}
                  size={24}
                />
              </div>
              <div style={{ fontSize: "1rem" }}>
                {isJa ? chineseZodiac.combined : chineseZodiac.combinedRomaji} (
                {isJa ? chineseZodiac.animalKanji : chineseZodiac.animal})
              </div>

              {/* Nine Star Row - Center icon in 48px space */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "48px",
                }}
              >
                <NineStarIcon
                  colorName={nineStar.color}
                  style={{ width: "1.2rem", height: "1.2rem" }}
                />
              </div>
              <div style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                {nineStarName}
              </div>
            </div>
          </div>

          {/* Right: Month Info */}
          <div
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "flex-end", // Ensure content aligns right
            }}
          >
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              {monthName}{" "}
              {!isJa && (
                <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  ({targetDate.getMonth() + 1})
                </span>
              )}
            </div>

            {/* Month Grid Alignment - Right Aligned Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "end",
              }}
            >
              {/* Zodiac Row: Text first then Icons (visually right aligned) */}
              <div style={{ fontSize: "1rem" }}>
                {isJa ? monthZodiac.combined : monthZodiac.combinedRomaji}
              </div>
              <div
                style={{
                  display: "flex",
                  width: "48px",
                  justifyContent: "space-between",
                }}
              >
                <Icon
                  src={monthZodiac.heavenlyStemIcon}
                  alt={monthZodiac.heavenlyStemKanji}
                  size={20} // Keeping user size preference? Or making consistent 24? Let's check user edits. User had 20.
                />
                <Icon
                  src={monthZodiac.icon}
                  alt={monthZodiac.animal}
                  size={20}
                />
              </div>

              {/* Nine Star Row */}
              <div style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                {monthNineStarName}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "48px",
                }}
              >
                <NineStarIcon
                  colorName={monthNineStar.color}
                  style={{ width: "1.2rem", height: "1.2rem" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center: The Day */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Left Vertical: Rokuyo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              borderRight: isJa ? "2px solid #eee" : "none",
              paddingRight: isJa ? "1.5rem" : "0",
              borderBottom: isJa ? "none" : "2px solid #eee",
              paddingBottom: isJa ? "0" : "1rem",
              minWidth: "80px",
            }}
          >
            <Icon src={rokuyoIconSrc} alt={rokuyoName} size={48} />
            <div
              style={{
                writingMode: isJa ? "vertical-rl" : "horizontal-tb",
                textOrientation: "upright",
                fontSize: isJa ? "2rem" : "1.2rem",
                fontWeight: "bold",
                color: "#c0392b",
                letterSpacing: "0.2rem",
                whiteSpace: "nowrap",
              }}
            >
              {rokuyoName}
            </div>
          </div>

          {/* Main Day Number */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "10rem",
                fontWeight: "900",
                lineHeight: 0.9,
                fontFamily: "'Century Gothic', 'Futura', sans-serif",
                color: "#2c3e50",
              }}
            >
              {dayNumber}
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginTop: "1rem",
                color: "#34495e",
              }}
            >
              {dayOfWeek.replace("日", "")}
            </div>
          </div>

          {/* Right Vertical: Choku */}
          <div
            style={{
              writingMode: isJa ? "vertical-rl" : "horizontal-tb",
              textOrientation: "upright",
              fontSize: "1.2rem",
              color: "#555",
              letterSpacing: "0.2rem",
              borderLeft: isJa ? "2px solid #eee" : "none",
              paddingLeft: isJa ? "1.5rem" : "0",
              borderTop: isJa ? "none" : "2px solid #eee",
              paddingTop: isJa ? "0" : "1rem",
              display: "flex",
              flexDirection: isJa ? "row" : "column",
              gap: "1rem",
              minWidth: "60px",
              alignItems: "center",
            }}
          >
            <div
              className="font-brush"
              style={{ fontSize: isJa ? "2rem" : "1.2rem" }}
            >
              {juniChokuName}
            </div>
          </div>
        </div>

        {/* Bottom Section: Details Grid */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: "8px",
            padding: "1rem",
            border: "1px solid #eee",
          }}
          className="daily-details-grid"
        >
          {/* Day Details - Organized with Grid for Alignment */}
          <div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#7f8c8d",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #ccc",
                paddingBottom: "0.2rem",
              }}
            >
              {t("result.day") || (isJa ? "日の干支・九星" : "Day Info")}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                rowGap: "0.8rem",
                columnGap: "0.8rem",
                alignItems: "center",
              }}
            >
              {/* Zodiac Row */}
              <div style={{ display: "flex" }}>
                <Icon
                  src={dayZodiac.heavenlyStemIcon}
                  alt={dayZodiac.heavenlyStemKanji}
                  size={32}
                />
                <Icon src={dayZodiac.icon} alt={dayZodiac.animal} size={32} />
              </div>
              <div>
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {isJa ? dayZodiac.combined : dayZodiac.combinedRomaji}
                </div>
                {/* Simplified view, removing secondary reading to keep alignment clean if needed, or keep provided space allows */}
                <div style={{ fontSize: "0.85rem", color: "#666" }}>
                  {dayZodiac.combinedReading}
                </div>
              </div>

              {/* Nine Star Row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "64px",
                }}
              >
                {" "}
                {/* Align icon center of 64px (32+32) roughly */}
                <NineStarIcon
                  colorName={dayNineStar.color}
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
              <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                {dayNineStarName}
              </div>
            </div>
          </div>

          {/* Moon */}
          <div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#7f8c8d",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #ccc",
                paddingBottom: "0.2rem",
              }}
            >
              {t("result.moonPhase") || (isJa ? "月" : "Moon")}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "0.8rem",
              }}
            >
              <Icon src={moonIconSrc} alt={moonPhaseName} size={32} />
              <div>
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {moonPhaseName}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#666" }}>
                  {t("result.moonAge")} {Math.round(moonPhase.age * 10) / 10}
                </div>
              </div>
            </div>
          </div>

          {/* Senjitsu Section */}
          <div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#7f8c8d",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #ccc",
                paddingBottom: "0.2rem",
              }}
            >
              {t("result.senjitsu") || (isJa ? "選日" : "Selected Days")}
            </div>

            {senjitsuList.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {senjitsuList.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <SenjitsuIcon senjitsu={s} />
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        color: "#2c3e50",
                      }}
                    >
                      {isJa ? s.name : s.romaji || s.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ color: "#999", fontSize: "0.9rem" }}>-</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
