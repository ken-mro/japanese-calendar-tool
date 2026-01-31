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

  // Calculations
  const targetDate = currentDate;

  // Year
  const japaneseEra = getJapaneseEra(targetDate);
  const chineseZodiacYear =
    monthType === "solar" ? getSolarYear(targetDate) : targetDate.getFullYear();
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
  const juniChokuName = isJa ? `${juniChoku.name}` : `${juniChoku.name}`;
  const juniChokuNameRomaji = isJa
    ? `${juniChoku.reading}`
    : `${juniChoku.romaji}`;

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

  // Animation Direction
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | null>(
    null,
  );

  // Swipe Logic
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextDay();
    } else if (isRightSwipe) {
      handlePrevDay();
    }
  };

  // Enhanced Navigation Handlers with Direction
  const handleNextDay = () => {
    setSlideDirection("next");
    const next = new Date(currentDate);
    next.setDate(next.getDate() + 1);
    setCurrentDate(next);
  };

  const handlePrevDay = () => {
    setSlideDirection("prev");
    const prev = new Date(currentDate);
    prev.setDate(prev.getDate() - 1);
    setCurrentDate(prev);
  };

  const handleToday = () => {
    setSlideDirection("next"); // Or null/fade? using next for now as it's likely moving forward or just reset
    const today = new Date();
    // Reset to today. Note: If we want to support user's local time vs server time needed?
    // Using new Date() is client usage as well.
    setCurrentDate(today);
  };

  return (
    <div
      className="daily-calendar-container"
      style={{
        maxWidth: "800px",
        margin: "1rem auto",
        position: "relative", // Needed for absolute positioning of tap zones
        touchAction: "pan-y", // Allow vertical scroll, handle horizontal swipe in JS
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
          position: "relative",
          zIndex: 20,
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

        {/* Today Button */}
        <button
          onClick={handleToday}
          disabled={
            currentDate.getDate() === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear()
          }
          className="btn-today"
          style={{
            fontWeight: "bold",
            padding: "0.5rem 1rem",
            backgroundColor:
              currentDate.getDate() === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
                ? "#f0f0f0"
                : "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "4px",
            height: "100%", // Match height of toggle
            cursor:
              currentDate.getDate() === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
                ? "default"
                : "pointer",
            fontSize: "0.9rem",
            color:
              currentDate.getDate() === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
                ? "#aaa"
                : "#555",
            opacity:
              currentDate.getDate() === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
                ? 0.7
                : 1,
            transition: "all 0.2s ease",
            display: "flex", // Ensure flex alignment if needed
            alignItems: "center",
          }}
          onMouseEnter={(e) => {
            if (e.currentTarget.disabled) return;
            e.currentTarget.style.backgroundColor = "#f5f5f5";
            e.currentTarget.style.borderColor = "#c0392b";
            e.currentTarget.style.color = "#c0392b";
          }}
          onMouseLeave={(e) => {
            if (e.currentTarget.disabled) return;
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.borderColor = "#d4d4d4";
            e.currentTarget.style.color = "#555";
          }}
        >
          {t("common.today") || "Today"}
        </button>
      </div>

      {/* Himekuri Paper Sheet with Animation */}
      <div
        key={targetDate.toISOString()} // Trigger re-render/animation on date change
        className={`himekuri-sheet ${
          slideDirection === "next"
            ? "animate-slide-next"
            : slideDirection === "prev"
              ? "animate-slide-prev"
              : ""
        }`}
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
          zIndex: 5,
        }}
      >
        {/* Tap Zone Left (Prev) - Overlay on Card */}
        <div
          onClick={handlePrevDay}
          className="tap-zone left-zone"
          aria-label={t("common.prev") || "Previous Day"}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.3)",
              color: "white",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>

        {/* Tap Zone Right (Next) - Overlay on Card */}
        <div
          onClick={handleNextDay}
          className="tap-zone right-zone"
          aria-label={t("common.next") || "Next Day"}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.3)",
              color: "white",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
        {/* ... (Existing Content Structure) ... */}
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
        <div className="day-center-section">
          {/* Left Vertical: Rokuyo */}
          <div
            className="item-rokuyo"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              minWidth: "60px", // Reduced min-width closer to content
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
                whiteSpace: "normal", // Changed from nowrap to normal
                wordBreak: "break-word", // Enable breaking
                textAlign: "center",
              }}
            >
              {rokuyoName}
            </div>
          </div>

          {/* Divider 1 */}
          <div className="day-divider divider-1" />

          {/* Main Day Number */}
          <div className="item-day" style={{ textAlign: "center" }}>
            <div className="day-number">{dayNumber}</div>
            <div className="day-week">{dayOfWeek.replace("日", "")}</div>
          </div>

          {/* Divider 2 */}
          <div className="day-divider divider-2" />

          {/* Right Vertical: Choku */}
          <div
            className="item-choku"
            style={{
              writingMode: isJa ? "vertical-rl" : "horizontal-tb",
              textOrientation: "upright",
              fontSize: "1.2rem",
              color: "#555",
              letterSpacing: "0.2rem",
              display: "flex",
              flexDirection: isJa ? "row" : "column",
              gap: "1rem",
              minWidth: "40px",
              alignItems: "center",
              wordBreak: "break-word", // Enable breaking
              textAlign: "center",
            }}
          >
            <div
              className="font-brush"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              {juniChokuName}
            </div>
            <div
              className="font-brush"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {juniChokuNameRomaji}
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
