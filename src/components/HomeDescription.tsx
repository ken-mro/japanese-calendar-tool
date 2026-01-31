"use client";

import { useLanguage } from "@/lib/i18n/config";
import Link from "next/link";

// Home description component
export default function HomeDescription({
  isOpen = false,
  onToggle,
}: {
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  const language = useLanguage();

  if (!isOpen) {
    return (
      <section
        id="about-section"
        className="description-container"
        style={{ paddingBottom: 0 }}
      >
        <div
          className="description-section"
          style={{ border: "none", marginBottom: 0 }}
        >
          <h2
            onClick={onToggle}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.8em", opacity: 0.7 }}>▶</span>
            {language === "ja" ? "ツールについて" : "About This Tool"}
          </h2>
        </div>
      </section>
    );
  }

  if (language === "ja") {
    return (
      <section id="about-section" className="description-container">
        <div className="description-section">
          <h2
            onClick={onToggle}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.8em", opacity: 0.7 }}>▼</span>
            ツールについて
          </h2>
          <p>
            この「暦計算ツール」は、西暦の日付から和暦（元号）、和風月名、干支（十干・十二支）、星座だけでなく、九星、六曜、十二直、月の満ち欠けを計算することができるツールです。
          </p>
          <p>
            また、指定の日から前後何日かがいつかを計算することができるので、誕生日から1万日後がいつかなど、様々なシーンでお使いいただければと思います。ツールを利用することで、一日一日を大事に過ごす一助となれば幸いです。
          </p>

          <div className="about-links-grid">
            <Link
              href={`/${language}/about/wareki`}
              className="about-link-card"
            >
              <h3>和暦とは</h3>
              <span className="arrow">→</span>
            </Link>
            <Link
              href={`/${language}/about/wafu-getsumei`}
              className="about-link-card"
            >
              <h3>和風月名とは</h3>
              <span className="arrow">→</span>
            </Link>
            <Link href={`/${language}/about/eto`} className="about-link-card">
              <h3>干支とは</h3>
              <span className="arrow">→</span>
            </Link>
            <Link
              href={`/${language}/about/nine-star`}
              className="about-link-card"
            >
              <h3>九星とは</h3>
              <span className="arrow">→</span>
            </Link>
            <Link
              href={`/${language}/about/rokuyo`}
              className="about-link-card"
            >
              <h3>六曜とは</h3>
              <span className="arrow">→</span>
            </Link>
            <Link
              href={`/${language}/about/junichoku`}
              className="about-link-card"
            >
              <h3>十二直とは</h3>
              <span className="arrow">→</span>
            </Link>
            <Link
              href={`/${language}/about/senjitsu`}
              className="about-link-card"
            >
              <h3>選日とは</h3>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about-section" className="description-container">
      <div className="description-section">
        <h2
          onClick={onToggle}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.8em", opacity: 0.7 }}>▼</span>
          About This Tool
        </h2>
        <p>
          This &quot;Japanese Calendar Tool&quot; allows you to calculate the
          Japanese Era (Wareki), Wafu Getsumei, Sexagenary Cycle (Eto), and
          Zodiac sign, as well as Nine Star Ki, Rokuyo, 12 Choku, and Moon Phase
          from any Western calendar date.
        </p>
        <p>
          It also calculates dates based on a specific offset (e.g., 100 days
          after a date), making it perfect for finding milestones like your
          10,000th day since birth. We hope this tool helps you cherish every
          single day.
        </p>

        <div className="about-links-grid">
          <Link href={`/${language}/about/wareki`} className="about-link-card">
            <h3>About Wareki (Japanese Era)</h3>
            <span className="arrow">→</span>
          </Link>
          <Link
            href={`/${language}/about/wafu-getsumei`}
            className="about-link-card"
          >
            <h3>About Wafu Getsumei</h3>
            <span className="arrow">→</span>
          </Link>
          <Link href={`/${language}/about/eto`} className="about-link-card">
            <h3>About Sexagenary Cycle (Eto)</h3>
            <span className="arrow">→</span>
          </Link>
          <Link
            href={`/${language}/about/nine-star`}
            className="about-link-card"
          >
            <h3>About Nine Star Ki</h3>
            <span className="arrow">→</span>
          </Link>
          <Link href={`/${language}/about/rokuyo`} className="about-link-card">
            <h3>About Rokuyo</h3>
            <span className="arrow">→</span>
          </Link>
          <Link
            href={`/${language}/about/junichoku`}
            className="about-link-card"
          >
            <h3>About 12 Choku</h3>
            <span className="arrow">→</span>
          </Link>
          <Link
            href={`/${language}/about/senjitsu`}
            className="about-link-card"
          >
            <h3>About Senjitsu</h3>
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
